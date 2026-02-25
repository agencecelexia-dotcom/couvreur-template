import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";
import { clientConfig } from "@/config/client.config";

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
    default: clientConfig.META_TITLE,
    template: `%s | ${clientConfig.NOM_ENTREPRISE}`,
  },
  description: clientConfig.META_DESCRIPTION,
  keywords: clientConfig.META_KEYWORDS.split(",").map((k) => k.trim()),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `https://${clientConfig.DOMAINE}`,
    siteName: clientConfig.NOM_ENTREPRISE,
    title: clientConfig.META_TITLE,
    description: clientConfig.META_DESCRIPTION,
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
