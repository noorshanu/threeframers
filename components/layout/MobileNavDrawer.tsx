"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { Button } from "@/components/ui/Button"
import { contactHref, navLinks } from "@/lib/data/navigation"

type MobileNavDrawerProps = {
  isOpen: boolean
  activeSection: string
  onClose: () => void
}

export const MobileNavDrawer = ({
  isOpen,
  activeSection,
  onClose,
}: MobileNavDrawerProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = () => {
    onClose()
  }

  const handleBackdropKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onClose()
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={handleBackdropClick}
        onKeyDown={handleBackdropKeyDown}
        role="presentation"
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(320px,85vw)] flex-col border-l border-border bg-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <Link
            href="#home"
            onClick={onClose}
            className="flex items-center gap-3"
            aria-label="Three Framers home"
          >
            <Image
              src="/images/logo.jpg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-helvetica text-sm font-medium text-text-primary">
              Three Framers
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-border-lit hover:text-glow"
            aria-label="Close menu"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block rounded-full px-5 py-3 font-montserrat text-sm transition-colors ${
                      isActive
                        ? "bg-text-primary font-medium text-background"
                        : "text-body hover:bg-card hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-6">
          <Button
            href={contactHref}
            variant="primary"
            className="w-full"
            ariaLabel="Contact us"
            onClick={onClose}
          >
            Contact Us
          </Button>
        </div>
      </aside>
    </>
  )
}
