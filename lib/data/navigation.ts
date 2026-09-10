import { bookCallUrl } from "@/lib/data/site"

export type NavLink = {
  label: string
  href: string
  sectionId: string
}

export const navLinks: NavLink[] = [
  { label: "Process", href: "#process", sectionId: "process" },
  { label: "Solutions", href: "#solutions", sectionId: "solutions" },
  { label: "Work", href: "#portfolio", sectionId: "portfolio" },
  { label: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
]

export const contactHref = "#contact"
export { bookCallUrl }
