import { heroServices } from "@/lib/data/services"

export const HeroServicesBar = () => {
  return (
    <div className="border-t border-border/60 bg-surface/50 backdrop-blur-sm">
      <div className="scrollbar-hide mx-auto flex max-w-6xl gap-0 overflow-x-auto px-6 md:px-10 lg:grid lg:grid-cols-5 lg:overflow-visible">
        {heroServices.map((service, index) => (
          <div
            key={service.number}
            className={`flex min-w-[200px] shrink-0 items-center gap-4 py-5 lg:min-w-0 lg:px-4 lg:py-6 ${
              index < heroServices.length - 1
                ? "border-border/60 lg:border-r"
                : ""
            }`}
          >
            <span className="font-helvetica text-xs tracking-widest text-accent">
              {service.number}
            </span>
            <span className="h-px w-4 bg-border-lit lg:hidden" aria-hidden="true" />
            <span className="font-helvetica text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-body lg:text-[11px]">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
