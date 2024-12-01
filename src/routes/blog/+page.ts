import type { PageLoad } from './$types';
import { fetchBlogPosts } from '$lib/services/blog';

export const load: PageLoad = async () => {
    const posts = await fetchBlogPosts();
    return { posts };
}; 