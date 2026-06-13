import fs from "fs";
import path from "path";
import { TOPIC_CLUSTERS, AUTHORS, GENERATION_CONFIG } from "./config";
import type { TopicSeed } from "./config";
import type { BlogAuthor, BlogCategory } from "../../types/blog";

const PUBLISHED_PATH = path.join(__dirname, "published.json");
const CONTROL_PATH = path.join(__dirname, "control.json");

interface PublishedRecord {
  publishedTopics: string[];
}

interface ControlRecord {
  lastRun: string;
  totalPublished: number;
  lastCategory: string;
}

function getPublished(): PublishedRecord {
  try {
    return JSON.parse(fs.readFileSync(PUBLISHED_PATH, "utf-8"));
  } catch {
    return { publishedTopics: [] };
  }
}

function getControl(): ControlRecord {
  try {
    return JSON.parse(fs.readFileSync(CONTROL_PATH, "utf-8"));
  } catch {
    return { lastRun: "", totalPublished: 0, lastCategory: "" };
  }
}

function savePublished(data: PublishedRecord) {
  fs.writeFileSync(PUBLISHED_PATH, JSON.stringify(data, null, 2));
}

function saveControl(data: ControlRecord) {
  fs.writeFileSync(CONTROL_PATH, JSON.stringify(data, null, 2));
}

export function selectTopics(count?: number): { topic: TopicSeed; category: BlogCategory; author: BlogAuthor }[] {
  const published = getPublished();
  const control = getControl();
  const numTopics = count ?? GENERATION_CONFIG.articlesPerRun;
  const results: { topic: TopicSeed; category: BlogCategory; author: BlogAuthor }[] = [];

  // Collect all unpublished topics, sorted by priority
  const available: { topic: TopicSeed; category: BlogCategory }[] = [];
  for (const cluster of TOPIC_CLUSTERS) {
    for (const topic of cluster.topics) {
      if (!published.publishedTopics.includes(topic.title)) {
        available.push({ topic, category: cluster.category });
      }
    }
  }

  // Sort by priority (1 = highest)
  available.sort((a, b) => a.topic.priority - b.topic.priority);

  for (let i = 0; i < Math.min(numTopics, available.length); i++) {
    const { topic, category } = available[i];
    const author = AUTHORS[(control.totalPublished + i) % AUTHORS.length];
    results.push({ topic, category, author });
  }

  return results;
}

export function markPublished(topicTitle: string) {
  const published = getPublished();
  const control = getControl();

  published.publishedTopics.push(topicTitle);
  control.lastRun = new Date().toISOString();
  control.totalPublished += 1;

  savePublished(published);
  saveControl(control);
}

export function getTopicStats() {
  const published = getPublished();
  const allTopics = TOPIC_CLUSTERS.flatMap((c) => c.topics);
  const remaining = allTopics.filter((t) => !published.publishedTopics.includes(t.title)).length;

  return {
    configTopics: allTopics.length,
    publishedCount: published.publishedTopics.length,
    remaining,
    articlesPerDay: GENERATION_CONFIG.articlesPerRun,
    daysOfContentLeft: Math.ceil(remaining / GENERATION_CONFIG.articlesPerRun),
  };
}

export function getPostCount(): number {
  const blogDir = path.join(process.cwd(), "content", "blog");
  try {
    return fs.readdirSync(blogDir).filter((f) => f.endsWith(".json")).length;
  } catch {
    return 0;
  }
}
