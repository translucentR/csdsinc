import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { PRIVATE_KEAP_API_KEY } from '$env/static/private';

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(1, 'Message is required')
});

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log('Server received:', formData);

        try {
            // Validation stage
            const validatedData = contactSchema.parse(formData);

            // TODO: Create Keap contact
            // const keapResponse = await createKeapContact(validatedData);

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