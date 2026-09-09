import { MobileStickyCta } from "@/components/layout/MobileStickyCta"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { FAQSection } from "@/components/sections/faq/FAQSection"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { PortfolioSection } from "@/components/sections/portfolio/PortfolioSection"
import { ServicesSection } from "@/components/sections/services/ServicesSection"
import { LongFormSection } from "@/components/sections/longform/LongFormSection"
import { ViralReelSection } from "@/components/sections/viralreel/ViralReelSection"
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LongFormSection />
        <ViralReelSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  )
}
