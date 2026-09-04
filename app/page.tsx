import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { FAQSection } from "@/components/sections/faq/FAQSection"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { PortfolioSection } from "@/components/sections/portfolio/PortfolioSection"
import { ServicesSection } from "@/components/sections/services/ServicesSection"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
