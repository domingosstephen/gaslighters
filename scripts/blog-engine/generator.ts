import { GENERATION_CONFIG } from "./config";
import type { BlogAuthor, BlogCategory } from "../../types/blog";

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

async function callAnthropic(systemPrompt: string, userPrompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY environment variable is not set.");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: GENERATION_CONFIG.model,
      max_tokens: GENERATION_CONFIG.maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content[0].text;
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

  const userPrompt = `Write a comprehensive blog article about: "${topic}"
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

Return ONLY the JSON object, no markdown fences or extra text.`;

  for (let attempt = 1; attempt <= 2; attempt++) {
    const raw = await callAnthropic(systemPrompt, userPrompt);

    let jsonStr = raw.trim();
    if (jsonStr.startsWith("\x60\x60\x60")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    try {
      return JSON.parse(jsonStr) as GeneratedArticle;
    } catch (err) {
      if (attempt === 2) throw new Error(`Failed to parse JSON after 2 attempts: ${(err as Error).message}`);
      console.log(`   ⚠️  JSON parse failed on attempt ${attempt}, retrying...`);
    }
  }

  throw new Error("Unreachable");
}
