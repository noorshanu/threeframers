import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { bookCallUrl } from "@/lib/data/navigation"

export const CTASection = () => {
  return (
    <section
      id="contact"
      className="section-padding border-t border-border bg-surface"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <Button
              href={bookCallUrl}
              variant="cta"
              showArrow
              className="w-full sm:w-auto"
              ariaLabel="Book a discovery call"
            >
              Book a Discovery Call
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
