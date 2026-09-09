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
  { value: "9,500+", label: "videos shipped", icon: HiOutlineFilm },
  { value: "8 yrs", label: "building content systems", icon: HiOutlineClock },
]
