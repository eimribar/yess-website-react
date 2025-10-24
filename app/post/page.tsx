import { getPublishedPosts, getAllCategories, sortPostsByDate } from '@/lib/blog-data';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

export const metadata = {
  title: 'Blog | Yess - AI-Powered Sales Insights',
  description: 'Supercharge your go-to-market team with AI agents native to Salesforce Sales Cloud.',
};

export default function BlogIndexPage() {
  const posts = sortPostsByDate(getPublishedPosts());
  const categories = getAllCategories();
  const featuredPost = posts.find(p => p.featured) || posts[0];

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navigation />
        <BlogList posts={posts} categories={categories} />
        <Footer />
      </main>
    </div>
  );
}
