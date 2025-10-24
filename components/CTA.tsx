'use client';

export default function CTA() {
  return (
    <section className="section_cta-gradient">
      <div className="cta-gradient-wrapper">
        <div className="cta-container-main">
          {/* Plus Corner Icons */}
          <svg className="cta-plus-icon top-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <svg className="cta-plus-icon top-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <svg className="cta-plus-icon bottom-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <svg className="cta-plus-icon bottom-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>

          {/* Inner Content */}
          <div className="cta-content-inner">
            <div className="section-label">GET STARTED</div>
            <h2 className="cta-gradient-title">Ready to End Average Selling?</h2>
            <p className="cta-gradient-subtitle">See how the Agentic AE can make elite performance your new baseline.</p>

            {/* Shine Border Button */}
            <div className="shine-border-wrapper">
              <a href="/book-a-demo" className="cta-shine-button">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}