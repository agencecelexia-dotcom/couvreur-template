import type { BlogPost } from "@/types";
import { clientConfig } from "@/config/client.config";

const dirigeant = `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "comment-preparer-son-demenagement",
    title: "Comment Bien Préparer Son Déménagement",
    excerpt:
      "Checklist complète, conseils de tri, calendrier idéal… Tous les réflexes pour un déménagement organisé et sans stress.",
    category: "Conseils",
    author: dirigeant,
    publishDate: "2024-11-15",
    readingTime: 6,
    featuredImage: "/images/projects/grid-renovation.png",
    tags: ["préparation", "organisation", "conseils"],
    content: [
      {
        type: "paragraph",
        content:
          "Un déménagement réussi se prépare en amont. Plus vous anticipez, plus le jour J se déroulera sereinement. Voici les étapes clés pour ne rien oublier et éviter les mauvaises surprises.",
      },
      {
        type: "heading",
        content: "Les 5 Étapes Clés d'un Déménagement Réussi",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Commencer le tri 4 à 6 semaines avant le déménagement",
          "Rassembler les fournitures d'emballage : cartons, papier bulle, adhésif",
          "Étiqueter chaque carton avec son contenu et la pièce de destination",
          "Réserver un stationnement pour le camion le jour J",
          "Faire un état des lieux de sortie et d'entrée",
        ],
      },
      {
        type: "paragraph",
        content:
          "Si vous manquez de temps ou souhaitez un déménagement clé en main, faites appel à un professionnel. Un déménageur expérimenté prend en charge l'ensemble des opérations, de l'emballage au déballage.",
      },
    ],
  },
  {
    id: "2",
    slug: "demenagement-local-vs-longue-distance",
    title: "Déménagement Local vs Longue Distance : Quelles Différences ?",
    excerpt:
      "Logistique, coûts, assurances… Comprendre les spécificités de chaque type de déménagement pour mieux anticiper.",
    category: "Guide",
    author: dirigeant,
    publishDate: "2024-10-02",
    readingTime: 8,
    featuredImage: "/images/projects/grid-couverture.png",
    tags: ["local", "longue distance", "logistique"],
    content: [
      {
        type: "paragraph",
        content:
          "Le choix entre un déménagement local et longue distance impacte directement l'organisation, le budget et les assurances nécessaires. Voici un comparatif pour vous aider à prendre les bonnes décisions.",
      },
      {
        type: "heading",
        content: "Le Déménagement Local : Simplicité et Rapidité",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un déménagement local (moins de 50 km) se réalise généralement en une journée. Les allers-retours sont possibles, ce qui réduit le volume de chargement nécessaire. Le coût est principalement lié au nombre de déménageurs mobilisés et au temps passé.",
      },
    ],
  },
  {
    id: "3",
    slug: "proteger-objets-fragiles-demenagement",
    title: "Comment Protéger Vos Objets Fragiles Pendant un Déménagement",
    excerpt:
      "Vaisselle, électronique, œuvres d'art… Les techniques d'emballage professionnelles pour éviter la casse.",
    category: "Conseils",
    author: "L'équipe",
    publishDate: "2025-01-08",
    readingTime: 10,
    featuredImage: "/images/projects/service-isolation.png",
    tags: ["emballage", "protection", "objets fragiles"],
    content: [
      {
        type: "paragraph",
        content:
          "La casse pendant un déménagement est la hantise de tous. Pourtant, avec les bonnes techniques d'emballage et les matériaux adaptés, il est tout à fait possible de protéger efficacement même les objets les plus fragiles.",
      },
      {
        type: "heading",
        content: "Les Règles d'Or de l'Emballage",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Première règle : ne jamais lésiner sur les matériaux. Du papier bulle en quantité suffisante, des cartons solides à double cannelure, et du papier de soie pour les objets délicats. Deuxième règle : chaque objet fragile doit être emballé individuellement, jamais en contact direct avec un autre.",
      },
    ],
  },
  {
    id: "4",
    slug: "demenagement-entreprise-guide-complet",
    title: "Déménagement d'Entreprise : Le Guide Complet",
    excerpt:
      "Planification, communication interne, matériel informatique… Tout pour réussir le transfert de vos locaux professionnels.",
    category: "Entreprise",
    author: dirigeant,
    publishDate: "2024-09-12",
    readingTime: 5,
    featuredImage: "/images/projects/service-demoussage.png",
    tags: ["entreprise", "bureau", "planification"],
    content: [
      {
        type: "paragraph",
        content:
          "Un déménagement d'entreprise est un projet complexe qui nécessite une planification minutieuse pour minimiser l'impact sur l'activité. De la préparation à la reprise d'activité, voici les étapes essentielles pour un transfert réussi.",
      },
    ],
  },
  {
    id: "5",
    slug: "garde-meuble-comment-choisir",
    title: "Garde-Meuble : Comment Choisir la Bonne Solution de Stockage",
    excerpt:
      "Critères de choix, durée, assurances… Tout ce qu'il faut savoir avant de confier vos biens à un garde-meuble.",
    category: "Guide",
    author: "L'équipe",
    publishDate: "2024-08-20",
    readingTime: 7,
    featuredImage: "/images/projects/grid-zinguerie.png",
    tags: ["garde-meuble", "stockage", "conseils"],
    content: [
      {
        type: "paragraph",
        content:
          "Que ce soit entre deux logements, pour un voyage prolongé ou simplement par manque de place, le garde-meuble est une solution pratique. Mais tous les espaces de stockage ne se valent pas : voici les critères essentiels pour faire le bon choix.",
      },
    ],
  },
  {
    id: "6",
    slug: "monte-meuble-quand-est-ce-necessaire",
    title: "Monte-Meuble : Quand Est-ce Nécessaire et Comment Ça Marche ?",
    excerpt:
      "Étages élevés, escaliers étroits, meubles imposants : découvrez quand et comment utiliser un monte-meuble professionnel.",
    category: "Technique",
    author: "L'équipe",
    publishDate: "2024-12-05",
    readingTime: 4,
    featuredImage: "/images/projects/service-depannage.png",
    tags: ["monte-meuble", "technique", "logistique"],
    content: [
      {
        type: "paragraph",
        content:
          "Un canapé trop large pour l'escalier, un piano au 5e étage, un réfrigérateur américain à monter dans un immeuble ancien… Le monte-meuble est la solution idéale lorsque le passage par les parties communes est impossible ou trop risqué.",
      },
    ],
  },
  {
    id: "7",
    slug: "budget-demenagement-estimer-cout",
    title: "Comment Estimer le Coût de Votre Déménagement",
    excerpt:
      "Volume, distance, services… Les facteurs qui influencent le prix d'un déménagement et comment obtenir un devis juste.",
    category: "Budget",
    author: dirigeant,
    publishDate: "2024-07-18",
    readingTime: 9,
    featuredImage: "/images/projects/artisan-ardoise.png",
    tags: ["budget", "devis", "prix", "estimation"],
    content: [
      {
        type: "paragraph",
        content:
          "Le coût d'un déménagement dépend de nombreux facteurs : le volume de biens à transporter, la distance entre les deux logements, les services complémentaires choisis (emballage, monte-meuble, garde-meuble) et la période de l'année. Voici comment y voir plus clair.",
      },
    ],
  },
  {
    id: "8",
    slug: "checklist-changement-adresse-demenagement",
    title: "Changement d'Adresse : La Checklist Complète Après un Déménagement",
    excerpt:
      "Administrations, banque, assurances, abonnements… Toutes les démarches à effectuer après votre déménagement.",
    category: "Pratique",
    author: "L'équipe",
    publishDate: "2024-06-03",
    readingTime: 6,
    featuredImage: "/images/projects/service-couverture-neuve.png",
    tags: ["adresse", "administration", "checklist", "démarches"],
    content: [
      {
        type: "paragraph",
        content:
          "Une fois installé dans votre nouveau logement, il reste encore de nombreuses démarches administratives à effectuer. Voici la liste complète pour ne rien oublier et être en règle rapidement.",
      },
    ],
  },
];
