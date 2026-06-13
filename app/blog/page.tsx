import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getAllPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SITE_URL = "https://www.wholesalegaslighters.com";

export const metadata: Metadata = {
  title: "Wholesale Lighter Blog — Buying Guides & Industry Insights",
  description:
    "Wholesale lighter industry insights, buying guides, safety standards, and product knowledge for B2B buyers and importers.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-haze pt-28 pb-16">
        <Container>
          <Eyebrow>Industry Knowledge</Eyebrow>
          <h1 className="text-display mt-3 text-4xl md:text-5xl text-ink">
            Wholesale Lighter Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            Buying guides, market insights, safety standards, and everything B2B
            lighter buyers need to know. Whether you are sourcing BBQ lighters
            for retail chains, disposable lighters for convenience stores, or
            custom-branded lighters for promotional campaigns, our articles cover
            the specifications, compliance requirements, and logistics that
            matter to wholesale buyers.
          </p>
        </Container>
      </section>

      {/* Native blog posts */}
      {posts.length > 0 && (
        <section className="bg-paper py-16">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-sand bg-clean transition-shadow hover:shadow-lg"
                >
                  <div className="p-6">
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
                      <span>&middot;</span>
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
          </Container>
        </section>
      )}

      {/* Soro Blog Embed */}
      <section className="bg-paper py-16">
        <Container>
          <div id="soro-blog"></div>
          <Script
            src="https://app.trysoro.com/api/embed/0894ba58-9ce8-4f01-a5bc-ce94391793bd"
            strategy="afterInteractive"
          />
        </Container>
      </section>
    </>
  );
}
