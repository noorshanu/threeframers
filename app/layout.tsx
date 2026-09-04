import type { Metadata } from "next"

import { AppProviders } from "@/components/providers/AppProviders"
import { montserrat } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Three Framers — Content, Built to Move",
  description:
    "Video editing, YouTube automation and social growth — built around your audience.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
