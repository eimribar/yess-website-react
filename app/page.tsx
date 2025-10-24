'use client';

import { useEffect } from 'react';
import Orb from '@/components/Orb';
import Navigation from '@/components/Navigation';
import ClientLogos from '@/components/ClientLogos';
import IntroSection from '@/components/IntroSection';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import DataFoundation from '@/components/DataFoundation';
import MagicBento from '@/components/MagicBento';
import Integration from '@/components/Integration';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navigation />
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

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Intro Section with Text Reveal Animation */}
      <IntroSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Data Foundation Section with Layered Animation */}
      <DataFoundation />

      {/* MagicBento Grid Product Features Section */}
      <MagicBento />

      {/* Section Divider */}
      <hr className="section-divider" />

      {/* Integration Section */}
      <Integration />

      {/* CTA Section */}
      <CTA />

        {/* Footer */}
        <Footer />
      </main>

      {/* Hero decorative images - positioned absolutely */}
      <img
        src="/images/Group-33860.webp"
        loading="lazy"
        sizes="(max-width: 510px) 100vw, 510px"
        srcSet="/images/Group-33860-p-500.png 500w, /images/Group-33860.webp 510w"
        alt=""
        className="img-hero is-right"
      />
      <img
        src="/images/Group-33861.webp"
        loading="lazy"
        sizes="(max-width: 513px) 100vw, 513px"
        srcSet="/images/Group-33861-p-500.png 500w, /images/Group-33861.webp 513w"
        alt=""
        className="img-hero"
      />
    </div>
  );
}
