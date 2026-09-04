import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { navLinks } from "@/lib/data/navigation"

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Three Framers home"
            >
              <Image
                src="/images/logo.jpg"
                alt="Three Framers logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-helvetica text-sm font-medium text-text-primary">
                Three Framers
              </span>
            </Link>
            <p className="font-montserrat mt-5 max-w-xs text-sm leading-relaxed text-body">
              Video editing, YouTube automation, and social growth — built
              around your audience.
            </p>
          </div>

          <div>
            <p className="font-helvetica text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-montserrat text-sm text-body transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-helvetica text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@threeframers.com"
                  className="font-montserrat text-sm text-body transition-colors hover:text-text-primary"
                >
                  hello@threeframers.com
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-montserrat text-sm text-brand-blue transition-colors hover:text-glow"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-montserrat text-xs text-muted">
            © {currentYear} Three Framers. All rights reserved.
          </p>
          <p className="font-montserrat text-xs tracking-widest text-muted">
            · End ·
          </p>
        </div>
      </Container>
    </footer>
  )
}
