import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--heading-body",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yess.ai'),
  title: 'AI for Agentic Selling & Multithreading | Yess',
  description: 'Yess is the Agentic AE for Salesforce that actively executes. Automate agentic relationship selling, master multi-threading, drive mutual action plans, and provide real-time assistance to turn every rep into a top performer.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Yess: The Agentic AE for Salesforce',
    description: "Yess embeds an Agentic AE in Salesforce to make every rep a top performer. It's not another analyzer - it's an active executor for relationship selling, multi-threading, and your entire winning playbook.",
    url: 'https://www.yess.ai',
    siteName: 'Yess',
    type: 'website',
    images: [
      {
        url: 'https://www.yess.ai/images/yess-social-share.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yess: The Agentic AE for Salesforce',
    description: "Yess embeds an Agentic AE in Salesforce to make every rep a top performer. It's not another analyzer - it's an active executor for relationship selling, multi-threading, and your entire winning playbook.",
    images: ['https://www.yess.ai/images/yess-social-share.png'],
  },
  other: {
    'theme-color': '#27C440',
    'ai-purpose': 'agentic execution, sales process automation, agentic relationship selling, multi-threading orchestration, mutual action plan execution, sales methodology enforcement',
    'target-audience': 'Enterprise B2B sales leaders, CROs, VPs of Sales, sales managers, revenue operations, account executives',
    'industry': 'Agentic AI, Sales Technology, AI Software, SaaS',
    'product-category': 'Agentic Operating System, Agentic AE, Sales AI, AI Sales Assistant, AI Sales Co-pilot, Sales Execution Platform',
    'key-features': 'AI Twin, Agentic Relationship Selling, Executable Mutual Action Plans, Real-Time AI Assistant, Proactive Intelligence, Human-in-the-Loop Execution, Actionable Slack Workflows',
    'integrations': 'Salesforce, Slack, Google Workspace, Microsoft 365, Gong, Gmail, Outlook, Google Calendar',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-page="6842f8f4fcaf7f47950d29cc" data-wf-site="6842f8f4fcaf7f47950d29d0">
      <head>
        {/* DNS Prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://d3e54v103j8qbb.cloudfront.net" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />

        {/* Preconnect for critical resources */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://cdn.skypack.dev" rel="preconnect" crossOrigin="anonymous" />

        {/* Modulepreload for hero animation */}
        <link rel="modulepreload" href="https://cdn.skypack.dev/ogl" crossOrigin="anonymous" />

        {/* Webflow CSS - Load in order */}
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/yess-v2.webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/custom-inline.css" rel="stylesheet" type="text/css" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Favicon */}
        <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
        <link href="https://www.yess.ai" rel="canonical" />

        {/* Webflow initialization script */}
        <Script id="webflow-init" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>

        {/* JSON-LD Structured Data - Organization */}
        <Script id="json-ld-org" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yess",
              "url": "https://www.yess.ai",
              "logo": "https://www.yess.ai/images/yess-logo.png",
              "description": "Yess is the agentic operating system that gives every sales rep an Agentic AE. We turn passive data into active execution to make elite sales performance the default for enterprise B2B sales teams.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "169 Madison Ave STE 11656",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10016",
                "addressCountry": "US"
              },
              "industry": ["Agentic AI", "Sales Technology", "AI Software", "SaaS"],
              "sameAs": [
                "https://www.linkedin.com/company/yessai",
                "https://twitter.com/Yess_ai"
              ]
            }
          `}
        </Script>

        {/* JSON-LD Structured Data - Software Application */}
        <Script id="json-ld-app" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "The Agentic AE by Yess",
              "description": "The Agentic AE is a sales execution platform for Salesforce that automates elite performance. It uses agentic workflows to orchestrate multi-threading, execute mutual action plans, and master relationship selling, turning every rep into a top performer.",
              "applicationCategory": ["Sales AI", "Agentic AI", "Sales Execution Platform", "AI Sales Assistant"],
              "featureList": [
                "Agentic AE / AI Twin Co-pilot",
                "Agentic Relationship Selling",
                "Agentic Multi-Threading Orchestration",
                "Executable Mutual Action Plans",
                "Automated Executive Outreach Plays",
                "Real-Time AI Assistant",
                "Human-in-the-Loop Execution"
              ],
              "operatingSystem": "Web-based",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Contact for pricing or request a demo."
              },
              "provider": {
                "@type": "Organization",
                "name": "Yess"
              },
              "softwareRequirements": "Integrates with your existing GTM stack including Salesforce, Slack, Google Workspace, Microsoft 365, and Gong",
              "compatibleWith": "Salesforce",
              "integrationWith": [
                "Salesforce",
                "Slack",
                "Google Workspace",
                "Gmail",
                "Google Calendar",
                "Microsoft 365",
                "Outlook",
                "Gong"
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Enterprise B2B sales leaders, CROs, VPs of Sales, sales managers, account executives"
              }
            }
          `}
        </Script>

        {/* JSON-LD Structured Data - FAQ */}
        <Script id="json-ld-faq" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Yess?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yess is an agentic operating system for enterprise sales teams. Our platform gives every account executive an 'Agentic AE'—an AI partner that embeds the craft and process of a top 1% seller to automate complex sales execution, such as multi-threading and relationship orchestration. The result is a scalable system that turns every seller into a high-performer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is an Agentic AE and how is it different from other sales AI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An Agentic AE is an AI partner that moves beyond passive analysis and into active execution. While other tools suggest what to do, an Agentic AE drafts the emails, prepares the plays, and orchestrates the stakeholders required to win a deal. It's an active executor that handles the manual work, with a human-in-the-loop for final approval, not a passive analyzer that creates more tasks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is Yess for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yess is designed for B2B enterprise sales organizations. It provides the most value to: Sales Leaders (CROs, VPs) who need to close the performance gap and build a predictable revenue engine. Sales Managers who need to scale their coaching and enforce their winning methodology. Account Executives who need to master complex deals and automate manual execution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Yess improve sales performance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yess improves sales performance by systematizing elite execution. Our platform closes the gap between top and average performers by embedding a winning methodology into an agentic AI. This leads to three key outcomes: 1. Increased win rates by mastering deal complexity. 2. Reduced ramp time for new hires. 3. The ability to scale what works across the entire sales floor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the core features of the Yess platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Yess operating system is built on four core agentic workflows: 1. Agentic Relationship Selling to orchestrate multi-threading. 2. Executable Mutual Action Plans to maintain deal momentum. 3. Proactive Risk Detection to surface unseen threats. 4. An AI Twin that serves as the rep's co-pilot for the entire deal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which tools does Yess integrate with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yess integrates seamlessly into your existing GTM stack to act as its execution layer. Key integrations include Salesforce, Slack, Google Workspace (Gmail, Calendar), Microsoft 365 (Outlook), and Gong. Our platform turns passive data from these tools into proactive, agentic action without disrupting your team's workflow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the 'human-in-the-loop' system work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our 'human-in-the-loop' model ensures your team is always in control. The Agentic AE performs the preparation and execution work—like drafting an outreach email or a follow-up—and delivers it as an actionable suggestion in Slack. The user simply reviews the action and approves it with a single click. The AI does the work; the human makes the strategic decision."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Yess secure for enterprise companies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Yess is built with enterprise-grade security as a foundational principle. We understand the security and compliance needs of large organizations and ensure that our platform integrates securely with your core systems like Salesforce and Slack, protecting your data and your customers' data at every step."
                  }
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${poppins.variable} body`}>
        <div className="page-wrapper">
          <main className="main-wrapper">
            {children}
          </main>
        </div>

        {/* Webflow runtime */}
        <Script src="/js/webflow.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
