type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
}

export const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="font-montserrat text-xs font-medium uppercase tracking-[0.25em] text-muted">
        {label}
      </p>
      <h2 className="font-display mt-4 text-3xl font-bold uppercase tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="font-montserrat mt-5 text-base leading-relaxed text-body md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
