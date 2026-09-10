import { teamRoles } from "@/lib/data/site"

const marqueeItems = [...teamRoles, ...teamRoles, ...teamRoles, ...teamRoles]

export const TeamRolesSection = () => {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-12 md:py-16">
      <div className="marquee-track items-center">
        {marqueeItems.map((role, index) => (
          <span
            key={`${role}-${index}`}
            className="flex shrink-0 items-center gap-10 px-10"
          >
            <span className="font-display text-3xl font-bold text-white/90 sm:text-4xl md:text-5xl">
              {role.split(" ").map((word, wordIndex) => (
                <span key={word} className="block leading-tight">
                  {word}
                </span>
              ))}
            </span>
            <span className="text-accent text-xl" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
