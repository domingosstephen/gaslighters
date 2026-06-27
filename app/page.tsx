import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

const BASE = "https://www.wholesalegaslighters.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Wholesale Gas Lighters",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/hero-bg.jpg`,
    width: 1200,
    height: 630,
  },
  description: "B2B wholesale gas lighter supplier for distributors, retailers, and promotional buyers. Shipping to 30+ countries. BBQ, refillable, disposable, torch, and promotional lighters.",
  foundingDate: "2020",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33758885187",
      contactType: "sales",
      availableLanguage: ["English", "French"],
      contactOption: "TollFree",
    },
  ],
  areaServed: [
    { "@type": "Continent", name: "Europe" },
    { "@type": "Continent", name: "North America" },
    { "@type": "Continent", name: "South America" },
    { "@type": "Continent", name: "Africa" },
    { "@type": "Continent", name: "Asia" },
    { "@type": "Continent", name: "Oceania" },
  ],
  knowsAbout: ["Gas Lighters", "Wholesale Lighters", "BBQ Lighters", "Promotional Lighters", "Disposable Lighters"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Wholesale Gas Lighters",
  url: BASE,
  description: "B2B wholesale gas lighters for distributors, retailers, and promotional buyers across 30+ countries.",
  inLanguage: "en",
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Order Wholesale Gas Lighters",
  description: "Step-by-step guide to placing a bulk gas lighter order — from product selection to delivery.",
  totalTime: "P2D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Browse Our Product Catalog",
      text: "Explore our range of BBQ lighters, refillable pocket lighters, disposable lighters, jet torch lighters, and custom promotional lighters.",
      url: `${BASE}/products`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Submit a Quote Request",
      text: "Use our quote form to specify the product, quantity, destination country, and any custom branding requirements. Most requests are returned within one business day.",
      url: `${BASE}/quote`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review Your Quote",
      text: "We provide unit pricing, packaging details, MOQ confirmation, lead times, and shipping options (FOB, CIF, DDP).",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Confirm and Ship",
      text: "Once the order is confirmed, we produce and ship. Full tracking is provided from factory to your warehouse.",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[data-speakable]"],
  },
  url: BASE,
};

const faqItems = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 units. For custom-printed promotional lighters, the MOQ is 5,000 units. Contact us for specific product minimums." },
  { q: "Do you ship internationally?", a: "Yes. We ship to 30+ countries across Europe, North America, Latin America, Middle East, Africa, Southeast Asia, and Oceania. We offer FOB, CIF, and DDP shipping terms." },
  { q: "What types of gas lighters do you sell?", a: "We supply BBQ utility lighters, refillable pocket lighters, economy disposable lighters, jet torch lighters, and custom-branded promotional lighters." },
  { q: "Can I get custom-branded lighters?", a: "Yes. Our promotional lighters support full-wrap pad printing with your logo and branding. MOQ for custom print orders is 5,000 units." },
  { q: "How quickly can I get a quote?", a: "Most quote requests are returned within one business day (48 hours). Submit your request through our quote form and we will respond with pricing, lead times, and shipping options." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero — full background image with overlay */}
      <section className="relative">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Gas lighters product showcase"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-ink/70" />

        {/* Content */}
        <div className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border border-paper/30 px-4 py-1.5 text-[0.75rem] font-medium uppercase tracking-widest text-paper/80">
                Wholesale only &middot; MOQ 1,000 units
              </span>
              <h1 className="text-display mt-6 text-[length:var(--text-display)] text-paper">
                Gas lighters, shipped by the pallet.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[length:var(--text-body)] text-paper/70 md:text-[1.0625rem]">
                We supply gas lighters to distributors, retailers, convenience chains, and
                promotional buyers across 30+ countries. No retail. No published prices. Just
                fast quotes and reliable shipping.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="ember" size="hero" href="/quote" className="rounded-full">
                  Request a quote
                </Button>
                <Button variant="ghost" size="hero" href="/products" className="rounded-full border-paper/40 text-paper hover:bg-paper/10 hover:opacity-100">
                  See the catalog
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* 01 / 04 — PRODUCTS */}
      <section className="bg-haze">
        <Container>
          <SectionDivider number="01" total="04" label="PRODUCTS" />
        </Container>

        <div className="py-16 md:py-24 lg:py-32">
          <Container>
            <Eyebrow>Full catalog</Eyebrow>
            <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
              Every lighter we make.
            </h2>

            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.sku}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* 02 / 04 — CAPABILITY */}
      <section className="bg-clean">
        <Container>
          <SectionDivider number="02" total="04" label="CAPABILITY" />
        </Container>

        <div className="py-16 md:py-24 lg:py-32">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  number: "12",
                  label: "SKUs in stock",
                  description: "Across BBQ, refillable, disposable, torch, and promotional lines.",
                  accent: "text-ember",
                },
                {
                  number: "48h",
                  label: "To quote",
                  description: "Most quote requests are returned within one business day.",
                  accent: "text-ink",
                },
                {
                  number: "30+",
                  label: "Countries shipped",
                  description: "From port to warehouse — FOB, CIF, and DDP available.",
                  accent: "text-flame",
                },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-ink/20 pt-5">
                  <p className={`text-spec text-[2.5rem] font-medium leading-none ${stat.accent}`}>
                    {stat.number}
                  </p>
                  <p className="text-label mt-2 text-ink">{stat.label}</p>
                  <p className="mt-2 text-small text-steel">{stat.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* 03 / 04 — HOW IT WORKS on ink */}
      <Container>
        <SectionDivider number="03" total="04" label="HOW IT WORKS" />
      </Container>

      <section className="bg-ink py-16 md:py-24 lg:py-32">
        <Container>
          <Eyebrow className="[&_span]:text-sand">Buyer flow</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)] text-paper">
            Three steps to your order.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                heading: "Request a quote",
                description:
                  "Tell us what you need — products, quantities, destination. We respond within one business day.",
              },
              {
                step: "02",
                heading: "We confirm spec, MOQ, and lead time",
                description:
                  "You get a detailed quote with unit pricing, packaging details, and shipping options.",
              },
              {
                step: "03",
                heading: "Production and shipping",
                description:
                  "Once confirmed, we produce and ship. Full tracking from factory to your warehouse.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-paper/20 pt-5">
                <p className="text-spec text-[2rem] font-medium leading-none text-ember">
                  {item.step}
                </p>
                <h3 className="text-h3 mt-3 text-[length:var(--text-h3)] text-paper">{item.heading}</h3>
                <p className="mt-2 text-small text-steel">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 / 04 — REQUEST */}
      <Container>
        <SectionDivider number="04" total="04" label="REQUEST" />
      </Container>

      {/* FAQ */}
      <section className="bg-clean py-16 md:py-24">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
            Frequently asked questions
          </h2>
          <div className="mt-10 max-w-2xl space-y-8">
            {faqItems.map((f) => (
              <div key={f.q} className="border-t border-ink/10 pt-6">
                <h3 className="text-h3 text-[length:var(--text-h3)]">{f.q}</h3>
                <p className="mt-2 text-steel">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <h2 className="text-h2 text-[length:var(--text-h2)] text-paper">
            Ready to order? Get a quote today.
          </h2>
          <p className="mt-3 text-steel">
            Tell us what you need — we respond within one business day.
          </p>
          <div className="mt-8">
            <Button variant="ember" size="hero" href="/quote">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
