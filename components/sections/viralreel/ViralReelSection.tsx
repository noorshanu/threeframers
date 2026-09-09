import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { PhoneVideoCard } from "@/components/sections/viralreel/PhoneVideoCard"
import { viralReels } from "@/lib/data/viralreel"

export const ViralReelSection = () => {
  return (
    <section
      id="viral-reels"
      className="section-padding relative overflow-hidden border-t border-border bg-background"
    >
      <Container>
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-muted sm:tracking-[0.3em]">
              Short Form
            </p>
          </div>

          <h2 className="font-display mt-4 max-w-2xl text-[1.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Your footage, refined into edits{" "}
            <span className="font-serif-accent text-accent">
              built to perform.
            </span>
          </h2>

          <p className="font-montserrat mt-4 max-w-2xl text-sm leading-relaxed text-body sm:mt-6 sm:text-base md:text-lg">
            Podcast clips, talking heads, split edits and scroll-stopping cuts —
            formatted natively for every feed.
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
