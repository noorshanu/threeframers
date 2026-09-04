export type NavLink = {
  label: string
  href: string
  sectionId: string
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Work", href: "#portfolio", sectionId: "portfolio" },
  { label: "About Us", href: "#about", sectionId: "about" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
]

export const contactHref = "#contact"
