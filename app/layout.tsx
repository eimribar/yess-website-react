import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
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
  title: 'AI for Agentic Selling & Multithreading | Yess',
  description: 'Yess is the Agentic AE for Salesforce that actively executes. Automate agentic relationship selling, master multi-threading, drive mutual action plans, and provide real-time assistance to turn every rep into a top performer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Webflow CSS */}
        <link href="/css/normalize.css" rel="stylesheet" />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/yess-v2.webflow.css" rel="stylesheet" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${poppins.variable} body`}>
        <div className="page-wrapper">
          <div className="global-styles w-embed">
            <style dangerouslySetInnerHTML={{__html: `
              /* Make text look crisper and more legible in all browsers */
              body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
              }
              /* Focus state style for keyboard navigation for the focusable elements */
              *[tabindex]:focus-visible,
              input[type="file"]:focus-visible {
                outline: 0.125rem solid #4d65ff;
                outline-offset: 0.125rem;
              }
              /* Set color style to inherit */
              .inherit-color * {
                color: inherit;
              }
              /* Get rid of top margin on first element in any rich text element */
              .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
                margin-top: 0 !important;
              }
              /* Get rid of bottom margin on last element in any rich text element */
              .w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
                margin-bottom: 0 !important;
              }
              /* Make sure containers never lose their center alignment */
              .container-medium,.container-small, .container-large {
                margin-right: auto !important;
                margin-left: auto !important;
              }
              .hide {
                display: none !important;
              }
              @media screen and (max-width: 991px) {
                .hide, .hide-tablet {
                  display: none !important;
                }
              }
              @media screen and (max-width: 767px) {
                .hide-mobile-landscape{
                  display: none !important;
                }
              }
              @media screen and (max-width: 479px) {
                .hide-mobile{
                  display: none !important;
                }
              }
              .margin-0 { margin: 0rem !important; }
              .padding-0 { padding: 0rem !important; }
              .spacing-clean { padding: 0rem !important; margin: 0rem !important; }
            `}} />
          </div>
          <main className="main-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
