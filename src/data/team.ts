import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

export const team: TeamMember[] = [
  {
    id: "fondateur",
    name: `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`,
    role: "Fondateur & Dirigeant",
    bio: `${clientConfig.DIPLOME_DIRIGEANT.charAt(0).toUpperCase() + clientConfig.DIPLOME_DIRIGEANT.slice(1)}, ${clientConfig.PRENOM_DIRIGEANT} a fonde ${clientConfig.NOM_ENTREPRISE} en ${clientConfig.ANNEE_CREATION} avec une vision claire : offrir des prestations de couverture haut de gamme, alliant savoir-faire traditionnel et techniques modernes. ${clientConfig.GENRE_DIRIGEANT === "M" ? "Il" : "Elle"} supervise personnellement chaque chantier d'envergure.`,
    photo: "/images/projects/portrait-dirigeant.png",
    specialties: ["Couverture ardoise", "Gestion de projet", "Relation client"],
  },
  {
    id: "chef-equipe",
    name: "Chef d'Equipe",
    role: "Chef d'Equipe",
    bio: "Avec plus de 12 ans d'experience dans la couverture, notre chef d'equipe coordonne les chantiers sur le terrain avec rigueur et precision. Specialiste de la couverture traditionnelle et de la zinguerie, il veille a ce que chaque intervention soit realisee dans les regles de l'art et dans le respect des delais.",
    photo: "/images/projects/portrait-chef-equipe.png",
    specialties: ["Couverture", "Zinguerie", "Charpente"],
  },
  {
    id: "couvreur",
    name: "Compagnon Couvreur",
    role: "Couvreur-Zingueur",
    bio: "Passionne par les techniques traditionnelles de couverture, notre compagnon couvreur maitrise la pose d'ardoise naturelle au crochet, le travail du zinc a joint debout et les techniques d'isolation par l'exterieur. Son souci du detail et sa precision garantissent des finitions impeccables sur chaque chantier.",
    photo: "/images/projects/portrait-couvreur.png",
    specialties: ["Ardoise naturelle", "Zinc", "Isolation"],
  },
];
