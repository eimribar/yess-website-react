'use client';

export default function Integration() {
  return (
    <section className="section_integration">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="home-integration-bg">
              <div className="home-tabs_title-block">
                <div className="caption-wrapper">
                  <div className="is-caption-1">INTEGRATIONS</div>
                </div>
                <div className="h2-wrapper is-home-core">
                  <h2 className="is-semi-bold is-text-gradient">
                    Seamless Integration.<br />Zero Disruption.
                  </h2>
                </div>
                <div className="p-wrapper is-home-tabs-v2">
                  <p className="is-title-xl">
                    Yess integrates effortlessly with the tools you already use. There's no heavy lifting or workflow disruption — just enhanced capabilities that fit right into your reps' existing processes.
                  </p>
                </div>
              </div>
              <div className="container-integration-yess">
                <picture>
                  {/* Mobile version - show zoomed in center portion */}
                  <source
                    media="(max-width: 479px)"
                    srcSet="/images/integrations_grid.svg"
                    style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
                  />
                  {/* Tablet version */}
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/integrations_grid.svg"
                  />
                  {/* Desktop version */}
                  <img
                    src="/images/integrations_grid.svg"
                    alt="Yess Integration Diagram"
                    className="image-intgration"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '650px',
                      margin: '0 auto',
                      display: 'block'
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}