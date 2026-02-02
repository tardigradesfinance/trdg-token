import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    const robotsTxt = `# robots.txt for https://trdgtoken.com
# Allow all crawlers including AI bots

User-agent: *
Allow: /

# AI Search Engine Bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemap
Sitemap: https://trdgtoken.com/sitemap.xml

# Crawl delay to be respectful
Crawl-delay: 1
`

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    })
}
