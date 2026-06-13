import { GENERATION_CONFIG } from "./config";
import type { TopicSeed } from "./config";
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

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export async function generateArticle(
  topic: TopicSeed,
  category: BlogCategory,
  author: BlogAuthor,
  research: string
): Promise<GeneratedArticle & { slug: string; category: BlogCategory; author: BlogAuthor; image: string; imageAlt: string }> {
  const systemPrompt = `You are an expert B2B content writer for the wholesale gas lighter industry. You write for ${GENERATION_CONFIG.siteName} (${GENERATION_CONFIG.siteUrl}), a wholesale lighter supplier.

Your audience: B2B buyers, importers, distributors, convenience store chains, and promotional product companies who purchase lighters in bulk.

Writing style:
- Professional but accessible, not overly technical
- Data-driven with specific numbers and standards
- Actionable advice that helps buyers make informed decisions
- SEO-optimized with natural keyword usage (primary keyword in H1, first paragraph, and 2-3 H2s)
- Use H2 and H3 subheadings that match how people ask questions
- Include practical examples and comparisons
- Include comparison tables where applicable (HTML tables)
- Paragraphs should be 2-4 sentences max for readability
- Lead every section with a direct answer (40-60 words) for AI snippet extraction
- Include specific statistics with sources where possible
- Mention Wholesale Gas Lighters products naturally: link to /products for the catalog, /quote for quotes, and specific product categories (/products/category/bbq, /products/category/refillable, /products/category/disposable, /products/category/torch, /products/category/promotional)

Content format: Return valid HTML. Use <h2>, <h3>, <p>, <ul>, <li>, <strong>, <blockquote>, <table>, <thead>, <tbody>, <tr>, <th>, <td> tags.
For internal links use <a href="/products">our product catalog</a> format.

IMPORTANT: Do not fabricate statistics. When referencing standards, be accurate (ISO 9994, EN 13869, ASTM F400). The current year is ${new Date().getFullYear()}.`;

  const userPrompt = `Write a comprehensive blog article about: "${topic.title}"

Primary keyword: "${topic.primaryKeyword}"
Secondary keywords: ${topic.secondaryKeywords.map((k) => `"${k}"`).join(", ")}
Search intent: ${topic.searchIntent}

AI query targets (questions this article should directly answer):
${topic.aiQueryTargets.map((q) => `- ${q}`).join("\n")}

Research notes:
${research}

Requirements:
- ${GENERATION_CONFIG.minWordCount}-${GENERATION_CONFIG.maxWordCount} words
- ${GENERATION_CONFIG.faqItemsPerArticle} FAQ items targeting People Also Ask queries
- Include at least one comparison table if applicable
- Mention relevant product pages naturally with HTML links
- Write as ${author.name}, ${author.title}

Return a JSON object with these exact fields:
{
  "title": "Article title (50-70 chars)",
  "seoTitle": "SEO title with primary keyword (50-60 chars) | ${GENERATION_CONFIG.siteName}",
  "seoDescription": "Meta description (140-160 chars, keyword + value prop)",
  "excerpt": "2-3 sentence excerpt for blog listing cards",
  "content": "Full HTML article content (${GENERATION_CONFIG.minWordCount}-${GENERATION_CONFIG.maxWordCount} words)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "keywords": ["primary keyword", "secondary keyword 1", "secondary keyword 2"],
  "readingTime": 8,
  "faqItems": [
    { "question": "FAQ question?", "answer": "Detailed answer." }
  ],
  "tldr": "Key takeaway (2-3 sentences)."
}

Return ONLY the JSON object, no markdown fences or extra text.`;

  for (let attempt = 1; attempt <= 2; attempt++) {
    const raw = await callAnthropic(systemPrompt, userPrompt);

    let jsonStr = raw.trim();
    if (jsonStr.startsWith("\x60\x60\x60")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    try {
      const parsed = JSON.parse(jsonStr) as GeneratedArticle;
      const slug = generateSlug(parsed.title || topic.title);
      const imageIdx = Math.floor(Math.random() * GENERATION_CONFIG.productImages.length);

      return {
        ...parsed,
        slug,
        category,
        author,
        image: GENERATION_CONFIG.productImages[imageIdx],
        imageAlt: `${parsed.title || topic.title}`,
      };
    } catch (err) {
      if (attempt === 2) throw new Error(`Failed to parse JSON after 2 attempts: ${(err as Error).message}`);
      console.log(`   ⚠️  JSON parse failed on attempt ${attempt}, retrying...`);
    }
  }

  throw new Error("Unreachable");
}
