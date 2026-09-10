import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { spotlightTestimonials } from "@/lib/data/testimonials"

export const SpotlightTestimonials = () => {
  return (
    <section className="border-t border-border bg-surface py-12 md:py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {spotlightTestimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <blockquote className="mmh-card h-full p-6 sm:p-8">
                <p className="font-montserrat text-sm leading-relaxed text-body sm:text-base">
                  {item.quote}
                </p>
                <footer className="mt-5 border-t border-border pt-4">
                  <cite className="not-italic">
                    <p className="font-display text-sm font-semibold text-white">
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
