import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            label="About Us"
            title="We build content systems, not one-offs."
            description="Three Framers is a creative partner for creators and brands who need consistent, high-quality output — without building an entire in-house team."
          />

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="font-montserrat text-base leading-relaxed text-body">
                We specialize in the full content lifecycle: editing that holds
                attention, automation that keeps your channel moving, and
                distribution that compounds over time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="font-display text-3xl font-bold text-brand-blue">50+</p>
                <p className="font-montserrat mt-2 text-sm text-body">
                  Projects delivered across YouTube & social
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="font-display text-3xl font-bold text-brand-blue">3</p>
                <p className="font-montserrat mt-2 text-sm text-body">
                  Core disciplines under one roof
                </p>
              </div>
            </div>

            <p className="font-montserrat text-sm leading-relaxed text-muted">
              Every engagement is built around your audience — your voice, your
              goals, your pace. We adapt to what&apos;s working, not what a
              template says should work.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
