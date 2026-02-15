import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react"
import { COMPANY, ZONES } from "@/lib/data/company"
import { SERVICES } from "@/lib/data/services"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f2558] text-white" aria-label="Pied de page">
      {/* CTA band */}
      <div className="bg-[#F97316]">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg">Votre projet toiture en Île-de-France ?</p>
            <p className="text-orange-100 text-sm">Réponse sous 24h garantie — Devis 100% gratuit et sans engagement</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-white text-[#F97316] font-bold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors"
              aria-label="Appeler Couverture Pro"
            >
              <Phone className="w-4 h-4" />
              Appeler
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1 — Entreprise */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A8A] font-bold text-sm">CP</span>
              </div>
              <span className="font-bold text-white text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Couvreur professionnel certifié RGE en Île-de-France depuis {COMPANY.founding}.
              Rénovation, couverture neuve, zinguerie, isolation. Garantie décennale sur tous travaux.
            </p>
            <div className="flex items-center gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-blue-200 text-sm ml-1">
                {COMPANY.aggregateRating.ratingValue}/5 ({COMPANY.aggregateRating.reviewCount} avis)
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook Couverture Pro"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram Couverture Pro"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Nos Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/realisations" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Conseils toiture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Zones */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Zones d'Intervention</h3>
            <ul className="space-y-1.5 grid grid-cols-2 gap-x-2">
              {ZONES.slice(0, 10).map((zone) => (
                <li key={zone.slug}>
                  <span className="text-blue-200 text-sm">
                    {zone.name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-blue-300 text-xs mt-3">
              Et toute l'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
            </p>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
                className="flex items-start gap-2.5 text-blue-200 hover:text-white transition-colors group"
                aria-label="Téléphone"
              >
                <Phone className="w-4 h-4 mt-0.5 text-[#F97316] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{COMPANY.phoneMobile}</p>
                  <p className="text-xs text-blue-300">Urgences 6j/7</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <span className="text-sm">{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-200">{COMPANY.address.street}</p>
                  <p className="text-sm text-blue-200">{COMPANY.address.postalCode} {COMPANY.address.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-200">Lun-Ven : {COMPANY.hours.weekdays}</p>
                  <p className="text-sm text-blue-200">Sam : {COMPANY.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="container-wide py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <p>
            © {currentYear} {COMPANY.legalName} — SIRET {COMPANY.siret} — Tous droits réservés
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
