import type { BlogPost } from "@/types"

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "quand-refaire-sa-toiture",
    title: "Quand refaire sa toiture ? Les signes qui ne trompent pas",
    excerpt:
      "Une toiture en mauvais état peut engendrer des dégâts considérables. Mais comment savoir quand il est temps d'agir ? Voici les 7 signes qui indiquent que votre toiture a besoin d'une réfection.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    category: "Conseils",
    readTime: 5,
    publishedAt: "2026-01-15",
    author: "Équipe Couverture Pro",
  },
  {
    id: "2",
    slug: "tuiles-vs-ardoise-quel-revetement-choisir",
    title: "Tuiles vs Ardoise : Quel revêtement de toiture choisir ?",
    excerpt:
      "Tuiles terre cuite ou ardoise naturelle ? Ce choix détermine l'esthétique de votre maison pour les 50 prochaines années. On compare les deux matériaux sur tous les critères : durabilité, prix, entretien.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop",
    category: "Matériaux",
    readTime: 7,
    publishedAt: "2026-01-28",
    author: "Équipe Couverture Pro",
  },
  {
    id: "3",
    slug: "cout-renovation-toiture-2026",
    title: "Combien coûte une rénovation de toiture en 2026 ?",
    excerpt:
      "Prix moyens, facteurs de variation, devis type : tout ce que vous devez savoir sur le coût d'une rénovation de toiture en Île-de-France en 2026. Découvrez aussi les aides disponibles.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    category: "Prix",
    readTime: 6,
    publishedAt: "2026-02-01",
    author: "Équipe Couverture Pro",
  },
  {
    id: "4",
    slug: "aides-financieres-renovation-toiture",
    title: "Les aides financières pour la rénovation de toiture en 2026",
    excerpt:
      "MaPrimeRénov, CEE, éco-PTZ, TVA à 5.5% : faites le point sur toutes les aides disponibles pour financer vos travaux de toiture et d'isolation. Guide complet et actualisé pour 2026.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    category: "Financement",
    readTime: 8,
    publishedAt: "2026-02-08",
    author: "Équipe Couverture Pro",
  },
  {
    id: "5",
    slug: "entretenir-sa-toiture",
    title: "Comment entretenir sa toiture pour prolonger sa durée de vie ?",
    excerpt:
      "Un entretien régulier peut doubler la durée de vie de votre toiture. Démoussage, nettoyage, vérification des solins : découvrez notre programme d'entretien annuel recommandé.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
    category: "Entretien",
    readTime: 4,
    publishedAt: "2026-02-14",
    author: "Équipe Couverture Pro",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
