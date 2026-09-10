import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { PhoneVideoCard } from "@/components/sections/viralreel/PhoneVideoCard"
import { viralReels } from "@/lib/data/viralreel"

export const ViralReelSection = () => {
  return (
    <section
      id="short-form"
      className="section-padding relative overflow-hidden border-t border-border bg-background"
    >
      <Container>
        <FadeIn>
          <h2 className="font-display max-w-3xl text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Your footage into world class edits that{" "}
            <span className="font-serif-accent text-accent">go viral</span>
          </h2>
          <p className="font-montserrat mt-4 max-w-2xl text-sm leading-relaxed text-body sm:mt-6 sm:text-base md:text-lg">
            The unparalleled production standard behind the biggest names in
            media. Podcasts. Shows. Long form. We got it all.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10 md:mt-14">
          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
            Swipe to explore →
          </p>
          <div className="scroll-touch scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-0 sm:gap-6 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 lg:gap-8">
            {viralReels.map((reel, index) => (
              <div
                key={reel.id}
                className="w-[78vw] max-w-[260px] shrink-0 snap-center sm:w-[260px] md:w-auto md:max-w-none md:shrink"
              >
                <PhoneVideoCard reel={reel} index={index} />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
