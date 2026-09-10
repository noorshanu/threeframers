"use client"

import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { featuredTestimonials } from "@/lib/data/testimonials"

export const TrustedLeadersSection = () => {
  return (
    <section className="section-padding border-t border-border bg-surface">
      <Container>
        <FadeIn>
          <h2 className="font-display text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Trusted by Industry Leaders
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {featuredTestimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <blockquote className="mmh-card flex h-full flex-col p-6 sm:p-8">
                <p className="font-montserrat flex-1 text-sm leading-relaxed text-body sm:text-base">
                  {item.quote}
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <cite className="not-italic">
                    <p className="font-display text-base font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="font-montserrat mt-1 text-xs text-muted">
                      {item.role}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
