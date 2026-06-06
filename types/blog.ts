export interface BlogAuthor {
  name: string;
  title: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  author: BlogAuthor;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  readingTime: number;
  featured: boolean;
  faqItems?: { question: string; answer: string }[];
  tldr?: string;
}

export type BlogCategory =
  | "buying-guide"
  | "industry-insight"
  | "safety-compliance"
  | "product-knowledge"
  | "logistics"
  | "branding";

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  "buying-guide": { label: "Buying Guide", description: "How to buy wholesale lighters effectively" },
  "industry-insight": { label: "Industry Insight", description: "Lighter market trends and analysis" },
  "safety-compliance": { label: "Safety & Compliance", description: "Lighter safety standards and regulations" },
  "product-knowledge": { label: "Product Knowledge", description: "Deep dives into lighter types and specs" },
  logistics: { label: "Logistics", description: "Shipping, customs, and supply chain for lighters" },
  branding: { label: "Branding", description: "Custom-branded promotional lighter strategies" },
};
