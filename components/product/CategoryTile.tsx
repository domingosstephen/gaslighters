import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Category } from "@/lib/categories";

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group block border-t border-line pt-5"
    >
      <div className="relative aspect-[4/3] bg-haze">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="mt-4">
        <Eyebrow>{category.name}</Eyebrow>
        <p className="mt-2 text-small text-steel">{category.description}</p>
        <p className="text-spec mt-2 text-[0.75rem] text-steel">{category.skuPrefix}-xx</p>
      </div>
    </Link>
  );
}
