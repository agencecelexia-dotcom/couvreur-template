"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Building2, Droplets, Thermometer, Sparkles, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES } from "@/lib/data/services"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Droplets,
  Thermometer,
  Sparkles,
  Zap,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesGrid() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="services-title">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Nos Prestations
          </span>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4"
          >
            Tous vos travaux de toiture
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Du dépannage urgent à la rénovation complète, nous intervenons sur tous types
            de toitures en Île-de-France.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Home
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card className="group h-full border-slate-200 hover:border-[#1E3A8A]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#1E3A8A] rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#1E3A8A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>

                    {/* Price range */}
                    {service.priceRange && (
                      <p className="text-xs text-slate-400 mt-3 font-medium">
                        À partir de {service.priceRange}
                      </p>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-1.5 text-[#F97316] font-semibold text-sm mt-4 hover:gap-3 transition-all"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* All services link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#F97316] transition-colors"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
