export interface SiteImage {
  path: string;
  filename: string;
  usage: string;
}

export interface ImageGroup {
  label: string;
  images: SiteImage[];
}

export const imageGroups: ImageGroup[] = [
  {
    label: "Hero & Bannieres",
    images: [
      {
        path: "/images/hero-toiture.png",
        filename: "hero-toiture.png",
        usage: "Image hero principale — page d'accueil et bannieres",
      },
    ],
  },
  {
    label: "Services",
    images: [
      {
        path: "/images/services/couverture-neuve.jpg",
        filename: "services/couverture-neuve.jpg",
        usage: "Image du service 1 — pages Services",
      },
      {
        path: "/images/services/renovation-toiture.jpg",
        filename: "services/renovation-toiture.jpg",
        usage: "Image du service 2 — pages Services",
      },
      {
        path: "/images/services/zinguerie.jpg",
        filename: "services/zinguerie.jpg",
        usage: "Image du service 3 — pages Services",
      },
      {
        path: "/images/services/isolation-toiture.jpg",
        filename: "services/isolation-toiture.jpg",
        usage: "Image du service 4 — pages Services",
      },
      {
        path: "/images/services/depannage.jpg",
        filename: "services/depannage.jpg",
        usage: "Image du service 5 — pages Services",
      },
      {
        path: "/images/services/demoussage.jpg",
        filename: "services/demoussage.jpg",
        usage: "Image du service 6 — pages Services",
      },
    ],
  },
  {
    label: "Portfolio — Projets",
    images: [
      {
        path: "/images/projects/projet-ardoise-1.png",
        filename: "projects/projet-ardoise-1.png",
        usage: "Projet 1 — image principale",
      },
      {
        path: "/images/projects/projet-ardoise-2.png",
        filename: "projects/projet-ardoise-2.png",
        usage: "Projet 1 — image secondaire",
      },
      {
        path: "/images/projects/projet-ardoise-3.png",
        filename: "projects/projet-ardoise-3.png",
        usage: "Projet 1 — image tertiaire",
      },
      {
        path: "/images/projects/projet-tuiles-1.png",
        filename: "projects/projet-tuiles-1.png",
        usage: "Projet 2 — image principale",
      },
      {
        path: "/images/projects/projet-tuiles-2.png",
        filename: "projects/projet-tuiles-2.png",
        usage: "Projet 2 — image secondaire",
      },
      {
        path: "/images/projects/projet-tuiles-3.png",
        filename: "projects/projet-tuiles-3.png",
        usage: "Projet 2 — image tertiaire",
      },
      {
        path: "/images/projects/projet-zinc-1.png",
        filename: "projects/projet-zinc-1.png",
        usage: "Projet 3 — image principale",
      },
      {
        path: "/images/projects/projet-zinc-2.png",
        filename: "projects/projet-zinc-2.png",
        usage: "Projet 3 — image secondaire",
      },
      {
        path: "/images/projects/projet-zinc-3.png",
        filename: "projects/projet-zinc-3.png",
        usage: "Projet 3 — image tertiaire",
      },
      {
        path: "/images/projects/zinguerie-immeuble-1.png",
        filename: "projects/zinguerie-immeuble-1.png",
        usage: "Projet 4 — image principale",
      },
      {
        path: "/images/projects/zinguerie-immeuble-2.png",
        filename: "projects/zinguerie-immeuble-2.png",
        usage: "Projet 4 — image secondaire",
      },
      {
        path: "/images/projects/isolation-combles-1.png",
        filename: "projects/isolation-combles-1.png",
        usage: "Projet 5 — image principale",
      },
      {
        path: "/images/projects/isolation-combles-2.png",
        filename: "projects/isolation-combles-2.png",
        usage: "Projet 5 — image secondaire",
      },
      {
        path: "/images/projects/depannage-urgence-1.png",
        filename: "projects/depannage-urgence-1.png",
        usage: "Projet 6 — image principale",
      },
      {
        path: "/images/projects/depannage-urgence-2.png",
        filename: "projects/depannage-urgence-2.png",
        usage: "Projet 6 — image secondaire",
      },
    ],
  },
  {
    label: "Portfolio — Avant/Apres",
    images: [
      {
        path: "/images/projects/p1-before.jpg",
        filename: "projects/p1-before.jpg",
        usage: "Projet 1 — photo avant",
      },
      {
        path: "/images/projects/p1-after.jpg",
        filename: "projects/p1-after.jpg",
        usage: "Projet 1 — photo apres",
      },
      {
        path: "/images/projects/p2-before.jpg",
        filename: "projects/p2-before.jpg",
        usage: "Projet 2 — photo avant",
      },
      {
        path: "/images/projects/p2-after.jpg",
        filename: "projects/p2-after.jpg",
        usage: "Projet 2 — photo apres",
      },
      {
        path: "/images/projects/p3-before.jpg",
        filename: "projects/p3-before.jpg",
        usage: "Projet 3 — photo avant",
      },
      {
        path: "/images/projects/p3-after.jpg",
        filename: "projects/p3-after.jpg",
        usage: "Projet 3 — photo apres",
      },
      {
        path: "/images/projects/p4-before.jpg",
        filename: "projects/p4-before.jpg",
        usage: "Projet 4 — photo avant",
      },
      {
        path: "/images/projects/p4-after.jpg",
        filename: "projects/p4-after.jpg",
        usage: "Projet 4 — photo apres",
      },
    ],
  },
  {
    label: "Equipe & Portraits",
    images: [
      {
        path: "/images/projects/portrait-dirigeant.png",
        filename: "projects/portrait-dirigeant.png",
        usage: "Portrait dirigeant — page A propos",
      },
      {
        path: "/images/projects/portrait-chef-equipe.png",
        filename: "projects/portrait-chef-equipe.png",
        usage: "Portrait chef d'equipe — page A propos",
      },
      {
        path: "/images/projects/portrait-couvreur.png",
        filename: "projects/portrait-couvreur.png",
        usage: "Portrait couvreur — page A propos",
      },
      {
        path: "/images/projects/equipe-chantier.png",
        filename: "projects/equipe-chantier.png",
        usage: "Photo equipe — page A propos",
      },
      {
        path: "/images/projects/artisan-ardoise.png",
        filename: "projects/artisan-ardoise.png",
        usage: "Photo artisan — sections confiance",
      },
    ],
  },
  {
    label: "Grilles & Blog",
    images: [
      {
        path: "/images/projects/grid-couverture.png",
        filename: "projects/grid-couverture.png",
        usage: "Grille services — blog ou sections",
      },
      {
        path: "/images/projects/grid-renovation.png",
        filename: "projects/grid-renovation.png",
        usage: "Grille renovation — blog ou sections",
      },
      {
        path: "/images/projects/grid-zinguerie.png",
        filename: "projects/grid-zinguerie.png",
        usage: "Grille zinguerie — blog ou sections",
      },
    ],
  },
  {
    label: "Autres",
    images: [
      {
        path: "/images/projects/og-default.png",
        filename: "projects/og-default.png",
        usage: "Image Open Graph — partage reseaux sociaux",
      },
      {
        path: "/images/projects/service-couverture-neuve.png",
        filename: "projects/service-couverture-neuve.png",
        usage: "Illustration service — sections",
      },
      {
        path: "/images/projects/service-renovation.png",
        filename: "projects/service-renovation.png",
        usage: "Illustration service — sections",
      },
      {
        path: "/images/projects/service-zinguerie.png",
        filename: "projects/service-zinguerie.png",
        usage: "Illustration service — sections",
      },
      {
        path: "/images/projects/service-isolation.png",
        filename: "projects/service-isolation.png",
        usage: "Illustration service — sections",
      },
      {
        path: "/images/projects/service-depannage.png",
        filename: "projects/service-depannage.png",
        usage: "Illustration service — sections",
      },
      {
        path: "/images/projects/service-demoussage.png",
        filename: "projects/service-demoussage.png",
        usage: "Illustration service — sections",
      },
    ],
  },
];
