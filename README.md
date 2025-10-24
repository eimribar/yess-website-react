# Yess Blog - Next.js Migration

High-performance blog platform for Yess, migrated from Webflow to Next.js for better SEO, performance, and maintainability.

## Features

### ✅ Complete Migration
- 42 blog posts migrated from Webflow
- 259 images downloaded and optimized
- All metadata, categories, and authors preserved
- URLs maintained for SEO (`/blog/[slug]`)

### ✅ SEO Optimizations
- Dynamic sitemap.xml generation
- Robots.txt configuration
- RSS feed (/feed.xml)
- Open Graph tags
- Twitter Card tags
- Schema.org structured data (BlogPosting, Breadcrumbs)
- Canonical URLs
- Meta descriptions and title tags

### ✅ User Experience
- Category pages for content filtering
- Author pages
- Related posts section
- Social sharing (LinkedIn, Twitter, Email)
- Reading time indicators
- Breadcrumb navigation
- Custom 404 page
- Responsive design
- On-brand styling matching main Yess website

### ✅ Performance
- Static Site Generation (SSG) for all pages
- Image optimization
- Next.js 16 with Turbopack
- 301 redirects for old URLs
- Core Web Vitals optimized

### ✅ Analytics & Tracking
- Google Analytics 4 integration
- Conversion tracking ready
- Event tracking configured

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Webflow CSS + Custom CSS
- **Fonts**: Manrope, Inter, Poppins
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## Project Structure

```
blog-app/
├── app/
│   ├── blog/
│   │   ├── [slug]/          # Individual blog posts
│   │   ├── category/[slug]/ # Category pages
│   │   ├── author/[slug]/   # Author pages
│   │   └── page.tsx         # Blog index
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── feed.xml/
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── BlogList.tsx
│   ├── SocialShare.tsx
│   └── GoogleAnalytics.tsx
├── lib/
│   ├── blog-data.ts        # Data fetching functions
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── data/
│   └── blog-posts.csv      # Source data from Webflow
├── public/
│   ├── blog-images/        # 259 blog post images
│   ├── images/             # Site assets
│   └── css/                # Webflow + custom CSS
└── scripts/
    ├── download-images.js  # Image download script
    ├── fix-image-names.js  # URL decode filenames
    └── test-urls.js        # URL validation script
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000/blog
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Environment Variables

Create `.env.local` file:

```bash
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

Quick deploy to Vercel:

```bash
vercel
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `node scripts/test-urls.js` - Test all blog URLs

## Key Files

- **`middleware.ts`** - 301 redirects for old URLs
- **`app/sitemap.ts`** - Dynamic sitemap generation
- **`app/robots.ts`** - Robots.txt configuration
- **`app/feed.xml/route.ts`** - RSS feed generation
- **`lib/blog-data.ts`** - All data fetching logic

## Content Management

Blog posts are sourced from `/data/blog-posts.csv`. To update content:

1. Export updated CSV from Webflow
2. Replace `/data/blog-posts.csv`
3. Run `npm run build` to regenerate static pages
4. Deploy

## SEO Features

### Sitemap
- Auto-generated at `/sitemap.xml`
- Includes all blog posts, categories, and author pages
- Updates automatically on build

### Structured Data
- BlogPosting schema for each post
- Breadcrumb navigation schema
- Organization schema for publisher
- Validates with Google Rich Results Test

### Performance
- Lighthouse Score: 95+ target (Performance, SEO, Accessibility)
- Core Web Vitals: Optimized for green metrics
- Static generation for instant page loads

## Analytics

Google Analytics 4 tracks:
- Page views
- Social shares
- Outbound link clicks
- Category navigation
- Search queries

## Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Yess Website: https://www.yess.ai

## License

Proprietary - Yess AI, Inc.
