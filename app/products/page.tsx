"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

const filters = ["all", "bbq", "refillable", "disposable", "torch", "promotional"] as const;

const filterLabels: Record<string, string> = {
  all: "All",
  bbq: "BBQ",
  refillable: "Refillable",
  disposable: "Disposable",
  torch: "Torch",
  promotional: "Promotional",
};

export default function ProductsPage() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <Eyebrow>Catalog</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">
            Our product range
          </h1>
          <p className="mt-4 max-w-2xl text-[length:var(--text-body)] text-steel md:text-[1.0625rem]">
            Gas lighters for every use case — from economy disposables to branded promotional
            runs. All products ship in bulk packaging, ready for retail or redistribution.
          </p>

          {/* Filter pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-9 px-4 text-small font-medium transition-colors ${
                  active === f
                    ? "bg-ink text-paper"
                    : "border border-ink text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          {/* Asymmetric grid: row pattern 4/4/4 then 5/4/3 */}
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
            {filtered.map((product, i) => {
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
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line bg-ink py-16 md:py-24">
        <Container>
          <h2 className="text-h2 text-[length:var(--text-h2)] text-paper">
            Found what you need? Let us quote it.
          </h2>
          <p className="mt-3 text-steel">
            Mention the products and quantities in the form — we handle the rest.
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
