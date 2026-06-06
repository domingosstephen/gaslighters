import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecRow } from "@/components/ui/SpecRow";
import { ProductQuoteForm } from "@/components/forms/ProductQuoteForm";
import { products, getProductBySlug } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — Wholesale Gas Lighters`,
    description: `${product.description} SKU: ${product.sku}. Request bulk pricing for wholesale orders.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://www.wholesalegaslighters.com/products/${product.slug}`,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wholesalegaslighters.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.wholesalegaslighters.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.wholesalegaslighters.com/products/${product.slug}`,
      },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    image: `https://www.wholesalegaslighters.com${product.image}`,
    brand: { "@type": "Brand", name: "Wholesale Gas Lighters" },
    category: product.category.charAt(0).toUpperCase() + product.category.slice(1) + " Lighters",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "Wholesale Gas Lighters" },
    },
  };

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Container>
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-wider text-steel">
          <Link href="/products" className="transition-colors hover:text-ink">
            Products
          </Link>
          <span>&rsaquo;</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        {/* Main layout: image + quote form */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Product image */}
          <div>
            <div className="relative aspect-square overflow-hidden bg-clean">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right: Product info + quote form */}
          <div>
            <Eyebrow>{product.category.toUpperCase()}</Eyebrow>
            <h1 className="text-display mt-3 text-[length:var(--text-h2)]">
              {product.name}
            </h1>
            <p className="mt-2 text-spec text-small text-steel">{product.sku}</p>
            <p className="mt-4 text-[length:var(--text-body)] text-steel">
              {product.description}
            </p>

            {/* Quick specs */}
            <div className="mt-6">
              {product.specs.map((spec) => (
                <SpecRow key={spec.label} label={spec.label} value={spec.value} />
              ))}
            </div>

            {/* Quote form */}
            <div className="mt-8 border-t border-line pt-8">
              <h2 className="text-h3 text-[length:var(--text-h3)]">
                Request a Quote
              </h2>
              <p className="mt-1 text-small text-steel">
                Get pricing for this product within one business day.
              </p>
              <div className="mt-4">
                <ProductQuoteForm productName={`${product.name} (${product.sku})`} />
              </div>
            </div>
          </div>
        </div>

        {/* Full specs section */}
        <div className="mt-16 border-t border-line pt-12">
          <h2 className="text-h2 text-[length:var(--text-h2)]">
            Full Specifications
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-h3 mb-4 text-[length:var(--text-h3)]">Technical Details</h3>
              {product.specs.map((spec) => (
                <SpecRow key={spec.label} label={spec.label} value={spec.value} />
              ))}
            </div>
            <div>
              <h3 className="text-h3 mb-4 text-[length:var(--text-h3)]">Product Information</h3>
              <SpecRow label="SKU" value={product.sku} />
              <SpecRow label="CATEGORY" value={product.category.charAt(0).toUpperCase() + product.category.slice(1)} />
              <SpecRow label="MOQ" value="1,000 units" />
              <SpecRow label="LEAD TIME" value="2–4 weeks" />
              <SpecRow label="SHIPPING" value="FOB, CIF, DDP available" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
