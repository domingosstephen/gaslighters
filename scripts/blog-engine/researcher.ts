import Anthropic from "@anthropic-ai/sdk";
import { GENERATION_CONFIG } from "./config";

const anthropic = new Anthropic();

export async function researchTopic(topic: string, category: string): Promise<string> {
  const response = await anthropic.messages.create({
    model: GENERATION_CONFIG.model,
    max_tokens: 1500,
    messages: [
      {
        role: "user",
        content: `You are a B2B wholesale lighter industry researcher. Research the following topic and provide key facts, data points, and angles that would be valuable for a wholesale lighter buyer or importer.

Topic: "${topic}"
Category: ${category}

Provide:
1. 5-7 key facts or data points relevant to this topic
2. 3-4 angles or subtopics to cover
3. 2-3 common misconceptions or mistakes buyers make
4. Relevant industry standards or regulations if applicable
5. Suggested FAQ questions and answers (3-4)

Focus on practical, actionable information for B2B lighter buyers and importers. Be specific with numbers, standards, and real industry practices.`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock ? textBlock.text : "";
}
