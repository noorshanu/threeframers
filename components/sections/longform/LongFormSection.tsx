import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { LongFormRail } from "@/components/sections/longform/LongFormRail"
import { longFormReels } from "@/lib/data/longform"

export const LongFormSection = () => {
  return (
    <section
      id="longform"
      className="section-padding relative overflow-hidden border-t border-border bg-surface"
    >
      <Container>
        <FadeIn className="mb-10 md:mb-14">
          <h2 className="font-display max-w-2xl text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Long form that{" "}
            <span className="font-serif-accent text-accent">sets the standard</span>
          </h2>
          <p className="font-montserrat mt-4 text-sm text-body sm:text-base md:text-lg">
            Podcast trailers. YouTube Edits. B2B videos. Brand Films.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <LongFormRail reels={longFormReels} />
        </FadeIn>
      </Container>
    </section>
  )
}
