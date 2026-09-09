"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

import { bookCallUrl } from "@/lib/data/navigation"
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/data/portfolio"

export const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all")
  const [featuredId, setFeaturedId] = useState(portfolioProjects[0]?.id ?? "")
  const [direction, setDirection] = useState(1)

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.categories.includes(activeFilter),
        )

  const featuredIndex = filteredProjects.findIndex(
    (project) => project.id === featuredId,
  )
  const featuredProject =
    filteredProjects[featuredIndex >= 0 ? featuredIndex : 0] ??
    filteredProjects[0]

  const handleFilterChange = (filter: PortfolioCategory) => {
    setActiveFilter(filter)
    const nextProjects =
      filter === "all"
        ? portfolioProjects
        : portfolioProjects.filter((project) =>
            project.categories.includes(filter),
          )
    setFeaturedId(nextProjects[0]?.id ?? "")
  }

  const handleFilterKeyDown = (
    event: React.KeyboardEvent,
    filter: PortfolioCategory,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleFilterChange(filter)
    }
  }

  const handleNavigate = useCallback(
    (step: number) => {
      if (filteredProjects.length === 0) return

      const currentIndex = filteredProjects.findIndex(
        (project) => project.id === featuredProject?.id,
      )
      const nextIndex =
        (currentIndex + step + filteredProjects.length) %
        filteredProjects.length

      setDirection(step)
      setFeaturedId(filteredProjects[nextIndex]?.id ?? "")
    },
    [filteredProjects, featuredProject?.id],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNavigate(1)
      if (event.key === "ArrowLeft") handleNavigate(-1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleNavigate])

  if (!featuredProject) return null

  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="scrollbar-hide flex gap-6 overflow-x-auto">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter.id
            const count =
              filter.id === "all"
                ? portfolioProjects.length
                : portfolioProjects.filter((project) =>
                    project.categories.includes(
                      filter.id as Exclude<PortfolioCategory, "all">,
                    ),
                  ).length

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleFilterChange(filter.id)}
                onKeyDown={(event) => handleFilterKeyDown(event, filter.id)}
                aria-pressed={isActive}
                className={`group shrink-0 border-b-2 pb-3 text-left transition-colors ${
                  isActive
                    ? "border-accent text-white"
                    : "border-transparent text-muted hover:text-white"
                }`}
              >
                <span className="font-helvetica text-sm">{filter.label}</span>
                <span className="font-mono ml-2 text-[10px] text-body group-hover:text-accent">
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            )
          })}
        </div>

        <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
          {String(featuredIndex + 1).padStart(2, "0")} /{" "}
          {String(filteredProjects.length).padStart(2, "0")}
        </p>
      </div>

      <PortfolioSpotlight
        project={featuredProject}
        index={featuredIndex}
        total={filteredProjects.length}
        direction={direction}
        onPrev={() => handleNavigate(-1)}
        onNext={() => handleNavigate(1)}
      />
    </div>
  )
}

type PortfolioSpotlightProps = {
  project: PortfolioProject
  index: number
  total: number
  direction: number
  onPrev: () => void
  onNext: () => void
}

const PortfolioSpotlight = ({
  project,
  index,
  total,
  direction,
  onPrev,
  onNext,
}: PortfolioSpotlightProps) => {
  const slideX = direction >= 0 ? 40 : -40
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [project.id])

  return (
    <article className="relative mt-8 overflow-hidden border border-border bg-card md:mt-10">
      <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[21/9]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            initial={{ opacity: 0, x: slideX, scale: 1.04 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -slideX, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-8">
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/70">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-accent">
            {project.year}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-5 md:flex-row md:items-end md:justify-between md:p-8 lg:p-10">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <h3 className="font-display text-3xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
                <p className="font-montserrat mt-4 text-sm text-body md:text-base">
                  {project.tags}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tagList.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border-lit bg-background/40 px-3 py-1 font-montserrat text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 md:shrink-0">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-white transition-colors hover:bg-accent-hover"
            >
              →
            </button>
            <Link
              href={bookCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Discuss ${project.title}`}
              className="hidden h-11 items-center justify-center rounded-full border border-white/20 px-5 font-helvetica text-sm text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              Discuss project ↗
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-4 md:px-8">
        <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-muted">
          {total} projects in view
        </p>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`h-1 transition-all duration-300 ${
                dotIndex === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-border-lit"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </article>
  )
}
