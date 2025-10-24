'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost, BlogCategory } from '@/lib/types';
import { getPostMetadata } from '@/lib/utils';

interface BlogGridProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogGrid({ posts, categories }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.name.toLowerCase().includes(query) ||
          post.postSummary.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory]);

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 md:max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({posts.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.postCount})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-8 text-gray-600">
        {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
      </div>

      {/* Blog Posts Grid */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const metadata = getPostMetadata(post);
          const publishedDate = new Date(post.publishedOn);

          return (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition hover:border-blue-500 hover:shadow-lg"
            >
              {/* Post Image */}
              {metadata.mainImage && (
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={metadata.mainImage}
                    alt={metadata.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category Badge */}
                {metadata.category && (
                  <span className="mb-3 inline-block self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {metadata.category}
                  </span>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {post.name}
                </h2>

                {/* Summary */}
                {post.postSummary && (
                  <p className="mt-2 line-clamp-3 flex-1 text-gray-600">
                    {post.postSummary}
                  </p>
                )}

                {/* Meta Info */}
                <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                  <time dateTime={post.publishedOn}>
                    {publishedDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{metadata.readTime}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-xl text-gray-600">
            No articles found matching your search.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
