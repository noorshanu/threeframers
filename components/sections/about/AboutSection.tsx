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
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="order-2 lg:order-1">
            <AboutInteractiveVisual />
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="relative order-1 lg:order-2"
          >
            <div
              className="group relative"
              onMouseMove={handleContentMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-8 z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: contentGlow }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent" aria-hidden="true" />
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
                    What We Do
                  </p>
                </div>

                <div className="mt-5 overflow-hidden">
                  <h2 className="font-display text-2xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-3xl md:text-[2rem]">
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

                <p className="font-montserrat mt-4 text-[10px] uppercase tracking-[0.28em] text-muted">
                  Consistent content · compounded growth
                </p>

                <p className="font-montserrat mt-8 text-[10px] uppercase tracking-[0.28em] text-muted">
                  A system for creators, brands, and teams
                </p>

                <p className="font-display mt-4 text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
                  We build the production system that lets you publish
                  consistently at the quality level your brand demands.
                </p>

                <p className="font-montserrat mt-6 max-w-lg text-sm leading-relaxed text-body md:text-base">
                  From world-class edits to automated distribution — we own the
                  full loop so your content doesn&apos;t just look good, it
                  compounds. Most partners start with one service and expand as
                  the system proves itself.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-16 md:mt-20">
          <div className="border-y border-border/80">
            <div className="grid divide-y divide-border/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => {
                const StatIcon = stat.icon

                return (
                  <motion.div
                    key={stat.label}
                    className="group flex cursor-default items-center gap-4 px-0 py-6 sm:px-8 sm:py-8"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-lit transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/5">
                      <StatIcon
                        className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="font-display text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="font-montserrat mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
