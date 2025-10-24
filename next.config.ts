import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip trailing slash redirects for .html files
  skipTrailingSlashRedirect: true,

  // Ensure Next.js handles its own routes first
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        // ONLY rewrite these specific paths to static HTML
        // afterFiles means Next.js routes are checked FIRST
        // Homepage now uses React components - no rewrite needed
        {
          source: '/login',
          destination: '/login.html',
        },
        {
          source: '/book-a-demo',
          destination: '/book-a-demo.html',
        },
        {
          source: '/waitlist',
          destination: '/waitlist.html',
        },
        // Product pages
        {
          source: '/products/salesforce-ai-agent',
          destination: '/products/salesforce-ai-agent.html',
        },
        {
          source: '/products/linkedin-ai-agent',
          destination: '/products/linkedin-ai-agent.html',
        },
        {
          source: '/products/executive-outreach-agent',
          destination: '/products/executive-outreach-agent.html',
        },
        {
          source: '/products/lead-recommendation-agent',
          destination: '/products/lead-recommendation-agent.html',
        },
        // Legal pages
        {
          source: '/legal/privacy-policy',
          destination: '/legal/privacy-policy.html',
        },
        {
          source: '/legal/terms-of-use',
          destination: '/legal/terms-of-use.html',
        },
        {
          source: '/legal/terms-of-service',
          destination: '/legal/terms-of-service.html',
        },
        {
          source: '/legal/data-processing-addendum',
          destination: '/legal/data-processing-addendum.html',
        },
        {
          source: '/legal/service-level-agreement',
          destination: '/legal/service-level-agreement.html',
        },
        {
          source: '/legal/sub-processors',
          destination: '/legal/sub-processors.html',
        },
      ],
      fallback: [],
    };
  },

  async redirects() {
    return [
      // Product page clean URLs
      {
        source: '/products/salesforce-ai-agent.html',
        destination: '/products/salesforce-ai-agent',
        permanent: true,
      },
      {
        source: '/products/linkedin-ai-agent.html',
        destination: '/products/linkedin-ai-agent',
        permanent: true,
      },
      {
        source: '/products/executive-outreach-agent.html',
        destination: '/products/executive-outreach-agent',
        permanent: true,
      },
      {
        source: '/products/lead-recommendation-agent.html',
        destination: '/products/lead-recommendation-agent',
        permanent: true,
      },
      // Legal page clean URLs
      {
        source: '/legal/privacy-policy.html',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/legal/terms-of-use.html',
        destination: '/legal/terms-of-use',
        permanent: true,
      },
      {
        source: '/legal/terms-of-service.html',
        destination: '/legal/terms-of-service',
        permanent: true,
      },
      {
        source: '/legal/data-processing-addendum.html',
        destination: '/legal/data-processing-addendum',
        permanent: true,
      },
      {
        source: '/legal/service-level-agreement.html',
        destination: '/legal/service-level-agreement',
        permanent: true,
      },
      {
        source: '/legal/sub-processors.html',
        destination: '/legal/sub-processors',
        permanent: true,
      },
      // Redirect old /blog to new /post
      {
        source: '/blog.html',
        destination: '/post',
        permanent: true,
      },
      {
        source: '/login.html',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/post',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/post/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
