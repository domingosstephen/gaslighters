import type { BlogAuthor, BlogCategory } from "../../types/blog";

export interface TopicCluster {
  category: BlogCategory;
  topics: string[];
}

export const AUTHORS: BlogAuthor[] = [
  {
    name: "Daniel Ferreira",
    title: "Wholesale Lighter Industry Analyst",
    bio: "Daniel covers lighter market trends and supply-chain dynamics. With a background in B2B trade analysis, he helps buyers navigate the wholesale lighter landscape.",
  },
  {
    name: "Sarah Mitchell",
    title: "Product Compliance Specialist",
    bio: "Sarah specializes in lighter safety standards and international compliance. She advises importers on ISO 9994, EN 13869, and ASTM F400 certification processes.",
  },
  {
    name: "James Park",
    title: "Logistics & Sourcing Consultant",
    bio: "James has over a decade of experience in international lighter sourcing and logistics. He writes about freight, customs, landed costs, and supplier evaluation.",
  },
];

export const TOPIC_CLUSTERS: TopicCluster[] = [
  {
    category: "buying-guide",
    topics: [
      "How to Choose the Right Wholesale Lighter Supplier",
      "Understanding Lighter MOQs: A Buyer's Guide",
      "Wholesale Lighter Pricing: What Determines the Cost Per Unit?",
      "First-Time Lighter Buyer? Here's What You Need to Know",
      "How to Evaluate Lighter Quality Before Placing a Bulk Order",
    ],
  },
  {
    category: "industry-insight",
    topics: [
      "Global Disposable Lighter Market: Size, Growth, and Trends",
      "The Rise of Refillable Lighters in Environmentally Conscious Markets",
      "Convenience Store Lighter Sales: Trends and Best-Selling Types",
      "Why BBQ Lighters Are the Fastest-Growing Lighter Category",
    ],
  },
  {
    category: "safety-compliance",
    topics: [
      "ISO 9994 Explained: The International Lighter Safety Standard",
      "EN 13869: EU Child-Resistant Lighter Requirements",
      "ASTM F400: US Lighter Safety Compliance Guide",
      "Shipping Lighters Internationally: Hazmat Classification and Regulations",
      "How to Get Your Lighters Certified for the European Market",
    ],
  },
  {
    category: "product-knowledge",
    topics: [
      "Piezo vs Flint Ignition: Which Is Better for Your Market?",
      "Anatomy of a Gas Lighter: How Lighters Are Made",
      "BBQ Lighters vs Standard Lighters: Design Differences Explained",
      "Jet Torch Lighters: Why They're Gaining Popularity in B2B Markets",
    ],
  },
  {
    category: "logistics",
    topics: [
      "Shipping Gas Lighters by Sea: Container Requirements and Costs",
      "Customs Duties on Imported Lighters by Country",
      "How to Calculate the Total Landed Cost of Wholesale Lighters",
      "Incoterms for Lighter Importers: FOB vs CIF vs DDP",
    ],
  },
  {
    category: "branding",
    topics: [
      "Custom-Branded Lighters: The Complete Guide to Promotional Lighter Programs",
      "Pad Printing vs Sleeve Wrapping: Best Branding Methods for Lighters",
      "How Promotional Lighters Drive Brand Recall: Data and Case Studies",
      "Designing Effective Lighter Branding: Colors, Logos, and Layout",
    ],
  },
];

export const GENERATION_CONFIG = {
  articlesPerRun: 1,
  model: "claude-sonnet-4-20250514",
  maxTokens: 4000,
  siteUrl: "https://www.wholesalegaslighters.com",
  siteName: "Wholesale Gas Lighters",
  contentDir: "content/blog",
  productImages: [
    "/products/lk-bbq-04.webp",
    "/products/lk-bbq-07.webp",
    "/products/lk-ref-01.jpg",
    "/products/lk-ref-03.jpg",
    "/products/lk-dsp-02.jpg",
    "/products/lk-trc-01.webp",
    "/products/lk-trc-05.webp",
    "/products/lk-prm-01.jpg",
  ],
};
