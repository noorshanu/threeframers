"use client"

import { useEffect, useState } from "react"

import { ServiceStackCard } from "@/components/sections/services/ServiceStackCard"
import { ScrollStack, ScrollStackItem } from "@/components/ui/ScrollStack"
import { services } from "@/lib/data/services"

export const ServicesStack = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const handleChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (isMobile) {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 sm:px-6 md:px-10">
        {services.map((service) => (
          <ServiceStackCard key={service.number} service={service} />
        ))}
      </div>
    )
  }

  return (
    <ScrollStack
      useWindowScroll
      itemDistance={200}
      itemStackDistance={30}
      stackPosition="20%"
      scaleEndPosition="10%"
      baseScale={0.85}
      itemScale={0.03}
      rotationAmount={0}
      blurAmount={0}
      className="mx-auto w-full max-w-6xl px-6 md:px-10"
    >
      {services.map((service) => (
        <ScrollStackItem key={service.number}>
          <ServiceStackCard service={service} />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  )
}
