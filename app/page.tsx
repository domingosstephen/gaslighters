import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
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

            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
              {products.map((product, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const spanClass =
                  row % 2 === 1
                    ? col === 0
                      ? "lg:col-span-5"
                      : col === 1
                        ? "lg:col-span-4"
                        : "lg:col-span-3"
                    : "lg:col-span-4";
                return (
                  <div key={product.sku} className={spanClass}>
                    <ProductCard product={product} />
                  </div>
                );
              })}
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
