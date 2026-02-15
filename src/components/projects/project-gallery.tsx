"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, MapPin, Clock, Ruler } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data/projects"
import type { Project } from "@/types"

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === activeFilter || p.tags.includes(activeFilter)
        )

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtres de réalisations">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat.value
                ? "bg-[#1E3A8A] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-pressed={activeFilter === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-200 aspect-[4/3]"
              onClick={() => {
                setSelectedProject(project)
                setShowBefore(false)
              }}
            >
              <Image
                src={project.afterImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-4">
                  <p className="text-white font-semibold text-sm leading-tight">{project.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-orange-300" />
                    <span className="text-orange-200 text-xs">{project.location}</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <ZoomIn className="w-5 h-5 text-white drop-shadow" />
                </div>
              </div>
              <Badge className="absolute top-3 left-3 bg-[#F97316] text-white text-xs border-0">
                {project.material}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          Aucune réalisation dans cette catégorie pour le moment.
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Before/After toggle */}
              <div className="relative">
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={showBefore ? selectedProject.beforeImage : selectedProject.afterImage}
                    alt={`${selectedProject.title} - ${showBefore ? "Avant" : "Après"}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      !showBefore ? "bg-[#F97316] text-white" : "bg-black/50 text-white"
                    }`}
                  >
                    Après
                  </button>
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      showBefore ? "bg-[#1E3A8A] text-white" : "bg-black/50 text-white"
                    }`}
                  >
                    Avant
                  </button>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{selectedProject.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { icon: MapPin, label: "Localisation", value: selectedProject.location },
                    { icon: Ruler, label: "Surface", value: selectedProject.surface },
                    { icon: Clock, label: "Durée", value: selectedProject.duration },
                    { icon: Badge as unknown as React.ComponentType<{ className?: string }>, label: "Matériau", value: selectedProject.material },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-slate-400 mb-1">{label}</p>
                      <p className="text-xs font-semibold text-slate-700">{value}</p>
                    </div>
                  ))}
                </div>

                {selectedProject.testimonial && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-slate-700 text-sm italic mb-2">
                      &quot;{selectedProject.testimonial.text}&quot;
                    </p>
                    <p className="text-[#1E3A8A] text-xs font-semibold">
                      — {selectedProject.testimonial.name}, {selectedProject.testimonial.location}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
