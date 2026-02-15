import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "couverture-neuve",
    slug: "couverture-neuve",
    title: "Couverture Neuve",
    shortDescription:
      "Pose et installation de toitures neuves en ardoise, tuiles ou zinc pour constructions neuves et extensions.",
    fullDescription:
      "Notre équipe de couvreurs qualifiés réalise la pose de couvertures neuves dans les règles de l'art. Ardoise naturelle, tuiles terre cuite ou béton, zinc prépatiné — nous maîtrisons tous les matériaux nobles pour créer une toiture à la fois esthétique, durable et parfaitement étanche. Chaque chantier bénéficie d'un suivi rigoureux et d'une garantie décennale.",
    features: [
      "Étude technique personnalisée",
      "Ardoise naturelle et tuiles de qualité",
      "Pose dans les règles de l'art",
      "Réalisation clé en main",
      "Garantie décennale",
    ],
    image: "/images/services/couverture-neuve.jpg",
    icon: "home",
    order: 1,
  },
  {
    id: "renovation-toiture",
    slug: "renovation-de-toiture",
    title: "Rénovation de Toiture",
    shortDescription:
      "Rénovation complète ou partielle de votre toiture pour lui redonner étanchéité, solidité et beauté.",
    fullDescription:
      "Une toiture vieillissante est une source de problèmes : infiltrations, pertes thermiques, détérioration de la charpente. Nos experts diagnostiquent l'état de votre toiture et proposent des solutions de rénovation adaptées. Du simple remplacement de tuiles cassées à la réfection totale, nous intervenons avec précision pour prolonger la durée de vie de votre couverture.",
    features: [
      "Diagnostic complet de toiture",
      "Remplacement sélectif ou total",
      "Traitement de la charpente",
      "Reprise de l'étanchéité",
      "Rapport d'intervention détaillé",
    ],
    image: "/images/services/renovation-toiture.jpg",
    icon: "wrench",
    order: 2,
  },
  {
    id: "zinguerie",
    slug: "zinguerie",
    title: "Zinguerie",
    shortDescription:
      "Travaux de zinguerie : gouttières, chéneaux, fenêtres de toit, solins et évacuations des eaux pluviales.",
    fullDescription:
      "La zinguerie est l'art de travailler le zinc, le cuivre et le plomb pour assurer l'étanchéité et l'évacuation des eaux pluviales. Nos zingueurs façonnent et posent tous les éléments d'habillage de toiture : gouttières, chéneaux, lucarnes, noues, faîtages et solins. Un travail de précision qui garantit la longévité de votre toiture.",
    features: [
      "Gouttières et chéneaux sur mesure",
      "Pose de fenêtres de toit",
      "Réalisation de noues et de solins",
      "Raccordement cheminées et lucarnes",
      "Zinc, cuivre et plomb",
    ],
    image: "/images/services/zinguerie.jpg",
    icon: "droplets",
    order: 3,
  },
  {
    id: "isolation-combles",
    slug: "isolation-des-combles",
    title: "Isolation des Combles",
    shortDescription:
      "Isolation thermique et phonique des combles perdus ou aménagés pour réduire votre facture énergétique.",
    fullDescription:
      "30% des pertes thermiques d'une maison passent par le toit. Nos spécialistes en isolation des combles vous proposent des solutions performantes : insufflation de ouate de cellulose, pose de laine de roche ou de verre, panneaux rigides pour combles aménageables. Bénéficiez d'un confort amélioré et d'économies d'énergie durables.",
    features: [
      "Bilan thermique gratuit",
      "Isolation soufflée ou en rouleaux",
      "Matériaux certifiés et durables",
      "Éligibilité aux aides MaPrimeRénov'",
      "Amélioration DPE garantie",
    ],
    image: "/images/services/isolation-toiture.jpg",
    icon: "thermometer",
    order: 4,
  },
  {
    id: "depannage-urgence",
    slug: "depannage-urgence",
    title: "Dépannage d'Urgence",
    shortDescription:
      "Intervention rapide 7j/7 pour toute fuite de toiture, tuile cassée ou dégât des eaux suite à une tempête.",
    fullDescription:
      "Une tempête, une tuile arrachée, une fuite soudaine — chaque minute compte. Nos équipes d'intervention rapide se déplacent dans toute l'Île-de-France pour stopper les infiltrations et sécuriser votre toiture. Bâchage d'urgence, remplacement de tuiles, réparation de faîtage : nous intervenons dans les plus brefs délais pour limiter les dégâts.",
    features: [
      "Intervention sous 24h",
      "Disponible 7 jours sur 7",
      "Bâchage d'urgence",
      "Rapport pour assurance",
      "Devis immédiat sur place",
    ],
    image: "/images/services/depannage.jpg",
    icon: "zap",
    order: 5,
  },
  {
    id: "demoussage-nettoyage",
    slug: "demoussage-et-nettoyage",
    title: "Démoussage & Nettoyage",
    shortDescription:
      "Nettoyage haute pression et traitement hydrofuge de votre toiture pour éliminer mousses, lichens et salissures.",
    fullDescription:
      "Les mousses et lichens dégradent progressivement vos tuiles et ardoises, favorisant les infiltrations. Notre service de démoussage combine nettoyage haute pression et traitement préventif hydrofuge pour retrouver une toiture propre et protégée. Un entretien régulier qui prolonge significativement la durée de vie de votre couverture.",
    features: [
      "Nettoyage haute pression maîtrisé",
      "Traitement anti-mousse longue durée",
      "Application d'hydrofuge protecteur",
      "Respect des matériaux",
      "Résultat garanti 5 ans",
    ],
    image: "/images/services/demoussage.jpg",
    icon: "sparkles",
    order: 6,
  },
];
