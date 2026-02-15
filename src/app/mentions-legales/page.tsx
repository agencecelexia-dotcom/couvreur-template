import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-neutral-900 mb-10">
            Mentions légales
          </h1>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                Éditeur du site
              </h2>
              <div className="text-neutral-600 space-y-2 text-sm leading-relaxed">
                <p><strong className="text-neutral-900">Raison sociale :</strong> {company.legalName}</p>
                <p><strong className="text-neutral-900">SIRET :</strong> {company.siret}</p>
                <p><strong className="text-neutral-900">Adresse :</strong> {company.address.street}, {company.address.postalCode} {company.address.city}</p>
                <p><strong className="text-neutral-900">Téléphone :</strong> {company.contact.phone}</p>
                <p><strong className="text-neutral-900">Email :</strong> {company.contact.email}</p>
                <p><strong className="text-neutral-900">Directeur de publication :</strong> Jean-Paul Moreau</p>
                <p><strong className="text-neutral-900">Qualification Qualibat :</strong> RGE n°5412-B</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                Hébergement
              </h2>
              <div className="text-neutral-600 text-sm leading-relaxed space-y-1">
                <p><strong className="text-neutral-900">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-neutral-900">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
                <p><strong className="text-neutral-900">Site :</strong> vercel.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos,
                icônes) sont la propriété exclusive de {company.legalName} ou de leurs
                auteurs respectifs. Toute reproduction, distribution, modification, adaptation ou
                retransmission de ces éléments sans accord exprès et écrit est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Toitures Prestige s&apos;efforce d&apos;assurer l&apos;exactitude et la mise
                à jour des informations diffusées sur ce site. Toutefois, Toitures Prestige
                ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
                informations mises à disposition et décline toute responsabilité pour toute
                imprécision, inexactitude ou omission.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
