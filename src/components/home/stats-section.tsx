"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Home, Star, Clock } from "lucide-react"
import { STATS } from "@/lib/data/company"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Home,
  Star,
  Clock,
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState("0")

  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(/[0-9.]/g, "")

  useEffect(() => {
    if (!isInView) return
    const start = 0
    const end = numericPart
    const duration = 1800
    const startTime = performance.now()

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (end - start) * ease)
      setDisplayed(`${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [isInView, numericPart, suffix])

  return <span ref={ref}>{displayed}</span>
}

export function StatsSection() {
  return (
    <section
      className="bg-[#1E3A8A] section-padding"
      aria-labelledby="stats-title"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2
            id="stats-title"
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Notre expertise en chiffres
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Depuis {new Date().getFullYear() - 2008} ans, nous bâtissons notre réputation
            chantier après chantier.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, index) => {
            const Icon = ICONS[stat.icon] || Award
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#F97316]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.value} />
                </div>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
