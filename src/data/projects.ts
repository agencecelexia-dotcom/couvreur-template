import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ardoise-paris-16",
    slug: "ardoise-naturelle-paris-16",
    title: "Toiture Ardoise Naturelle — Paris 16e",
    shortDescription:
      "Réfection intégrale d'une toiture en ardoise naturelle d'Angers sur hôtel particulier haussmannien, avec zinguerie en plomb naturel.",
    fullDescription:
      "Notre équipe a réalisé la réfection intégrale de la toiture d'un hôtel particulier du début du XXe siècle. Le défi : respecter l'architecture haussmannienne classée tout en intégrant une isolation thermique performante. Nous avons posé 2 800 ardoises naturelles d'Angers, triées à la main pour garantir une homogénéité parfaite de teinte et d'épaisseur. La zinguerie des chéneaux et des lucarnes a été réalisée en plomb naturel, conformément aux prescriptions des Monuments Historiques.",
    challenge:
      "Travail en site occupé avec contraintes ABF (Architecte des Bâtiments de France). Accès limité par échafaudage sur voie publique nécessitant des autorisations préfectorales. Respect strict des matériaux d'origine imposé par la DRAC.",
    solution:
      "Coordination étroite avec les autorités patrimoniales, sélection minutieuse des ardoises d'Angers pour l'homogénéité de teinte, organisation du chantier en phases successives pour minimiser la gêne des occupants.",
    category: "ardoise",
    featuredImage: "/images/projects/ardoise-paris-1.png",
    images: [
      "/images/projects/ardoise-paris-1.png",
      "/images/projects/ardoise-paris-2.png",
      "/images/projects/ardoise-paris-3.png",
    ],
    beforeImage: "/images/projects/p1-before.jpg",
    afterImage: "/images/projects/p1-after.jpg",
    surface: "320 m²",
    duration: "4 semaines",
    location: "Paris 16e",
    year: 2024,
    featured: true,
    services: ["couverture-neuve", "zinguerie"],
  },
  {
    id: "tuiles-rambouillet",
    slug: "renovation-tuiles-rambouillet",
    title: "Rénovation Tuiles Mécaniques — Rambouillet",
    shortDescription:
      "Rénovation complète d'une toiture en tuiles mécaniques terre cuite sur maison de maître du XIXe siècle.",
    fullDescription:
      "Rénovation complète d'une toiture en tuiles mécaniques sur une maison de maître du XIXe siècle. Nous avons remplacé l'intégralité de la couverture vieillissante : dépose des anciennes tuiles, traitement de la charpente, pose d'un écran sous-toiture haute performance, puis repose de tuiles mécaniques terre cuite Koramic. Les gouttières demi-rondes en zinc ont également été refaites. Conservation et restauration des 8 lucarnes d'origine dans le respect de l'architecture.",
    challenge:
      "Conservation et restauration des 8 lucarnes d'origine. Accord de la DRAC pour le choix du matériau de remplacement. Charpente présentant des zones fragilisées par l'humidité nécessitant une consolidation.",
    solution:
      "Diagnostic complet de la charpente avec traitement fongicide et remplacement des éléments défaillants. Sélection de tuiles identiques aux originales pour respecter l'esthétique de la maison.",
    category: "tuiles",
    featuredImage: "/images/projects/tuiles-rambouillet-1.png",
    images: [
      "/images/projects/tuiles-rambouillet-1.png",
      "/images/projects/tuiles-rambouillet-2.png",
      "/images/projects/tuiles-rambouillet-3.png",
    ],
    beforeImage: "/images/projects/p2-before.jpg",
    afterImage: "/images/projects/p2-after.jpg",
    surface: "180 m²",
    duration: "2 semaines",
    location: "Rambouillet (78)",
    year: 2023,
    featured: true,
    services: ["renovation-toiture"],
  },
  {
    id: "zinc-versailles",
    slug: "toiture-zinc-versailles",
    title: "Couverture Zinc à Joint Debout — Versailles",
    shortDescription:
      "Pose d'une toiture zinc naturel à joint debout sur villa contemporaine à ossature bois, avec gouttières zinc carré.",
    fullDescription:
      "Pose d'une toiture zinc à joint debout sur une villa contemporaine à ossature bois. Ce projet a mobilisé toute notre expertise en zinguerie fine : découpe et pliage millimétrique des bandes de zinc, solins d'étanchéité autour des velux, reprise des gouttières en zinc carré. La finition naturelle non traitée du zinc permettra au matériau de développer sa patine grise caractéristique au fil des années.",
    challenge:
      "Géométrie complexe de la toiture (4 pans + 2 décrochements). Pose en hiver nécessitant des précautions thermiques pour le zinc. Coordination avec l'architecte pour les détails de raccordement.",
    solution:
      "Fabrication de gabarits spécifiques pour chaque décrochement. Travail en température contrôlée pour les opérations de pliage du zinc. Réunions hebdomadaires avec l'architecte maître d'œuvre.",
    category: "zinc",
    featuredImage: "/images/projects/zinc-versailles-1.png",
    images: [
      "/images/projects/zinc-versailles-1.png",
      "/images/projects/zinc-versailles-2.png",
      "/images/projects/zinc-versailles-3.png",
    ],
    beforeImage: "/images/projects/p3-before.jpg",
    afterImage: "/images/projects/p3-after.jpg",
    surface: "210 m²",
    duration: "3 semaines",
    location: "Versailles (78)",
    year: 2024,
    featured: true,
    services: ["couverture-neuve", "zinguerie"],
  },
  {
    id: "zinguerie-paris-9",
    slug: "zinguerie-immeuble-paris-9",
    title: "Zinguerie Immeuble Haussmannien — Paris 9e",
    shortDescription:
      "Remplacement complet de la zinguerie d'un immeuble haussmannien : chéneaux, gouttières, tuyaux de descente et solins.",
    fullDescription:
      "Remplacement complet de la zinguerie d'un immeuble haussmannien de 6 étages : chéneaux encaissés, tuyaux de descente, gouttières pendantes et solins de souche. Travaux réalisés en site occupé, avec organisation rigoureuse de l'accès aux appartements pour les interventions sur les descentes intérieures. Tous les éléments ont été fabriqués sur mesure dans notre atelier.",
    challenge:
      "Site occupé avec 18 appartements. Accès aux descentes intérieures nécessitant la coordination avec les copropriétaires. Chéneaux encaissés difficiles d'accès.",
    solution:
      "Planning d'intervention détaillé remis à chaque occupant. Fabrication sur mesure de tous les éléments de zinguerie. Utilisation d'équipements légers pour minimiser les nuisances.",
    category: "zinguerie",
    featuredImage: "/images/projects/zinguerie-immeuble-1.png",
    images: [
      "/images/projects/zinguerie-immeuble-1.png",
      "/images/projects/zinguerie-immeuble-2.png",
    ],
    surface: "45 ml",
    duration: "3 semaines",
    location: "Paris 9e",
    year: 2023,
    featured: false,
    services: ["zinguerie"],
  },
  {
    id: "isolation-boulogne",
    slug: "isolation-combles-boulogne",
    title: "Isolation Combles Perdus — Boulogne-Billancourt",
    shortDescription:
      "Isolation thermique par soufflage de combles perdus, éligible MaPrimeRénov', avec gain de DPE garanti.",
    fullDescription:
      "Isolation thermique par soufflage de combles perdus dans un immeuble des années 60. Travaux éligibles aux aides MaPrimeRénov' et CEE, que nous avons intégralement pris en charge dans les démarches administratives. L'épaisseur de 35 cm de laine de verre soufflée permet d'atteindre la résistance thermique R = 7 m².K/W exigée par la réglementation. Gain énergétique estimé : 30% sur la facture de chauffage.",
    challenge:
      "Combles présentant plusieurs zones de faible hauteur. Présence de câbles électriques à préserver. Accès unique par une trappe de 60x80 cm.",
    solution:
      "Audit thermique préalable pour cartographier les zones prioritaires. Utilisation d'équipements de soufflage longue portée. Mise en conformité des installations électriques en parallèle.",
    category: "isolation",
    featuredImage: "/images/projects/isolation-combles-1.png",
    images: [
      "/images/projects/isolation-combles-1.png",
      "/images/projects/isolation-combles-2.png",
    ],
    beforeImage: "/images/projects/p4-before.jpg",
    afterImage: "/images/projects/p4-after.jpg",
    surface: "95 m²",
    duration: "2 jours",
    location: "Boulogne-Billancourt (92)",
    year: 2023,
    featured: false,
    services: ["isolation-combles"],
  },
  {
    id: "depannage-vincennes",
    slug: "depannage-urgence-vincennes",
    title: "Dépannage Urgence Après Tempête — Vincennes",
    shortDescription:
      "Intervention d'urgence après la tempête Ciaran : 180 ardoises remplacées, souches rescellées, bâchage provisoire.",
    fullDescription:
      "Intervention d'urgence le lendemain de la tempête Ciaran : remplacement de 180 ardoises arrachées, rescellement de 3 souches de cheminée, pose d'un bâchage provisoire sur la zone la plus endommagée en attente de livraison des matériaux. Rapport d'expertise remis au propriétaire pour sa déclaration de sinistre auprès de l'assurance. Chantier définitif réalisé dans la semaine suivante.",
    challenge:
      "Intervention en urgence un lendemain de weekend. Zone partiellement effondrée nécessitant une sécurisation avant toute intervention. Météo instable rendant le travail en hauteur délicat.",
    solution:
      "Mobilisation d'une équipe dès le lundi matin. Sécurisation par bâchage dans les 4 heures suivant l'appel. Rapport photographique complet pour l'assurance. Chantier définitif planifié sous 5 jours.",
    category: "renovation-complete",
    featuredImage: "/images/projects/depannage-urgence-1.png",
    images: [
      "/images/projects/depannage-urgence-1.png",
      "/images/projects/depannage-urgence-2.png",
    ],
    surface: "40 m²",
    duration: "1 semaine",
    location: "Vincennes (94)",
    year: 2024,
    featured: false,
    services: ["depannage-urgence"],
  },
];
