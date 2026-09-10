import type { IconType } from "react-icons"
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineFilm,
} from "react-icons/hi"

export const brandName = "THR33 Frames"
export const brandTagline = "Content Production Partner"

export const bookCallUrl = "https://cal.com/thenavin/30min"

export const stats: {
  value: string
  label: string
  icon: IconType
}[] = [
  { value: "1B+", label: "views generated", icon: HiOutlineChartBar },
  { value: "4 years", label: "of brand building", icon: HiOutlineClock },
  { value: "8,000+", label: "videos created", icon: HiOutlineFilm },
]

export const teamRoles = [
  "Lead Creatives",
  "Content Writers",
  "Designers",
]

export const problemsWeSolve = [
  "World-class Editors",
  "Project Managers",
  "Virtual Assistants",
]

export const goalCopy = {
  title: "The Goal",
  headline: "We become your in-house production team.",
  body:
    "Portfolio of 20+ parallel projects with industry leaders. Completely custom workflows for each. We integrate fully into your existing system. Producing anywhere from 10 to 100+ videos a month per project. Taking on a select few projects every quarter.",
}
