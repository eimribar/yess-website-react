'use client';

import { useEffect, useRef, useState } from 'react';

export default function DataFoundation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the pinned section
      // Starts when section top hits viewport top
      // Continues for the full height of the section
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        // We're in the pinned scroll zone
        const scrolled = Math.abs(rect.top);
        const totalScrollDistance = section.offsetHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else if (rect.bottom <= windowHeight) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which layers and sections should be active based on scroll progress
  const getActiveStates = () => {
    const states = {
      layer1: false,
      layer2: false,
      layer3: false,
      layer4: false,
      section1: false,
      section2: false,
      section3: false,
      section4: false
    };

    // Progressive reveal with better thresholds
    if (scrollProgress >= 0) {
      states.layer1 = true;
      states.section1 = true;
    }
    if (scrollProgress >= 0.25) {
      states.layer2 = true;
      states.section2 = true;
    }
    if (scrollProgress >= 0.5) {
      states.layer3 = true;
      states.section3 = true;
    }
    if (scrollProgress >= 0.75) {
      states.layer4 = true;
      states.section4 = true;
    }

    return states;
  };

  const activeStates = getActiveStates();

  // Debug output
  useEffect(() => {
    console.log('Scroll progress:', scrollProgress, 'Active states:', activeStates);
  }, [scrollProgress, activeStates]);

  return (
    <section className="section_data-foundation" ref={sectionRef} style={{ height: '400vh', position: 'relative' }}>
      <div className="data-foundation-wrapper" ref={wrapperRef} style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Header centered at top */}
        <div className="data-foundation-header">
          <div className="section-label">THE CORE WORKFLOWS</div>
          <h2 className="data-foundation-title">Four Workflows.<br />One Operating System.</h2>
          <p className="data-foundation-subheading">These four principles are the foundation of our agentic engine, turning passive data into proactive execution.</p>
        </div>

        <div className="data-foundation-container">
          {/* Left: Text content in REVERSED order */}
          <div className="data-foundation-content">
            <div className="data-layer-sections">
              {/* Layer 4: Proactive Intelligence (TOP) */}
              <div className={`layer-section ${activeStates.section4 ? 'active' : ''}`} data-layer="4">
                <div className="layer-section-inner">
                  <h3 className="layer-title">Proactive Intelligence</h3>
                  <p className="layer-description">Our AI surfaces the unseen risks and opportunities, from identifying key missing stakeholders to flagging deals that are losing momentum.</p>
                </div>
              </div>

              {/* Layer 3: Actionable Slack Workflows */}
              <div className={`layer-section ${activeStates.section3 ? 'active' : ''}`} data-layer="3">
                <div className="layer-section-inner">
                  <h3 className="layer-title">Actionable Slack Workflows</h3>
                  <p className="layer-description">Yess delivers actionable insights directly in Slack, where your team works, allowing for instant review and one-click execution.</p>
                </div>
              </div>

              {/* Layer 2: Human-in-the-Loop Execution */}
              <div className={`layer-section ${activeStates.section2 ? 'active' : ''}`} data-layer="2">
                <div className="layer-section-inner">
                  <h3 className="layer-title">Human-in-the-Loop Execution</h3>
                  <p className="layer-description">The Agentic AE drafts the email and prepares the play, but you are always in control. You approve the action, ensuring authenticity.</p>
                </div>
              </div>

              {/* Layer 1: Salesforce as the Source of Truth (BOTTOM) */}
              <div className={`layer-section ${activeStates.section1 ? 'active' : ''}`} data-layer="1">
                <div className="layer-section-inner">
                  <h3 className="layer-title">Salesforce as the Source of Truth</h3>
                  <p className="layer-description">Every action is seamlessly synced, enriching your CRM with unparalleled data on stakeholder engagement and deal execution.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Layered visual */}
          <div className="data-foundation-visual">
            <div className="layers-stack-wrapper">
              <div className="layers-stack">
                <img
                  className={`layer-visual layer-1 ${activeStates.layer1 ? 'visible' : ''}`}
                  src="/images/Layer1.webp"
                  alt="Data Acquisition Layer"
                  data-layer="1"
                />
                <img
                  className={`layer-visual layer-2 ${activeStates.layer2 ? 'visible' : ''}`}
                  src="/images/Layer2.webp"
                  alt="Deduplication Layer"
                  data-layer="2"
                />
                <img
                  className={`layer-visual layer-3 ${activeStates.layer3 ? 'visible' : ''}`}
                  src="/images/Layer3.webp"
                  alt="Governance Layer"
                  data-layer="3"
                />
                <img
                  className={`layer-visual layer-4 ${activeStates.layer4 ? 'visible' : ''}`}
                  src="/images/Layer4.webp"
                  alt="Action Layer"
                  data-layer="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}