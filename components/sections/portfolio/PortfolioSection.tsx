import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { PortfolioGallery } from "@/components/sections/portfolio/PortfolioGallery"
import { bookCallUrl } from "@/lib/data/navigation"
import { portfolioProjects } from "@/lib/data/portfolio"

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden border-t border-border bg-background"
    >
      <span
        className="pointer-events-none absolute -right-6 top-16 hidden select-none font-display text-[clamp(4rem,14vw,11rem)] font-bold leading-none tracking-tighter text-white/[0.02] sm:block md:top-24"
        aria-hidden="true"
      >
        WORK
      </span>

      <Container>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10">
          <FadeIn className="lg:col-span-8">
            <SplitHeading
              index="04"
              label="Portfolio"
              size="lg"
              white="Selected work,"
              accent="no filler."
              description="Browse by category or use the arrows to explore."
            />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="rounded-sm border border-border bg-card p-5 sm:p-6 lg:ml-auto lg:max-w-xs">
              <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {portfolioProjects.length}
                <span className="font-serif-accent text-accent">+</span>
              </p>
              <p className="font-montserrat mt-2 text-sm text-body">
                Projects delivered across YouTube, social, ads and brand film.
              </p>
              <Link
                href={bookCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex min-h-[44px] items-center gap-2 font-helvetica text-sm text-white transition-colors hover:text-accent sm:mt-6"
              >
                Start a project
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <PortfolioGallery />
        </FadeIn>
      </Container>
    </section>
  )
}
