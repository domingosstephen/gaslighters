import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { blogListSchema } from "@/lib/blog-schema";
import { BLOG_CATEGORIES } from "@/types/blog";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SITE_URL = "https://www.wholesalegaslighters.com";

export const metadata: Metadata = {
  title: "Blog — Wholesale Gas Lighters",
  description:
    "Wholesale lighter industry insights, buying guides, safety standards, and product knowledge for B2B buyers and importers.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const schema = blogListSchema(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-haze pt-28 pb-16">
        <Container>
          <Eyebrow>Industry Knowledge</Eyebrow>
          <h1 className="text-display mt-3 text-4xl md:text-5xl text-ink">
            Wholesale Lighter Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            Buying guides, market insights, safety standards, and everything B2B
            lighter buyers need to know.
          </p>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="bg-paper py-16">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-h2 text-ink">Coming Soon</p>
              <p className="mt-4 text-steel max-w-md mx-auto">
                We are preparing in-depth articles about the wholesale lighter
                industry. Check back soon for buying guides, market analysis, and
                more.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-sand bg-clean transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-haze">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-eyebrow text-ember">
                        {BLOG_CATEGORIES[post.category]?.label ?? post.category}
                      </span>
                      <span className="text-small text-steel">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <h2 className="text-h3 text-ink group-hover:text-ember transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-small text-steel line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-small text-steel">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
