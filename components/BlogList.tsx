'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { BlogPost, BlogCategory } from '@/lib/types';
import { getPostMetadata, convertImageUrl } from '@/lib/utils';

interface BlogListProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className="section_blog">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            {/* Blog Header */}
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h1 className="heading-style-h1">Our Blog</h1>
                </div>
              </div>
            </div>

            <div className="flex-container_blog">
              {/* Filters */}
              <div className="filters-container">
                <div className="form-filters w-form">
                  <form className="form-2">
                    <div className="margin-bottom-2">
                      <div className="text-categories">Categories</div>
                    </div>
                    <div className="flex-filters">
                      <label className="fs-radio_field-4 w-radio">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === null}
                          onChange={() => setSelectedCategory(null)}
                        />
                        <span className="fs-radio_label-4 w-form-label">See all ({posts.length})</span>
                      </label>
                      {categories.map((category) => (
                        <label key={category.slug} className="fs-radio_field-4 w-radio">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.name}
                            onChange={() => setSelectedCategory(category.name)}
                          />
                          <span className="fs-radio_label-4 w-form-label">
                            {category.name} ({category.postCount})
                          </span>
                        </label>
                      ))}
                    </div>
                  </form>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="container-articles">
                <div className="collection-list_blog-articles">
                  <div className="grid-articles">
                    {filteredPosts.map((post) => {
                      const metadata = getPostMetadata(post);
                      const publishedDate = new Date(post.publishedOn);

                      return (
                        <div key={post.slug} className="items-articles_container">
                          <Link href={`/post/${post.slug}`} className="items-articles w-inline-block">
                            {/* Thumbnail */}
                            <div className="container-img_articles">
                              {metadata.mainImage && (
                                <img
                                  loading="lazy"
                                  src={metadata.mainImage}
                                  alt={metadata.title}
                                  className="thumbnail-articles"
                                />
                              )}
                            </div>

                            {/* Info */}
                            <div className="container-infos_articles">
                              <div className="top-infos">
                                <div className="container-categories">
                                  <div className="categories">{metadata.category}</div>
                                </div>
                                <div className="read-time">{metadata.readTime}</div>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="heading-style-h3-3">{post.name}</h3>

                            {/* Summary */}
                            <p className="paragraph_blog">{post.postSummary || metadata.description}</p>

                            {/* CTA */}
                            <div className="cta-article">
                              <div className="text-cta">Read article</div>
                              <img loading="lazy" src="/images/arrow-right.svg" alt="" className="arrow-right_low" />
                            </div>

                            {/* Author */}
                            <div className="container-authjor">
                              <div className="bottom-blog">by {metadata.author.replace(/-/g, ' ')}</div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
