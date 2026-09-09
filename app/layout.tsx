import type { Metadata } from "next"

import { AppProviders } from "@/components/providers/AppProviders"
import { instrumentSerif, montserrat } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "THR33 Frames — Content Production, Systematized",
  description:
    "The production system behind content that earns attention — video editing, AI content, automation and distribution.",
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
