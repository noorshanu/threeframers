import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { bookCallUrl, navLinks } from "@/lib/data/navigation"
import { brandName } from "@/lib/data/site"

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="safe-bottom border-t border-border bg-surface pb-20 lg:pb-0">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label={`${brandName} home`}
            >
              <Image
                src="/images/logo.jpg"
                alt={`${brandName} logo`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-helvetica text-sm font-medium text-text-primary">
                {brandName}
              </span>
            </Link>
            <p className="font-montserrat mt-5 max-w-xs text-sm leading-relaxed text-body">
              The content and distribution system for the leaders in tech and
              media.
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
                  href={bookCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Book a Call →
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-montserrat text-sm text-body transition-colors hover:text-text-primary"
                >
                  Apply to work with us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-montserrat text-xs text-muted">
            © {currentYear} {brandName}. All rights reserved.
          </p>
          <p className="font-montserrat text-xs tracking-widest text-muted">
            · End ·
          </p>
        </div>
      </Container>
    </footer>
  )
}
