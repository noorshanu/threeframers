"use client"

import { WebThreads } from "@/components/backgrounds/WebThreads"

export const HeroBackground = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="pointer-events-auto absolute inset-0">
        <WebThreads
          color1="#0A1628"
          color2="#4A7AB5"
          color3="#6B93C4"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.6}
          opacity={1}
          mirror
          shimmer={false}
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
        />
      </div>

      {/* Base tint */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Vignette for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(6, 7, 10, 0.65) 100%)",
        }}
      />
    </div>
  )
}
