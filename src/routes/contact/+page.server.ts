import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { PRIVATE_TURNSTILE_SECRET_KEY } from '$env/static/private';
import { createKeapContact } from '$lib/server/keap';

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
    cfTurnstileResponse: z.string().min(1, 'Please complete the CAPTCHA')
});

async function validateTurnstileToken(token: string) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: PRIVATE_TURNSTILE_SECRET_KEY,
            response: token
        })
    });

    const data = await response.json();
    return data.success;
}

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            const validatedData = contactSchema.parse(formData);
            // Verify Turnstile token
            const isValid = await validateTurnstileToken(validatedData.cfTurnstileResponse);
            if (!isValid) {
                return fail(400, {
                    status: 'error',
                    message: 'CAPTCHA verification failed',
                    values: formData
                });
            }

            try {
                await createKeapContact(validatedData);
            } catch (error) {
                console.error('Keap integration error:', error);
                return fail(500, {
                    status: 'error',
                    message: 'Failed to create contact. Please try again.',
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