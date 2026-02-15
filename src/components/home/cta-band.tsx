import Link from "next/link"
import { Phone, ChevronRight } from "lucide-react"
import { COMPANY } from "@/lib/data/company"

export function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-[#F97316] to-[#EA6B0A] py-12" aria-label="Appel à l'action">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            Prêt à démarrer votre projet toiture ?
          </h2>
          <p className="text-orange-100 text-base">
            Devis gratuit et sans engagement — Réponse sous 24h — Déplacement offert
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 bg-white text-[#F97316] font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-sm"
            aria-label="Appeler Couverture Pro"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phoneMobile}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
          >
            Demander un devis
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
