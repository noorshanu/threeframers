import type { IconType } from "react-icons"
import {
  HiOutlineChartBar,
  HiOutlineFilm,
  HiOutlineLightBulb,
  HiOutlinePhotograph,
  HiOutlineShare,
  HiOutlineTerminal,
} from "react-icons/hi"

export type ServiceIcon =
  | "film"
  | "terminal"
  | "share"
  | "lightbulb"
  | "photograph"
  | "chart"

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
  terminal: HiOutlineTerminal,
  share: HiOutlineShare,
  lightbulb: HiOutlineLightBulb,
  photograph: HiOutlinePhotograph,
  chart: HiOutlineChartBar,
}

const portfolioImg = (filename: string) =>
  `/portfoilio/${encodeURIComponent(filename)}`

export const services: Service[] = [
  {
    number: "01",
    title: "Video Editing",
    tagline: "Cut to hold attention",
    description:
      "Cinematic pacing, clean transitions, and platform-native polish — every frame engineered to keep viewers locked in.",
    highlights: ["Long-form & shorts", "Color grading", "Sound design"],
    icon: "film",
    accent: "#7D9DC4",
    accentGlow: "rgba(125, 157, 196, 0.25)",
    glowColors: ["#7D9DC4", "#92B2D8", "#D1DEEF"],
    glowHsl: "210 35 65",
    image: "/images/yediting.jpg",
  },
  {
    number: "02",
    title: "YouTube Automation",
    tagline: "Systems that never sleep",
    description:
      "Research, scripting, editing pipelines, and upload workflows — your channel keeps moving even when you're offline.",
    highlights: ["Content pipelines", "Batch production", "Upload automation"],
    icon: "terminal",
    accent: "#92B2D8",
    accentGlow: "rgba(146, 178, 216, 0.25)",
    glowColors: ["#607DA5", "#92B2D8", "#ACC9E8"],
    glowHsl: "212 40 68",
    image: "/images/yauomation.jpg",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    tagline: "Reach that compounds",
    description:
      "Cross-platform distribution, growth loops, and community engagement — built so every post feeds the next.",
    highlights: ["Multi-platform", "Growth strategy", "Community ops"],
    icon: "share",
    accent: "#607DA5",
    accentGlow: "rgba(96, 125, 165, 0.25)",
    glowColors: ["#2F4463", "#607DA5", "#92B2D8"],
    glowHsl: "215 30 58",
    image: "/images/smmarketing.jpg",
  },
  {
    number: "04",
    title: "Content Strategy",
    tagline: "Find the formula",
    description:
      "Audience research, content pillars, and editorial calendars — we map what works before a single frame gets cut.",
    highlights: ["Audience mapping", "Content pillars", "Editorial planning"],
    icon: "lightbulb",
    accent: "#ACC9E8",
    accentGlow: "rgba(172, 201, 232, 0.2)",
    glowColors: ["#7D9DC4", "#ACC9E8", "#D1DEEF"],
    glowHsl: "210 50 78",
    image: portfolioImg("image (3).png"),
  },
  {
    number: "05",
    title: "Thumbnail & Brand Design",
    tagline: "Stop the scroll",
    description:
      "Click-worthy thumbnails, channel art, and visual identity — the first impression that turns browsers into viewers.",
    highlights: ["Thumbnail design", "Brand kits", "Visual systems"],
    icon: "photograph",
    accent: "#D1DEEF",
    accentGlow: "rgba(209, 222, 239, 0.15)",
    glowColors: ["#92B2D8", "#ACC9E8", "#D1DEEF"],
    glowHsl: "214 45 82",
    image: portfolioImg("image (1).png"),
  },
  {
    number: "06",
    title: "Analytics & Growth Ops",
    tagline: "Read the signal",
    description:
      "Performance dashboards, A/B testing, and iteration loops — we track what moves the needle and double down.",
    highlights: ["Performance tracking", "A/B testing", "Growth reporting"],
    icon: "chart",
    accent: "#2F4463",
    accentGlow: "rgba(47, 68, 99, 0.4)",
    glowColors: ["#16233A", "#2F4463", "#607DA5"],
    glowHsl: "218 28 42",
    image: portfolioImg("C86BF55D-BBE4-4332-BB6E-F9625135CA72.png"),
  },
]

export const heroServices = services.slice(0, 3).map(({ number, title }) => ({
  number,
  title: title.toUpperCase(),
}))
