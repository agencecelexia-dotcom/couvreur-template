import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ProjectGallery from "@/components/features/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez nos réalisations de toitures en ardoise, tuiles et zinc. Toitures Prestige intervient sur toute l'Île-de-France. Photos de chantiers réels.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/projects/ardoise-paris-1.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos Réalisations
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Chaque toiture est une signature. Découvrez notre portfolio de chantiers récents.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <FadeIn>
            <ProjectGallery projects={projects} />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
