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
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="font-helvetica text-base font-medium text-white md:text-lg">
          {question}
        </span>
        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
          <div className="rounded-2xl border border-border bg-card px-6 transition-colors hover:border-accent/20 md:px-10">
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
