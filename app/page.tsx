import { MobileStickyCta } from "@/components/layout/MobileStickyCta"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { FAQSection } from "@/components/sections/faq/FAQSection"
import { GoalSection } from "@/components/sections/goal/GoalSection"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { LongFormSection } from "@/components/sections/longform/LongFormSection"
import { PortfolioSection } from "@/components/sections/portfolio/PortfolioSection"
import { PricingSection } from "@/components/sections/pricing/PricingSection"
import { ProblemsSection } from "@/components/sections/problems/ProblemsSection"
import { RepurposingSection } from "@/components/sections/repurposing/RepurposingSection"
import { SpotlightTestimonials } from "@/components/sections/spotlight/SpotlightTestimonials"
import { TeamRolesSection } from "@/components/sections/team/TeamRolesSection"
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection"
import { TrustedLeadersSection } from "@/components/sections/trusted/TrustedLeadersSection"
import { ViralReelSection } from "@/components/sections/viralreel/ViralReelSection"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <HeroSection />
        <TrustedLeadersSection />
        <AboutSection />
        <RepurposingSection />
        <ViralReelSection />
        <LongFormSection />
        <PortfolioSection />
        <SpotlightTestimonials />
        <PricingSection />
        <TeamRolesSection />
        <ProblemsSection />
        <GoalSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  )
}
