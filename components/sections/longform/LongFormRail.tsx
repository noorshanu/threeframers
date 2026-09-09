"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

import type { LongFormReel } from "@/lib/data/longform"

type LongFormRailProps = {
  reels: LongFormReel[]
}

const heightOffsets = [0, 24, 48, 24, 0]

export const LongFormRail = ({ reels }: LongFormRailProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const updateFocus = useCallback(() => {
    const container = scrollRef.current
    if (!container) return

    const viewportCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cardRefs.current.forEach((card, index) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(viewportCenter - cardCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)

    const maxScroll = container.scrollWidth - container.clientWidth
    setScrollProgress(maxScroll > 0 ? container.scrollLeft / maxScroll : 0)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    updateFocus()
    container.addEventListener("scroll", updateFocus, { passive: true })
    window.addEventListener("resize", updateFocus)

    return () => {
      container.removeEventListener("scroll", updateFocus)
      window.removeEventListener("resize", updateFocus)
    }
  }, [updateFocus])

  useEffect(() => {
    const container = scrollRef.current
    const centerIndex = Math.floor(reels.length / 2)
    const centerCard = cardRefs.current[centerIndex]
    if (!container || !centerCard) return

    const target =
      centerCard.offsetLeft -
      (container.clientWidth - centerCard.offsetWidth) / 2

    container.scrollTo({ left: Math.max(0, target), behavior: "auto" })
    updateFocus()
  }, [reels.length, updateFocus])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === activeIndex && !prefersReducedMotion) {
        if (!video.getAttribute("src") && video.dataset.src) {
          video.src = video.dataset.src
          video.load()
        }
        video.play().catch(() => {})
        return
      }

      video.pause()
      video.currentTime = 0
    })
  }, [activeIndex, prefersReducedMotion])

  const handleScrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current
    const card = cardRefs.current[activeIndex]
    if (!container || !card) return

    const step = card.offsetWidth + 20
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    })
  }

  const activeReel = reels[activeIndex]

  return (
    <div className="relative">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-muted">
            Now projecting
          </p>
          <motion.p
            key={activeReel?.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-display mt-2 truncate text-xl font-bold text-white md:text-2xl"
          >
            {activeReel?.title}
          </motion.p>
        </div>

        <div className="hidden shrink-0 text-right sm:block">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
            {activeReel?.timecode}
          </p>
          <p className="font-montserrat mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
            {activeReel?.format}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-8 left-1/2 z-0 w-[min(100%,320px)] -translate-x-1/2 rounded-full bg-accent/10 blur-[80px]"
          aria-hidden="true"
        />

        <div
          ref={scrollRef}
          className="scrollbar-hide relative z-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-2 md:gap-6"
        >
          {reels.map((reel, index) => {
            const isActive = index === activeIndex
            const heightOffset = heightOffsets[index] ?? 0

            return (
              <div
                key={reel.id}
                ref={(node) => {
                  cardRefs.current[index] = node
                }}
                className="snap-center shrink-0 transition-transform duration-500 ease-out"
                style={{
                  marginTop: `${heightOffset}px`,
                  transform: isActive ? "scale(1)" : "scale(0.94)",
                }}
              >
                <article
                  className={`film-reel-frame w-[220px] transition-opacity duration-500 sm:w-[250px] md:w-[280px] lg:w-[300px] ${
                    isActive ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <div className="film-sprockets" aria-hidden="true" />

                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    {reel.video && !prefersReducedMotion ? (
                      <video
                        ref={(node) => {
                          videoRefs.current[index] = node
                        }}
                        data-src={reel.video}
                        poster={reel.poster}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={reel.poster}
                        alt={reel.title}
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20" />

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
                      <span className="font-mono text-[10px] tracking-widest text-white/70">
                        {reel.timecode}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive ? "bg-accent" : "bg-white/30"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-accent">
                        {reel.format}
                      </p>
                      <h3 className="font-display mt-2 text-lg font-bold leading-tight text-white">
                        {reel.title}
                      </h3>
                    </div>
                  </div>

                  <div className="film-sprockets film-sprockets-bottom" aria-hidden="true" />
                </article>

                <p className="mt-3 text-center font-mono text-[10px] tracking-[0.25em] text-muted">
                  FRAME {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => handleScrollBy("left")}
          aria-label="Previous reel"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-body transition-colors hover:border-accent hover:text-accent"
        >
          ←
        </button>

        <div className="relative h-px flex-1 bg-border">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-all duration-300"
            style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
          />
          <div className="absolute inset-0 flex justify-between px-1">
            {reels.map((reel) => (
              <span
                key={reel.id}
                className="mt-[-3px] h-1.5 w-px bg-border-lit"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleScrollBy("right")}
          aria-label="Next reel"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-background"
        >
          →
        </button>
      </div>
    </div>
  )
}
