import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { HeroBackground } from "@/components/sections/hero/HeroBackground"
import { HeroServicesBar } from "@/components/sections/hero/HeroServicesBar"

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen flex-col">
      <HeroBackground />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center pb-32 pt-32 text-center md:pt-40">
        <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          Three Framers / Creative Partner
        </p>

        <h1 className="font-display mt-8 max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Content, built to{" "}
          <span className="text-glow text-brand-blue">move.</span>
        </h1>

        <p className="font-montserrat mt-6 max-w-lg text-base leading-relaxed text-body md:text-lg">
          Video editing, YouTube automation and social growth — built around
          your audience.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Button href="#contact" variant="primary" showArrow ariaLabel="Start a project">
            Start a project
          </Button>
          <Button href="#services" variant="ghost" showArrow ariaLabel="View our work">
            View our work
          </Button>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3">
          <span className="block h-10 w-px bg-gradient-to-b from-border-lit to-transparent" />
          <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-muted">
            Scroll to explore
          </p>
        </div>
      </Container>

      <div className="relative z-10">
        <HeroServicesBar />
      </div>
    </section>
  )
}
