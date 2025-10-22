import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    try {
        const response = await fetch('/MSA_v5.htm');
        const htmlContent = await response.text();

        return {
            htmlContent
        };
    } catch (error) {
        console.error('Failed to load HTML content:', error);
        return {
            htmlContent: '<h1>Error</h1><p>Failed to load Master Service Agreement content.</p>'
        };
    }
};
