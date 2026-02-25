import type { Project } from "@/types";
import { clientConfig } from "@/config/client.config";

export const projects: Project[] = [
  {
    id: "demenagement-local-1",
    slug: "demenagement-appartement-centre-ville",
    title: `Déménagement Appartement — ${clientConfig.VILLE} Centre`,
    shortDescription:
      "Déménagement complet d'un appartement T4 en centre-ville, avec emballage professionnel et monte-meuble pour les meubles volumineux.",
    fullDescription:
      "Prise en charge intégrale du déménagement d'un appartement T4 situé au 4e étage sans ascenseur. Notre équipe a assuré l'emballage de l'ensemble du mobilier, le démontage des meubles encombrants, l'utilisation d'un monte-meuble pour les pièces impossibles à descendre par l'escalier, et l'installation complète dans le nouveau logement situé en périphérie.",
    challenge:
      "Appartement au 4e étage sans ascenseur, escalier étroit en colimaçon. Meubles volumineux (bibliothèque sur mesure, piano droit) impossibles à faire passer par la cage d'escalier.",
    solution:
      "Utilisation d'un monte-meuble depuis la rue avec autorisation de stationnement obtenue en amont. Démontage partiel de la bibliothèque sur mesure avec repérage photographique pour remontage à l'identique. Protection renforcée du piano avec housse capitonnée.",
    category: "demenagement-local",
    featuredImage: "/images/projects/ardoise-paris-1.png",
    images: [
      "/images/projects/ardoise-paris-1.png",
      "/images/projects/ardoise-paris-2.png",
      "/images/projects/ardoise-paris-3.png",
    ],
    beforeImage: "/images/projects/p1-before.jpg",
    afterImage: "/images/projects/p1-after.jpg",
    surface: "85 m²",
    duration: "1 journée",
    location: `${clientConfig.VILLE} Centre`,
    year: 2024,
    featured: true,
    services: ["demenagement-local", "monte-meuble"],
  },
  {
    id: "longue-distance-1",
    slug: "demenagement-longue-distance-maison",
    title: `Déménagement Longue Distance — Maison Familiale`,
    shortDescription:
      "Déménagement complet d'une maison familiale de 5 pièces vers une autre région, avec garde-meuble temporaire et suivi en temps réel.",
    fullDescription:
      "Organisation complète du déménagement d'une maison familiale de 120 m² vers une autre région. Le projet a nécessité une phase de garde-meuble de 3 semaines entre la vente de l'ancien logement et la remise des clés du nouveau. Emballage intégral par nos soins, transport sur 450 km en camion dédié, et installation complète à l'arrivée.",
    challenge:
      "Décalage de 3 semaines entre la date de départ et la date d'emménagement. Collection de vins à conserver dans des conditions optimales. Objets fragiles nombreux (verrerie, porcelaine ancienne).",
    solution:
      "Mise à disposition d'un box de garde-meuble climatisé pour les 3 semaines intermédiaires. Caisse isotherme spéciale pour la collection de vins. Double emballage avec papier de soie et cartons renforcés pour les objets fragiles.",
    category: "longue-distance",
    featuredImage: "/images/projects/tuiles-rambouillet-1.png",
    images: [
      "/images/projects/tuiles-rambouillet-1.png",
      "/images/projects/tuiles-rambouillet-2.png",
      "/images/projects/tuiles-rambouillet-3.png",
    ],
    beforeImage: "/images/projects/p2-before.jpg",
    afterImage: "/images/projects/p2-after.jpg",
    surface: "120 m²",
    duration: "2 jours",
    location: `${clientConfig.VILLE} → Autre région`,
    year: 2023,
    featured: true,
    services: ["longue-distance", "garde-meuble"],
  },
  {
    id: "monte-meuble-1",
    slug: "monte-meuble-immeuble-haussmannien",
    title: `Monte-Meuble — Immeuble Ancien`,
    shortDescription:
      "Opération de monte-meuble pour l'acheminement de mobilier volumineux dans un appartement au 6e étage d'un immeuble ancien sans ascenseur.",
    fullDescription:
      "Intervention de notre équipe monte-meuble pour livrer et installer un mobilier complet dans un appartement au 6e étage d'un immeuble haussmannien. L'escalier en colimaçon ne permettant pas le passage des pièces les plus volumineuses, l'ensemble a été acheminé par la fenêtre du salon à l'aide de notre nacelle élévatrice.",
    challenge:
      "Rue étroite avec stationnement limité. Fenêtres de dimension réduite nécessitant le démontage partiel de certains meubles. Présence d'un balcon en fer forgé compliquant l'accès.",
    solution:
      "Obtention d'une autorisation de stationnement en amont. Démontage sur mesure des meubles trop larges avec remontage immédiat à l'étage. Utilisation de sangles de protection pour contourner le balcon en toute sécurité.",
    category: "monte-meuble",
    featuredImage: "/images/projects/zinc-versailles-1.png",
    images: [
      "/images/projects/zinc-versailles-1.png",
      "/images/projects/zinc-versailles-2.png",
      "/images/projects/zinc-versailles-3.png",
    ],
    beforeImage: "/images/projects/p3-before.jpg",
    afterImage: "/images/projects/p3-after.jpg",
    surface: "75 m²",
    duration: "1/2 journée",
    location: `${clientConfig.VILLE}`,
    year: 2024,
    featured: true,
    services: ["monte-meuble"],
  },
  {
    id: "garde-meuble-1",
    slug: "garde-meuble-longue-duree",
    title: `Garde-Meuble Longue Durée — Expatriation`,
    shortDescription:
      "Stockage sécurisé du mobilier complet d'une famille en expatriation pendant 18 mois, avec emballage professionnel et inventaire détaillé.",
    fullDescription:
      "Prise en charge complète du mobilier d'une famille partant en expatriation pour 18 mois. Emballage professionnel de l'ensemble des biens, inventaire photographique détaillé de chaque carton et meuble, stockage dans un box sécurisé et climatisé. Restitution intégrale en parfait état au retour de la famille.",
    challenge:
      "Volume important (maison de 150 m² entièrement meublée). Objets de valeur nécessitant des conditions de conservation spécifiques. Durée de stockage longue (18 mois).",
    solution:
      "Attribution d'un box dédié de 40 m³ climatisé. Assurance complémentaire pour les objets de valeur. Inventaire numérique accessible en ligne par le client. Contrôle trimestriel de l'état des biens stockés.",
    category: "garde-meuble",
    featuredImage: "/images/projects/zinguerie-immeuble-1.png",
    images: [
      "/images/projects/zinguerie-immeuble-1.png",
      "/images/projects/zinguerie-immeuble-2.png",
    ],
    surface: "150 m²",
    duration: "18 mois",
    location: `${clientConfig.VILLE}`,
    year: 2023,
    featured: false,
    services: ["garde-meuble", "emballage"],
  },
  {
    id: "emballage-1",
    slug: "emballage-objets-art-fragiles",
    title: `Emballage Spécial — Collection d'Art`,
    shortDescription:
      "Emballage sur mesure et transport d'une collection d'art comprenant tableaux, sculptures et objets fragiles pour un déménagement local.",
    fullDescription:
      "Mission d'emballage spécialisé pour une collection d'art privée comprenant 15 tableaux, 8 sculptures et de nombreux objets décoratifs fragiles. Chaque pièce a fait l'objet d'un conditionnement sur mesure : caisses en bois pour les tableaux, mousse découpée pour les sculptures, papier de soie et bulles pour les objets décoratifs. Transport dans un camion équipé de suspensions pneumatiques.",
    challenge:
      "Œuvres de valeur importante nécessitant une manipulation experte. Formats très variés (du petit bibelot au tableau de 2 m). Contraintes d'assurance spécifiques.",
    solution:
      "Intervention d'un emballeur spécialisé en œuvres d'art. Fabrication de caisses sur mesure dans notre atelier. Transport en camion à suspension pneumatique avec arrimage individuel de chaque pièce. Constat d'état avant et après déménagement.",
    category: "emballage",
    featuredImage: "/images/projects/isolation-combles-1.png",
    images: [
      "/images/projects/isolation-combles-1.png",
      "/images/projects/isolation-combles-2.png",
    ],
    beforeImage: "/images/projects/p4-before.jpg",
    afterImage: "/images/projects/p4-after.jpg",
    surface: "200 m²",
    duration: "2 jours",
    location: `${clientConfig.VILLE}`,
    year: 2023,
    featured: false,
    services: ["emballage", "demenagement-local"],
  },
  {
    id: "bureau-1",
    slug: "demenagement-bureaux-entreprise",
    title: `Déménagement Bureaux — Entreprise 50 Postes`,
    shortDescription:
      "Transfert complet des locaux d'une entreprise de 50 collaborateurs réalisé en un week-end, avec zéro interruption d'activité le lundi.",
    fullDescription:
      "Déménagement intégral des bureaux d'une entreprise de 50 postes de travail, incluant le matériel informatique, le mobilier de bureau, les archives et les espaces communs. L'opération a été planifiée sur un week-end pour garantir la reprise d'activité le lundi matin sans interruption. Chaque poste a été identifié, démonté, transporté et remonté à l'identique dans les nouveaux locaux.",
    challenge:
      "Délai contraint de 48 heures (vendredi soir au dimanche soir). 50 postes informatiques avec câblage réseau à reconnecter. Archives confidentielles nécessitant un transport sécurisé.",
    solution:
      "Planification au poste près avec plan d'implantation des nouveaux locaux. Étiquetage par code couleur de chaque élément. Équipe dédiée informatique pour le débranchement/rebranchement. Transport des archives en caisse scellée avec traçabilité.",
    category: "demenagement-bureau",
    featuredImage: "/images/projects/depannage-urgence-1.png",
    images: [
      "/images/projects/depannage-urgence-1.png",
      "/images/projects/depannage-urgence-2.png",
    ],
    surface: "400 m²",
    duration: "1 week-end",
    location: `${clientConfig.VILLE} et environs`,
    year: 2024,
    featured: false,
    services: ["demenagement-bureau"],
  },
];
