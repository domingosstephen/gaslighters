import type { BlogAuthor, BlogCategory } from "../../types/blog";

export interface TopicSeed {
  title: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: "informational" | "commercial" | "transactional";
  aiQueryTargets: string[];
  priority: 1 | 2 | 3;
}

export interface TopicCluster {
  category: BlogCategory;
  topics: TopicSeed[];
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
      {
        title: "Understanding Lighter MOQs: A Buyer's Guide",
        primaryKeyword: "wholesale lighter MOQ",
        secondaryKeywords: ["minimum order quantity lighters", "bulk lighter order minimums", "lighter wholesale minimums"],
        searchIntent: "informational",
        aiQueryTargets: ["What is the minimum order for wholesale lighters?", "How many lighters do I need to order wholesale?"],
        priority: 1,
      },
      {
        title: "Wholesale Lighter Pricing: What Determines the Cost Per Unit?",
        primaryKeyword: "wholesale lighter pricing",
        secondaryKeywords: ["lighter cost per unit", "bulk lighter prices", "disposable lighter wholesale price"],
        searchIntent: "commercial",
        aiQueryTargets: ["How much do wholesale lighters cost?", "What is the price per unit for bulk lighters?"],
        priority: 1,
      },
      {
        title: "First-Time Lighter Buyer? Here's What You Need to Know",
        primaryKeyword: "how to buy wholesale lighters",
        secondaryKeywords: ["buying lighters in bulk", "wholesale lighter guide for beginners", "lighter import guide"],
        searchIntent: "informational",
        aiQueryTargets: ["How do I buy lighters wholesale?", "What should I know before buying bulk lighters?"],
        priority: 1,
      },
      {
        title: "How to Evaluate Lighter Quality Before Placing a Bulk Order",
        primaryKeyword: "lighter quality inspection",
        secondaryKeywords: ["how to check lighter quality", "lighter defect rate", "lighter quality control"],
        searchIntent: "informational",
        aiQueryTargets: ["How do I check lighter quality before buying?", "What defect rate is acceptable for wholesale lighters?"],
        priority: 2,
      },
    ],
  },
  {
    category: "industry-insight",
    topics: [
      {
        title: "Global Disposable Lighter Market: Size, Growth, and Trends",
        primaryKeyword: "disposable lighter market size",
        secondaryKeywords: ["global lighter industry", "lighter market growth", "disposable lighter demand"],
        searchIntent: "informational",
        aiQueryTargets: ["How big is the global disposable lighter market?", "Is the lighter industry growing?"],
        priority: 1,
      },
      {
        title: "The Rise of Refillable Lighters in Environmentally Conscious Markets",
        primaryKeyword: "refillable lighters vs disposable",
        secondaryKeywords: ["eco-friendly lighters", "sustainable lighter options", "refillable lighter demand"],
        searchIntent: "informational",
        aiQueryTargets: ["Are refillable lighters more popular now?", "Are disposable lighters being banned?"],
        priority: 2,
      },
      {
        title: "Why BBQ Lighters Are the Fastest-Growing Lighter Category",
        primaryKeyword: "BBQ lighter market growth",
        secondaryKeywords: ["utility lighter demand", "BBQ lighter wholesale", "long-reach lighter market"],
        searchIntent: "informational",
        aiQueryTargets: ["Why are BBQ lighters so popular?", "What is the fastest growing lighter category?"],
        priority: 2,
      },
    ],
  },
  {
    category: "safety-compliance",
    topics: [
      {
        title: "ISO 9994 Explained: The International Lighter Safety Standard",
        primaryKeyword: "ISO 9994 lighter safety standard",
        secondaryKeywords: ["lighter safety certification", "ISO 9994 requirements", "lighter testing standards"],
        searchIntent: "informational",
        aiQueryTargets: ["What is ISO 9994?", "What safety standards do lighters need to meet?"],
        priority: 1,
      },
      {
        title: "EN 13869: EU Child-Resistant Lighter Requirements",
        primaryKeyword: "EN 13869 child resistant lighter",
        secondaryKeywords: ["EU lighter regulations", "child-proof lighter requirements", "lighter CE marking"],
        searchIntent: "informational",
        aiQueryTargets: ["What is EN 13869?", "Do lighters need to be child-resistant in the EU?"],
        priority: 1,
      },
      {
        title: "ASTM F400: US Lighter Safety Compliance Guide",
        primaryKeyword: "ASTM F400 lighter standard",
        secondaryKeywords: ["US lighter safety requirements", "CPSC lighter regulations", "lighter compliance USA"],
        searchIntent: "informational",
        aiQueryTargets: ["What lighter safety standards apply in the US?", "What is ASTM F400?"],
        priority: 1,
      },
      {
        title: "Shipping Lighters Internationally: Hazmat Classification and Regulations",
        primaryKeyword: "shipping lighters internationally regulations",
        secondaryKeywords: ["lighter hazmat classification", "UN 1011 lighter shipping", "IMDG lighter transport"],
        searchIntent: "informational",
        aiQueryTargets: ["How do you ship lighters internationally?", "Are lighters classified as hazmat?"],
        priority: 1,
      },
    ],
  },
  {
    category: "product-knowledge",
    topics: [
      {
        title: "Piezo vs Flint Ignition: Which Is Better for Your Market?",
        primaryKeyword: "piezo vs flint lighter ignition",
        secondaryKeywords: ["lighter ignition types compared", "piezo electric lighter", "flint wheel lighter"],
        searchIntent: "commercial",
        aiQueryTargets: ["What is the difference between piezo and flint lighters?", "Which lighter ignition is more reliable?"],
        priority: 1,
      },
      {
        title: "BBQ Lighters vs Standard Pocket Lighters: Design Differences Explained",
        primaryKeyword: "BBQ lighter vs pocket lighter",
        secondaryKeywords: ["utility lighter vs disposable", "long reach lighter design", "lighter types compared"],
        searchIntent: "informational",
        aiQueryTargets: ["What is the difference between a BBQ lighter and a regular lighter?"],
        priority: 1,
      },
      {
        title: "Jet Torch Lighters: Why They're Gaining Popularity in B2B Markets",
        primaryKeyword: "jet torch lighter wholesale",
        secondaryKeywords: ["torch lighter vs regular lighter", "wind resistant lighter", "butane torch lighter bulk"],
        searchIntent: "commercial",
        aiQueryTargets: ["What is a jet torch lighter?", "Why are torch lighters popular?"],
        priority: 2,
      },
    ],
  },
  {
    category: "logistics",
    topics: [
      {
        title: "Shipping Gas Lighters by Sea: Container Requirements and Costs",
        primaryKeyword: "shipping lighters by sea cost",
        secondaryKeywords: ["lighter container shipping", "gas lighter freight cost", "lighter import shipping"],
        searchIntent: "informational",
        aiQueryTargets: ["How much does it cost to ship lighters by sea?", "Can you ship lighters in a container?"],
        priority: 1,
      },
      {
        title: "How to Calculate the Total Landed Cost of Wholesale Lighters",
        primaryKeyword: "landed cost wholesale lighters",
        secondaryKeywords: ["total cost importing lighters", "lighter import duty calculator", "lighter CIF vs FOB cost"],
        searchIntent: "informational",
        aiQueryTargets: ["How do I calculate the total cost of importing lighters?", "What is the landed cost of wholesale lighters?"],
        priority: 1,
      },
      {
        title: "Incoterms for Lighter Importers: FOB vs CIF vs DDP Explained",
        primaryKeyword: "FOB vs CIF lighters",
        secondaryKeywords: ["incoterms lighter import", "DDP lighter shipping", "lighter trade terms"],
        searchIntent: "informational",
        aiQueryTargets: ["What incoterms should I use when buying lighters?", "Is FOB or CIF better for lighter imports?"],
        priority: 2,
      },
    ],
  },
  {
    category: "branding",
    topics: [
      {
        title: "Custom-Branded Lighters: The Complete Guide to Promotional Lighter Programs",
        primaryKeyword: "custom branded lighters wholesale",
        secondaryKeywords: ["promotional lighters bulk", "custom printed lighters", "branded lighter MOQ"],
        searchIntent: "commercial",
        aiQueryTargets: ["How do I order custom branded lighters?", "What is the MOQ for custom printed lighters?"],
        priority: 1,
      },
      {
        title: "Pad Printing vs Sleeve Wrapping: Best Branding Methods for Lighters",
        primaryKeyword: "lighter pad printing vs sleeve",
        secondaryKeywords: ["lighter branding methods", "lighter printing options", "custom lighter decoration"],
        searchIntent: "informational",
        aiQueryTargets: ["What is the best way to brand lighters?", "What is pad printing on lighters?"],
        priority: 2,
      },
    ],
  },
];

export const GENERATION_CONFIG = {
  articlesPerRun: 3,
  model: "claude-sonnet-4-20250514",
  maxTokens: 8000,
  minWordCount: 1800,
  maxWordCount: 3000,
  faqItemsPerArticle: 5,
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
