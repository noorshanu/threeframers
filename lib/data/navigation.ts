import { bookCallUrl } from "@/lib/data/site"

export type NavLink = {
  label: string
  href: string
  sectionId: string
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Work", href: "#portfolio", sectionId: "portfolio" },
  { label: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
]

export const contactHref = "#contact"
export { bookCallUrl }
