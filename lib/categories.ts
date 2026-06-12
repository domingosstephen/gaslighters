export type Category = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  skuPrefix: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "bbq",
    name: "BBQ Lighters",
    description: "Long-reach utility lighters for grills and outdoor cooking.",
    longDescription:
      "Our wholesale BBQ lighters are designed for grills, fire pits, and outdoor cooking equipment. Available in fixed-neck and flexible-neck configurations with reach lengths from 280mm to 320mm, they feature child-resistant safety locks, adjustable flames, and piezo electric ignition. All BBQ lighters meet EN ISO 9994 safety standards and ship in cartons of 400 to 500 units. Ideal for hardware stores, supermarket chains, garden centres, and outdoor retailers stocking seasonal grilling supplies.",
    skuPrefix: "LK-BBQ",
    image: "/products/lk-bbq-04.webp",
  },
  {
    slug: "refillable",
    name: "Refillable Lighters",
    description: "Butane refillable pocket lighters with adjustable flame.",
    longDescription:
      "Our refillable pocket lighters offer long-term value for retailers and distributors. Filled with standard butane and equipped with adjustable flame control, they come in classic flint-wheel and modern piezo electric ignition styles. Transparent fuel windows on select models let end users monitor gas levels. Refillable lighters ship in cartons of 1,000 to 1,200 units, making them a cost-effective choice for convenience stores, tobacco shops, and general merchandise distributors looking for repeat-purchase products.",
    skuPrefix: "LK-REF",
    image: "/products/lk-ref-01.jpg",
  },
  {
    slug: "disposable",
    name: "Disposable Lighters",
    description: "Single-use flint lighters in bulk packaging.",
    longDescription:
      "Our economy disposable lighters are the highest-volume product in our catalog, shipping in cartons of 2,000 units. Available in 8 solid colours with flint-wheel ignition and isobutane fill, they are the standard choice for convenience stores, petrol stations, and dollar stores worldwide. Each lighter meets EN ISO 9994 and ASTM F400 safety requirements. For buyers needing branded disposables, see our promotional lighters line which offers full-wrap pad printing on the same reliable body.",
    skuPrefix: "LK-DSP",
    image: "/products/lk-dsp-02.jpg",
  },
  {
    slug: "torch",
    name: "Torch Lighters",
    description: "Wind-resistant jet flame lighters for industrial and outdoor use.",
    longDescription:
      "Our jet torch lighters produce a focused, wind-resistant blue flame suitable for outdoor, industrial, and culinary use. Available in single-jet and triple-jet configurations with butane capacities up to 8ml, they feature flame locks, rubberized grips, and fuel windows. Torch lighters are popular with cigar shops, outdoor equipment retailers, and kitchenware distributors. All models are refillable and ship in cartons of 400 to 500 units with safety data sheets included for international freight.",
    skuPrefix: "LK-TRC",
    image: "/products/lk-trc-01.webp",
  },
  {
    slug: "promotional",
    name: "Promotional Lighters",
    description: "Custom-branded lighters for marketing and promotional campaigns.",
    longDescription:
      "Our custom-print promotional lighters turn an everyday item into a branded marketing tool. Using full-wrap pad printing, we apply your logo, colours, and messaging to disposable lighter bodies with a minimum order of 5,000 units. Promotional lighters are widely used by beverage brands, event organisers, hospitality companies, and marketing agencies running trade show giveaways. We provide digital proofs before production and can match Pantone colours on request. Lead time is typically 3 to 4 weeks from proof approval.",
    skuPrefix: "LK-PRM",
    image: "/products/lk-prm-01.jpg",
  },
];
