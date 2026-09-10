import type { Metadata } from "next"

import { AppProviders } from "@/components/providers/AppProviders"
import { instrumentSerif, montserrat } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "THR33 Frames — Content & Distribution System",
  description:
    "The content and distribution system for the leaders in tech and media. Production, repurposing, and distribution under one roof.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${montserrat.variable} ${instrumentSerif.variable}`}
    >
      <body className="grain-overlay min-h-full flex flex-col bg-background text-text-primary">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
