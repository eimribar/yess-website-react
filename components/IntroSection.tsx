'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// Text content structured as paragraphs with words
const paragraphs = [
  {
    words: ['Your', 'sales', 'stack', 'is', 'passive.', 'It', 'reports', 'on', 'the', 'past.', 'It', 'gives', 'you', 'data.', 'It', 'leaves', '100%', 'of', 'the', 'execution', 'to', 'the', 'human.'],
    bold: false
  },
  {
    words: ['The', 'Agentic', 'AE', 'acts.'],
    bold: true
  },
  {
    words: ['It', "doesn't", 'just', 'suggest', 'the', 'next', 'move.', 'It', 'makes', 'the', 'move.', 'It', 'runs', 'the', 'plays.', 'It', 'drafts', 'the', 'email.', 'It', 'orchestrates', 'the', 'stakeholders.'],
    bold: false
  },
  {
    words: ['Yess', 'is', 'the', 'operating', 'system', 'for', 'the', 'Agentic', 'AE'],
    bold: false
  },
  {
    words: ['An', 'active', 'executor,', 'not', 'another', 'passive', 'analyzer.'],
    bold: false
  }
];

// Word component with scroll-based opacity animation
function Word({ word, progress, range }: { word: string; progress: any; range: [number, number] }) {
  // Smooth opacity transition from 0.25 to 1.0
  const opacity = useTransform(progress, range, [0.25, 1.0]);

  return (
    <motion.span
      className="manifesto-word"
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  // The sticky wrapper stays in view while scrolling through the 210vh height
  // Using 'end end' ensures we track through the ENTIRE 210vh before unsticking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Debug: Log scroll progress (uncomment for debugging)
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on('change', (latest) => {
  //     console.log('Intro Section Scroll Progress:', (latest * 100).toFixed(2) + '%');
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  // Calculate total number of words
  const totalWords = paragraphs.reduce((acc, p) => acc + p.words.length, 0);
  let wordIndex = 0;

  return (
    <div className="section_manifesto" ref={sectionRef}>
      <div className="manifesto-sticky-wrapper" ref={containerRef}>
        <div className="manifesto-layout">
          <div className="manifesto-left-column">
            <div className="manifesto-header">
              <div className="manifesto-label">Intro</div>
              <h2 className="manifesto-title">
                <span id="animated-intro-text">The Agentic AE</span>
              </h2>
            </div>
            <div className="manifesto-content">
              <div className="manifesto-text">
                {paragraphs.map((paragraph, pIdx) => {
                  const paragraphClass = paragraph.bold
                    ? 'manifesto-paragraph manifesto-paragraph-bold'
                    : 'manifesto-paragraph';

                  return (
                    <div key={pIdx} className={paragraphClass}>
                      {paragraph.words.map((word, wIdx) => {
                        const currentWordIndex = wordIndex++;
                        // Spread words evenly across the full scroll range (0 to 1)
                        // Each word starts fading in slightly before its position
                        // and finishes slightly after for smooth overlap
                        const wordPosition = currentWordIndex / (totalWords - 1);
                        const overlapRange = 0.15; // Overlap between words for smoothness
                        const wordStart = Math.max(0, wordPosition - overlapRange);
                        const wordEnd = Math.min(1, wordPosition + overlapRange);

                        return (
                          <Word
                            key={wIdx}
                            word={word}
                            progress={scrollYProgress}
                            range={[wordStart, wordEnd]}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="manifesto-right-column">
            <img
              src="/images/Group-33896.svg"
              alt="Centralize Logo"
              className="manifesto-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
