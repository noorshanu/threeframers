"use client"

import { useEffect, useRef, useState } from "react"

import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { testimonials } from "@/lib/data/testimonials"

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const intervalId = window.setInterval(() => {
      const container = scrollRef.current
      if (!container) return

      const card = container.firstElementChild as HTMLElement | null
      const step = (card?.offsetWidth ?? 360) + 24
      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" })
        return
      }

      container.scrollBy({ left: step, behavior: "smooth" })
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  return (
    <section
      id="testimonials"
      className="section-padding overflow-hidden border-t border-border bg-background"
    >
      <Container>
        <FadeIn>
          <SplitHeading
            index="04"
            label="Testimonials"
            size="lg"
            white="Trusted by creators"
            accent="& brands."
            description="Hear from partners who run their content on our production systems."
          />
        </FadeIn>

        <p className="mt-10 font-montserrat text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
          Swipe to read →
        </p>

        <div
          ref={scrollRef}
          className="scroll-touch scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-14 md:gap-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex w-[min(88vw,320px)] shrink-0 snap-start flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-accent/35 sm:w-[340px] md:w-[400px] md:p-8"
            >
              <span
                className="font-serif-accent text-4xl leading-none text-accent md:text-5xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-montserrat mt-3 text-sm leading-relaxed text-body md:mt-4 md:text-base">
                {item.quote}
              </p>
              <footer className="mt-8 border-t border-border pt-5 md:mt-10 md:pt-6">
                <cite className="not-italic">
                  <p className="font-display text-base font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="font-montserrat mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                    {item.role}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
