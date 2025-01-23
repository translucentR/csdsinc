import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';


const handleRequest: Handle = async ({ event, resolve }) => {
    const allowedOrigins = [
        'https://dev.csdsinc.net',
        'https://www.rodneymorgan.dev',
        'http://localhost:5173'  // for local development
    ];
    const origin = event.request.headers.get('origin');

    const response = await resolve(event);

    // Add CORS headers if origin is allowed
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        response.headers.set('Access-Control-Allow-Credentials', 'true');
    }

    return response;
};

export const handle = sequence(handleRequest); 