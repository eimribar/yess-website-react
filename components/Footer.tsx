'use client';

export default function Footer() {
  return (
    <footer data-sequence="2" className="footer_component">
      <style jsx>{`
        .footer_component {
          background-color: #fff;
          color: #000;
          padding: 4rem 0 2rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          height: 32px;
          width: auto;
        }

        .footer-description {
          color: rgba(0, 0, 0, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 350px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.05);
          color: #000;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          background-color: rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-column-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #000;
        }

        .footer-link {
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
          display: block;
        }

        .footer-link:hover {
          color: #000;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.875rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: rgba(0, 0, 0, 0.6);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-legal a:hover {
          color: #000;
        }

        .footer-info-block {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .footer-info-item {
          color: rgba(0, 0, 0, 0.7);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-info-title {
          font-weight: 600;
          color: #000;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 991px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 767px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-legal {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="/"><img loading="lazy" src="/images/Brand_1Brand.webp" alt="Yess Logo" className="footer-logo" /></a>
            <p className="footer-description">Yess is the agentic operating system that turns every rep into a top 1% performer.</p>

            <div className="footer-info-block">
              <div className="footer-info-item">
                <div className="footer-info-title">Yess HQ</div>
                <div>Yess AI, Inc.<br />169 Madison Ave STE 11656<br />New York, NY 10016</div>
              </div>
              <div className="footer-info-item">
                <div className="footer-info-title">Already a customer?</div>
                <a href="mailto:support@yess.ai?subject=New%20email%20from%20Yess" className="footer-link">support@yess.ai</a>
              </div>
              <div className="footer-info-item">
                <div className="footer-info-title">Want to email us directly?</div>
                <a href="mailto:hello@yess.ai?subject=New%20email%20from%20Yess" className="footer-link">hello@yess.ai</a>
              </div>
            </div>

            <div className="footer-social">
              <a href="https://www.instagram.com/yessai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/yessai" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yessai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/yessai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Products</h3>
            <a href="/products/salesforce-ai-agent" className="footer-link">Salesforce AI Agent</a>
            <a href="/products/linkedin-ai-agent" className="footer-link">LinkedIn AI Agent</a>
            <a href="/products/executive-outreach-agent" className="footer-link">Executive Outreach Agent</a>
            <a href="/products/lead-recommendation-agent" className="footer-link">Lead Recommendation Agent</a>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <a href="/post" className="footer-link">Blog</a>
            <a href="https://trust.yess.ai/" target="_blank" rel="noopener noreferrer" className="footer-link">Trust Center</a>
            <a href="https://status.yess.ai/" target="_blank" rel="noopener noreferrer" className="footer-link">System Status</a>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Resources</h3>
            <a href="/legal/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/legal/terms-of-use" className="footer-link">Terms of Use</a>
            <a href="/legal/terms-of-service" className="footer-link">Terms of Service</a>
            <a href="/legal/data-processing-addendum" className="footer-link">DPA</a>
            <a href="/legal/service-level-agreement" className="footer-link">SLA</a>
            <a href="/legal/sub-processors" className="footer-link">Sub processors</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">© 2025 Yess. All rights reserved.</div>
          <div className="footer-legal">
            <a href="/legal/privacy-policy">Privacy</a>
            <a href="/legal/terms-of-use">Terms</a>
            <a href="/legal/terms-of-service">Service Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}