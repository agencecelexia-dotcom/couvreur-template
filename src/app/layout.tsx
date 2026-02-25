import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: {
    default: "Toitures Prestige | Couvreur Artisan en Île-de-France",
    template: "%s | Toitures Prestige",
  },
  description:
    "Couvreur artisan haut de gamme en Île-de-France. Ardoise naturelle, tuiles terre cuite, zinc — 20 ans d'expertise pour vos toitures neuves et rénovations.",
  keywords: [
    "couvreur",
    "toiture",
    "ardoise",
    "zinguerie",
    "isolation combles",
    "rénovation toiture",
    "couvreur Paris",
    "Île-de-France",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://toitures-prestige.fr",
    siteName: "Toitures Prestige",
    title: "Toitures Prestige | Couvreur Artisan en Île-de-France",
    description:
      "Couvreur artisan haut de gamme en Île-de-France. Ardoise naturelle, tuiles terre cuite, zinc — 20 ans d'expertise.",
    images: [{ url: "/images/projects/og-default.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      style={{
        ["--font-playfair" as string]: playfair.variable,
        ["--font-dmsans" as string]: dmSans.variable,
      }}
    >
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
