import type { Stat, Certification, Zone } from "@/types"

export const COMPANY = {
  name: "Couverture Pro",
  legalName: "Couverture Pro SARL",
  siret: "XXX XXX XXX 00012",
  address: {
    street: "12 rue des Artisans",
    city: "Évry-Courcouronnes",
    postalCode: "91000",
    department: "Essonne",
    region: "Île-de-France",
    country: "FR",
    lat: 48.6290,
    lng: 2.4499,
  },
  phone: "+33 1 XX XX XX XX",
  phoneMobile: "+33 6 XX XX XX XX",
  email: "contact@couverture-pro.fr",
  emailDevis: "devis@couverture-pro.fr",
  website: "https://www.couverture-pro.fr",
  social: {
    facebook: "https://facebook.com/couverturepro",
    instagram: "https://instagram.com/couverturepro",
    googleBusiness: "https://g.page/couverturepro",
  },
  hours: {
    weekdays: "7h30 - 18h00",
    saturday: "8h00 - 13h00",
    sunday: "Fermé",
    emergency: "Urgences 6j/7",
  },
  founding: 2008,
  yearsExperience: 17,
  priceRange: "€€",
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "143",
  },
}

export const STATS: Stat[] = [
  { value: "17", label: "ans d'expérience", icon: "Award" },
  { value: "850+", label: "chantiers réalisés", icon: "Home" },
  { value: "4.9/5", label: "satisfaction client", icon: "Star" },
  { value: "48h", label: "délai d'intervention max", icon: "Clock" },
]

export const CERTIFICATIONS: Certification[] = [
  {
    id: "rge",
    name: "Certification RGE",
    description:
      "Reconnu Garant de l'Environnement. Cette certification vous permet de bénéficier des aides de l'État (MaPrimeRénov, CEE) pour vos travaux d'isolation.",
    logo: "/images/certifications/rge.svg",
    url: "https://www.faire.gouv.fr",
  },
  {
    id: "qualibat",
    name: "Qualibat",
    description:
      "Certification professionnelle attestant de la compétence, du sérieux et de la solidité financière de notre entreprise.",
    logo: "/images/certifications/qualibat.svg",
    url: "https://www.qualibat.com",
  },
  {
    id: "garantie-decennale",
    name: "Garantie Décennale",
    description:
      "Tous nos travaux sont couverts par une assurance décennale. Vous êtes protégé pendant 10 ans contre les dommages affectant la solidité de l'ouvrage.",
    logo: "/images/certifications/decennale.svg",
  },
  {
    id: "pro-btp",
    name: "Pro BTP",
    description:
      "Membre de Pro BTP, la référence en matière de protection sociale dans le secteur du bâtiment et des travaux publics.",
    logo: "/images/certifications/probtp.svg",
  },
]

export const ZONES: Zone[] = [
  { name: "Paris", slug: "paris", department: "Paris", postalCode: "75" },
  { name: "Versailles", slug: "versailles", department: "Yvelines", postalCode: "78" },
  { name: "Évry-Courcouronnes", slug: "evry", department: "Essonne", postalCode: "91" },
  { name: "Créteil", slug: "creteil", department: "Val-de-Marne", postalCode: "94" },
  { name: "Pontoise", slug: "pontoise", department: "Val-d'Oise", postalCode: "95" },
  { name: "Massy", slug: "massy", department: "Essonne", postalCode: "91" },
  { name: "Fontainebleau", slug: "fontainebleau", department: "Seine-et-Marne", postalCode: "77" },
  { name: "Rambouillet", slug: "rambouillet", department: "Yvelines", postalCode: "78" },
  { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", department: "Hauts-de-Seine", postalCode: "92" },
  { name: "Vincennes", slug: "vincennes", department: "Val-de-Marne", postalCode: "94" },
  { name: "Saint-Denis", slug: "saint-denis", department: "Seine-Saint-Denis", postalCode: "93" },
  { name: "Melun", slug: "melun", department: "Seine-et-Marne", postalCode: "77" },
]
