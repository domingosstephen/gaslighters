import { selectTopics, markPublished, getTopicStats, getPostCount } from "./topic-selector";
import { researchTopic } from "./researcher";
import { generateArticle } from "./generator";
import { publishArticle } from "./publisher";
import type { BlogCategory } from "../../types/blog";

const args = process.argv.slice(2);
const isStats = args.includes("--stats");
const isDryRun = args.includes("--dry-run");
const countIdx = args.indexOf("--count");
const count = countIdx !== -1 ? parseInt(args[countIdx + 1], 10) : undefined;

if (isStats) {
  const stats = getTopicStats();
  console.log("\n📊 Blog Engine — Topic Coverage Stats\n");
  console.log(`Total topics (config):   ${stats.configTopics}`);
  console.log(`Already published:       ${stats.publishedCount}`);
  console.log(`Remaining:               ${stats.remaining}`);
  console.log(`Articles per run:        ${stats.articlesPerDay}`);
  console.log(`Runs of content left:    ~${stats.daysOfContentLeft}`);
  console.log(`Existing blog posts:     ${getPostCount()}`);
  process.exit(0);
}

async function main() {
  console.log("\n🚀 Wholesale Gas Lighters Blog Engine — Starting\n");

  const topics = selectTopics(count);

  if (topics.length === 0) {
    console.log("No topics available. All configured topics have been published.");
    process.exit(0);
  }

  console.log(`Selected ${topics.length} topic(s) for generation:\n`);
  topics.forEach(({ topic, category }, i) => {
    console.log(`  ${i + 1}. [${category}] ${topic.title}`);
    console.log(`     Primary keyword: "${topic.primaryKeyword}"`);
    console.log(`     Priority: ${topic.priority} | Intent: ${topic.searchIntent}`);
    console.log();
  });

  if (isDryRun) {
    console.log("(Dry run — no articles generated)\n");
    process.exit(0);
  }

  let succeeded = 0;
  let failed = 0;

  for (const { topic, category, author } of topics) {
    console.log(`📝 Generating: "${topic.title}"...`);

    try {
      console.log("   Researching...");
      const research = await researchTopic(topic.title, category);

      console.log("   Writing article...");
      const article = await generateArticle(topic, category as BlogCategory, author, research);

      console.log("   Publishing...");
      publishArticle(
        article,
        topic.title,
        category as BlogCategory,
        author
      );

      markPublished(topic.title);
      console.log(`   ✅ Published: ${article.slug}`);
      console.log(`   📊 Words: ~${article.content.replace(/<[^>]*>/g, "").split(/\s+/).length}`);
      succeeded++;
    } catch (error) {
      console.error(`   ❌ Failed: ${error}`);
      failed++;
    }
  }

  console.log("\n" + "═".repeat(60));
  console.log(`📋 Summary: ${succeeded} succeeded, ${failed} failed`);
  console.log(`Total posts now: ${getPostCount()}\n`);

  if (succeeded === 0) process.exit(1);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
