import { Header } from '@/components/ui/header';
import Orb from '@/components/Orb';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left side - Hero text */}
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl xl:text-7xl">
                  AI for Agentic{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Selling
                  </span>{' '}
                  & Multithreading
                </h1>
                <p className="text-xl text-muted-foreground lg:text-2xl">
                  Yess is the Agentic AE for Salesforce. Automatically research prospects,
                  draft personalized emails, and orchestrate multi-threaded outreach at scale.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/book-a-demo"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right side - Orb */}
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Orb hue={166} hoverIntensity={0.3} rotateOnHover={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Background gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </section>

        {/* Placeholder sections - we'll build these next */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">More sections coming soon...</h2>
            <p className="mt-4 text-muted-foreground">
              ClientLogos, Manifesto, Testimonials, HowItWorks, DataFoundation, MagicBento, Integration, and CTA sections will be added next.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
