import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { COMPANY } from "@/lib/data/company"
import { QuoteForm } from "@/components/forms/quote-form"

export const metadata: Metadata = {
  title: "Devis Gratuit Toiture | Contact — Couvreur Île-de-France",
  description:
    "Demandez votre devis gratuit pour tous travaux de toiture en Île-de-France. Réponse sous 24h. Couvreur certifié RGE, garantie décennale. ☎️ " + COMPANY.phone,
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-20 pt-32">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Devis Gratuit & Contact
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Décrivez votre projet et recevez votre devis détaillé sous 24h. Déplacement
            gratuit sur toute l&apos;Île-de-France.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">Votre demande de devis</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Tous les champs marqués * sont obligatoires.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#1E3A8A] mb-4">Nos coordonnées</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-slate-700 hover:text-[#1E3A8A] transition-colors"
                    aria-label="Appeler"
                  >
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold">{COMPANY.phoneMobile}</p>
                      <p className="text-xs text-slate-500">Urgences 6j/7</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-slate-700 hover:text-[#1E3A8A] transition-colors"
                    aria-label="Email"
                  >
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold">{COMPANY.email}</p>
                      <p className="text-xs text-slate-500">Réponse sous 24h</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold">{COMPANY.address.street}</p>
                      <p className="text-sm text-slate-600">
                        {COMPANY.address.postalCode} {COMPANY.address.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold">Lun-Ven : {COMPANY.hours.weekdays}</p>
                      <p className="text-sm text-slate-600">Sam : {COMPANY.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reassurance */}
              <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Notre engagement</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>✓ Devis gratuit et sans engagement</li>
                  <li>✓ Réponse sous 24h en semaine</li>
                  <li>✓ Déplacement offert en Île-de-France</li>
                  <li>✓ Devis détaillé avec photos</li>
                  <li>✓ Aucun frais caché</li>
                  <li>✓ Garantie décennale incluse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
