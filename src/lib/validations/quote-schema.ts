import { z } from "zod"

export const quoteSchema = z.object({
  // Étape 1 : Contact
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long"),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Numéro de téléphone invalide (format français requis)"
    ),

  // Étape 2 : Chantier
  address: z.string().min(10, "Veuillez saisir l'adresse complète du chantier"),
  city: z.string().min(2, "Veuillez indiquer la ville"),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Code postal invalide (5 chiffres requis)"),

  // Étape 3 : Projet
  serviceType: z.enum(
    [
      "renovation-toiture",
      "couverture-neuve",
      "zinguerie",
      "isolation-toiture",
      "demoussage",
      "depannage",
      "autre",
    ],
    { error: "Veuillez sélectionner un type de prestation" }
  ),
  buildingType: z.enum(["maison-individuelle", "pavillon", "immeuble", "batiment-agricole", "autre"], {
    error: "Veuillez sélectionner le type de bâtiment",
  }),
  surface: z.string().optional(),
  description: z
    .string()
    .min(20, "Veuillez décrire votre projet en au moins 20 caractères")
    .max(2000, "La description est trop longue"),

  // RGPD
  rgpd: z.literal(true, {
    error: "Vous devez accepter la politique de confidentialité",
  }),
})

export type QuoteFormData = z.infer<typeof quoteSchema>

export const SERVICE_TYPE_OPTIONS = [
  { value: "renovation-toiture", label: "Rénovation / Réfection de toiture" },
  { value: "couverture-neuve", label: "Couverture neuve (construction)" },
  { value: "zinguerie", label: "Zinguerie (gouttières, chéneaux)" },
  { value: "isolation-toiture", label: "Isolation de toiture" },
  { value: "demoussage", label: "Démoussage / Entretien" },
  { value: "depannage", label: "Dépannage urgent (fuite, tuiles cassées)" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
]

export const BUILDING_TYPE_OPTIONS = [
  { value: "maison-individuelle", label: "Maison individuelle" },
  { value: "pavillon", label: "Pavillon / Lotissement" },
  { value: "immeuble", label: "Immeuble / Copropriété" },
  { value: "batiment-agricole", label: "Bâtiment agricole / Annexe" },
  { value: "autre", label: "Autre" },
]
