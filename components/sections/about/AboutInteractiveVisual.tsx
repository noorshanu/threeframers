"use client"

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export const AboutInteractiveVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const handleChange = () => {
      setIsTouchDevice(mediaQuery.matches)
    }
    handleChange()
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const rotateX = useSpring(0, { stiffness: 120, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 })
  const glowX = useSpring(50, { stiffness: 80, damping: 20 })
  const glowY = useSpring(50, { stiffness: 80, damping: 20 })
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(74, 122, 181, 0.22) 0%, transparent 55%)`

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || isTouchDevice || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    rotateX.set(-y * 10)
    rotateY.set(x * 10)
    glowX.set(((event.clientX - rect.left) / rect.width) * 100)
    glowY.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-md lg:mx-0 lg:max-w-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: isTouchDevice ? undefined : 1200 }}
    >
      {!isTouchDevice && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-60"
          style={{ background: glowBackground }}
          aria-hidden="true"
        />
      )}

      <motion.div
        className="relative z-10 will-change-transform"
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/30 p-3 backdrop-blur-sm transition-colors hover:border-accent/25">
          <Image
            src="/images/aboutus.png"
            alt="Content production workflow visualization"
            width={640}
            height={520}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <div
        className="pointer-events-none absolute -bottom-6 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
