import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { z } from 'zod';
import { sendPDFEmail } from '$lib/server/pdf-email';
import { PRIVATE_TURNSTILE_SECRET_KEY } from '$env/static/private';

const downloadSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
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

export const POST: RequestHandler = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    try {
        const validatedData = downloadSchema.parse(formData);
        const isValid = await validateTurnstileToken(validatedData.cfTurnstileResponse);

        if (!isValid) {
            return json({
                type: 'failure',
                data: {
                    status: 'error',
                    message: 'CAPTCHA validation failed',
                    values: formData
                }
            }, { status: 400 });
        }

        const sent = await sendPDFEmail(validatedData.email, validatedData.name);
        if (!sent) {
            return json({
                type: 'failure',
                data: {
                    status: 'error',
                    message: 'Failed to send email',
                    values: formData
                }
            }, { status: 500 });
        }

        return json({
            type: 'success',
            data: {
                status: 'success'
            }
        });
    } catch (err) {
        if (err instanceof z.ZodError) {
            const errors = err.errors.reduce((acc: Record<string, string>, curr) => {
                const path = typeof curr.path[0] === 'string' ? curr.path[0] : '';
                acc[path] = curr.message;
                return acc;
            }, {});

            return json({
                type: 'failure',
                data: {
                    status: 'error',
                    errors,
                    values: formData
                }
            }, { status: 400 });
        }
        return json({
            type: 'failure',
            data: {
                status: 'error',
                message: 'An unexpected error occurred',
                values: formData
            }
        }, { status: 500 });
    }
};