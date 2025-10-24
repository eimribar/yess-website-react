import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navigation />

        <div className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large is-hero">
                <div className="flex-vertical" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ fontSize: '6rem', fontWeight: 'bold', color: '#2d62ff', marginBottom: '1rem' }}>
                    404
                  </div>
                  <h1 className="heading-style-h1">Page Not Found</h1>
                  <p className="paragraph-large" style={{ marginTop: '1.5rem', marginBottom: '2rem', color: '#64748b' }}>
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="button is-primary w-button">
                      Go to Homepage
                    </Link>
                    <Link href="/blog" className="button w-button" style={{ backgroundColor: '#f1f5f9', color: '#090f25' }}>
                      Browse Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
