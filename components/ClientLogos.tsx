'use client';

import LogoLoop from './LogoLoop';

// Row 1 - 12 logos
const companyLogosRow1 = [
  { src: '/images/WingSecurity_transparent.png', alt: 'Wing Security' },
  { src: '/images/NoFraud_transparent.png', alt: 'NoFraud' },
  { src: '/images/ConductorOne_transparent.png', alt: 'ConductorOne' },
  { src: '/images/Rocketlane_transparent.png', alt: 'Rocketlane' },
  { src: '/images/Starburst_transparent.png', alt: 'Starburst' },
  { src: '/images/Google_Cloud_transparent.png', alt: 'Google Cloud' },
  { src: '/images/Drata_transparent.png', alt: 'Drata' },
  { src: '/images/Neon_transparent.png', alt: 'Neon' },
  { src: '/images/Angora_transparent.png', alt: 'Angora' },
  { src: '/images/Wallarm_transparent.png', alt: 'Wallarm' },
  { src: '/images/descope-transparent.webp', alt: 'Descope' },
  { src: '/images/nextiva-transparent.webp', alt: 'Nextiva' },
];

// Row 2 - 12 logos
const companyLogosRow2 = [
  { src: '/images/Smartling_transparent.png', alt: 'Smartling' },
  { src: '/images/PointFive_transparent (1).png', alt: 'Point Five' },
  { src: '/images/Luma_transparent.png', alt: 'Luma' },
  { src: '/images/Grip_transparent.png', alt: 'Grip' },
  { src: '/images/Concensus_transparent.png', alt: 'Consensus' },
  { src: '/images/Form_transparent.png', alt: 'Form' },
  { src: '/images/Deepgram_(1)_transparent.png', alt: 'Deepgram' },
  { src: '/images/Blinkops_transparent.png', alt: 'Blinkops' },
  { src: '/images/Axonius_transparent.png', alt: 'Axonius' },
  { src: '/images/salesintel-transparent.webp', alt: 'SalesIntel' },
  { src: '/images/ness-digital-engineering-transparent.webp', alt: 'Ness Digital Engineering' },
  { src: '/images/trusted-health-transparent.webp', alt: 'Trusted Health' },
];

export default function ClientLogos() {
  return (
    <section style={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      padding: '4rem 0 0.5rem 0', // Reduced bottom padding for tighter spacing
      background: '#fff',
      overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6b7280',
          margin: 0
        }}>
          TRUSTED BY THE BEST
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
        {/* First row - scrolls left */}
        <LogoLoop
          logos={companyLogosRow1}
          speed={40}
          direction="left"
          logoHeight={40}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="#ffffff"
          ariaLabel="Trusted companies row 1"
        />
        {/* Second row - scrolls right */}
        <LogoLoop
          logos={companyLogosRow2}
          speed={40}
          direction="right"
          logoHeight={40}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="#ffffff"
          ariaLabel="Trusted companies row 2"
        />
      </div>
    </section>
  );
}
