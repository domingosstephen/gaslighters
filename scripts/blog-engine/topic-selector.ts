import fs from "fs";
import path from "path";
import { TOPIC_CLUSTERS, AUTHORS } from "./config";
import type { BlogAuthor } from "../../types/blog";

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

export function selectNextTopic(): {
  topic: string;
  category: string;
  author: BlogAuthor;
} | null {
  const published = getPublished();
  const control = getControl();

  // Rotate through categories to ensure diversity
  const categoryOrder = TOPIC_CLUSTERS.map((c) => c.category);
  const lastIdx = categoryOrder.indexOf(control.lastCategory);
  const startIdx = (lastIdx + 1) % categoryOrder.length;

  // Try each category starting from the next one
  for (let i = 0; i < categoryOrder.length; i++) {
    const idx = (startIdx + i) % categoryOrder.length;
    const cluster = TOPIC_CLUSTERS[idx];

    const available = cluster.topics.filter(
      (t) => !published.publishedTopics.includes(t)
    );

    if (available.length > 0) {
      const topic = available[0];
      const author = AUTHORS[control.totalPublished % AUTHORS.length];

      return { topic, category: cluster.category, author };
    }
  }

  return null; // All topics published
}

export function markTopicPublished(topic: string, category: string) {
  const published = getPublished();
  const control = getControl();

  published.publishedTopics.push(topic);
  control.lastRun = new Date().toISOString();
  control.totalPublished += 1;
  control.lastCategory = category;

  savePublished(published);
  saveControl(control);
}
