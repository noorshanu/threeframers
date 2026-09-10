import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { PortfolioGallery } from "@/components/sections/portfolio/PortfolioGallery"
import { bookCallUrl } from "@/lib/data/navigation"

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden border-t border-border bg-background"
    >
      <Container>
        <FadeIn>
          <h2 className="font-display text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Spotlight
          </h2>
          <p className="font-montserrat mt-4 max-w-2xl text-sm text-body sm:text-base md:text-lg">
            We produce high grade launch videos for funded startups and media
            businesses.
          </p>
          <p className="font-montserrat mt-2 text-sm text-muted">
            More proof of work in stealth. Reach out for info.
          </p>
          <Link
            href={bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex min-h-[48px] items-center gap-2 font-helvetica text-sm text-white transition-colors hover:text-accent"
          >
            Book a Discovery Call
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.15}>
          <PortfolioGallery />
        </FadeIn>
      </Container>
    </section>
  )
}
