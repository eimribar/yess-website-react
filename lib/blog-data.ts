import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import type { BlogPost, BlogPostMetadata, BlogCategory } from './types';

const CSV_PATH = path.join(process.cwd(), 'data', 'blog-posts.csv');

// Parse CSV and return all blog posts
export function getAllPosts(): BlogPost[] {
  const fileContent = fs.readFileSync(CSV_PATH, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  return records.map((record: any) => ({
    name: record['Name'] || '',
    slug: record['Slug'] || '',
    collectionId: record['Collection ID'] || '',
    localeId: record['Locale ID'] || '',
    itemId: record['Item ID'] || '',
    archived: record['Archived']?.toLowerCase() === 'true',
    draft: record['Draft']?.toLowerCase() === 'true',
    createdOn: record['Created On'] || '',
    updatedOn: record['Updated On'] || '',
    publishedOn: record['Published On'] || '',
    postBody: record['Post Body'] || '',
    postSummary: record['Post Summary'] || '',
    mainImage: record['Main Image'] || '',
    thumbnailImage: record['Thumbnail image'] || '',
    featured: record['Featured?']?.toLowerCase() === 'true',
    author: record['Author'] || '',
    category: record['Category'] || '',
    readTime: record['Read time'] || '',
    titleTag: record['Title tag'] || '',
    metaDescription: record['Meta description'] || '',
  }));
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map(post => post.slug);
}

// Get published posts only (not archived or draft)
export function getPublishedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => !post.archived && !post.draft);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getPublishedPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Get posts by author
export function getPostsByAuthor(author: string): BlogPost[] {
  const posts = getPublishedPosts();
  return posts.filter(post => post.author === author);
}

// Get all categories with post counts
export function getAllCategories(): BlogCategory[] {
  const posts = getPublishedPosts();
  const categoryMap = new Map<string, number>();

  posts.forEach(post => {
    if (post.category) {
      const count = categoryMap.get(post.category) || 0;
      categoryMap.set(post.category, count + 1);
    }
  });

  return Array.from(categoryMap.entries()).map(([name, postCount]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    postCount,
  }));
}

// Get all authors with post counts
export function getAllAuthors(): { name: string; slug: string; postCount: number }[] {
  const posts = getPublishedPosts();
  const authorMap = new Map<string, number>();

  posts.forEach(post => {
    if (post.author) {
      const count = authorMap.get(post.author) || 0;
      authorMap.set(post.author, count + 1);
    }
  });

  return Array.from(authorMap.entries()).map(([name, postCount]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    postCount,
  }));
}

// Get featured posts
export function getFeaturedPosts(limit?: number): BlogPost[] {
  const posts = getPublishedPosts();
  const featured = posts.filter(post => post.featured);
  return limit ? featured.slice(0, limit) : featured;
}

// Get related posts based on category
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const posts = getPublishedPosts();
  const sameCategoryPosts = posts.filter(
    post => post.category === currentPost.category && post.slug !== currentSlug
  );

  return sameCategoryPosts.slice(0, limit);
}

// Re-export utility functions from utils.ts
export { calculateReadingTime, convertImageUrl, processPostBody, getPostMetadata } from './utils';

// Sort posts by date (newest first)
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedOn).getTime();
    const dateB = new Date(b.publishedOn).getTime();
    return dateB - dateA;
  });
}
