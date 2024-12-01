import type { RequestHandler } from '@sveltejs/kit';
import { fetchBlogPosts } from '$lib/services/blog';

export const GET: RequestHandler = async () => {
    const posts = await fetchBlogPosts();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
    <channel>
        <title>Computer Systems Development Services</title>
        <atom:link href="https://www.csdsinc.net/feed/" rel="self" type="application/rss+xml" />
        <link>https://www.csdsinc.net</link>
        <description>IT Solutions and Managed Services for Businesses</description>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>
        
        <image>
            <url>https://www.csdsinc.net/favicon.png</url>
            <title>Computer Systems Development Services</title>
            <link>https://www.csdsinc.net</link>
            <width>32</width>
            <height>32</height>
        </image>
        
        ${posts.map(post => `
            <item>
                <title>${escapeXml(post.title)}</title>
                <link>https://www.csdsinc.net/blog/${post.slug}</link>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                <dc:creator><![CDATA[${post.author}]]></dc:creator>
                ${post.categories.map(cat => `<category><![CDATA[${cat}]]></category>`).join('\n')}
                <guid isPermaLink="false">https://www.csdsinc.net/blog/${post.slug}</guid>
                <description><![CDATA[${post.excerpt}]]></description>
                <content:encoded><![CDATA[${post.content}]]></content:encoded>
            </item>
        `).join('\n')}
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
};

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
} 