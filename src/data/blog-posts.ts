import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "comment-savoir-si-votre-toiture-a-besoin-renovation",
    title: "Comment Savoir si Votre Toiture a Besoin d'une Rénovation",
    excerpt:
      "Infiltrations, tuiles déplacées, mousses envahissantes… Les signaux d'alerte d'une toiture vieillissante et comment y répondre.",
    category: "Conseils",
    author: "Jean-Paul Moreau",
    publishDate: "2024-11-15",
    readingTime: 6,
    featuredImage: "/images/projects/grid-renovation.png",
    tags: ["rénovation", "diagnostic", "entretien"],
    content: [
      {
        type: "paragraph",
        content:
          "Une toiture en bon état est la première protection de votre maison contre les intempéries. Pourtant, beaucoup de propriétaires attendent les premières infiltrations pour s'en préoccuper. Or, à ce stade, les dégâts sont souvent importants et les réparations beaucoup plus coûteuses.",
      },
      {
        type: "heading",
        content: "Les 5 Signes qui Ne Trompent Pas",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Des taches d'humidité apparaissent au plafond ou dans les combles",
          "Des tuiles ou ardoises sont manquantes, cassées ou déplacées",
          "La mousse et les lichens recouvrent une grande partie de la toiture",
          "Les gouttières débordent régulièrement ou se décrochent",
          "L'âge de votre toiture dépasse 20-25 ans sans rénovation",
        ],
      },
      {
        type: "paragraph",
        content:
          "Si vous observez l'un ou plusieurs de ces signes, il est temps de faire appel à un couvreur professionnel pour un diagnostic complet. Un bilan précoce peut éviter des réparations d'urgence beaucoup plus onéreuses.",
      },
    ],
  },
  {
    id: "2",
    slug: "ardoise-tuiles-zinc-quel-materiau-choisir",
    title: "Ardoise, Tuiles ou Zinc : Quel Matériau Choisir pour Votre Toiture ?",
    excerpt:
      "Comparatif complet des trois grands matériaux de couverture : durabilité, esthétique, coût et adaptabilité à votre maison.",
    category: "Matériaux",
    author: "Jean-Paul Moreau",
    publishDate: "2024-10-02",
    readingTime: 8,
    featuredImage: "/images/projects/grid-couverture.png",
    tags: ["ardoise", "tuiles", "zinc", "matériaux"],
    content: [
      {
        type: "paragraph",
        content:
          "Le choix du matériau de couverture est une décision importante qui engage votre maison pour plusieurs décennies. Chaque matériau a ses qualités propres, et le bon choix dépend de nombreux facteurs : style architectural, localisation géographique, budget et préférences esthétiques.",
      },
      {
        type: "heading",
        content: "L'Ardoise Naturelle : l'Élégance Intemporelle",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'ardoise naturelle, extraite principalement en Anjou et en Espagne, est le matériau roi des toitures haussmanniennes et des demeures de prestige. Sa durée de vie peut dépasser 100 ans, et sa résistance aux cycles gel/dégel est exceptionnelle. Son coût élevé est compensé par sa longévité remarquable.",
      },
    ],
  },
  {
    id: "3",
    slug: "isolation-combles-maprimerénov-guide-complet",
    title: "Isolation des Combles et MaPrimeRénov' : Le Guide Complet 2025",
    excerpt:
      "Tout ce qu'il faut savoir sur les aides financières pour l'isolation de vos combles : montants, conditions d'éligibilité et démarches.",
    category: "Aides & Financement",
    author: "Karim Benali",
    publishDate: "2025-01-08",
    readingTime: 10,
    featuredImage: "/images/projects/service-isolation.png",
    tags: ["isolation", "MaPrimeRénov", "aides", "économies d'énergie"],
    content: [
      {
        type: "paragraph",
        content:
          "L'isolation des combles est l'un des travaux de rénovation énergétique les plus rentables : jusqu'à 30% d'économies sur la facture de chauffage pour un investissement qui peut être largement subventionné. Voici tout ce qu'il faut savoir pour profiter des aides en 2025.",
      },
      {
        type: "heading",
        content: "MaPrimeRénov' : Qui Peut en Bénéficier ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "MaPrimeRénov' est accessible à tous les propriétaires occupants et bailleurs, quelle que soit leur situation financière. Le montant de l'aide varie selon le revenu fiscal de référence du foyer et la performance des travaux réalisés. Un couvreur certifié RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier de l'aide.",
      },
    ],
  },
  {
    id: "4",
    slug: "entretien-preventif-toiture-programme-annuel",
    title: "Entretien Préventif de Toiture : Votre Programme Annuel",
    excerpt:
      "Un calendrier d'entretien simple pour préserver votre toiture et anticiper les problèmes avant qu'ils ne deviennent coûteux.",
    category: "Entretien",
    author: "Jean-Paul Moreau",
    publishDate: "2024-09-12",
    readingTime: 5,
    featuredImage: "/images/projects/service-demoussage.png",
    tags: ["entretien", "prévention", "calendrier"],
    content: [
      {
        type: "paragraph",
        content:
          "Comme votre voiture, votre toiture bénéficie d'un entretien régulier. Un programme de maintenance préventive simple peut doubler la durée de vie de votre couverture et vous épargner des réparations d'urgence coûteuses.",
      },
    ],
  },
  {
    id: "5",
    slug: "zinguerie-role-importance-toiture",
    title: "La Zinguerie : Rôle et Importance dans l'Étanchéité de Votre Toiture",
    excerpt:
      "Gouttières, chéneaux, solins, noues… La zinguerie est souvent méconnue mais joue un rôle crucial dans la protection de votre maison.",
    category: "Technique",
    author: "Théo Lambert",
    publishDate: "2024-08-20",
    readingTime: 7,
    featuredImage: "/images/projects/grid-zinguerie.png",
    tags: ["zinguerie", "gouttières", "étanchéité", "technique"],
    content: [
      {
        type: "paragraph",
        content:
          "La zinguerie désigne l'ensemble des ouvrages métalliques qui assurent l'évacuation des eaux pluviales et l'étanchéité des jonctions de votre toiture. Souvent négligée, elle est pourtant la première ligne de défense contre les infiltrations.",
      },
    ],
  },
  {
    id: "6",
    slug: "depannage-toiture-urgence-que-faire",
    title: "Dépannage Toiture d'Urgence : Que Faire en Cas de Dégât ?",
    excerpt:
      "Tempête, fuite soudaine, tuile arrachée : les bons réflexes à avoir et comment limiter les dégâts en attendant l'intervention d'un couvreur.",
    category: "Urgence",
    author: "Karim Benali",
    publishDate: "2024-12-05",
    readingTime: 4,
    featuredImage: "/images/projects/service-depannage.png",
    tags: ["urgence", "dépannage", "tempête", "assurance"],
    content: [
      {
        type: "paragraph",
        content:
          "Une tuile arrachée par le vent, une fuite qui apparaît soudainement après une forte pluie — face à une urgence toiture, chaque heure compte. Voici les actions à mener en priorité pour limiter les dégâts en attendant l'intervention d'un couvreur.",
      },
    ],
  },
  {
    id: "7",
    slug: "renovation-toiture-patrimoine-contraintes",
    title: "Rénover une Toiture sur Bâtiment Classé : Contraintes et Solutions",
    excerpt:
      "ABF, DRAC, Monuments Historiques… La rénovation de toiture sur bâtiment patrimonial impose des contraintes spécifiques. Notre guide complet.",
    category: "Patrimoine",
    author: "Jean-Paul Moreau",
    publishDate: "2024-07-18",
    readingTime: 9,
    featuredImage: "/images/projects/artisan-ardoise.png",
    tags: ["patrimoine", "ABF", "ardoise", "monuments historiques"],
    content: [
      {
        type: "paragraph",
        content:
          "Rénover la toiture d'une maison ancienne dans un périmètre protégé est un projet qui demande une expertise spécifique et une connaissance approfondie des réglementations patrimoniales. Chez Toitures Prestige, nous accompagnons régulièrement des propriétaires dans ces projets exigeants.",
      },
    ],
  },
  {
    id: "8",
    slug: "toiture-terrasse-etancheite-solutions",
    title: "Toiture-Terrasse : Solutions d'Étanchéité et Entretien",
    excerpt:
      "Les toitures-terrasses nécessitent une attention particulière. Découvrez les meilleures solutions d'étanchéité et les conseils d'entretien.",
    category: "Technique",
    author: "Théo Lambert",
    publishDate: "2024-06-03",
    readingTime: 6,
    featuredImage: "/images/projects/service-couverture-neuve.png",
    tags: ["toiture-terrasse", "étanchéité", "membrane", "entretien"],
    content: [
      {
        type: "paragraph",
        content:
          "Les toitures-terrasses offrent un espace de vie supplémentaire mais requièrent une étanchéité parfaite pour éviter les infiltrations. Les technologies modernes permettent aujourd'hui d'allier durabilité et esthétique pour ce type de couverture.",
      },
    ],
  },
];
