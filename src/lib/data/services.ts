import type { Service } from "@/types"

export const SERVICES: Service[] = [
  {
    id: "renovation-toiture",
    slug: "renovation-toiture",
    title: "Rénovation de Toiture",
    shortDescription: "Réfection complète de votre toiture avec matériaux de qualité et garantie décennale.",
    fullDescription:
      "La rénovation de toiture est une opération majeure qui demande savoir-faire et expertise. Notre équipe intervient sur tous types de toitures : tuiles terre cuite, ardoise naturelle, zinc. Nous réalisons un diagnostic complet avant chaque chantier pour vous proposer la solution la plus adaptée à votre bâtiment et votre budget.",
    icon: "Home",
    features: [
      "Diagnostic complet préalable",
      "Remplacement des tuiles/ardoises endommagées",
      "Traitement de la charpente si nécessaire",
      "Pose des sous-toitures et pare-vapeur",
      "Nettoyage complet du chantier",
    ],
    benefits: [
      "Garantie décennale incluse",
      "Économies d'énergie (meilleure isolation)",
      "Protection durable contre les intempéries",
      "Valorisation de votre bien immobilier",
    ],
    priceRange: "80 - 180 € / m²",
    duration: "3 à 10 jours selon surface",
    image: "/images/services/renovation-toiture.jpg",
    category: "couverture",
  },
  {
    id: "couverture-neuve",
    slug: "couverture-neuve",
    title: "Couverture Neuve",
    shortDescription: "Installation complète de toiture pour constructions neuves, de la charpente au faîtage.",
    fullDescription:
      "Pour votre construction neuve, nous réalisons l'intégralité de votre couverture : du support de toiture aux finitions. Nous maîtrisons tous les matériaux de couverture traditionnels et modernes. Chaque projet fait l'objet d'un plan d'exécution détaillé validé avec l'architecte ou le maître d'œuvre.",
    icon: "Building2",
    features: [
      "Étude technique et plan d'exécution",
      "Pose de la sous-toiture et lattage",
      "Couverture en tuiles, ardoise ou zinc",
      "Zinguerie complète (arêtiers, faîtage)",
      "Réception avec contrôle de conformité",
    ],
    benefits: [
      "Respect des DTU et normes en vigueur",
      "Garantie décennale obligatoire",
      "Coordination avec les autres corps d'état",
      "Suivi de chantier personnalisé",
    ],
    priceRange: "100 - 200 € / m²",
    duration: "1 à 4 semaines selon projet",
    image: "/images/services/couverture-neuve.jpg",
    category: "couverture",
  },
  {
    id: "zinguerie",
    slug: "zinguerie",
    title: "Zinguerie",
    shortDescription: "Gouttières, chéneaux, habillage de cheminée et noues en zinc ou acier galvanisé.",
    fullDescription:
      "La zinguerie est un élément essentiel de votre toiture. Elle assure l'évacuation des eaux pluviales et protège les points sensibles de votre maison. Nous intervenons pour l'installation, le remplacement ou la réparation de tous les ouvrages de zinguerie : gouttières, chéneaux, descentes d'eau, noues, habillages de cheminées.",
    icon: "Droplets",
    features: [
      "Gouttières pendantes et filantes",
      "Chéneaux encaissés",
      "Descentes d'eau pluviale",
      "Noues et arêtiers en zinc",
      "Habillage et solin de cheminées",
    ],
    benefits: [
      "Protection optimale des murs et fondations",
      "Matériaux durables (zinc, aluminium, PVC)",
      "Esthétique soignée",
      "Intervention rapide",
    ],
    priceRange: "30 - 80 € / ml",
    duration: "1 à 3 jours",
    image: "/images/services/zinguerie.jpg",
    category: "zinguerie",
  },
  {
    id: "isolation-toiture",
    slug: "isolation-toiture",
    title: "Isolation de Toiture",
    shortDescription: "Isolation par l'intérieur ou l'extérieur (sarking) pour des économies d'énergie optimales.",
    fullDescription:
      "30% des déperditions thermiques d'une maison passent par la toiture. Notre expertise en isolation vous permet de réduire significativement votre facture énergétique. Nous proposons deux techniques : l'isolation par l'intérieur (sous la charpente) et l'isolation par l'extérieur ou sarking (plus performant, éligible MaPrimeRénov).",
    icon: "Thermometer",
    features: [
      "Audit thermique préalable",
      "Isolation par l'intérieur (laine de verre, roche)",
      "Isolation par l'extérieur sarking",
      "Pare-vapeur et étanchéité à l'air",
      "Dossier MaPrimeRénov pris en charge",
    ],
    benefits: [
      "Éligible MaPrimeRénov et CEE",
      "Réduction des factures jusqu'à 30%",
      "Confort thermique été/hiver",
      "Certification RGE garantie",
    ],
    priceRange: "60 - 150 € / m²",
    duration: "2 à 7 jours",
    image: "/images/services/isolation-toiture.jpg",
    category: "isolation",
  },
  {
    id: "demoussage",
    slug: "demoussage",
    title: "Démoussage & Entretien",
    shortDescription: "Nettoyage, démoussage et traitement hydrofuge pour prolonger la vie de votre toiture.",
    fullDescription:
      "Un entretien régulier de votre toiture peut doubler sa durée de vie. Nous proposons des prestations complètes d'entretien : nettoyage haute pression, démoussage professionnel, application de traitement hydrofuge et vérification des points sensibles (solins, faîtage, arêtiers). Un devis gratuit et un rapport photos sont fournis après chaque intervention.",
    icon: "Sparkles",
    features: [
      "Nettoyage haute pression (Karcher)",
      "Application d'herbicide anti-mousse",
      "Traitement hydrofuge longue durée",
      "Vérification et remplacement des tuiles",
      "Rapport photos avant/après",
    ],
    benefits: [
      "Durée de vie toiture prolongée",
      "Prévention des infiltrations",
      "Esthétique retrouvée",
      "Tarifs accessibles",
    ],
    priceRange: "15 - 35 € / m²",
    duration: "1 à 2 jours",
    image: "/images/services/demoussage.jpg",
    category: "entretien",
  },
  {
    id: "depannage",
    slug: "depannage",
    title: "Dépannage Urgent",
    shortDescription: "Intervention rapide pour toutes fuites, tuiles cassées et urgences toiture en Île-de-France.",
    fullDescription:
      "Une fuite d'eau, des tuiles arrachées par le vent, des dégâts après un orage ? Notre équipe intervient en urgence dans toute l'Île-de-France. Nous prenons en charge l'ensemble de votre sinistre : de l'intervention d'urgence au rapport pour votre assurance, en passant par les réparations définitives.",
    icon: "Zap",
    features: [
      "Intervention sous 24h en semaine",
      "Bâchage d'urgence si nécessaire",
      "Remplacement de tuiles cassées",
      "Réparation de fuites ponctuelles",
      "Rapport sinistre pour assurance",
    ],
    benefits: [
      "Disponible 6j/7",
      "Intervention rapide garanti",
      "Prise en charge assurance facilitée",
      "Devis immédiat sur place",
    ],
    priceRange: "Sur devis",
    duration: "Intervention J+1 garantie",
    image: "/images/services/depannage.jpg",
    category: "urgence",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
