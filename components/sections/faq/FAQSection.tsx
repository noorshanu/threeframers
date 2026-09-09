"use client"

import { useState } from "react"

import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { SplitHeading } from "@/components/ui/SplitHeading"
import { faqItems } from "@/lib/data/faq"

type FAQAccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

const FAQAccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQAccordionItemProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onToggle()
    }
  }

  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        id={buttonId}
        type="button"
        className="flex min-h-[56px] w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:gap-6 sm:py-6"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="font-helvetica pr-2 text-[15px] font-medium leading-snug text-white sm:text-base md:text-lg">
          {question}
        </span>
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-transform duration-300 ${isOpen ? "rotate-45 border-accent/40" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 sm:pb-6" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="font-montserrat max-w-3xl text-sm leading-relaxed text-body md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="section-padding border-t border-border bg-background">
      <Container>
        <FadeIn>
          <SplitHeading
            index="05"
            label="FAQ"
            white="Straight"
            accent="answers."
            description="No pitch decks. No vague promises. Here's what partners usually ask before we start."
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border bg-card px-4 transition-colors hover:border-accent/20 sm:px-6 md:px-10">
            {faqItems.map((item, index) => (
              <FAQAccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
