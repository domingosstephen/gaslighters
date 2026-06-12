import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";

// Last meaningful content update date — update when pages change
const LAST_UPDATED = "2026-06-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.wholesalegaslighters.com";

  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${base}/products/category/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...productPages,
    ...categoryPages,
    { url: `${base}/blog`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/capabilities`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/quote`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
  ];
}
