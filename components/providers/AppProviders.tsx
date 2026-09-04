"use client"

import { GlobalClickSpark } from "@/components/providers/GlobalClickSpark"
import type { ReactNode } from "react"

type AppProvidersProps = {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <GlobalClickSpark
        sparkColor="#D1DEEF"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
      {children}
    </>
  )
}
