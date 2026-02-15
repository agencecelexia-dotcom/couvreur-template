import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesGrid } from "@/components/home/services-grid"
import { StatsSection } from "@/components/home/stats-section"
import { CertificationsSection } from "@/components/home/certifications"
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel"
import { ZonesSection } from "@/components/home/zones-section"
import { CtaBand } from "@/components/home/cta-band"
import { COMPANY } from "@/lib/data/company"

export const metadata: Metadata = {
  title: `${COMPANY.name} | Couvreur Professionnel Île-de-France — Devis Gratuit`,
  description:
    "Couvreur professionnel certifié RGE en Île-de-France. Rénovation toiture, couverture neuve, zinguerie, isolation, démoussage. Devis gratuit sous 24h. Garantie décennale. ☎️ " +
    COMPANY.phoneMobile,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <CertificationsSection />
      <TestimonialsCarousel />
      <ZonesSection />
      <CtaBand />
    </>
  )
}
