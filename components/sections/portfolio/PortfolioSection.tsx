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
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <span
        className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[clamp(4rem,14vw,11rem)] font-bold leading-none tracking-tighter text-white/[0.02]"
        aria-hidden="true"
      >
        WORK
      </span>

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-8">
            <SplitHeading
              index="04"
              label="Portfolio"
              size="lg"
              white="Selected work,"
              accent="no filler."
              description="Real projects for creators, brands and businesses — browse by category or use the arrows to explore."
            />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="rounded-sm border border-border bg-card p-6 lg:ml-auto lg:max-w-xs">
              <p className="font-display text-4xl font-bold tracking-tight text-white">
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
                className="group mt-6 inline-flex items-center gap-2 font-helvetica text-sm text-white transition-colors hover:text-accent"
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

        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
              More work available on request
            </p>
            <p className="font-display text-sm font-semibold tracking-tight text-white">
              THR33 <span className="font-serif-accent text-accent">Frames</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
