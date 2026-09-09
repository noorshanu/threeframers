"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/Button"
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer"
import { bookCallUrl, navLinks } from "@/lib/data/navigation"
import { brandName } from "@/lib/data/site"

const sectionIds = ["home", "about", "services", "portfolio", "testimonials", "faq", "contact"]

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleToggleMenu()
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8 lg:gap-8">
          {/* Brand */}
          <Link
            href="#home"
            className="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            aria-label={`${brandName} home`}
          >
            <Image
              src="/images/logo.jpg"
              alt={`${brandName} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span
              className="hidden h-8 w-px bg-border-lit sm:block"
              aria-hidden="true"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-text-primary">
                THR33
              </span>
              <span className="font-display text-sm font-semibold text-text-primary">
                Frames
              </span>
            </span>
          </Link>

          {/* Center pill nav — desktop */}
          <nav
            className="hidden items-center rounded-full border border-border-lit bg-card/60 p-1.5 backdrop-blur-sm lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 font-montserrat text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-accent font-medium text-background"
                      : "text-body hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <Button
              href={bookCallUrl}
              variant="cta"
              className="hidden lg:inline-flex"
              ariaLabel="Book a call"
            >
              Book a Call
            </Button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-lit bg-card/60 text-text-primary backdrop-blur-sm transition-colors hover:border-glow lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={handleOpenMenu}
              onKeyDown={handleMenuKeyDown}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-px w-5 bg-text-primary" />
                <span className="block h-px w-5 bg-text-primary" />
                <span className="block h-px w-3 bg-text-primary" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onClose={handleCloseMenu}
      />
    </>
  )
}
