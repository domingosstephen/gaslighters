import Anthropic from "@anthropic-ai/sdk";
import { GENERATION_CONFIG } from "./config";
import type { BlogAuthor, BlogCategory } from "../../types/blog";

const anthropic = new Anthropic();

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

export async function generateArticle(
  topic: string,
  category: BlogCategory,
  author: BlogAuthor,
  research: string
): Promise<GeneratedArticle> {
  const systemPrompt = `You are an expert B2B content writer for the wholesale gas lighter industry. You write for ${GENERATION_CONFIG.siteName} (${GENERATION_CONFIG.siteUrl}), a wholesale lighter supplier.

Your audience: B2B buyers, importers, distributors, convenience store chains, and promotional product companies who purchase lighters in bulk.

Writing style:
- Professional but accessible, not overly technical
- Data-driven with specific numbers and standards
- Actionable advice that helps buyers make informed decisions
- SEO-optimized with natural keyword usage
- Use H2 and H3 subheadings for structure
- Include practical examples and comparisons
- Paragraphs should be 2-4 sentences max for readability

Content format: Return valid HTML content (no markdown). Use <h2>, <h3>, <p>, <ul>, <li>, <strong>, <blockquote> tags.

IMPORTANT: Do not fabricate statistics or claim unverified market data. Use qualitative insights and general industry knowledge. When referencing standards, be accurate about standard numbers (ISO 9994, EN 13869, ASTM F400).`;

  const response = await anthropic.messages.create({
    model: GENERATION_CONFIG.model,
    max_tokens: GENERATION_CONFIG.maxTokens,
    messages: [
      {
        role: "user",
        content: `Write a comprehensive blog article about: "${topic}"
Category: ${category}
Author: ${author.name} (${author.title})

Research notes:
${research}

Return a JSON object with these exact fields:
{
  "title": "Article title (50-70 chars)",
  "seoTitle": "SEO title with primary keyword (50-60 chars) | ${GENERATION_CONFIG.siteName}",
  "seoDescription": "Meta description (150-160 chars) with primary keyword",
  "excerpt": "2-3 sentence excerpt for blog listing cards (100-150 chars)",
  "content": "Full HTML article content (1500-2500 words). Use <h2>, <h3>, <p>, <ul>, <li>, <strong>, <blockquote> tags.",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "keywords": ["primary keyword", "secondary keyword", "long-tail keyword 1", "long-tail keyword 2"],
  "readingTime": 8,
  "faqItems": [
    { "question": "FAQ question 1?", "answer": "Detailed answer 1." },
    { "question": "FAQ question 2?", "answer": "Detailed answer 2." },
    { "question": "FAQ question 3?", "answer": "Detailed answer 3." }
  ],
  "tldr": "One-paragraph summary of the key takeaway (2-3 sentences)."
}

Return ONLY the JSON object, no markdown fences or extra text.`,
      },
    ],
    system: systemPrompt,
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock) throw new Error("No text in response");

  let jsonStr = textBlock.text.trim();
  // Strip markdown code fences if present
  if (jsonStr.startsWith("\x60\x60\x60")) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  return JSON.parse(jsonStr) as GeneratedArticle;
}
