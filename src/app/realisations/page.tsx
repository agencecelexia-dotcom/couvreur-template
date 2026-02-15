import type { Metadata } from "next"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { CtaBand } from "@/components/home/cta-band"
import { COMPANY } from "@/lib/data/company"

export const metadata: Metadata = {
  title: "Réalisations & Portfolio Toiture | Photos Avant/Après",
  description:
    "Découvrez nos réalisations de couverture en Île-de-France. Photos avant/après de rénovations, constructions neuves, ardoise, tuiles, zinc. Plus de 850 chantiers. " +
    COMPANY.phone,
}

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-20 pt-32">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nos Réalisations</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Photos avant/après de nos chantiers en Île-de-France. Ardoise, tuiles, zinc,
            bac acier — tous types de toitures.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ProjectGallery />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
