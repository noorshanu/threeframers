import type { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: "div" | "section"
  id?: string
}

export const Container = ({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) => {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}
    >
      {children}
    </Tag>
  )
}
