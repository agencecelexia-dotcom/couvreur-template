import type { MetadataRoute } from "next"
import { SERVICES } from "@/lib/data/services"
import { PROJECTS } from "@/lib/data/projects"
import { COMPANY } from "@/lib/data/company"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.website

  const serviceUrls = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const projectUrls = PROJECTS.map((project) => ({
    url: `${baseUrl}/realisations/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const blogPosts = [
    "quand-refaire-sa-toiture",
    "tuiles-vs-ardoise-quel-revetement-choisir",
    "cout-renovation-toiture-2026",
    "aides-financieres-renovation-toiture",
    "entretenir-sa-toiture",
  ]

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...serviceUrls,
    ...projectUrls,
    ...blogUrls,
  ]
}
