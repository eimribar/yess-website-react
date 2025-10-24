import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // OpenAI ChatGPT
      {
        userAgent: 'GPTBot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        crawlDelay: 0,
      },
      // Anthropic Claude
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        crawlDelay: 0,
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        crawlDelay: 0,
      },
      // Google Bard/Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Bing AI
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'CCBot',
        allow: '/',
        crawlDelay: 1,
      },
      // General search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      // Default rule for all other bots
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/*.json$', '/private/'],
      },
    ],
    sitemap: 'https://www.yess.ai/sitemap.xml',
    host: 'https://www.yess.ai',
  };
}
