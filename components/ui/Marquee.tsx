type MarqueeProps = {
  items: string[]
  className?: string
}

export const Marquee = ({ items, className = "" }: MarqueeProps) => {
  const loop = [...items, ...items]

  return (
    <div
      className={`overflow-hidden border-t border-border/80 bg-surface/80 backdrop-blur-sm ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="marquee-track py-4 md:py-5">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-8 px-8 font-helvetica text-[11px] uppercase tracking-[0.28em] text-muted md:text-xs"
          >
            {item}
            <span className="text-accent" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
