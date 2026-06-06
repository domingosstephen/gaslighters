import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  blogPostingSchema,
  blogFaqSchema,
  blogBreadcrumbSchema,
} from "@/lib/blog-schema";
import { BLOG_CATEGORIES } from "@/types/blog";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SITE_URL = "https://www.wholesalegaslighters.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: `${SITE_URL}${post.image}`, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category);
  const postingSchema = blogPostingSchema(post);
  const breadcrumbSchema = blogBreadcrumbSchema(post);
  const faqSchema = post.faqItems ? blogFaqSchema(post.faqItems) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <section className="bg-haze pt-24 pb-0">
        <Container>
          <nav className="flex items-center gap-2 text-small text-steel py-4">
            <Link href="/" className="hover:text-ember">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ember">Blog</Link>
            <span>/</span>
            <span className="text-ink line-clamp-1">{post.title}</span>
          </nav>
        </Container>
      </section>

      {/* Article Header */}
      <section className="bg-haze pb-12">
        <Container className="max-w-3xl">
          <Eyebrow>
            {BLOG_CATEGORIES[post.category]?.label ?? post.category}
          </Eyebrow>
          <h1 className="text-display mt-3 text-3xl md:text-4xl lg:text-5xl text-ink">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-steel">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-small text-steel">
            <span className="font-medium text-ink">{post.author.name}</span>
            <span>&middot;</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-paper">
        <Container className="max-w-3xl">
          <div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-2xl border border-sand">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </Container>
      </section>

      {/* TLDR */}
      {post.tldr && (
        <section className="bg-paper pt-10">
          <Container className="max-w-3xl">
            <div className="rounded-xl border border-sand bg-haze p-6">
              <p className="text-label text-ember mb-2">TL;DR</p>
              <p className="text-ink">{post.tldr}</p>
            </div>
          </Container>
        </section>
      )}

      {/* Article Body */}
      <section className="bg-paper py-12">
        <Container className="max-w-3xl">
          <div
            className="prose prose-lg max-w-none text-ink prose-headings:text-ink prose-headings:font-bold prose-h2:text-h2 prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-h3 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-steel prose-p:leading-relaxed prose-a:text-ember prose-a:underline prose-a:underline-offset-2 prose-strong:text-ink prose-li:text-steel prose-blockquote:border-ember prose-blockquote:text-steel"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Container>
      </section>

      {/* FAQ */}
      {post.faqItems && post.faqItems.length > 0 && (
        <section className="bg-haze py-16">
          <Container className="max-w-3xl">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="text-h2 mt-3 text-ink">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-6">
              {post.faqItems.map((faq, i) => (
                <div key={i} className="rounded-xl border border-sand bg-clean p-6">
                  <h3 className="text-h3 text-ink">{faq.question}</h3>
                  <p className="mt-3 text-steel">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <section className="bg-paper py-8 border-t border-sand">
          <Container className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-haze px-3 py-1 text-small text-steel"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Author Bio */}
      <section className="bg-paper py-12 border-t border-sand">
        <Container className="max-w-3xl">
          <div className="rounded-xl border border-sand bg-haze p-6">
            <p className="text-label text-ember mb-1">About the Author</p>
            <p className="text-h3 text-ink">{post.author.name}</p>
            <p className="text-small text-steel mt-1">{post.author.title}</p>
            <p className="mt-3 text-steel">{post.author.bio}</p>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-haze py-16">
          <Container>
            <Eyebrow>Keep Reading</Eyebrow>
            <h2 className="text-h2 mt-3 text-ink">Related Articles</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-sand bg-clean transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-haze">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-eyebrow text-ember">
                      {BLOG_CATEGORIES[r.category]?.label ?? r.category}
                    </span>
                    <h3 className="text-h3 mt-2 text-ink group-hover:text-ember transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-small text-steel line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
