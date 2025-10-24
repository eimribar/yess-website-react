'use client';

import { useEffect } from 'react';
import Orb from '@/components/Orb';

export default function Home() {
  useEffect(() => {
    // Animate hero text - splits text into individual letters with staggered animation
    function animateText(elementId: string, showUnderline: boolean) {
      const animatedText = document.getElementById(elementId);
      if (!animatedText) return;

      const text = animatedText.textContent || '';
      const letters = Array.from(text);

      // Clear the original text
      animatedText.textContent = '';

      // Create wrapper for letters
      const lettersContainer = document.createElement('span');
      lettersContainer.style.display = 'inline-flex';
      lettersContainer.style.position = 'relative';
      lettersContainer.style.flexWrap = 'nowrap';

      // Create individual letter spans with staggered delays
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'animated-letter';
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.animationDelay = `${index * 0.1}s`;
        lettersContainer.appendChild(span);
      });

      // Create animated underline only if requested
      if (showUnderline) {
        const underline = document.createElement('div');
        underline.className = 'animated-underline';
        underline.style.animationDelay = `${letters.length * 0.1}s`;
        lettersContainer.appendChild(underline);
      }

      // Append letters container
      animatedText.appendChild(lettersContainer);
    }

    // Animate hero text (without underline)
    animateText('animated-hero-text', false);
  }, []);

  return (
    <>
      <div className="section_hero">
        {/* Orb Background */}
        <div className="hero-orb-container" id="hero-orb">
          <Orb hue={166} hoverIntensity={0.3} rotateOnHover={true} />
        </div>

        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large is-hero no-pad-bottom">
              <div className="flex-vertical">
                <div data-sequence="3" className="container-title">
                  <h1 className="heading-style-h1 is-hero-large">
                    Meet Yess.<br />
                    <span id="animated-hero-text">Your Agentic AE.</span>
                  </h1>
                  <p className="paragraph_title is-hero-large">
                    Yess is the agentic operating system that<br />
                    turns every rep into a top performer.
                  </p>
                </div>
                <div data-sequence="4" className="hero-cta-container">
                  <a href="/book-a-demo" className="button w-button">
                    Book a Demo
                  </a>
                  <a href="/login" className="button is-secondary w-button">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for other sections */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>More sections coming next...</h2>
        <p style={{ color: '#666' }}>ClientLogos, Manifesto, Testimonials, HowItWorks, DataFoundation, MagicBento, Integration, and CTA sections will be built section by section.</p>
      </div>
    </>
  );
}
