import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block border-t border-line pt-5">
      <div className="relative aspect-[4/3] overflow-hidden bg-clean">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="mt-4">
        <Eyebrow>{product.category.toUpperCase()}</Eyebrow>
        <h3 className="text-h3 mt-2 text-[length:var(--text-h3)] transition-colors group-hover:text-ember">
          {product.name}
        </h3>
        <p className="mt-1 text-small text-steel">{product.sku}</p>
      </div>
    </Link>
  );
}
