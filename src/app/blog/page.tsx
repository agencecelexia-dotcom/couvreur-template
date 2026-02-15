import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BLOG_POSTS } from "@/lib/data/blog"
import { CtaBand } from "@/components/home/cta-band"
import { COMPANY } from "@/lib/data/company"

export const metadata: Metadata = {
  title: "Blog & Conseils Toiture | Guide du Couvreur Île-de-France",
  description:
    "Conseils professionnels sur la toiture : quand rénover, quel matériau choisir, aides financières, prix... Tous nos articles pour bien gérer votre projet toiture. " +
    COMPANY.phone,
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-20 pt-32">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog & Conseils Toiture
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Nos experts couvreurs partagent leurs conseils pour vous aider à faire les meilleurs
            choix pour votre toiture.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-12">
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20">
                  {featured.category}
                </Badge>
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3 group-hover:text-[#F97316] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{featured.readTime} min de lecture</span>
                  <span>·</span>
                  <span>
                    {new Date(featured.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <Badge className="mb-3 bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20 text-xs">
                    {post.category}
                  </Badge>
                  <h2 className="font-bold text-slate-800 text-sm leading-snug mb-2 group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
