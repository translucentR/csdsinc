import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';

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

        try {
            const validatedData = contactSchema.parse(formData);
            return { success: true };
        } catch (err: unknown) {
            if (err instanceof z.ZodError) {
                const errors = err.errors.reduce((acc: Record<string, string>, curr) => {
                    const path = typeof curr.path[0] === 'string' ? curr.path[0] : '';
                    acc[path] = curr.message;
                    return acc;
                }, {});

                return fail(400, {
                    errors,
                    values: formData
                });
            }
            return fail(500, { message: 'An unexpected error occurred' });
        }
    }
} satisfies Actions;