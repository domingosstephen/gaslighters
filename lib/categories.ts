export type Category = {
  slug: string;
  name: string;
  description: string;
  skuPrefix: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "bbq",
    name: "BBQ Lighters",
    description: "Long-reach utility lighters for grills and outdoor cooking.",
    skuPrefix: "LK-BBQ",
    image: "/products/lk-bbq-04.webp",
  },
  {
    slug: "refillable",
    name: "Refillable Lighters",
    description: "Butane refillable pocket lighters with adjustable flame.",
    skuPrefix: "LK-REF",
    image: "/products/lk-ref-01.jpg",
  },
  {
    slug: "disposable",
    name: "Disposable Lighters",
    description: "Single-use flint lighters in bulk packaging.",
    skuPrefix: "LK-DSP",
    image: "/products/lk-dsp-02.jpg",
  },
  {
    slug: "torch",
    name: "Torch Lighters",
    description: "Wind-resistant jet flame lighters for industrial and outdoor use.",
    skuPrefix: "LK-TRC",
    image: "/products/lk-trc-01.webp",
  },
  {
    slug: "promotional",
    name: "Promotional Lighters",
    description: "Custom-branded lighters for marketing and promotional campaigns.",
    skuPrefix: "LK-PRM",
    image: "/products/lk-prm-01.jpg",
  },
];
