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
    console.log('Turnstile: Starting validation');
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: PRIVATE_TURNSTILE_SECRET_KEY,
            response: token,
            domain: host
        })
    });

    console.log('Turnstile: Got response:', response.status);
    const data = await response.json();

    console.log('Turnstile: Validation result:', data);
    return data.success;
}

export const actions = {
    default: async ({ request }) => {
        console.log('\n=== Support Form Action Start ===');
        console.log('1. Request received:', {
            method: request.method,
            headers: Object.fromEntries(request.headers)
        });

        const host = request.headers.get('host') || 'localhost';
        const formData = Object.fromEntries(await request.formData());

        console.log('2. Form data parsed:', formData);
        try {

            console.log('3. Validating data with schema');
            const validatedData = supportSchema.parse(formData);

            // Verify Turnstile token

            console.log('4. About to validate Turnstile token');
            const isValid = await validateTurnstileToken(validatedData.cfTurnstileResponse, host);
            console.log('5. Turnstile validation result:', isValid);
            if (!isValid) {
                return fail(400, {
                    status: 'error',
                    message: 'CAPTCHA verification failed',
                    values: formData
                });
            }

            console.log('6b. CAPTCHA verification succeeded');
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