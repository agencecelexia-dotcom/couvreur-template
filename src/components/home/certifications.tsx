"use client"

import { motion } from "framer-motion"
import { Shield, Award, CheckCircle, Users } from "lucide-react"
import { CERTIFICATIONS } from "@/lib/data/company"

const CERT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  rge: Award,
  qualibat: CheckCircle,
  "garantie-decennale": Shield,
  "pro-btp": Users,
}

export function CertificationsSection() {
  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="certifications-title"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Garanties & Certifications
          </span>
          <h2
            id="certifications-title"
            className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4"
          >
            Travaillez en toute confiance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nos certifications et labels attestent de notre expertise technique, de notre
            sérieux et de notre engagement qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = CERT_ICONS[cert.id] || Shield
            return (
              <motion.div
                key={cert.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1E3A8A]/30 hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#1E3A8A] rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{cert.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cert.description}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-[#1E3A8A] font-medium hover:text-[#F97316] transition-colors"
                    aria-label={`Vérifier la certification ${cert.name}`}
                  >
                    Vérifier →
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Guarantees bar */}
        <div className="mt-12 bg-[#1E3A8A] rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="font-bold text-white">Garantie Décennale</p>
                <p className="text-blue-200 text-sm">10 ans de protection sur tous nos travaux</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="font-bold text-white">Certification RGE</p>
                <p className="text-blue-200 text-sm">Éligible MaPrimeRénov et aides CEE</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="font-bold text-white">Satisfaction Garantie</p>
                <p className="text-blue-200 text-sm">4.9/5 sur 143 avis vérifiés Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
