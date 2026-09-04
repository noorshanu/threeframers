import Link from "next/link"
import type { ReactNode } from "react"

type ButtonVariant = "primary" | "ghost" | "outline"

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
    "bg-text-primary text-background hover:bg-glow transition-colors duration-200",
  ghost: "text-text-primary hover:text-glow transition-colors duration-200",
  outline:
    "border border-border-lit text-text-primary hover:border-glow hover:text-glow transition-colors duration-200",
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
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-helvetica text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"

  const sizeStyles =
    variant === "primary"
      ? "px-6 py-3"
      : variant === "outline"
        ? "px-5 py-2.5"
        : "px-2 py-2"

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : undefined)}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <span aria-hidden="true" className="text-base leading-none">
          →
        </span>
      )}
    </Link>
  )
}
