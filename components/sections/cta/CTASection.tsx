import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export const CTASection = () => {
  return (
    <section id="contact" className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border-lit bg-card px-8 py-16 text-center md:px-16 md:py-20">
          {/* Glow accent */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at top center, rgba(125, 157, 196, 0.25) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <p className="font-montserrat text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Ready to move?
            </p>

            <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold uppercase tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              Let&apos;s build your content engine.
            </h2>

            <p className="font-montserrat mx-auto mt-5 max-w-md text-base text-body">
              Tell us where you are, where you want to go, and we&apos;ll map
              the first steps together.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="mailto:hello@threeframers.com"
                variant="primary"
                showArrow
                ariaLabel="Start a project via email"
              >
                Start a project
              </Button>
              <Button
                href="#services"
                variant="ghost"
                showArrow
                ariaLabel="Explore our services"
              >
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
