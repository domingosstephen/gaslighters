import fs from "fs";
import path from "path";
import type { BlogPost, BlogCategory } from "../../types/blog";
import type { BlogAuthor } from "../../types/blog";
import { GENERATION_CONFIG } from "./config";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function pickImage(category: string): string {
  const images = GENERATION_CONFIG.productImages;
  const categoryImageMap: Record<string, number[]> = {
    "buying-guide": [0, 2, 4],
    "industry-insight": [1, 3, 5],
    "safety-compliance": [2, 6, 4],
    "product-knowledge": [5, 6, 0],
    logistics: [3, 4, 1],
    branding: [7, 0, 2],
  };
  const indices = categoryImageMap[category] || [0, 1, 2];
  const idx = indices[Math.floor(Math.random() * indices.length)];
  return images[idx];
}

interface GeneratedArticle {
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: string;
  tags: string[];
  keywords: string[];
  readingTime: number;
  faqItems: { question: string; answer: string }[];
  tldr: string;
}

export function publishArticle(
  article: GeneratedArticle,
  topic: string,
  category: BlogCategory,
  author: BlogAuthor
): string {
  const slug = slugify(article.title);
  const now = new Date().toISOString();
  const image = pickImage(category);

  const post: BlogPost = {
    slug,
    title: article.title,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription,
    excerpt: article.excerpt,
    content: article.content,
    category,
    tags: article.tags,
    keywords: article.keywords,
    author,
    publishedAt: now,
    updatedAt: now,
    image,
    imageAlt: article.title,
    readingTime: article.readingTime,
    featured: false,
    faqItems: article.faqItems,
    tldr: article.tldr,
  };

  const contentDir = path.join(process.cwd(), GENERATION_CONFIG.contentDir);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const filePath = path.join(contentDir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));

  console.log(`Published: ${filePath}`);
  return slug;
}
