import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wholesalelighters.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/capabilities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
