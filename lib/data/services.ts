import type { IconType } from "react-icons"
import {
  HiOutlineChip,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineRefresh,
  HiOutlineTerminal,
} from "react-icons/hi"

export type ServiceIcon =
  | "film"
  | "ai"
  | "automation"
  | "terminal"
  | "motion"

export type Service = {
  number: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  icon: ServiceIcon
  accent: string
  accentGlow: string
  glowColors: [string, string, string]
  glowHsl: string
  image: string
}

export const serviceIcons: Record<ServiceIcon, IconType> = {
  film: HiOutlineFilm,
  ai: HiOutlineChip,
  automation: HiOutlineRefresh,
  terminal: HiOutlineTerminal,
  motion: HiOutlineCube,
}

const portfolioImg = (filename: string) =>
  `/portfoilio/${encodeURIComponent(filename)}`

export const servicesCloser =
  "Most partners start with one service and add the rest as the system proves itself. Nothing is bundled on day one."

export const services: Service[] = [
  {
    number: "01",
    title: "Video Editing",
    tagline: "Editing that sets the standard",
    description:
      "The production quality your brand deserves, on a schedule you can build a calendar around.",
    highlights: [
      "Long-form YouTube, podcast & brand film",
      "Short-form cutdowns — Reels, Shorts, TikTok",
      "B2B product videos, demos & launch films",
      "Thumbnails, titles & packaging alongside the edit",
    ],
    icon: "film",
    accent: "#7D9DC4",
    accentGlow: "rgba(125, 157, 196, 0.25)",
    glowColors: ["#7D9DC4", "#92B2D8", "#D1DEEF"],
    glowHsl: "210 35 65",
    image: "/images/yediting.jpg",
  },
  {
    number: "02",
    title: "AI Content Creation & AI Avatar",
    tagline: "Volume without a camera day",
    description:
      "Production capacity that scales past what your calendar allows — with a likeness and voice that actually sound like you.",
    highlights: [
      "Custom AI avatar from a single studio capture",
      "Voice cloning & multi-language versions",
      "AI-assisted scripting, hooks & variant testing",
      "Faceless & B-roll-led formats",
    ],
    icon: "ai",
    accent: "#92B2D8",
    accentGlow: "rgba(146, 178, 216, 0.25)",
    glowColors: ["#607DA5", "#92B2D8", "#ACC9E8"],
    glowHsl: "212 40 68",
    image: portfolioImg("image (2).png"),
  },
  {
    number: "03",
    title: "Social Media Automation",
    tagline: "Publishing that runs without you in the room",
    description:
      "One piece of source content, correctly formatted and scheduled everywhere it belongs.",
    highlights: [
      "Cross-platform scheduling & native formatting",
      "Automated repurposing pipelines",
      "Caption, hashtag & metadata systems",
      "Weekly reporting with next-cycle decisions",
    ],
    icon: "automation",
    accent: "#607DA5",
    accentGlow: "rgba(96, 125, 165, 0.25)",
    glowColors: ["#2F4463", "#607DA5", "#92B2D8"],
    glowHsl: "215 30 58",
    image: "/images/smmarketing.jpg",
  },
  {
    number: "04",
    title: "YouTube Automation",
    tagline: "A channel run like an operation",
    description:
      "End-to-end channel management — research, packaging, publishing and iteration on a fixed cadence.",
    highlights: [
      "Topic & keyword research mapped to demand",
      "Scripting, editing & packaging in one pipeline",
      "Thumbnail & title testing with documented results",
      "Retention analysis feeding next month's slate",
    ],
    icon: "terminal",
    accent: "#ACC9E8",
    accentGlow: "rgba(172, 201, 232, 0.2)",
    glowColors: ["#7D9DC4", "#ACC9E8", "#D1DEEF"],
    glowHsl: "210 50 78",
    image: "/images/yauomation.jpg",
  },
  {
    number: "05",
    title: "Motion Graphics & SaaS",
    tagline: "Storytelling for the hard-to-explain",
    description:
      "Motion work and product video for companies whose product is the hardest part of the pitch.",
    highlights: [
      "Brand motion systems & kinetic type",
      "SaaS walkthroughs & onboarding video",
      "UI animation & screen-capture polish",
      "Sales & investor assets, same visual language",
    ],
    icon: "motion",
    accent: "#D1DEEF",
    accentGlow: "rgba(209, 222, 239, 0.15)",
    glowColors: ["#92B2D8", "#ACC9E8", "#D1DEEF"],
    glowHsl: "214 45 82",
    image: portfolioImg("image (3).png"),
  },
]

export const heroServices = services.map(({ number, title }) => ({
  number,
  title: title.toUpperCase(),
}))
