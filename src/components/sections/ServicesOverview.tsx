import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

const icons: Record<string, React.ReactNode> = {
  truck: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17a2 2 0 002 2h4a2 2 0 002-2M8 17H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v1m-9 9h8m-8 0a2 2 0 01-2-2m10 2a2 2 0 002-2m0 0V9m0 6h2a2 2 0 002-2v-3a2 2 0 00-2-2h-2" />
    </svg>
  ),
  map: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  crane: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z" />
    </svg>
  ),
  warehouse: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M12 3l9 7H3l9-7z" />
    </svg>
  ),
  package: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  // Fallback icons
  home: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Des Services Complets"
          subtitle="Du déménagement local au transfert d'entreprise, nous couvrons tous vos besoins en matière de déménagement."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.id} delay={i * 0.08}>
              <div className="group rounded-2xl border border-neutral-200 p-6 hover:border-primary-300 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors">
                  {icons[service.icon] ?? icons.home}
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  Découvrir →
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
