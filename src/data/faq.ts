import { clientConfig } from "@/config/client.config";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Comment obtenir un devis pour mon déménagement ?",
    answer: `Contactez-nous par téléphone au ${clientConfig.TELEPHONE} ou via notre formulaire en ligne. Nous vous proposerons un rendez-vous gratuit pour évaluer le volume à déménager et vous remettre un devis détaillé et sans engagement.`,
  },
  {
    question: "Combien de temps à l'avance dois-je réserver ?",
    answer: "Nous recommandons de réserver au moins 3 à 4 semaines à l'avance, surtout en période de forte demande (fin de mois, été, vacances scolaires). Pour les déménagements urgents, contactez-nous — nous ferons notre maximum pour vous trouver un créneau.",
  },
  {
    question: "Mes biens sont-ils assurés pendant le transport ?",
    answer: "Oui, tous les biens transportés sont couverts par notre assurance responsabilité civile professionnelle. Pour les objets de valeur, nous proposons une assurance complémentaire ad valorem qui couvre la valeur déclarée de chaque bien.",
  },
  {
    question: "Proposez-vous un service d'emballage ?",
    answer: "Absolument. Notre équipe peut prendre en charge l'intégralité de l'emballage : cartons, papier bulle, housses de protection, démontage et remontage des meubles. Vous n'avez rien à faire, nous nous occupons de tout.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: `Nous intervenons principalement sur ${clientConfig.ZONE_INTERVENTION}. Pour les déménagements longue distance, nous couvrons l'ensemble du territoire national. Contactez-nous pour vérifier la disponibilité dans votre secteur.`,
  },
  {
    question: "Comment est calculé le prix d'un déménagement ?",
    answer: "Le tarif dépend de plusieurs facteurs : le volume à déménager (en m³), la distance entre les deux adresses, l'accessibilité des logements (étage, ascenseur, distance de portage), et les services complémentaires choisis (emballage, monte-meuble, garde-meuble).",
  },
];
