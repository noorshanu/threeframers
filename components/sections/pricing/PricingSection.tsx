import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"
import { pricingNote, pricingTiers } from "@/lib/data/pricing"

export const PricingSection = () => {
  return (
    <section
      id="solutions"
      className="section-padding border-t border-border bg-surface"
    >
      <Container>
        <FadeIn>
          <h2 className="font-display text-center text-[1.75rem] font-bold text-white sm:text-4xl md:text-5xl">
            Three ways to work with us
          </h2>
          <p className="font-montserrat mx-auto mt-4 max-w-2xl text-center text-sm text-body sm:text-base">
            {pricingNote}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.08}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  tier.highlighted
                    ? "border-accent bg-card shadow-[0_0_60px_rgba(201,168,75,0.08)]"
                    : "border-border bg-card"
                }`}
              >
                <div>
                  <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-accent">
                    {tier.name}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold text-white sm:text-2xl">
                    {tier.tagline}
                  </h3>
                  <p className="font-montserrat mt-4 text-sm leading-relaxed text-body">
                    {tier.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-montserrat text-sm text-body"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={bookCallUrl}
                  variant={tier.highlighted ? "cta" : "outline"}
                  className="mt-8 w-full"
                  ariaLabel={`${tier.cta} for ${tier.name}`}
                >
                  {tier.cta}
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
