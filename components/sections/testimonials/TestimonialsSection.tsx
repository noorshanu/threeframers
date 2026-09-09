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
      className="overflow-hidden border-t border-border bg-background py-24 md:py-32"
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

        <div
          ref={scrollRef}
          className="scrollbar-hide mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex w-[min(100%,340px)] shrink-0 snap-start flex-col justify-between border border-border bg-card p-8 transition-colors hover:border-accent/35 md:w-[400px]"
            >
              <span
                className="font-serif-accent text-5xl leading-none text-accent"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-montserrat mt-4 text-base leading-relaxed text-body">
                {item.quote}
              </p>
              <footer className="mt-10 border-t border-border pt-6">
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
