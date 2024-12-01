export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    categories: string[];
    excerpt: string;
    content: string;
    author: string;
}

interface WordPressPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string; };
    excerpt: { rendered: string; };
    content: { rendered: string; };
    categories: number[];
    author: number;
    _embedded?: {
        author?: Array<{ name: string; }>;
        'wp:term'?: Array<Array<{ name: string; }>>;
    };
}

const WP_API_URL = 'https://www.csdsinc.net/wp-json/wp/v2';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await fetch(
            `${WP_API_URL}/posts?_embed&per_page=10&orderby=date&order=desc`,
            {
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-Site': 'same-origin',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                    'Upgrade-Insecure-Requests': '1'
                },
                credentials: 'same-origin'
            }
        );

        console.log('Response status:', response.status);

        if (!response.ok) {
            console.error('Failed to fetch blog posts:', response.statusText);
            return [];
        }

        const posts = await response.json();
        console.log('WordPress API Response:', posts);

        if (!Array.isArray(posts)) {
            console.error('Expected posts array, got:', typeof posts);
            return [];
        }

        return posts.map((post: WordPressPost) => ({
            title: post.title.rendered,
            slug: post.slug,
            date: post.date,
            categories: post._embedded?.['wp:term']?.[0]?.map((term: { name: string; }) => term.name) || [],
            excerpt: cleanHtml(post.excerpt.rendered),
            content: post.content.rendered,
            author: post._embedded?.author?.[0]?.name || 'CSDS'
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

function cleanHtml(html: string): string {
    return html
        .replace(/\[.*?\]/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/&[^;]+;/g, '')
        .trim();
} 