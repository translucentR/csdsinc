import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { sendSupportNotification } from '$lib/server/email';
import { PRIVATE_TURNSTILE_SECRET_KEY } from '$env/static/private';

const supportSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    website: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    mobile: z.string().optional(),
    priority: z.enum(['normal', 'high', 'urgent']).default('normal'),
    subject: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
    cfTurnstileResponse: z.string().min(1, 'Please complete the CAPTCHA')
});

async function validateTurnstileToken(token: string, host: string) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: PRIVATE_TURNSTILE_SECRET_KEY,
            response: token,
            domain: host
        })
    });

    const data = await response.json();
    return data.success;
}

export const actions = {
    default: async ({ request }) => {
        console.log('Support form submission received:', {
            method: request.method,
            headers: Object.fromEntries(request.headers)
        });

        const host = request.headers.get('host') || 'localhost';
        const formData = Object.fromEntries(await request.formData());
        try {
            const validatedData = supportSchema.parse(formData);

            // Verify Turnstile token
            const isValid = await validateTurnstileToken(validatedData.cfTurnstileResponse, host);
            if (!isValid) {
                return fail(400, {
                    status: 'error',
                    message: 'CAPTCHA verification failed',
                    values: formData
                });
            }

            return {
                status: 'success'
            };
            // Submission stage - only reaches here if validation passes
            const emailSent = await sendSupportNotification(validatedData);

            if (!emailSent) {
                return fail(500, {
                    status: 'error',
                    message: 'Failed to send support request.',
                    values: formData
                });
            }

            return {
                status: 'success'
            };
        } catch (err) {
            if (err instanceof z.ZodError) {
                const errors = err.errors.reduce((acc: Record<string, string>, curr) => {
                    const path = typeof curr.path[0] === 'string' ? curr.path[0] : '';
                    acc[path] = curr.message;
                    return acc;
                }, {});

                return fail(400, {
                    status: 'error',
                    errors,
                    values: formData
                });
            }
            return fail(500, {
                status: 'error',
                message: 'An unexpected error occurred',
                values: formData
            });
        }
    }
} satisfies Actions;