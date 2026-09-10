export type PricingTier = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    id: "core",
    name: "Core",
    tagline: "You create. We produce.",
    description:
      "You already have the footage. We turn it into polished, platform-ready content your brand can publish with confidence.",
    features: [
      "Starting at 20 short-form videos per month",
      "5 carousels per month",
      "Custom editing style for your brand",
      "Thumbnails, captions, and design assets",
      "Platform-native formatting",
      "Dedicated team: editors, creatives, project manager, designer",
      "Bi-weekly check-ins",
      "Monthly performance report",
    ],
    cta: "Apply",
  },
  {
    id: "os",
    name: "OS",
    tagline: "Your entire content operation. Run by us.",
    description:
      "You show up. We handle everything else. Strategy, scripting, creative direction, editing, and distribution. A full content department embedded in your workflow.",
    features: [
      "Everything in Core",
      "Repeatable pre-production system",
      "Content strategy",
      "Creative direction",
      "Scripting",
      "Shoot direction",
      "Multi-platform distribution",
    ],
    cta: "Apply",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Full-scale production for brands operating at volume.",
    description:
      "Your scope. Our infrastructure. For brands that need scale without sacrificing quality. We build a dedicated production system around your requirements.",
    features: [
      "Everything in OS",
      "Upwards of 100 curated videos a month",
      "Dedicated clipping team",
      "Best for enterprise projects",
    ],
    cta: "Let's Talk",
  },
]

export const pricingNote =
  "Every engagement starts with a 3-month commitment. We take on 2-3 new clients per quarter."
