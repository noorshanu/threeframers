import { Container } from "@/components/ui/Container"
import { ScrollStack, ScrollStackItem } from "@/components/ui/ScrollStack"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ServiceStackCard } from "@/components/sections/services/ServiceStackCard"
import { services } from "@/lib/data/services"

export const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <Container className="pb-6 pt-24 md:pt-32">
        <SectionHeading
          label="Services"
          title="Six disciplines. One pipeline."
          description="Scroll — cards stack on top of each other, then release into the next section."
        />
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
    </section>
  )
}
