"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

import type { ViralReelItem } from "@/lib/data/viralreel"

type PhoneVideoCardProps = {
  reel: ViralReelItem
  index: number
}

export const PhoneVideoCard = ({ reel, index }: PhoneVideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const frame = frameRef.current
    if (!video || !frame) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {})
          return
        }
        video.pause()
      },
      { threshold: 0.45 },
    )

    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.article
      className="group relative mx-auto w-full max-w-[260px] sm:max-w-[280px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-[3rem] bg-accent/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:bg-accent/15 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        ref={frameRef}
        className="relative rounded-[2.75rem] border border-border-lit bg-[#0b0b0d] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] transition-all duration-500 group-hover:border-accent/35 group-hover:ring-accent/20"
      >
        <div
          className="absolute left-1/2 top-[18px] z-20 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
          aria-hidden="true"
        />

        <div className="absolute right-5 top-5 z-20 flex items-center gap-1.5 opacity-70">
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        </div>

        <div className="relative aspect-[9/16] overflow-hidden rounded-[2.15rem] bg-black">
          <video
            ref={videoRef}
            src={reel.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-label={reel.label}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        <div
          className="mx-auto mt-3 h-[4px] w-[34%] rounded-full bg-white/25"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 text-center font-montserrat text-[10px] uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-accent">
        {reel.label}
      </p>
    </motion.article>
  )
}
