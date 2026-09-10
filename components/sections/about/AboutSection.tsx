import { AboutInteractiveVisual } from "@/components/sections/about/AboutInteractiveVisual"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding border-t border-border bg-background"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="font-display text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Content Production,{" "}
              <span className="font-serif-accent text-accent">Systematized</span>
            </h2>
            <p className="font-montserrat mt-5 text-base leading-relaxed text-body md:text-lg">
              We build the production system that lets you publish consistently
              at the quality level your brand demands. We own editing trends in
              the industry.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AboutInteractiveVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
