import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SERVICES, getServiceBySlug } from "@/lib/data/services"
import { ServicePageTemplate } from "@/components/services/service-page-template"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} en Île-de-France | Couvreur Certifié RGE`,
    description: `${service.shortDescription} Devis gratuit, garantie décennale. Couvreur professionnel en Île-de-France (Paris, 77, 78, 91, 92, 93, 94, 95).`,
    openGraph: {
      title: `${service.title} — Couvreur Île-de-France`,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
