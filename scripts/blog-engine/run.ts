import { selectNextTopic, markTopicPublished } from "./topic-selector";
import { researchTopic } from "./researcher";
import { generateArticle } from "./generator";
import { publishArticle } from "./publisher";
import { GENERATION_CONFIG } from "./config";
import type { BlogCategory } from "../../types/blog";

async function main() {
  console.log("=== Blog Engine: Starting ===");
  console.log(`Articles to generate: ${GENERATION_CONFIG.articlesPerRun}`);

  for (let i = 0; i < GENERATION_CONFIG.articlesPerRun; i++) {
    const selection = selectNextTopic();

    if (!selection) {
      console.log("All topics have been published. Add new topics to config.ts.");
      break;
    }

    const { topic, category, author } = selection;
    console.log(`\nGenerating article ${i + 1}:`);
    console.log(`  Topic: ${topic}`);
    console.log(`  Category: ${category}`);
    console.log(`  Author: ${author.name}`);

    try {
      console.log("  Researching...");
      const research = await researchTopic(topic, category);

      console.log("  Writing article...");
      const article = await generateArticle(
        topic,
        category as BlogCategory,
        author,
        research
      );

      console.log("  Publishing...");
      const slug = publishArticle(
        article,
        topic,
        category as BlogCategory,
        author
      );

      markTopicPublished(topic, category);
      console.log(`  Done! Slug: ${slug}`);
    } catch (error) {
      console.error(`  Error generating article: ${error}`);
      process.exit(1);
    }
  }

  console.log("\n=== Blog Engine: Complete ===");
}

main();
