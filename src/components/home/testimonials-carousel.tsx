"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TESTIMONIALS } from "@/lib/data/testimonials"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  )
}

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  // Auto-scroll every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (d: number) => ({ x: d * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -60, opacity: 0 }),
  }

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-title"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4"
          >
            Ce que disent nos clients
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Plus de {TESTIMONIALS.length * 18} avis vérifiés. Note moyenne :{" "}
            <strong>4.9/5</strong> sur Google
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-slate-50 rounded-3xl p-8 md:p-12 min-h-[280px]">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <StarRating rating={TESTIMONIALS[current].rating} />
                </div>
                <blockquote>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    &quot;{TESTIMONIALS[current].text}&quot;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-bold text-sm">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{TESTIMONIALS[current].name}</p>
                    <p className="text-sm text-slate-500">
                      {TESTIMONIALS[current].location} — {TESTIMONIALS[current].date}
                    </p>
                    {TESTIMONIALS[current].service && (
                      <p className="text-xs text-[#F97316] font-medium mt-0.5">
                        {TESTIMONIALS[current].service}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="rounded-full border-slate-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-6 h-2.5 bg-[#1E3A8A]"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Voir témoignage ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Témoignage suivant"
              className="rounded-full border-slate-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
