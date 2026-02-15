import type { Metadata } from "next"
import Link from "next/link"
import { COMPANY } from "@/lib/data/company"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Couverture Pro.",
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="container-wide max-w-3xl">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-8">Mentions Légales</h1>
        <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Éditeur du site</h2>
            <p><strong>Raison sociale :</strong> {COMPANY.legalName}</p>
            <p><strong>SIRET :</strong> {COMPANY.siret}</p>
            <p><strong>Adresse :</strong> {COMPANY.address.street}, {COMPANY.address.postalCode} {COMPANY.address.city}</p>
            <p><strong>Téléphone :</strong> {COMPANY.phone}</p>
            <p><strong>Email :</strong> {COMPANY.email}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, California 94104, États-Unis.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de {COMPANY.legalName} et est protégé par le droit d'auteur.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Données personnelles</h2>
            <p>Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à {COMPANY.email}.</p>
          </section>
          <div className="pt-4 border-t border-slate-100">
            <Link href="/" className="text-[#1E3A8A] hover:text-[#F97316] font-medium transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
