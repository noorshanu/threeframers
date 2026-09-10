"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { HeroBackground } from "@/components/sections/hero/HeroBackground"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"
import { stats } from "@/lib/data/site"

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col">
      <HeroBackground />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-28 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-24 md:py-32">
        <motion.h1
          className="font-display max-w-5xl text-[1.85rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          The content and distribution system for the leaders in tech and media
        </motion.h1>

        <FadeIn delay={0.2}>
          <p className="font-montserrat mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-body sm:mt-8 sm:text-base md:text-lg">
            Content infrastructure for the companies that define their space. We
            build and run the machine that earns attention, from production to
            distribution, across every platform you need to win.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8 sm:mt-10">
          <Button
            href={bookCallUrl}
            variant="cta"
            className="w-full sm:w-auto"
            ariaLabel="Apply to work with us"
          >
            Apply to Work With Us
          </Button>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-14 w-full sm:mt-16">
          <div className="mx-auto grid max-w-3xl gap-6 border-t border-border pt-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => {
              const StatIcon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <StatIcon
                    className="mx-auto mb-3 h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="font-montserrat mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
