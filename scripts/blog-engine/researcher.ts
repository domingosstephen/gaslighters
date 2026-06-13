import { GENERATION_CONFIG } from "./config";

async function callAnthropic(systemPrompt: string, userPrompt: string, maxTokens = 1500): Promise<string> {
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
      max_tokens: maxTokens,
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

export async function researchTopic(topic: string, category: string): Promise<string> {
  return callAnthropic(
    "You are a B2B wholesale lighter industry researcher.",
    `Research the following topic and provide key facts, data points, and angles that would be valuable for a wholesale lighter buyer or importer.

Topic: "${topic}"
Category: ${category}

Provide:
1. 5-7 key facts or data points relevant to this topic
2. 3-4 angles or subtopics to cover
3. 2-3 common misconceptions or mistakes buyers make
4. Relevant industry standards or regulations if applicable
5. Suggested FAQ questions and answers (3-4)

Focus on practical, actionable information for B2B lighter buyers and importers. Be specific with numbers, standards, and real industry practices.`
  );
}
