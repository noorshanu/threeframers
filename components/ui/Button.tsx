import Link from "next/link"
import type { ReactNode } from "react"

type ButtonVariant = "primary" | "ghost" | "outline" | "cta"

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  ariaLabel?: string
  showArrow?: boolean
  onClick?: () => void
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-background hover:bg-accent hover:text-background transition-colors duration-200",
  cta:
    "bg-accent text-background hover:bg-accent-hover transition-colors duration-200",
  ghost: "text-white hover:text-accent transition-colors duration-200",
  outline:
    "border border-border-lit text-white hover:border-accent hover:text-accent transition-colors duration-200",
}

export const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  showArrow = false,
  onClick,
}: ButtonProps) => {
  const isExternal = href.startsWith("http")

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-helvetica text-sm font-medium tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

  const sizeStyles =
    variant === "primary" || variant === "cta"
      ? "px-7 py-3.5"
      : variant === "outline"
        ? "px-5 py-2.5"
        : "px-2 py-2"

  return (
    <Link
      href={href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : undefined)}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <span aria-hidden="true" className="text-base leading-none">
            →
          </span>
        )}
      </span>
    </Link>
  )
}
