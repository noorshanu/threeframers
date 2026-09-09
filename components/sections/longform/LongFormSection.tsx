import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { LongFormRail } from "@/components/sections/longform/LongFormRail"
import { longFormReels } from "@/lib/data/longform"

export const LongFormSection = () => {
  return (
    <section
      id="longform"
      className="section-padding relative overflow-hidden border-t border-border bg-surface"
    >
      <span
        className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(4rem,16vw,12rem)] font-bold leading-none tracking-tighter text-white/[0.015] md:block"
        aria-hidden="true"
      >
        REEL
      </span>

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SplitHeading
              label="Long Form"
              white="Stories that"
              accent="hold the frame."
              size="lg"
              description="Podcast edits. YouTube long-form. Brand films. B2B narratives. Tall-format work built to keep attention from hook to final frame."
            />

            <div className="editorial-rule mt-10" />

            <ul className="mt-8 space-y-4">
              {[
                "Podcast trailers & full edits",
                "YouTube long-form & documentaries",
                "Brand films & launch videos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-montserrat text-sm text-body"
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="font-mono mt-8 text-[11px] tracking-[0.2em] text-muted md:mt-10">
              <span className="md:hidden">SWIPE THE RAIL → FOCUS PLAYS</span>
              <span className="hidden md:inline">SCROLL THE RAIL → FOCUS PLAYS</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-8">
            <LongFormRail reels={longFormReels} />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
