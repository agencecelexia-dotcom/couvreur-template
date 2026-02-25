import type { Service } from "@/types";
import { clientConfig } from "@/config/client.config";

export const services: Service[] = [
  {
    id: "demenagement-local",
    slug: "demenagement-local",
    title: clientConfig.SERVICE_1_TITRE,
    shortDescription: clientConfig.SERVICE_1_DESC,
    fullDescription:
      "Notre equipe prend en charge l'integralite de votre demenagement local : protection du mobilier, demontage et remontage des meubles, chargement et dechargement du camion, transport securise et installation dans votre nouveau logement. Nous intervenons avec le plus grand soin pour que votre demenagement se deroule en toute serenite.",
    features: [
      "Emballage et protection du mobilier",
      "Demontage et remontage des meubles",
      "Chargement et dechargement soigneux",
      "Transport securise avec vehicules adaptes",
      "Installation complete dans le nouveau logement",
    ],
    image: "/images/services/couverture-neuve.jpg",
    icon: "truck",
    order: 1,
  },
  {
    id: "longue-distance",
    slug: "demenagement-longue-distance",
    title: clientConfig.SERVICE_2_TITRE,
    shortDescription: clientConfig.SERVICE_2_DESC,
    fullDescription:
      "Nous organisons votre demenagement longue distance avec une logistique rigoureuse. Planification detaillee, emballage professionnel, transport securise et suivi en temps reel de vos biens. Que ce soit vers une autre region ou a travers tout le pays, nous garantissons un demenagement sans stress avec respect des delais annonces.",
    features: [
      "Planification detaillee du trajet",
      "Emballage renforce pour longue distance",
      "Suivi en temps reel de vos biens",
      "Assurance transport tous risques",
      "Respect strict des delais",
    ],
    image: "/images/services/renovation-toiture.jpg",
    icon: "map",
    order: 2,
  },
  {
    id: "monte-meuble",
    slug: "monte-meuble",
    title: clientConfig.SERVICE_3_TITRE,
    shortDescription: clientConfig.SERVICE_3_DESC,
    fullDescription:
      "Notre service de monte-meuble professionnel permet d'acheminer vos biens les plus volumineux ou les plus lourds par l'exterieur de votre immeuble. Ideal pour les acces difficiles, les escaliers etroits ou les etages eleves, notre equipement derniere generation garantit une operation rapide et securisee.",
    features: [
      "Equipement adapte a tous types d'immeubles",
      "Prise en charge des meubles volumineux",
      "Intervention rapide et securisee",
      "Acces par l'exterieur jusqu'au 12e etage",
      "Operateurs qualifies et experimentes",
    ],
    image: "/images/services/zinguerie.jpg",
    icon: "crane",
    order: 3,
  },
  {
    id: "garde-meuble",
    slug: "garde-meuble",
    title: clientConfig.SERVICE_4_TITRE,
    shortDescription: clientConfig.SERVICE_4_DESC,
    fullDescription:
      "Besoin de stocker vos affaires temporairement ? Notre service de garde-meuble vous propose des espaces de stockage securises et climatises. Surveillance 24h/24, acces facile et conditions de conservation optimales pour vos biens, que ce soit pour quelques jours ou plusieurs mois.",
    features: [
      "Espaces securises et climatises",
      "Surveillance video 24h/24",
      "Acces flexible a vos biens",
      "Conditions de conservation optimales",
      "Formules courte et longue duree",
    ],
    image: "/images/services/isolation-toiture.jpg",
    icon: "warehouse",
    order: 4,
  },
  {
    id: "emballage",
    slug: "emballage-et-protection",
    title: clientConfig.SERVICE_5_TITRE,
    shortDescription: clientConfig.SERVICE_5_DESC,
    fullDescription:
      "Notre service d'emballage professionnel assure la protection de tous vos biens, des plus fragiles aux plus volumineux. Nous utilisons des materiaux de qualite superieure (cartons renforces, papier bulle, couvertures de protection) et des techniques eprouvees pour garantir que chaque objet arrive en parfait etat.",
    features: [
      "Materiaux d'emballage haut de gamme",
      "Protection speciale objets fragiles",
      "Emballage sur mesure pour oeuvres d'art",
      "Inventaire detaille de chaque carton",
      "Deballage et mise en place a l'arrivee",
    ],
    image: "/images/services/depannage.jpg",
    icon: "package",
    order: 5,
  },
  {
    id: "demenagement-bureau",
    slug: "demenagement-bureau-et-professionnel",
    title: clientConfig.SERVICE_6_TITRE,
    shortDescription: clientConfig.SERVICE_6_DESC,
    fullDescription:
      "Nous comprenons les enjeux d'un demenagement d'entreprise : minimiser l'interruption d'activite, proteger le materiel informatique et les archives, respecter les delais serres. Notre equipe planifie chaque etape avec precision pour un transfert fluide de vos locaux professionnels.",
    features: [
      "Planification minutieuse hors heures ouvrables",
      "Protection du materiel informatique",
      "Gestion des archives et documents",
      "Intervention week-end et jours feries",
      "Interlocuteur dedie pour votre projet",
    ],
    image: "/images/services/demoussage.jpg",
    icon: "building",
    order: 6,
  },
];
