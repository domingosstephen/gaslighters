"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecRow } from "@/components/ui/SpecRow";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-line pt-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <div className="relative aspect-[4/3] bg-clean">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <Eyebrow>{product.category.toUpperCase()}</Eyebrow>
            <h3 className="text-h3 mt-2 text-[length:var(--text-h3)]">{product.name}</h3>
          </div>
          <span
            className={`text-steel transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div className="mt-3 animate-[fadeIn_0.2s_ease-out]">
          <p className="text-small text-steel">{product.description}</p>

          <div className="mt-3">
            {product.specs.map((spec) => (
              <SpecRow key={spec.label} label={spec.label} value={spec.value} />
            ))}
          </div>

          <Link
            href={`/quote?product=${encodeURIComponent(`${product.name} (${product.sku})`)}`}
            className="mt-4 inline-flex h-9 items-center border border-ink px-4 text-small font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Request a quote
          </Link>
        </div>
      )}
    </div>
  );
}
