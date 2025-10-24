# Yess Blog - Deployment Guide

## Pre-Deployment Checklist

- [x] 42 blog posts migrated from Webflow
- [x] All images downloaded and optimized
- [x] SEO optimizations (meta tags, structured data, sitemaps)
- [x] Category and author pages created
- [x] Social sharing buttons added
- [x] 301 redirects configured
- [x] Custom 404 page created
- [x] Google Analytics 4 ready (needs GA_MEASUREMENT_ID)
- [x] Production build tested locally

## Deployment Steps

### 1. Push to GitHub

```bash
cd /Users/eimribar/yess-replica/blog-app
git init
git add .
git commit -m "Initial commit: Yess blog migration from Webflow"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended for first deployment)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or specify if different)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add environment variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 ID
6. Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? Select your account
# - Link to existing project? N
# - Project name? yess-blog
# - Directory? ./
# - Override settings? N

# Add environment variables
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Paste your GA4 measurement ID

# Deploy to production
vercel --prod
```

### 3. Configure Custom Domain

#### In Vercel Dashboard:

1. Go to Project Settings → Domains
2. Add domain: `www.yess.ai`
3. Configure DNS records as instructed by Vercel

#### DNS Configuration:

Add these records to your domain DNS:

```
Type: CNAME
Name: blog (or www for subdomain)
Value: cname.vercel-dns.com
```

OR for apex domain:

```
Type: A
Name: @
Value: 76.76.21.21
```

### 4. Configure Redirects from Old Webflow Blog

Since you're keeping the same domain and URL structure (`/blog/slug`), redirects should work automatically via the middleware.

If you had different URL patterns on Webflow, update `middleware.ts` accordingly.

### 5. SSL/HTTPS Verification

Vercel automatically provisions SSL certificates. Verify by visiting:
- https://www.yess.ai/blog

### 6. Submit Sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.yess.ai`
3. Verify ownership
4. Submit sitemap: `https://www.yess.ai/sitemap.xml`

### 7. Monitor Initial Performance

Use these tools to monitor:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics 4**: User behavior and traffic
- **Google Search Console**: SEO performance and indexing
- **PageSpeed Insights**: Core Web Vitals

## Post-Deployment Verification

### Test these URLs:

- https://www.yess.ai/blog
- https://www.yess.ai/blog/sales-optimization
- https://www.yess.ai/blog/category/sales
- https://www.yess.ai/blog/author/mike-johnson-yess-ai-b187c
- https://www.yess.ai/sitemap.xml
- https://www.yess.ai/robots.txt
- https://www.yess.ai/feed.xml

### Verify:

- [ ] All 42 blog posts load correctly
- [ ] Images display properly
- [ ] Navigation and footer match main site
- [ ] Category filtering works
- [ ] Social sharing buttons work
- [ ] Google Analytics tracking fires
- [ ] Structured data validates (use [Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Core Web Vitals pass (use [PageSpeed Insights](https://pagespeed.web.dev/))

## Rollback Plan

If issues arise:

1. Revert DNS changes to point back to Webflow temporarily
2. Fix issues in staging deployment
3. Re-deploy when ready

## Support

For Vercel support: [vercel.com/support](https://vercel.com/support)
For Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
