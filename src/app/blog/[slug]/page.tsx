import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, ArrowLeft } from "lucide-react"
import { BLOG_POSTS, getPostBySlug } from "@/lib/data/blog"
import { CtaBand } from "@/components/home/cta-band"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Blog Couverture Pro`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="bg-gradient-to-br from-[#0f2558] to-[#1E3A8A] py-20 pt-32">
        <div className="container-wide max-w-4xl">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 text-blue-200 text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min de lecture</span>
            <span>·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          {/* Cover image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          {/* Excerpt lead */}
          <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-[#F97316] pl-6">
            {post.excerpt}
          </p>

          {/* Placeholder content */}
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600">
              Cet article est en cours de rédaction par notre équipe d'experts couvreurs.
              Retrouvez bientôt le contenu complet sur cette page.
            </p>
            <p className="text-slate-600">
              En attendant, n'hésitez pas à nous contacter directement pour toute question
              sur votre projet de toiture en Île-de-France.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#F97316] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-[#1E3A8A] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
