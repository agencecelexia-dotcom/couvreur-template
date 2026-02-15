import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/projects/equipe-chantier.png"
          alt="Équipe Toitures Prestige sur chantier"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/85" />
      </div>
      <Container className="relative z-10 text-center">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Votre Toiture Mérite le Meilleur
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-neutral-200">
            Consultation gratuite, devis sans engagement — notre équipe se déplace sur toute l&apos;Île-de-France.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-900 bg-accent-500 hover:bg-accent-400 rounded-lg transition-colors shadow-lg"
          >
            Demander un Devis Gratuit
          </Link>
        </FadeUp>
      </Container>
    </section>
  );
}
