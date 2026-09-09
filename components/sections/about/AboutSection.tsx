"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion"

import { AboutInteractiveVisual } from "@/components/sections/about/AboutInteractiveVisual"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { stats } from "@/lib/data/site"

export const AboutSection = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 150, damping: 25 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 25 })
  const contentGlow = useMotionTemplate`radial-gradient(280px circle at ${springX}px ${springY}px, rgba(74, 122, 181, 0.12), transparent 70%)`

  const handleContentMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    cursorX.set(event.clientX - rect.left)
    cursorY.set(event.clientY - rect.top)
  }

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden border-t border-border bg-background"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="order-2 lg:order-1">
            <AboutInteractiveVisual />
          </FadeIn>

          <FadeIn delay={0.1} className="relative order-1 lg:order-2">
            <div
              className="group relative max-md:pointer-events-none"
              onMouseMove={handleContentMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-8 z-0 hidden rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block"
                style={{ background: contentGlow }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent" aria-hidden="true" />
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-muted sm:tracking-[0.3em]">
                    What We Do
                  </p>
                </div>

                <div className="mt-4 sm:mt-5">
                  <h2 className="font-display text-[1.65rem] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-3xl md:text-[2rem]">
                    <span className="block">Content production,</span>
                    <span className="block font-serif-accent text-accent">
                      systematized.
                    </span>
                  </h2>
                  <div
                    className="mt-3 h-px w-full bg-gradient-to-r from-accent/50 via-border-lit to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-montserrat mt-4 text-[10px] uppercase tracking-[0.22em] text-muted sm:tracking-[0.28em]">
                  Consistent content · compounded growth
                </p>

                <p className="font-display mt-5 text-lg font-medium leading-snug tracking-tight text-white sm:mt-6 sm:text-xl md:text-2xl">
                  We build the production system that lets you publish
                  consistently at the quality level your brand demands.
                </p>

                <p className="font-montserrat mt-4 text-sm leading-relaxed text-body sm:mt-6 md:text-base">
                  From world-class edits to automated distribution — we own the
                  full loop so your content doesn&apos;t just look good, it
                  compounds.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-12 md:mt-16">
          <div className="border-y border-border/80">
            <div className="grid divide-y divide-border/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => {
                const StatIcon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="flex items-center justify-center gap-4 px-2 py-5 sm:justify-start sm:px-6 sm:py-8 md:px-8"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-lit">
                      <StatIcon
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="font-montserrat mt-1 text-[9px] uppercase tracking-[0.15em] text-muted sm:text-[10px] sm:tracking-[0.2em]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
