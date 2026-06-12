import type { Metadata } from "next";
import Script from "next/script";
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
            lighter buyers need to know.
          </p>
        </Container>
      </section>

      {/* Soro Blog Embed */}
      <section className="bg-paper py-16">
        <Container>
          <div id="soro-blog"></div>
          <Script
            src="https://app.trysoro.com/api/embed/0894ba58-9ce8-4f01-a5bc-ce94391793bd"
            strategy="lazyOnload"
          />
        </Container>
      </section>
    </>
  );
}
