'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize Webflow interactions after component mounts
    if (typeof window !== 'undefined' && (window as any).Webflow) {
      (window as any).Webflow.destroy();
      (window as any).Webflow.ready();
      (window as any).Webflow.require('ix2').init();
    }

    // Handle scroll event for navbar background
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change background after scrolling 50px
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .navbar7_component {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          transition: all 0.3s ease;
        }

        .navbar7_component.transparent {
          background-color: transparent;
        }

        .navbar7_component.scrolled {
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* Ensure content doesn't jump when navbar becomes fixed */
        .navbar-spacer {
          height: 72px;
        }

        @media (max-width: 991px) {
          .navbar-spacer {
            height: 64px;
          }
        }
      `}</style>

      <div className="navbar-spacer" />
      <div
        data-animation="default"
        className={`navbar7_component w-nav ${isScrolled ? 'scrolled' : 'transparent'}`}
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="277010f5-d2a4-7698-2fc3-209f351467c6"
        role="banner"
        data-duration="400"
      >
        <div className="navbar7_container">
          <a href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current">
            <img loading="lazy" src="/images/Vector.svg" alt="Yess.ai Logo" className="navbar_logo" />
          </a>
          <nav role="navigation" className={`navbar7_menu w-nav-menu ${isMobileMenuOpen ? 'w--open' : ''}`}>
            <div className="navbar7_menu-left">
              <div
                data-delay="0"
                data-hover="true"
                data-w-id="277010f5-d2a4-7698-2fc3-209f351467cc"
                className={`nav_dropdown w-dropdown ${isDropdownOpen ? 'w--open' : ''}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="nav_dropdown-toggle w-dropdown-toggle">
                  <div>Products</div>
                  <div className="arrow-down-nav w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path>
                    </svg>
                  </div>
                </div>
                <nav className={`nav_dropdown-list w-dropdown-list ${isDropdownOpen ? 'w--open' : ''}`}>
                  <a href="/products/salesforce-ai-agent" className="nav_link is-dropdown w-inline-block">
                    <div className="nav_link-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--simple-icons"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10.006 5.415a4.2 4.2 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205c.63-.3 1.35-.45 2.1-.45c2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 0 1-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.31 4.31 0 0 1 8.88 20.4a4.3 4.3 0 0 1-4.05-2.82c-.27.062-.54.076-.825.076c-2.204 0-4.005-1.8-4.005-4.05c0-1.5.811-2.805 2.01-3.51c-.255-.57-.39-1.2-.39-1.846c0-2.58 2.1-4.65 4.65-4.65c1.53 0 2.85.705 3.72 1.8"
                        ></path>
                      </svg>
                    </div>
                    <div>Salesforce AI Agent</div>
                  </a>
                  <a href="/products/linkedin-ai-agent" className="nav_link is-dropdown w-inline-block">
                    <div className="nav_link-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--simple-icons"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>LinkedIn AI Agent</div>
                  </a>
                  <a href="/products/executive-outreach-agent" className="nav_link is-dropdown w-inline-block">
                    <div className="nav_link-icon w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                    <div>Executive Outreach Agent</div>
                  </a>
                  <a href="/products/lead-recommendation-agent" className="nav_link is-dropdown w-inline-block">
                    <div className="nav_link-icon w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11 2C15.068 2 18.426 5.036 18.934 8.965L21.184 12.504C21.332 12.737 21.302 13.084 20.959 13.232L19 14.07V17C19 18.105 18.105 19 17 19H15.001L15 22H6V18.306C6 17.126 5.564 16.009 4.756 15.001C3.657 13.631 3 11.892 3 10C3 5.582 6.582 2 11 2ZM11 7C10.448 7 10 7.448 10 8V8.999L9 9C8.448 9 8 9.448 8 10C8 10.552 8.448 11 9 11L10 10.999V12C10 12.552 10.448 13 11 13C11.552 13 12 12.552 12 12V11H13C13.552 11 14 10.552 14 10C14 9.448 13.552 9 13 9H12V8C12 7.448 11.552 7 11 7Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                    <div>Lead Recommendation Agent</div>
                  </a>
                </nav>
              </div>
              <a href="/post" className="nav_link w-inline-block">
                <div>Blog</div>
              </a>
              <a href="https://trust.yess.ai/" target="_blank" className="nav_link w-inline-block">
                <div>Trust center</div>
              </a>
            </div>
            <div className="navbar7_menu-right">
              <a href="/login" className="button is-small w-button">
                Get Started
              </a>
            </div>
          </nav>
          <div
            className={`navbar7_menu-button w-nav-button ${isMobileMenuOpen ? 'w--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="menu"
            role="button"
            tabIndex={0}
          >
            <div className="menu-icon5">
              <div className="menu-icon1_line-top"></div>
              <div className="menu-icon1_line-middle">
                <div className="menu-icon1_line-middle-inner"></div>
              </div>
              <div className="menu-icon1_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}