"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/Button"
import { bookCallUrl } from "@/lib/data/navigation"

export const MobileStickyCta = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const contactSection = document.getElementById("contact")
    if (!contactSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry?.isIntersecting ?? false)
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    )

    observer.observe(contactSection)
    return () => observer.disconnect()
  }, [])

  if (!isVisible || isContactVisible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border/80 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button
        href={bookCallUrl}
        variant="cta"
        className="w-full min-h-[48px] text-base"
        ariaLabel="Book a call"
      >
        Book a Call
      </Button>
    </div>
  )
}
