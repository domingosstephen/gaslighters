import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CategoryTile } from "@/components/product/CategoryTile";
import { categories } from "@/lib/categories";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Wholesale only &middot; MOQ 1,000 units</Eyebrow>
              <h1 className="text-display mt-4 text-[length:var(--text-display)]">
                Gas lighters, shipped by the pallet.
              </h1>
              <p className="mt-5 max-w-lg text-[length:var(--text-body)] text-steel md:text-[1.0625rem]">
                We supply gas lighters to distributors, retailers, convenience chains, and
                promotional buyers across 30+ countries. No retail. No published prices. Just
                fast quotes and reliable shipping.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="ember" size="hero" href="/quote">
                  Request a quote
                </Button>
                <Button variant="ghost" size="hero" href="/products">
                  See the catalog
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] bg-haze">
                <Image
                  src="/products/lk-ref-01.jpg"
                  alt="Classic Refillable Pocket Lighter"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <p className="text-spec mt-2 text-center text-[0.75rem] text-steel">
                LK-REF-01 &middot; 82mm &middot; Refillable
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 01 / 04 — RANGE */}
      <Container>
        <SectionDivider number="01" total="04" label="RANGE" />
      </Container>

      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <Eyebrow>Product range</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
            Five categories, one supplier.
          </h2>

          {/* Asymmetric grid: row 1: 4/4/4, row 2: 5/4/3 */}
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
            {categories.slice(0, 3).map((cat, i) => (
              <div key={cat.slug} className="lg:col-span-4">
                <CategoryTile category={cat} />
              </div>
            ))}
            {categories[3] && (
              <div className="lg:col-span-5">
                <CategoryTile category={categories[3]} />
              </div>
            )}
            {categories[4] && (
              <div className="lg:col-span-4">
                <CategoryTile category={categories[4]} />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 02 / 04 — CAPABILITY */}
      <Container>
        <SectionDivider number="02" total="04" label="CAPABILITY" />
      </Container>

      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "12",
                label: "SKUs in stock",
                description: "Across BBQ, refillable, disposable, torch, and promotional lines.",
              },
              {
                number: "48h",
                label: "To quote",
                description: "Most quote requests are returned within one business day.",
              },
              {
                number: "30+",
                label: "Countries shipped",
                description: "From port to warehouse — FOB, CIF, and DDP available.",
              },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-line pt-5">
                <p className="text-spec text-[2.5rem] font-medium leading-none text-ink">
                  {stat.number}
                </p>
                <p className="text-label mt-2 text-steel">{stat.label}</p>
                <p className="mt-2 text-small text-steel">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 / 04 — HOW IT WORKS */}
      <Container>
        <SectionDivider number="03" total="04" label="HOW IT WORKS" />
      </Container>

      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <Eyebrow>Buyer flow</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
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
              <div key={item.step} className="border-t border-line pt-5">
                <p className="text-spec text-[2rem] font-medium leading-none text-steel">
                  {item.step}
                </p>
                <h3 className="text-h3 mt-3 text-[length:var(--text-h3)]">{item.heading}</h3>
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

      {/* Closing CTA */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <h2 className="text-h2 text-[length:var(--text-h2)] text-paper">
            Ready to order? Get a quote today.
          </h2>
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
