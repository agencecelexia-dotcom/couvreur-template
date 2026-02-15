import type { Metadata } from "next"
import Link from "next/link"
import { Home, Building2, Droplets, Thermometer, Sparkles, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES } from "@/lib/data/services"
import { CtaBand } from "@/components/home/cta-band"
import { COMPANY } from "@/lib/data/company"

export const metadata: Metadata = {
  title: "Nos Services | Couverture, Toiture, Zinguerie Île-de-France",
  description:
    "Tous nos services de couverture en Île-de-France : rénovation toiture, couverture neuve, zinguerie, isolation, démoussage, dépannage urgent. Devis gratuit. " +
    COMPANY.phone,
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Droplets,
  Thermometer,
  Sparkles,
  Zap,
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-20 pt-32">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nos Services</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Couvreur professionnel certifié RGE. Tous travaux de toiture en Île-de-France.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] || Home
              return (
                <Card
                  key={service.id}
                  className="group h-full border-slate-200 hover:border-[#1E3A8A]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#1E3A8A] rounded-2xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="font-bold text-slate-800 text-xl mb-2">{service.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                      {service.shortDescription}
                    </p>
                    {service.priceRange && (
                      <p className="text-xs text-slate-400 mb-3 font-medium">
                        À partir de {service.priceRange}
                      </p>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-1.5 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      En savoir plus <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
