import { heroServices } from "@/lib/data/services"

export const HeroServicesBar = () => {
  return (
    <div className="border-t border-border/60 bg-surface/40 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-x md:divide-y-0">
        {heroServices.map((service) => (
          <div
            key={service.number}
            className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6"
          >
            <span className="font-helvetica text-xs tracking-widest text-muted">
              {service.number}
            </span>
            <span className="h-px w-6 bg-border-lit" aria-hidden="true" />
            <span className="font-helvetica text-[11px] font-medium uppercase tracking-[0.18em] text-body">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
