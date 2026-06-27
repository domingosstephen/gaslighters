import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://www.wholesalegaslighters.com/sitemap.xml",
    host: "https://www.wholesalegaslighters.com",
  };
}
