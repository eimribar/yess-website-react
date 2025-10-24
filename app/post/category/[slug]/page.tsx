import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import { getPostsByCategory, getAllCategories, sortPostsByDate } from '@/lib/blog-data';

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const categories = getAllCategories();
  const category = categories.find((cat) => cat.slug === resolvedParams.slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} Articles | Yess Blog`,
    description: `Browse all ${category.name} articles on the Yess blog. Discover insights about ${category.name.toLowerCase()} and B2B sales.`,
    openGraph: {
      title: `${category.name} Articles | Yess Blog`,
      description: `Browse all ${category.name} articles on the Yess blog.`,
      type: 'website',
    },
    alternates: {
      canonical: `/post/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const categories = getAllCategories();
  const category = categories.find((cat) => cat.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const posts = sortPostsByDate(getPostsByCategory(category.name));

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
                    <h1 className="heading-style-h1">{category.name}</h1>
                    <p className="paragraph-large" style={{ marginTop: '1rem', color: '#64748b' }}>
                      {category.postCount} {category.postCount === 1 ? 'article' : 'articles'}
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
