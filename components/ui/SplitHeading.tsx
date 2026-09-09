type SplitHeadingProps = {
  label?: string
  index?: string
  white: string
  accent: string
  description?: string
  align?: "left" | "center"
  className?: string
  size?: "md" | "lg" | "hero"
}

const sizeStyles = {
  md: "text-3xl md:text-4xl lg:text-[3.25rem]",
  lg: "text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]",
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]",
}

export const SplitHeading = ({
  label,
  index,
  white,
  accent,
  description,
  align = "left",
  className = "",
  size = "md",
}: SplitHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`relative ${alignClass} ${className}`.trim()}>
      {index && (
        <span
          className="pointer-events-none absolute -top-6 right-0 select-none font-display text-7xl font-bold leading-none text-stroke-muted md:-top-10 md:text-8xl lg:text-9xl"
          aria-hidden="true"
        >
          {index}
        </span>
      )}

      {label && (
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <p className="font-montserrat text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
            {label}
          </p>
        </div>
      )}

      <h2
        className={`font-display mt-5 font-bold leading-[0.95] tracking-[-0.03em] text-white ${sizeStyles[size]}`}
      >
        {white}{" "}
        <span className="font-serif-accent text-accent">{accent}</span>
      </h2>

      {description && (
        <p className="font-montserrat mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
