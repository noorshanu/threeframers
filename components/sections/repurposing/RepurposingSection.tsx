import Image from "next/image"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"

export const RepurposingSection = () => {
  return (
    <section
      id="process"
      className="section-padding border-t border-border bg-background"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="font-display text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              High Level Repurposing
            </h2>
            <p className="font-montserrat mt-5 text-base leading-relaxed text-body md:text-lg">
              We build bulletproof content flywheels for personal brands to grow
              on multiple platforms with high volume of content
            </p>
            <div className="mt-8">
              <Button
                href={bookCallUrl}
                variant="cta"
                showArrow
                ariaLabel="Book a discovery call"
              >
                Book a Discovery Call
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mmh-frame relative aspect-[4/3]">
              <Image
                src="/images/smmarketing.jpg"
                alt="Content flywheel visualization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Content{" "}
                  <span className="font-serif-accent text-accent">Flywheel</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
