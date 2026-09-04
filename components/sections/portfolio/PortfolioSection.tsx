import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { PortfolioCarousel } from "@/components/sections/portfolio/PortfolioCarousel"

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-lit px-4 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7D9DC4]"
                aria-hidden="true"
              />
              <span className="font-montserrat text-[10px] font-medium uppercase tracking-[0.25em] text-body">
                Portfolio
              </span>
            </div>

            <h2 className="font-display mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Projects that speak for{" "}
              <span className="text-brand-blue">themselves.</span>
            </h2>
          </div>

          <div className="flex items-start gap-6 lg:max-w-xs lg:pt-8">
            <span
              className="hidden h-16 w-px bg-border-lit lg:block"
              aria-hidden="true"
            />
            <div className="space-y-5">
              <p className="font-montserrat text-sm leading-relaxed text-body md:text-base">
                Real work. Real results. A glimpse of what we&apos;ve created
                for creators, brands and businesses.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 font-helvetica text-sm text-text-primary transition-colors hover:text-brand-blue"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-lit text-sm transition-colors hover:border-brand-blue">
                  ↗
                </span>
                View All Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <PortfolioCarousel />
        </div>

        {/* Footer strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
            Turning ideas into impact
          </p>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-border-lit" aria-hidden="true" />
            <p className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-muted">
              Three Framers
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
