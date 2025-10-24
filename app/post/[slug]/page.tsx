import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import {
  getPostBySlug,
  getAllSlugs,
  getPostMetadata,
  processPostBody,
  getRelatedPosts,
  calculateReadingTime,
} from '@/lib/blog-data';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const metadata = getPostMetadata(post);
  const publishedDate = new Date(post.publishedOn).toISOString();
  const modifiedDate = new Date(post.updatedOn).toISOString();

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: metadata.author }],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: [metadata.author],
      images: [
        {
          url: metadata.mainImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.mainImage],
    },
    alternates: {
      canonical: `/post/${metadata.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const metadata = getPostMetadata(post);
  const processedContent = processPostBody(post.postBody);
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const readTime = metadata.readTime || calculateReadingTime(post.postBody);
  const publishedDate = new Date(post.publishedOn);

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    description: metadata.description,
    image: metadata.mainImage,
    datePublished: post.publishedOn,
    dateModified: post.updatedOn,
    author: {
      '@type': 'Person',
      name: metadata.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yess',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yess.ai/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.yess.ai/post/${metadata.slug}`,
    },
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.yess.ai',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.yess.ai/post',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: metadata.title,
        item: `https://www.yess.ai/post/${metadata.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="page-wrapper">
        <main className="main-wrapper">
          <Navigation />

          {/* Article Section */}
          <div className="section_blog-post">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-large">
                  {/* Breadcrumbs */}
                  <nav className="breadcrumb-container">
                    <Link href="/" className="breadcrumb-link">
                      Home
                    </Link>
                    <span className="breadcrumb-separator"> / </span>
                    <Link href="/post" className="breadcrumb-link">
                      Blog
                    </Link>
                    <span className="breadcrumb-separator"> / </span>
                    <span className="breadcrumb-current">{post.name}</span>
                  </nav>

                  {/* Article Header */}
                  <div className="blog-post-header">
                    {/* Category Badge */}
                    {metadata.category && (
                      <div className="container-categories">
                        <div className="categories">{metadata.category}</div>
                      </div>
                    )}

                    {/* Title */}
                    <h1 className="heading-style-h1">{post.name}</h1>

                    {/* Meta Info */}
                    <div className="blog-post-meta">
                      <div className="meta-item">
                        <time dateTime={post.publishedOn}>
                          {publishedDate.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <span className="meta-separator">•</span>
                      <div className="meta-item read-time">{readTime}</div>
                      {metadata.author && (
                        <>
                          <span className="meta-separator">•</span>
                          <div className="meta-item">
                            By {metadata.author.replace(/-/g, ' ')}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Featured Image */}
                    {metadata.mainImage && (
                      <div className="blog-post-image">
                        <img
                          src={metadata.mainImage}
                          alt={metadata.title}
                          loading="eager"
                          className="post-featured-image"
                        />
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <article className="blog-post-content rich-text w-richtext">
                    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                  </article>

                  {/* Social Share */}
                  <SocialShare
                    url={`/post/${post.slug}`}
                    title={post.name}
                    description={post.postSummary || metadata.description}
                  />

                  {/* CTA Section */}
                  <div className="cta-section">
                    <div className="cta-content">
                      <h3 className="heading-style-h3">Ready to Transform Your Sales?</h3>
                      <p className="paragraph-large">
                        Discover how Yess can help your team close more deals with AI-powered sales engagement.
                      </p>
                      <a href="https://www.yess.ai/login" className="button is-primary w-button">
                        Get Started
                      </a>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="related-posts-section">
                      <h2 className="heading-style-h2">Related Articles</h2>
                      <div className="grid-articles">
                        {relatedPosts.map((relatedPost) => {
                          const relatedMetadata = getPostMetadata(relatedPost);
                          return (
                            <div key={relatedPost.slug} className="items-articles_container">
                              <Link href={`/post/${relatedPost.slug}`} className="items-articles w-inline-block">
                                {/* Thumbnail */}
                                <div className="container-img_articles">
                                  <img
                                    loading="lazy"
                                    src={relatedMetadata.mainImage}
                                    alt={relatedMetadata.title}
                                    className="thumbnail-articles"
                                  />
                                </div>

                                {/* Info */}
                                <div className="container-infos_articles">
                                  <div className="top-infos">
                                    <div className="container-categories">
                                      <div className="categories">{relatedMetadata.category}</div>
                                    </div>
                                    <div className="read-time">{relatedMetadata.readTime}</div>
                                  </div>
                                </div>

                                {/* Title */}
                                <h3 className="heading-style-h3-3">{relatedPost.name}</h3>

                                {/* Summary */}
                                <p className="paragraph_blog">
                                  {relatedPost.postSummary || relatedMetadata.description}
                                </p>

                                {/* CTA */}
                                <div className="cta-article">
                                  <div className="text-cta">Read article</div>
                                  <img loading="lazy" src="/images/arrow-right.svg" alt="" className="arrow-right_low" />
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
