import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import { getPostsByAuthor, getAllAuthors, getAllCategories, sortPostsByDate } from '@/lib/blog-data';

// Generate static params for all authors
export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const authors = getAllAuthors();
  const author = authors.find((a) => a.slug === resolvedParams.slug);

  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  const displayName = author.name.replace(/-/g, ' ');

  return {
    title: `Articles by ${displayName} | Yess Blog`,
    description: `Read all articles written by ${displayName} on the Yess blog. Expert insights on B2B sales, AI-powered engagement, and sales optimization.`,
    openGraph: {
      title: `Articles by ${displayName} | Yess Blog`,
      description: `Read all articles written by ${displayName} on the Yess blog.`,
      type: 'profile',
    },
    alternates: {
      canonical: `/post/author/${author.slug}`,
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const authors = getAllAuthors();
  const author = authors.find((a) => a.slug === resolvedParams.slug);

  if (!author) {
    notFound();
  }

  const posts = sortPostsByDate(getPostsByAuthor(author.name));
  const categories = getAllCategories();
  const displayName = author.name.replace(/-/g, ' ');

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navigation />

        <div className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large is-hero no-pad-bottom">
                <div className="flex-vertical">
                  <div data-sequence="3" className="container-title">
                    <h1 className="heading-style-h1">Articles by {displayName}</h1>
                    <p className="paragraph-large" style={{ marginTop: '1rem', color: '#64748b' }}>
                      {author.postCount} {author.postCount === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlogList posts={posts} categories={categories} />

        <Footer />
      </main>
    </div>
  );
}
