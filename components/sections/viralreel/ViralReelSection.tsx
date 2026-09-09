import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { PhoneVideoCard } from "@/components/sections/viralreel/PhoneVideoCard"
import { viralReels } from "@/lib/data/viralreel"

export const ViralReelSection = () => {
  return (
    <section
      id="viral-reels"
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
                Short Form
              </p>
            </div>

            <h2 className="font-display mt-5 text-3xl font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Your footage, refined into edits{" "}
              <span className="font-serif-accent text-accent">
                built to perform.
              </span>
            </h2>

            <p className="font-montserrat mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
              The production standard behind creators who cannot afford a weak
              hook — podcast clips, talking heads, split edits and scroll-stopping
              cuts, formatted natively for every feed.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-14 md:mt-16">
          <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-8">
            {viralReels.map((reel, index) => (
              <div
                key={reel.id}
                className="w-[72vw] shrink-0 snap-center sm:w-[280px] md:w-auto md:shrink"
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
