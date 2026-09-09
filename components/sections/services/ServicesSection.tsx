import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { ServicesStack } from "@/components/sections/services/ServicesStack"
import { servicesCloser } from "@/lib/data/services"

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding border-t border-border bg-surface">
      <Container className="pb-2 pt-0 md:pb-6">
        <FadeIn>
          <SplitHeading
            index="02"
            label="Services"
            size="lg"
            white="Five disciplines."
            accent="One pipeline."
            description="Production, automation, and distribution under one accountable system."
          />
        </FadeIn>
      </Container>

      <ServicesStack />

      <Container className="pb-4 pt-6 md:pb-8">
        <FadeIn>
          <p className="mx-auto max-w-2xl px-4 text-center font-montserrat text-sm leading-relaxed text-muted sm:px-0 md:text-base">
            {servicesCloser}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
