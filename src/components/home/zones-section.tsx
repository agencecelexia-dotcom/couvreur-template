import Link from "next/link"
import { MapPin } from "lucide-react"
import { ZONES } from "@/lib/data/company"

export function ZonesSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="zones-title">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Zone d'Intervention
            </span>
            <h2 id="zones-title" className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4">
              Toute l'Île-de-France
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Notre équipe intervient dans l'ensemble de la région Île-de-France, des 8 départements.
              Réactivité garantie : nous intervenons sur votre chantier sous 24h à 48h.
            </p>
            <p className="text-slate-600 mb-8">
              Paris et petite couronne (75, 92, 93, 94), grande couronne (77, 78, 91, 95) :
              nous couvrons l'intégralité du bassin parisien pour tous vos travaux de toiture.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F97316] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#EA6B0A] transition-colors shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              Vérifier ma zone
            </Link>
          </div>

          {/* Zones grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ZONES.map((zone) => (
                <div
                  key={zone.slug}
                  className="flex items-center gap-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl px-3 py-2.5 transition-colors cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{zone.name}</p>
                    <p className="text-xs text-slate-500">{zone.postalCode}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-4">
              + toute la région Île-de-France
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
