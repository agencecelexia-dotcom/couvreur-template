import type { Service } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Clock, Euro, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/home/cta-band"
import { SERVICES } from "@/lib/data/services"
import { COMPANY } from "@/lib/data/company"

interface ServicePageTemplateProps {
  service: Service
}

const SERVICE_IMAGES: Record<string, string> = {
  "renovation-toiture": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
  "couverture-neuve": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&auto=format&fit=crop&q=80",
  zinguerie: "https://images.unsplash.com/photo-1574874682547-81a8239f2bde?w=1200&auto=format&fit=crop&q=80",
  "isolation-toiture": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&auto=format&fit=crop&q=80",
  demoussage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80",
  depannage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80",
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)
  const imageUrl =
    SERVICE_IMAGES[service.slug] ||
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80"

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-24 pt-32">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#F97316]/20 text-orange-200 border-[#F97316]/30">
              Couvreur Île-de-France
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-blue-100 text-xl leading-relaxed mb-8">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              {service.priceRange && (
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <Euro className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white text-sm font-medium">{service.priceRange}</span>
                </div>
              )}
              {service.duration && (
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white text-sm font-medium">{service.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">En quoi consiste cette prestation ?</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">{service.fullDescription}</p>

              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Ce qui est inclus</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Vos avantages</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                    <div className="w-5 h-5 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-4">Demander un devis gratuit</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Réponse sous 24h · Devis détaillé · Sans engagement
                </p>
                <Button
                  asChild
                  className="w-full bg-[#F97316] hover:bg-[#EA6B0A] text-white font-bold mb-3"
                  size="lg"
                >
                  <Link href="/contact">
                    Devis Gratuit
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <a href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}>Appeler maintenant</a>
                </Button>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-3">
                    Autres services
                  </p>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#1E3A8A] transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
