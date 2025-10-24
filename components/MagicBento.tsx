'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import gsap from 'gsap';
import '../styles/MagicBento.css';

export default function MagicBento() {
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isGsapReady, setIsGsapReady] = useState(false);

  useEffect(() => {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined') {
      setIsGsapReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isGsapReady || !gridRef.current) return;

    const grid = gridRef.current;
    const cards = grid.querySelectorAll('.card');
    const spotlight = spotlightRef.current;

    // Create particles for each card
    const createParticles = (container: HTMLElement) => {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle particle-float';
        particle.style.cssText = `
          animation-delay: ${i * 0.5}s;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        container.appendChild(particle);
      }
    };

    // Add particles to particle containers
    cards.forEach((card) => {
      if (card.classList.contains('particle-container')) {
        createParticles(card as HTMLElement);
      }
    });

    // Card 3D tilt and magnetism effect
    const handleCardMouseMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      // Update glow position for border effect
      card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.1,
        ease: 'power2.out',
        transformPerspective: 1000,
        transformOrigin: 'center center'
      });

      // Magnetism effect
      const magnetX = (x - centerX) * 0.05;
      const magnetY = (y - centerY) * 0.05;

      gsap.to(card, {
        x: magnetX,
        y: magnetY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleCardMouseLeave = (card: HTMLElement) => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });

      card.style.setProperty('--glow-intensity', '0');
    };

    // Click ripple effect
    const handleCardClick = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      ripple.style.width = `${maxDistance * 2}px`;
      ripple.style.height = `${maxDistance * 2}px`;
      ripple.style.left = `${x - maxDistance}px`;
      ripple.style.top = `${y - maxDistance}px`;

      card.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    // Global spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlight || !grid) return;

      const section = grid.closest('.bento-section');
      const rect = section?.getBoundingClientRect();

      if (!rect) return;

      const mouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!mouseInside) {
        gsap.to(spotlight, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      // Update spotlight position
      gsap.to(spotlight, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Calculate distance to cards and update glow
      let minDistance = Infinity;
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        minDistance = Math.min(minDistance, distance);

        // Update card glow intensity based on distance
        const maxDistance = 300;
        const glowIntensity = Math.max(0, 1 - (distance / maxDistance));
        (card as HTMLElement).style.setProperty('--glow-intensity', glowIntensity.toString());
      });

      // Update spotlight opacity based on proximity to cards
      const targetOpacity = minDistance < 300 ? 0.8 : 0;
      gsap.to(spotlight, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    // Add event listeners to cards
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mouseenter', () => {
        cardElement.style.setProperty('--glow-intensity', '1');
      });

      cardElement.addEventListener('mousemove', (e) => {
        handleCardMouseMove(e, cardElement);
      });

      cardElement.addEventListener('mouseleave', () => {
        handleCardMouseLeave(cardElement);
      });

      cardElement.addEventListener('click', (e) => {
        handleCardClick(e, cardElement);
      });
    });

    // Add global mouse move listener for spotlight
    document.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for fade-in animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cards.forEach(card => {
        observer.unobserve(card);
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
        card.removeEventListener('click', () => {});
      });
    };
  }, [isGsapReady]);

  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="lazyOnload"
      />

      {/* Global Spotlight */}
      <div ref={spotlightRef} className="global-spotlight" />

      <section className="bento-section">
        <div className="bento-header">
          <div className="section-label">THE OPERATING SYSTEM</div>
          <h1 className="bento-title">A New Operating System for Sales.</h1>
        </div>

        {/* MagicBento Grid */}
        <div className="card-grid" id="magicBentoGrid" ref={gridRef}>

          {/* Card 1: Proactive Intelligence */}
          <div className="card card--text-autohide card--border-glow particle-container">
            <div className="card__header">
              <div className="card__label">Insights</div>
            </div>
            <div className="card__content">
              <h2 className="card__title">Proactive Intelligence</h2>
              <p className="card__description">
                Surface unseen risks & opportunities.
              </p>
            </div>
          </div>

          {/* Card 2: Unified Deal Command */}
          <div className="card card--text-autohide card--border-glow particle-container">
            <div className="card__header">
              <div className="card__label">Overview</div>
            </div>
            <div className="card__content">
              <h2 className="card__title">Unified Deal Command</h2>
              <p className="card__description">
                One view of every relationship & action.
              </p>
            </div>
          </div>

          {/* Card 3: Your Stack's Execution Layer (FEATURED LARGE CARD) */}
          <div className="card card--text-autohide card--border-glow particle-container card--large">
            <div className="card__header">
              <div className="card__label">Integrations</div>
            </div>
            <div className="card__visual" style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '55%' }}>
              <img
                src="/images/integrations_grid_hubspot_transparent.png"
                alt="Integration platforms including Salesforce, Slack, Gmail, Gong, HubSpot"
                loading="lazy"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div className="card__content" style={{ flexShrink: 0 }}>
              <h2 className="card__title">Your Stack's Execution Layer</h2>
              <p className="card__description">
                Yess is the execution layer for your stack. We connect to the tools you trust to turn their passive data into secure, agentic action.
              </p>
            </div>
          </div>

          {/* Card 4: Agentic Execution */}
          <div className="card card--text-autohide card--border-glow particle-container">
            <div className="card__header">
              <div className="card__label">Efficiency</div>
            </div>
            <div className="card__visual" style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '55%', maxWidth: '85%', alignSelf: 'center' }}>
              {/* @ts-ignore - lottie-player is loaded via script */}
              <lottie-player
                src="/documents/infinity-wy-nobg.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '100%' }}
                loop
                autoplay
              />
            </div>
            <div className="card__content" style={{ flexShrink: 0 }}>
              <h2 className="card__title">Agentic Execution</h2>
              <p className="card__description">
                This is the core of "agentic." The AI doesn't just suggest; it acts. It proactively runs your plays, drafts the outreach, and orchestrates the follow-ups, with a human-in-the-loop to ensure control and authenticity.
              </p>
            </div>
          </div>

          {/* Card 5: Playbook Automation */}
          <div className="card card--text-autohide card--border-glow particle-container">
            <div className="card__header">
              <div className="card__label">Automation</div>
            </div>
            <div className="card__content">
              <h2 className="card__title">Playbook Automation</h2>
              <p className="card__description">
                Codify and execute your winning plays.
              </p>
            </div>
          </div>

          {/* Card 6: Seamless Workflow Integration */}
          <div className="card card--text-autohide card--border-glow particle-container">
            <div className="card__header">
              <div className="card__label">Connectivity</div>
            </div>
            <div className="card__content">
              <h2 className="card__title">Seamless Workflow Integration</h2>
              <p className="card__description">
                Actionable in Slack, synced to Salesforce.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}