import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { BlogPost, BlogPostMetadata } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calculate reading time from HTML content (client/server safe)
export function calculateReadingTime(html: string): string {
  // Strip HTML tags and count words
  const text = html.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Convert Webflow CDN image URLs to local paths (client/server safe)
export function convertImageUrl(webflowUrl: string): string {
  if (!webflowUrl) return '';
  if (!webflowUrl.includes('cdn.prod.website-files.com')) return webflowUrl;

  // Extract filename from Webflow URL
  const filename = webflowUrl.split('/').pop() || '';
  // Decode URL encoding to match renamed files
  const decodedFilename = decodeURIComponent(filename);
  return `/blog-images/${decodedFilename}`;
}

// Process post body HTML to convert image URLs (client/server safe)
export function processPostBody(html: string): string {
  if (!html) return '';

  // Replace all Webflow CDN URLs with local paths
  return html.replace(
    /https:\/\/cdn\.prod\.website-files\.com\/[^"]+/g,
    (match) => convertImageUrl(match)
  );
}

// Get post metadata for SEO (client/server safe)
export function getPostMetadata(post: BlogPost): BlogPostMetadata {
  return {
    slug: post.slug,
    title: post.titleTag || post.name,
    description: post.metaDescription || post.postSummary,
    mainImage: convertImageUrl(post.mainImage),
    category: post.category,
    author: post.author,
    publishedOn: post.publishedOn,
    readTime: post.readTime || calculateReadingTime(post.postBody),
    featured: post.featured,
  };
}
