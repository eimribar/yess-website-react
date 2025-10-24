'use client';

import { useState } from 'react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="section_how-it-works">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="how-it-works-header">
              <div className="caption-wrapper">
                <div className="is-caption-1">THE AGENTIC ADVANTAGE</div>
              </div>
              <h2 className="heading-style-h2">It Doesn't Just Guide. It Executes.</h2>
              <p className="how-it-works-subheading">Yess is proactive, actionable, and autonomous. It sees what needs to happen, prepares the action, and executes it for you—with a human in the loop.</p>
            </div>

            {/* Tabs Container */}
            <div className="tabs-container">
              {/* Tabs Navigation */}
              <div className="tabs-list">
                <button
                  className={`tab-trigger ${activeTab === 'tab-1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-1')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                  </svg>
                  <span>Orchestrates</span>
                </button>
                <button
                  className={`tab-trigger ${activeTab === 'tab-2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-2')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                  </svg>
                  <span>Executes</span>
                </button>
                <button
                  className={`tab-trigger ${activeTab === 'tab-3' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-3')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                    <circle cx="20" cy="20" r="3" fill="currentColor"/>
                  </svg>
                  <span>Learns</span>
                </button>
              </div>

              {/* Tabs Content Wrapper */}
              <div className="tabs-content-wrapper">
                {/* Tab 1: Orchestrates */}
                <div className={`tab-content ${activeTab === 'tab-1' ? 'active' : ''}`}>
                  <div className="tab-content-grid">
                    <div className="tab-content-text">
                      <span className="tab-badge">Relationship Intelligence</span>
                      <h3 className="tab-content-title">Maps, Coordinates, Activates</h3>
                      <p className="tab-content-description">Yess maps your buying committee and your internal team automatically. It identifies gaps, flags missing stakeholders, and orchestrates multi-threaded engagement across everyone who matters. Your reps see the full picture—who to involve, when, and how.</p>
                      <a href="#" className="tab-cta-button">See How It Works</a>
                    </div>
                    <div className="tab-content-image">
                      <img src="/images/placeholder-1.jpg" alt="Orchestrates" width={800} height={595} loading="eager" />
                    </div>
                  </div>
                </div>

                {/* Tab 2: Executes */}
                <div className={`tab-content ${activeTab === 'tab-2' ? 'active' : ''}`}>
                  <div className="tab-content-grid">
                    <div className="tab-content-text">
                      <span className="tab-badge">Agentic Workflows</span>
                      <h3 className="tab-content-title">Suggests. Drafts. Sends.</h3>
                      <p className="tab-content-description">Yess doesn't just tell you what to do next. It drafts the email. Creates the asset. Updates Salesforce. Sends the Slack message. You review, approve, execute. The agentic AE handles the work. You stay in control.</p>
                      <a href="#" className="tab-cta-button">See Execution in Action</a>
                    </div>
                    <div className="tab-content-image">
                      <img src="/images/placeholder-2.jpg" alt="Executes" width={3200} height={2381} loading="eager" />
                    </div>
                  </div>
                </div>

                {/* Tab 3: Learns */}
                <div className={`tab-content ${activeTab === 'tab-3' ? 'active' : ''}`}>
                  <div className="tab-content-grid">
                    <div className="tab-content-text">
                      <span className="tab-badge">Adaptive Intelligence</span>
                      <h3 className="tab-content-title">Gets Smarter With Every Deal</h3>
                      <p className="tab-content-description">Yess learns from your top performers and your wins. It identifies what works, codifies best practices, and makes elite methodology executable for your entire team. The playbook improves with every deal you close.</p>
                      <a href="#" className="tab-cta-button">See the Intelligence</a>
                    </div>
                    <div className="tab-content-image">
                      <img src="/images/placeholder-3.jpg" alt="Learns" width={1080} height={725} loading="eager" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
