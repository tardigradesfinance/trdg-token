import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
                allow: '/',
            },
        ],
        sitemap: 'https://trdgtoken.com/sitemap.xml',
    }
}
