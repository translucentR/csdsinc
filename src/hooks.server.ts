import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

console.log('hooks.server.ts loaded - ' + new Date().toISOString());

const handleRequest: Handle = async ({ event, resolve }) => {
    console.log('\n=== New Request ===', new Date().toISOString());
    console.log('Method:', event.request.method);
    console.log('URL:', event.url.toString());
    console.log('Origin:', event.request.headers.get('origin'));
    console.log('Host:', event.request.headers.get('host'));
    console.log('Referrer:', event.request.headers.get('referer'));
    console.log('Environment ORIGIN:', env.ORIGIN);

    // Log raw request body if it's a POST
    if (event.request.method === 'POST') {
        try {
            const clonedRequest = event.request.clone();
            const text = await clonedRequest.text();
            console.log('Raw POST body:', text);
        } catch (e) {
            console.log('Could not read POST body:', e);
        }
    }

    const response = await resolve(event);
    console.log('Response Status:', response.status);

    if (response.status === 400) {
        console.log('400 Headers:', Object.fromEntries(response.headers));
    }

    if (response.status === 403) {
        console.log('403 Reason:', response.statusText);
        console.log('403 Headers:', Object.fromEntries(response.headers));
    }

    return response;
};

export const handle = sequence(handleRequest); 