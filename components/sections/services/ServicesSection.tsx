import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { ScrollStack, ScrollStackItem } from "@/components/ui/ScrollStack"
import { ServiceStackCard } from "@/components/sections/services/ServiceStackCard"
import { services, servicesCloser } from "@/lib/data/services"

export const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <Container className="pb-6 pt-24 md:pt-32">
        <FadeIn>
          <SplitHeading
            index="02"
            label="Services"
            size="lg"
            white="Five disciplines."
            accent="One pipeline."
            description="Scroll — each layer stacks on the last. Production, automation, and distribution under one accountable system."
          />
        </FadeIn>
      </Container>

      <ScrollStack
        useWindowScroll
        itemDistance={200}
        itemStackDistance={30}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.85}
        itemScale={0.03}
        rotationAmount={0}
        blurAmount={0}
        className="mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        {services.map((service) => (
          <ScrollStackItem key={service.number}>
            <ServiceStackCard service={service} />
          </ScrollStackItem>
        ))}
      </ScrollStack>

      <Container className="pb-8 pt-6">
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center font-montserrat text-sm leading-relaxed text-muted md:text-base">
            {servicesCloser}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
