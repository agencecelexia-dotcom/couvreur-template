import type { Metadata } from "next"
import { Shield, Award, CheckCircle, Users, Clock, Star, Heart } from "lucide-react"
import { CERTIFICATIONS, COMPANY } from "@/lib/data/company"
import { CtaBand } from "@/components/home/cta-band"

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire | Couvreur Île-de-France",
  description:
    "Découvrez Couverture Pro : couvreur professionnel certifié RGE depuis 2008 en Île-de-France. Notre histoire, nos valeurs, notre équipe et nos engagements qualité.",
}

const VALUES = [
  {
    icon: Shield,
    title: "Fiabilité",
    desc: "Nous respectons nos engagements : délais, devis, qualité. Aucune mauvaise surprise.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Nous n'acceptons que des matériaux de première qualité et formons continuellement notre équipe.",
  },
  {
    icon: Heart,
    title: "Proximité",
    desc: "Chaque client est unique. Nous prenons le temps de comprendre votre projet et vos contraintes.",
  },
  {
    icon: CheckCircle,
    title: "Transparence",
    desc: "Devis détaillés, facturation claire, pas de frais cachés. Ce que l'on dit, on le fait.",
  },
]

const TIMELINE = [
  {
    year: "2008",
    title: "Création de Couverture Pro",
    desc: "Fondée par un artisan couvreur avec 10 ans d'expérience dans de grandes entreprises du BTP.",
  },
  {
    year: "2012",
    title: "Certification Qualibat",
    desc: "Obtention de la certification Qualibat attestant de notre savoir-faire et de notre sérieux.",
  },
  {
    year: "2015",
    title: "Certification RGE",
    desc: "Reconnaissance Garant de l'Environnement, permettant à nos clients de bénéficier des aides de l'État.",
  },
  {
    year: "2018",
    title: "500 chantiers réalisés",
    desc: "Un cap symbolique qui confirme notre ancrage dans le tissu local de l'Île-de-France.",
  },
  {
    year: "2022",
    title: "Agrandissement de l'équipe",
    desc: "Recrutement de 3 nouveaux compagnons couvreurs pour répondre à une demande croissante.",
  },
  {
    year: "2025",
    title: "850+ chantiers, 4.9/5",
    desc: "Notre réputation se construit chantier après chantier, témoignage après témoignage.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-24 pt-32">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">À Propos de Nous</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Couvreur professionnel en Île-de-France depuis {COMPANY.founding}. Notre mission : protéger
            les toits des Franciliens avec expertise, honnêteté et savoir-faire artisanal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
                Notre Histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2 mb-6">
                Artisan couvreur depuis {new Date().getFullYear() - COMPANY.founding} ans
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Couverture Pro a été fondée en {COMPANY.founding} par un artisan couvreur passionné,
                fort de 10 ans d&apos;expérience dans de grandes entreprises du bâtiment. L&apos;idée ? Créer
                une structure à taille humaine, capable d&apos;allier les compétences techniques d&apos;une
                grande entreprise avec la réactivité et la proximité d&apos;un artisan local.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Basés en Essonne, nous intervenons dans toute l&apos;Île-de-France pour tous types de
                travaux de couverture : rénovation, construction neuve, zinguerie, isolation,
                entretien et dépannage d&apos;urgence.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Aujourd&apos;hui, notre équipe de 6 compagnons qualifiés réalise plus de 120 chantiers
                par an. Notre priorité : votre satisfaction, la durabilité des travaux et la
                transparence totale sur les prix.
              </p>
            </div>
            <div className="bg-slate-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "17", label: "ans d'expérience", icon: Clock },
                  { value: "850+", label: "chantiers réalisés", icon: CheckCircle },
                  { value: "4.9/5", label: "note Google", icon: Star },
                  { value: "6", label: "compagnons qualifiés", icon: Users },
                ].map(({ value, label, icon: Icon }) => (
                  <div key={label} className="text-center bg-white rounded-2xl p-4">
                    <Icon className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-[#1E3A8A]">{value}</p>
                    <p className="text-xs text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Nos Valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2">Ce qui nous définit</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#1E3A8A]" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Notre Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2">Les grandes étapes</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {item.year}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2">
              Nos garanties officielles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{cert.name}</h3>
                <p className="text-slate-500 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
