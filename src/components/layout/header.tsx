"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { COMPANY } from "@/lib/data/company"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Rénovation toiture", href: "/services/renovation-toiture" },
      { label: "Couverture neuve", href: "/services/couverture-neuve" },
      { label: "Zinguerie", href: "/services/zinguerie" },
      { label: "Isolation toiture", href: "/services/isolation-toiture" },
      { label: "Démoussage", href: "/services/demoussage" },
      { label: "Dépannage urgent", href: "/services/depannage" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md border-b border-slate-200"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      {/* Top bar — téléphone + urgence */}
      <div className="bg-[#1E3A8A] text-white text-sm py-1.5">
        <div className="container-wide flex items-center justify-between">
          <span className="hidden sm:block text-blue-200 text-xs">
            Couvreur certifié RGE — Île-de-France — Garantie décennale
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-semibold hover:text-orange-300 transition-colors"
              aria-label="Appeler Couverture Pro"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY.phoneMobile}
            </a>
            <span className="text-blue-300 text-xs">| Urgences 6j/7</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Couverture Pro - Accueil">
          <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CP</span>
          </div>
          <div>
            <span className="font-bold text-[#1E3A8A] text-lg leading-none block">
              {COMPANY.name}
            </span>
            <span className="text-xs text-slate-500 leading-none">Couvreur Île-de-France</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1E3A8A] rounded-md hover:bg-slate-50 transition-colors">
                  {link.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1E3A8A] rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            className="bg-[#F97316] hover:bg-[#EA6B0A] text-white font-semibold shadow-sm"
          >
            <Link href="/contact">Devis Gratuit</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <div className="flex flex-col h-full pt-6">
              <Link
                href="/"
                className="flex items-center gap-2 mb-8"
                onClick={() => setMobileOpen(false)}
              >
                <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CP</span>
                </div>
                <span className="font-bold text-[#1E3A8A] text-lg">{COMPANY.name}</span>
              </Link>

              <nav className="flex flex-col gap-1" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-[#1E3A8A] hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-[#1E3A8A] hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pb-6 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY.phoneMobile.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors"
                  aria-label="Appeler Couverture Pro"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phoneMobile}
                </a>
                <Button
                  asChild
                  className="w-full bg-[#F97316] hover:bg-[#EA6B0A] text-white font-semibold"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Devis Gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
