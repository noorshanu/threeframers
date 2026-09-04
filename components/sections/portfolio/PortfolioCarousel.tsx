"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { PortfolioCard } from "@/components/sections/portfolio/PortfolioCard"
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioCategory,
} from "@/lib/data/portfolio"

const AUTOPLAY_INTERVAL = 4000

export const PortfolioCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all")
  const [isPaused, setIsPaused] = useState(false)

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categories.includes(activeFilter))

  const scrollToNext = useCallback(() => {
    const container = scrollRef.current
    if (!container) return

    const card = container.firstElementChild as HTMLElement | null
    const cardWidth = card?.offsetWidth ?? 340
    const gap = 20
    const scrollStep = cardWidth + gap
    const maxScroll = container.scrollWidth - container.clientWidth

    if (container.scrollLeft >= maxScroll - 4) {
      container.scrollTo({ left: 0, behavior: "smooth" })
      return
    }

    container.scrollBy({ left: scrollStep, behavior: "smooth" })
  }, [])

  const handleScroll = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -360 : 360
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }, [])

  const handleFilterClick = (filter: PortfolioCategory) => {
    setActiveFilter(filter)
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" })
  }

  const handleFilterKeyDown = (
    event: React.KeyboardEvent,
    filter: PortfolioCategory,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleFilterClick(filter)
    }
  }

  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return

    const intervalId = window.setInterval(scrollToNext, AUTOPLAY_INTERVAL)
    return () => window.clearInterval(intervalId)
  }, [filteredProjects.length, isPaused, scrollToNext])

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Filters + arrows */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter.id

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleFilterClick(filter.id)}
                onKeyDown={(e) => handleFilterKeyDown(e, filter.id)}
                className={`shrink-0 rounded-full px-4 py-2 font-montserrat text-sm transition-all duration-200 ${
                  isActive
                    ? "border border-brand-blue bg-brand-blue/10 text-text-primary shadow-[0_0_20px_rgba(125,157,196,0.25)]"
                    : "border border-transparent text-body hover:border-border-lit hover:text-text-primary"
                }`}
                aria-pressed={isActive}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll portfolio left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll portfolio right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue text-brand-blue shadow-[0_0_20px_rgba(125,157,196,0.2)] transition-colors hover:bg-brand-blue/10"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="scrollbar-hide mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-6"
      >
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {/* Mobile scroll hint */}
      <p className="mt-3 text-center font-montserrat text-xs text-muted sm:hidden">
        Swipe to explore →
      </p>
    </div>
  )
}
