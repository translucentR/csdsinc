import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const csrf: Handle = async ({ event, resolve }) => {
    const allowedHosts = [
        'dev.csdsinc.net',
        'www.dev.csdsinc.net',
        'csdsinc.net',
        'www.csdsinc.net',
        'localhost:5173'
    ];

    const host = event.request.headers.get('host');

    // Log request details for debugging
    console.log('Request details:', {
        method: event.request.method,
        host: host,
        url: event.request.url,
        headers: Object.fromEntries(event.request.headers)
    });

    // Allow the request if it's from an allowed host
    if (host && allowedHosts.includes(host)) {
        return await resolve(event);
    }

    return await resolve(event);
};

export const handle = sequence(csrf); 