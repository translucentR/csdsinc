import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const csrf: Handle = async ({ event, resolve }) => {
    const allowedOrigins = [
        'https://dev.csdsinc.net',
        'https://csdsinc.net',
        'http://localhost:5173'
    ];

    const origin = event.request.headers.get('origin');

    // Allow POST requests from allowed origins
    if (event.request.method === 'POST' && origin) {
        if (allowedOrigins.includes(origin)) {
            event.setHeaders({
                'Access-Control-Allow-Origin': origin
            });
            return await resolve(event);
        }
    }

    return await resolve(event);
};

export const handle = sequence(csrf); 