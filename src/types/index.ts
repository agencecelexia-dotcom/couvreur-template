export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  benefits: string[]
  priceRange?: string
  duration?: string
  image: string
  category: "couverture" | "zinguerie" | "isolation" | "entretien" | "urgence"
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  material: string
  location: string
  duration: string
  surface: string
  beforeImage: string
  afterImage: string
  testimonial?: Testimonial
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  avatar?: string
  service?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  readTime: number
  publishedAt: string
  author: string
}

export interface Certification {
  id: string
  name: string
  description: string
  logo: string
  url?: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface Zone {
  name: string
  slug: string
  department: string
  postalCode: string
}
