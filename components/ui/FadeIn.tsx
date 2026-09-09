"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "none"
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) => {
  const hiddenY = direction === "up" ? 24 : direction === "down" ? -24 : 0

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: hiddenY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div className={className} variants={variants}>
    {children}
  </motion.div>
)
