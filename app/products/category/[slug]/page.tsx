import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const SITE_URL = "https://www.wholesalegaslighters.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} — Wholesale Gas Lighters`,
    description: `Browse our wholesale ${category.name.toLowerCase()} collection. ${category.description}`,
    alternates: {
      canonical: `${SITE_URL}/products/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === slug);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `${SITE_URL}/products/category/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}/products/${p.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}/products/category/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-haze pt-28 pb-16">
        <Container>
          <nav className="mb-8 flex items-center gap-2 text-small text-steel">
            <Link href="/" className="hover:text-ember">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-ember">Products</Link>
            <span>/</span>
            <span className="text-ink">{category.name}</span>
          </nav>

          <Eyebrow>{category.slug.replace("-", " ")} collection</Eyebrow>
          <h1 className="text-display mt-3 text-4xl md:text-5xl text-ink">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            {category.description}
          </p>
        </Container>
      </section>

      {/* Product Grid */}
      <section className="bg-paper py-16">
        <Container>
          {categoryProducts.length === 0 ? (
            <p className="text-steel text-center py-12">
              No products found in this category. Contact us for custom orders.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <Link
                  key={product.sku}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-2xl border border-sand bg-clean transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-haze">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-eyebrow text-ember mb-1">{product.sku}</p>
                    <h3 className="text-h3 text-ink">{product.name}</h3>
                    <p className="mt-2 text-small text-steel line-clamp-2">
                      {product.description}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {product.specs.slice(0, 2).map((spec) => (
                        <li key={spec.label} className="text-spec text-steel">
                          <span className="text-ink font-medium">{spec.label}:</span> {spec.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Button variant="ember" size="hero" href="/quote">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
