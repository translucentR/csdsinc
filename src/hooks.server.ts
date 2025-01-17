import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const csrf: Handle = async ({ event, resolve }) => {
    const allowedOrigins = [
        'https://dev.csdsinc.net',
        'https://csdsinc.net',
        'http://localhost:5173'
    ];

    const origin = event.request.headers.get('origin');
    const host = event.request.headers.get('host');

    // Allow POST requests from allowed origins or same origin
    if (event.request.method === 'POST') {
        // If no origin header, it's same-origin
        if (!origin || allowedOrigins.includes(origin)) {
            // Set CORS headers
            event.setHeaders({
                'Access-Control-Allow-Origin': origin || `https://${host}`,
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'content-type'
            });
            return await resolve(event);
        }
    }

    return await resolve(event);
};

export const handle = sequence(csrf); 