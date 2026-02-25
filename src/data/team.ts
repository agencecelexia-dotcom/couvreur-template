import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

export const team: TeamMember[] = [
  {
    id: "fondateur",
    name: `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`,
    role: "Fondateur & Dirigeant",
    bio: `${clientConfig.DIPLOME_DIRIGEANT.charAt(0).toUpperCase() + clientConfig.DIPLOME_DIRIGEANT.slice(1)}, ${clientConfig.PRENOM_DIRIGEANT} a fonde ${clientConfig.NOM_ENTREPRISE} en ${clientConfig.ANNEE_CREATION} avec une vision claire : offrir un service de demenagement haut de gamme, alliant rigueur logistique et attention au detail. ${clientConfig.GENRE_DIRIGEANT === "M" ? "Il" : "Elle"} supervise personnellement chaque projet d'envergure.`,
    photo: "/images/projects/portrait-jean-paul.png",
    specialties: ["Logistique", "Gestion de projet", "Relation client"],
  },
  {
    id: "chef-equipe",
    name: "Chef d'Equipe",
    role: "Responsable Opérationnel",
    bio: "Avec plus de 10 ans d'experience dans le demenagement, notre chef d'equipe coordonne les operations sur le terrain avec rigueur et bienveillance. Specialiste de la logistique et de la manutention, il veille a ce que chaque demenagement soit realise dans les regles de l'art.",
    photo: "/images/projects/portrait-karim.png",
    specialties: ["Coordination terrain", "Manutention", "Logistique"],
  },
  {
    id: "demenageur",
    name: "Demenageur Expert",
    role: "Déménageur Professionnel",
    bio: "Forme aux techniques d'emballage et de manutention les plus exigeantes, notre demenageur expert maitrise la manipulation de tous types d'objets : meubles volumineux, objets fragiles, pianos, oeuvres d'art. Un savoir-faire qui garantit la securite de vos biens.",
    photo: "/images/projects/portrait-theo.png",
    specialties: ["Emballage specialise", "Monte-meuble", "Objets fragiles"],
  },
];
