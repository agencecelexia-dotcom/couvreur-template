import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire",
  description:
    "Depuis 20 ans, Toitures Prestige protège les toitures d'Île-de-France. Maîtres couvreurs certifiés Qualibat RGE, savoir-faire artisanal transmis de génération en génération.",
};

const certifications = [
  { name: "Qualibat RGE", description: "Qualification reconnue garant de l'environnement" },
  { name: "Garantie Décennale", description: "Assurance obligatoire couvrant 10 ans de travaux" },
  { name: "Pro BTP", description: "Mutuelle et prévoyance du bâtiment et travaux publics" },
  { name: "Maître Artisan", description: "Titre officiel attestant l'excellence du savoir-faire" },
];

const timeline = [
  { year: "2004", event: "Création de l'entreprise par Jean-Paul Moreau à Paris 15ème" },
  { year: "2007", event: "Obtention de la qualification Qualibat — première certification officielle" },
  { year: "2010", event: "Extension à toute l'Île-de-France — 3 équipes opérationnelles" },
  { year: "2015", event: "Certification RGE — spécialisation isolation thermique par l'extérieur" },
  { year: "2018", event: "300ème chantier. Théo Moreau rejoint l'entreprise après son compagnonnage" },
  { year: "2021", event: "Partenariat avec les Architectes des Bâtiments de France" },
  { year: "2024", event: "800 toitures réalisées. 20 ans d'excellence artisanale en Île-de-France" },
];

const values = [
  "Matériaux sélectionnés chez les meilleurs fabricants",
  "Artisans formés au Compagnonnage du Tour de France",
  "Aucun sous-traitant — toujours nos propres équipes",
  "Chantier propre et sécurisé, voisinage respecté",
  "Bilan technique remis après chaque intervention",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.64 0.16 25) 0, oklch(0.64 0.16 25) 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                Notre histoire
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Artisans depuis<br /> 2004
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                Toitures Prestige est née de la passion d&apos;un homme pour les toits
                de Paris. Depuis 20 ans, notre famille d&apos;artisans protège et embellit
                les maisons d&apos;Île-de-France avec l&apos;exigence du compagnonnage.
              </p>
              <div className="flex flex-wrap gap-4">
                {certifications.slice(0, 2).map((c) => (
                  <div key={c.name} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4 text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white text-sm font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/equipe-chantier.png"
                  alt="L'équipe Toitures Prestige sur un chantier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/artisan-ardoise.png"
                  alt="Détail de toiture en ardoise — savoir-faire artisanal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-accent-600 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Notre philosophie
              </p>
              <h2 className="font-heading text-4xl font-bold text-neutral-900 leading-tight mb-6">
                Le temps long de l&apos;artisanat
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Dans un monde qui va vite, nous choisissons la lenteur du bien fait. Chaque
                ardoise posée, chaque joint de zinc soudé, chaque faîtage scellé porte la
                signature de nos compagnons. Une toiture réalisée par Toitures Prestige
                est pensée pour traverser le siècle.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                C&apos;est pourquoi nous refusons les compromis sur les matériaux, les délais
                irréalistes et les chantiers bâclés. Notre réputation — construite sur 20 ans
                et 800 chantiers — est notre bien le plus précieux.
              </p>
              <ul className="space-y-3">
                {values.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-[clamp(3rem,6vw,5rem)] bg-primary-50">
        <Container>
          <FadeIn>
            <SectionHeading
              title="La Confiance par les Preuves"
              subtitle="Nos certifications et qualifications garantissent votre sécurité et votre tranquillité d'esprit."
              centered
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {certifications.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">{c.name}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{c.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Des Artisans, Pas des Techniciens"
              subtitle="Notre équipe de compagnons couvreurs partage une passion commune pour le travail bien fait."
              centered
            />
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-5">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-[clamp(4rem,8vw,6rem)] bg-primary-900">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                20 ans d&apos;histoire
              </p>
              <h2 className="font-heading text-4xl font-bold text-white">
                Notre parcours
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-8 items-start">
                    <div className="w-[60px] shrink-0 text-right">
                      <span className="font-heading text-sm font-bold text-accent-400">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1 pt-0.5 relative">
                      <div className="w-2 h-2 bg-accent-500 absolute -left-[2.35rem] mt-1.5 hidden sm:block rounded-full" />
                      <p className="text-neutral-300 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Prêt à nous confier votre toiture ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un devis gratuit. Notre équipe se déplace sur toute l&apos;Île-de-France.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-accent-600 bg-white hover:bg-accent-50 rounded-lg transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
