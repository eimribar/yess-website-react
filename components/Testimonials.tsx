'use client';

import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    image: '/images/Matt_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png',
    imageSrcSet: '/images/Matt_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1-p-500.png 500w, /images/Matt_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png 800w',
    alt: 'Matt Gonn, Sales Development Leadership at Drata',
    quote: 'Yess gave our team a real edge\u2014letting us activate new channels at scale without extra lift. <br><br>It\u2019s become a powerful part of how we break into key accounts.',
    logo: '/images/image-80_1.webp',
    logoSrcSet: '/images/image-80_1image-80.webp 500w, /images/image-80_1image-80.webp 800w, /images/image-80_1.webp 1083w',
    logoAlt: 'Drata logo',
    name: 'Matt Gonn',
    title: 'Sales Development Leadership',
    className: ''
  },
  {
    id: 2,
    image: '/images/Siri_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png',
    imageSrcSet: '/images/Siri_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1-p-500.png 500w, /images/Siri_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png 800w',
    alt: 'Srikrishnan Ganesan, Co-Founder & CEO at Rocketlane',
    quote: 'Yess removed the friction between intent and execution. <br><br>We now launch multi-channel outreach at scale with ease\u2014across reps and execs\u2014 and not just talk about multi-threading.',
    logo: '/images/3d4d5b_rocketlane_optimized.webp',
    logoSrcSet: '',
    logoAlt: 'Rocketlane logo',
    name: 'Srikrishnan Ganesan',
    title: 'Co-Founder & CEO',
    className: 'is-2'
  },
  {
    id: 3,
    image: '/images/Leore_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png',
    imageSrcSet: '/images/Leore_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1-p-500.png 500w, /images/Leore_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png 800w',
    alt: 'Leore Spira, RevOps & GTM Leader at Blinkops',
    quote: 'Yess enabled us to operationalize cross-functional outreach with full automation of engagement capture. <br><br>This end-to-end visibility provided RevOps with the data foundation to drive smarter, faster decisions\u2014while saving our team hours of manual work each week.',
    logo: '/images/Nouveaux-logos-Blinkops.png',
    logoSrcSet: '',
    logoAlt: 'Blinkops logo',
    name: 'Leore Spira',
    title: 'RevOps & GTM Leader',
    className: 'is-3'
  },
  {
    id: 4,
    image: '/images/Caitlin_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png',
    imageSrcSet: '/images/Caitlin_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1-p-500.png 500w, /images/Caitlin_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png 800w',
    alt: 'Caitlin Coscolluela, Sales Manager at Deepgram',
    quote: 'What Yess brought was consistency and smart automation that actually improved outcomes.<br><br>Our reply rates went up, and the team could focus on follow-through instead of manual execution.',
    logo: '/images/Deepgram_1_transparent-2.png',
    logoSrcSet: '',
    logoAlt: 'Deepgram logo',
    name: 'Caitlin Coscolluela',
    title: 'Sales Manager',
    className: 'is-4'
  },
  {
    id: 5,
    image: '/images/Sol_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png',
    imageSrcSet: '/images/Sol_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1-p-500.png 500w, /images/Sol_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off-1.png 800w',
    alt: 'Sol Weinreich, Senior Director of Demand Generation at PointFive',
    quote: 'Yess made it effortless to coordinate executive outreach at scale.<br><br>We booked 3x more meetings with half the effort. The ROI is undeniable.',
    logo: '/images/PointFive-Transparent-Logo-1.png',
    logoSrcSet: '',
    logoAlt: 'PointFive logo',
    name: 'Sol Weinreich',
    title: 'Senior Director of Demand Generation',
    className: ''
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because we'll add clones
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create extended array with clones for infinite loop
  const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Clone of last slide at the beginning
    ...testimonials,
    testimonials[0] // Clone of first slide at the end
  ];

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    // If we're at the clone at the end, jump to the real first slide
    if (currentSlide === extendedTestimonials.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    }
    // If we're at the clone at the beginning, jump to the real last slide
    else if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(extendedTestimonials.length - 2);
    }
  };

  // Re-enable transitions after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-play functionality - DISABLED
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => prev + 1);
  //   }, 5000); // Auto-advance every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index + 1); // +1 because of the clone at the beginning
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="section_testimonial">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div data-fx="fade-stagger-2" className="flex-vertical is-big-rem">
              <div data-sequence="3" className="container-title max-width-full">
                <div className="section-label">SOCIAL PROOF</div>
                <h2 className="heading-style-h2">Don't Just Take Our Word For It.</h2>
              </div>
              <div
                data-delay="1"
                data-animation="slide"
                className="testi_slider w-slider"
                data-autoplay="true"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="1"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div
                  ref={sliderRef}
                  className="testi_mask w-slider-mask"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: isTransitioning ? 'transform 500ms ease' : 'none',
                    display: 'flex'
                  }}
                >
                  {extendedTestimonials.map((testimonial, index) => (
                    <div
                      key={`slide-${index}`}
                      data-w-id={`testimonial-${index}`}
                      className="testi_slide w-slide"
                      style={{
                        minWidth: '100%',
                        flex: '0 0 100%'
                      }}
                    >
                      <div className="container-testimonial">
                        <div className="content-testimonial">
                          <div className={`content-img-left ${testimonial.className}`}>
                            <img
                              src={testimonial.image}
                              loading="eager"
                              sizes="(max-width: 800px) 100vw, 800px"
                              srcSet={testimonial.imageSrcSet}
                              alt={testimonial.alt}
                            />
                          </div>
                          <div className="content-right-testi">
                            <p dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
                            <div className="container-testi-job">
                              <div className="content-img-logo">
                                <img
                                  src={testimonial.logo}
                                  loading="lazy"
                                  sizes={testimonial.logoSrcSet ? '(max-width: 1083px) 100vw, 1083px' : undefined}
                                  srcSet={testimonial.logoSrcSet || undefined}
                                  alt={testimonial.logoAlt}
                                  className="image"
                                />
                              </div>
                              <div className="content-job">
                                <div>{testimonial.name} <br /></div>
                                <div><strong>{testimonial.title}</strong></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-quote">
                          <img src="/images/Title.webp" loading="lazy" alt="Quotation mark decoration" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="slider-arrow is-bottom-previous w-slider-arrow-left"
                  onClick={prevSlide}
                  role="button"
                  aria-label="Previous slide"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <mask id="mask0_56_667" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                        <rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_56_667)">
                        <path d="M10.65 14.6666L11.8333 13.4833L6.34998 7.99998L11.8333 2.51665L10.65 1.33331L3.98331 7.99998L10.65 14.6666Z" fill="#1C1B1F"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="slider-arrow is-bottom-next w-slider-arrow-right"
                  onClick={nextSlide}
                  role="button"
                  aria-label="Next slide"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <mask id="mask0_56_675" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                        <rect width="16" height="16" fill="#D9D9D9"></rect>
                      </mask>
                      <g mask="url(#mask0_56_675)">
                        <path d="M5.34996 14.6666L4.16663 13.4833L9.64996 7.99998L4.16663 2.51665L5.34996 1.33331L12.0166 7.99998L5.34996 14.6666Z" fill="#1C1B1F"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="testi_slide-nav w-slider-nav w-slider-nav-invert w-round">
                  {testimonials.map((_, index) => {
                    // Calculate actual active slide (account for cloned slides)
                    let actualSlide = currentSlide - 1;
                    if (currentSlide === 0) actualSlide = testimonials.length - 1;
                    else if (currentSlide === extendedTestimonials.length - 1) actualSlide = 0;

                    return (
                      <div
                        key={index}
                        className={`w-slider-dot ${index === actualSlide ? 'w-active' : ''}`}
                        onClick={() => goToSlide(index)}
                        role="button"
                        aria-label={`Go to slide ${index + 1}`}
                        style={{ cursor: 'pointer' }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
