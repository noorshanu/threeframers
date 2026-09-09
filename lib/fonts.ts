import { Instrument_Serif, Montserrat } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-family",
  display: "swap",
})

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif-accent-family",
  display: "swap",
})
