"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { HeroBackground } from "@/components/sections/hero/HeroBackground"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen flex-col">
      <HeroBackground />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-28 text-center md:py-32">
        <motion.h1
          className="font-display max-w-5xl text-[2.75rem] font-bold leading-[0.92] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">The production</span>
          <span className="block text-white">system behind</span>
          <span className="block">
            content that{" "}
            <span className="font-serif-accent text-accent">
              earns attention.
            </span>
          </span>
        </motion.h1>

        <FadeIn delay={0.2}>
          <p className="font-montserrat mx-auto mt-8 max-w-lg text-base leading-relaxed text-body md:text-lg">
            Content infrastructure for brands and creators who need
            consistency at a standard their audience expects.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.3}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Button href={bookCallUrl} variant="cta" ariaLabel="Book a call">
            Book a Call
          </Button>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 font-helvetica text-sm text-white transition-colors hover:text-accent"
          >
            View our work
            <span
              className="inline-block transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}
