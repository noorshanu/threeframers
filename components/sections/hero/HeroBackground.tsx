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
          color1="#0a0a0a"
          color2="#8a7340"
          color3="#c9a84b"
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
          brightness={0.55}
          opacity={1}
          mirror
          shimmer={false}
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
        />
      </div>

      <div className="absolute inset-0 bg-background/50" />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(5, 5, 5, 0.7) 100%)",
        }}
      />
    </div>
  )
}
