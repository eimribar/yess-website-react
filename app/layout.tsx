import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import RB2BLoader from "@/components/RB2BLoader";
import "./globals.css";

// Yess brand fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--heading-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yess.ai'),
  title: 'Yess - AI-Powered Sales Engagement Platform',
  description: 'Transform your B2B sales with AI-powered engagement, multi-threading intelligence, and automated execution.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-page="6842f8f4fcaf7f47950d29cc" data-wf-site="6842f8f4fcaf7f47950d29d0" suppressHydrationWarning>
      <head>
        <link href="/css/normalize.css" rel="stylesheet" />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/yess-v2.webflow.css" rel="stylesheet" />
        <link href="/css/blog-custom.css" rel="stylesheet" />
        <link href="/css/custom-inline.css" rel="stylesheet" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Webflow initialization script */}
        <Script id="webflow-init" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${poppins.variable} body`}>
        <GoogleAnalytics />
        <RB2BLoader />
        {children}

        {/* Webflow runtime */}
        <Script src="/js/webflow.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
