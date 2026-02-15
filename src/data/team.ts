import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "jean-paul",
    name: "Jean-Paul Moreau",
    role: "Fondateur & Maître Couvreur",
    bio: "Artisan couvreur depuis 25 ans, Jean-Paul a fondé Toitures Prestige en 2004 avec une vision claire : allier savoir-faire traditionnel et matériaux d'excellence. Formé à l'École Nationale des Métiers du Bâtiment, il est compagnon du devoir et intervient personnellement sur les chantiers les plus complexes.",
    photo: "/images/projects/portrait-jean-paul.png",
    specialties: ["Ardoise naturelle", "Zinc à joint debout", "Monuments Historiques"],
  },
  {
    id: "karim",
    name: "Karim Benali",
    role: "Chef de Chantier",
    bio: "Avec 15 ans d'expérience dans la couverture, Karim coordonne les équipes sur le terrain avec rigueur et bienveillance. Spécialiste des toitures complexes et des rénovations patrimoniales, il veille à ce que chaque chantier soit livré dans les règles de l'art et dans les délais impartis.",
    photo: "/images/projects/portrait-karim.png",
    specialties: ["Gestion de chantier", "Rénovation patrimoniale", "Tuiles et ardoises"],
  },
  {
    id: "theo",
    name: "Théo Lambert",
    role: "Couvreur Zingueur",
    bio: "Théo a rejoint Toitures Prestige après son Brevet Professionnel de Couverture. Passionné par le travail du zinc et des métaux, il maîtrise les techniques de zinguerie les plus exigeantes : zinc à joint debout, chéneaux sur mesure, solins complexes. Un talent prometteur qui perpétue l'excellence artisanale.",
    photo: "/images/projects/portrait-theo.png",
    specialties: ["Zinguerie fine", "Zinc à joint debout", "Gouttières sur mesure"],
  },
];
