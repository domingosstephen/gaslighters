import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecRow } from "@/components/ui/SpecRow";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-t border-line pt-5">
      <div className="relative aspect-square bg-haze">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="mt-4">
        <Eyebrow>{product.category.toUpperCase()}</Eyebrow>
        <h3 className="text-h3 mt-2 text-[length:var(--text-h3)]">{product.name}</h3>
        <p className="mt-1 text-small text-steel">{product.description}</p>

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
    </div>
  );
}
