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
    const method = event.request.method;

    if (method === 'POST') {
        console.log('POST Request Details:', {
            method,
            host,
            url: event.request.url,
            origin: event.request.headers.get('origin'),
            referer: event.request.headers.get('referer'),
            'x-forwarded-proto': event.request.headers.get('x-forwarded-proto'),
            'content-type': event.request.headers.get('content-type')
        });
    }

    // Allow the request if it's from an allowed host
    if (host && allowedHosts.includes(host)) {
        return await resolve(event);
    }

    return await resolve(event);
};

export const handle = sequence(csrf); 