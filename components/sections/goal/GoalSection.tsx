import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { goalCopy } from "@/lib/data/site"

export const GoalSection = () => {
  return (
    <section className="section-padding border-t border-border bg-background">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-accent">
              {goalCopy.title}
            </p>
            <h2 className="font-display mt-4 text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {goalCopy.headline}
            </h2>
            <p className="font-montserrat mt-6 text-sm leading-relaxed text-body sm:text-base md:text-lg">
              {goalCopy.body}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
