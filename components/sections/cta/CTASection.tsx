import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"

export const CTASection = () => {
  return (
    <section id="contact" className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="grid gap-12 border border-border bg-card p-8 md:grid-cols-12 md:items-center md:gap-8 md:p-12 lg:p-16">
            <div className="md:col-span-7">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
                Ready to build?
              </p>
              <h2 className="font-display mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                Apply to work{" "}
                <span className="font-serif-accent text-accent">with us.</span>
              </h2>
              <p className="font-montserrat mt-6 max-w-lg text-base leading-relaxed text-body">
                Every engagement starts with a discovery call. Tell us where you
                are, where you want to go — we&apos;ll map the first steps
                together.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:col-span-5 md:items-end">
              <Button
                href={bookCallUrl}
                variant="cta"
                showArrow
                className="w-full md:w-auto"
                ariaLabel="Book a discovery call"
              >
                Book a Call
              </Button>
              <Button
                href="#services"
                variant="outline"
                showArrow
                className="w-full md:w-auto"
                ariaLabel="Explore our services"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
