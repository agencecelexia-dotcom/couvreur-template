import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";

const reasons = [
  { title: "20 ans d'expertise", desc: "Une équipe de compagnons couvreurs avec une maîtrise technique reconnue." },
  { title: "Matériaux nobles", desc: "Ardoise d'Angers, tuiles terre cuite, zinc VM — uniquement le meilleur." },
  { title: "Garantie décennale", desc: "Tous nos travaux sont couverts par une assurance décennale Qualibat." },
  { title: "Devis transparent", desc: "Un devis détaillé et fixe, sans mauvaises surprises en cours de chantier." },
  { title: "Suivi personnalisé", desc: "Un interlocuteur dédié de la conception à la livraison finale." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/projects/artisan-ardoise.png"
                alt="Artisan couvreur Toitures Prestige au travail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
                Pourquoi nous choisir
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                L&apos;Excellence au Service de Votre Toiture
              </h2>
            </FadeUp>

            <div className="space-y-5">
              {reasons.map((r, i) => (
                <FadeUp key={r.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-accent-500 flex items-center justify-center">
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{r.title}</p>
                      <p className="text-sm text-neutral-600 mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
