import Image from "next/image"

import { BorderGlow } from "@/components/ui/BorderGlow"
import type { Service } from "@/lib/data/services"
import { serviceIcons } from "@/lib/data/services"

type ServiceStackCardProps = {
  service: Service
}

export const ServiceStackCard = ({ service }: ServiceStackCardProps) => {
  const Icon = serviceIcons[service.icon]

  return (
    <BorderGlow
      className="w-full"
      edgeSensitivity={28}
      glowColor={service.glowHsl}
      backgroundColor="#10131A"
      borderRadius={28}
      glowRadius={36}
      glowIntensity={1.1}
      coneSpread={28}
      animated={false}
      colors={service.glowColors}
      fillOpacity={0.45}
    >
      <article className="relative min-h-[280px] w-full overflow-hidden md:min-h-[340px]">
        {/* Mobile — top image strip with curve */}
        <div className="relative h-40 w-full overflow-hidden rounded-b-[2rem] sm:hidden">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #10131A 0%, #10131A99 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Desktop — curved right panel, full height */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[46%] sm:block"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden rounded-l-[2rem] md:rounded-l-[2.5rem]">
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 45vw, 420px"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, #10131A 0%, #10131Acc 20%, transparent 58%), linear-gradient(to top, #10131A88 0%, transparent 45%)`,
              }}
            />
            <div
              className="absolute inset-y-4 left-0 w-px"
              style={{
                background: `linear-gradient(to bottom, transparent, ${service.accent}55, transparent)`,
              }}
            />
          </div>
        </div>

        {/* Content — left half */}
        <div className="relative z-10 flex flex-col justify-center p-6 sm:min-h-[340px] sm:max-w-[58%] sm:p-8 md:p-10">
          <div
            className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full blur-[60px]"
            style={{ background: service.accentGlow }}
            aria-hidden="true"
          />

          <div className="relative flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-lit md:h-16 md:w-16"
              style={{
                background: `linear-gradient(135deg, ${service.accentGlow} 0%, transparent 100%)`,
                boxShadow: `0 0 30px ${service.accentGlow}`,
              }}
            >
              <Icon
                className="h-6 w-6 md:h-7 md:w-7"
                style={{ color: service.accent }}
                aria-hidden="true"
              />
            </div>
            <span className="ml-auto font-helvetica text-xs tracking-[0.3em] text-muted">
              {service.number}
            </span>
          </div>

          <div className="relative mt-6">
            <p
              className="font-montserrat text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: service.accent }}
            >
              {service.tagline}
            </p>

            <h3 className="font-display mt-2 text-xl font-bold uppercase tracking-tight text-text-primary sm:text-2xl md:text-3xl">
              {service.title}
            </h3>

            <p className="font-montserrat mt-3 text-sm leading-relaxed text-body md:text-base">
              {service.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface/80 px-4 py-1.5 font-montserrat text-xs text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span
          className="pointer-events-none absolute bottom-2 right-4 select-none font-display text-[4rem] font-bold leading-none text-border/20 sm:text-[5rem]"
          aria-hidden="true"
        >
          {service.number}
        </span>

        <div
          className="absolute inset-x-0 bottom-0 z-10 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          }}
          aria-hidden="true"
        />
      </article>
    </BorderGlow>
  )
}
