"use client"

import { useState } from "react"

import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
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
        className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="font-helvetica text-base font-medium text-text-primary md:text-lg">
          {question}
        </span>
        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="font-montserrat max-w-3xl text-sm leading-relaxed text-body md:text-base">
          {answer}
        </p>
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
    <section id="faq" className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Straight answers."
          description="No pitch decks. No vague promises. Here's what partners usually ask before we start."
        />

        <div className="mt-12 rounded-2xl border border-border bg-card px-6 md:px-10">
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
      </Container>
    </section>
  )
}
