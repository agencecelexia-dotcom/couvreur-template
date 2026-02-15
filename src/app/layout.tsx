import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { COMPANY } from "@/lib/data/company"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Couvreur Professionnel Île-de-France`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Couvreur professionnel certifié RGE en Île-de-France. Rénovation et réfection de toiture, couverture neuve, zinguerie, isolation, démoussage. Devis gratuit, garantie décennale. ☎️ " +
    COMPANY.phone,
  keywords: [
    "couvreur île-de-france",
    "rénovation toiture",
    "couverture neuve",
    "zinguerie paris",
    "isolation toiture",
    "démoussage toiture",
    "couvreur certifié RGE",
    "devis toiture gratuit",
    "réparation toiture urgence",
    "garantie décennale couverture",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Couvreur Professionnel Île-de-France`,
    description: "Couvreur professionnel certifié RGE en Île-de-France. Devis gratuit, garantie décennale.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Couvreur professionnel`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Couvreur Île-de-France`,
    description: "Couvreur professionnel certifié RGE. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: COMPANY.website,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.postalCode,
      addressRegion: COMPANY.address.region,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.address.lat,
      longitude: COMPANY.address.lng,
    },
    priceRange: COMPANY.priceRange,
    areaServed: [
      "Paris",
      "Hauts-de-Seine",
      "Val-de-Marne",
      "Essonne",
      "Yvelines",
      "Seine-et-Marne",
      "Val-d'Oise",
      "Seine-Saint-Denis",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.aggregateRating.ratingValue,
      reviewCount: COMPANY.aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    hasCredential: ["RGE", "Qualibat"],
  }

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Puter.js — Nano Banana (Gemini image generation, no API key required) */}
        <script src="https://js.puter.com/v2/" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
