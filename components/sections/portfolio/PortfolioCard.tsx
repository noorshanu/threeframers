import Image from "next/image"
import Link from "next/link"

import type { PortfolioProject } from "@/lib/data/portfolio"

type PortfolioCardProps = {
  project: PortfolioProject
}

export const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <article className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card sm:w-[300px] md:w-[320px] lg:w-[340px]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, 340px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex items-end justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="font-display truncate text-base font-bold text-text-primary md:text-lg">
            {project.title}
          </h3>
          <p className="font-montserrat mt-1 truncate text-xs text-muted md:text-sm">
            {project.tags}
          </p>
        </div>

        <Link
          href="#contact"
          aria-label={`View ${project.title}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-lit text-body transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          <span aria-hidden="true" className="text-sm leading-none">
            ↗
          </span>
        </Link>
      </div>
    </article>
  )
}
