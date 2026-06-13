export type ProductFAQ = { question: string; answer: string };

export type Product = {
  sku: string;
  slug: string;
  name: string;
  category: "bbq" | "refillable" | "disposable" | "torch" | "promotional";
  image: string;
  specs: { label: string; value: string }[];
  description: string;
  faq: ProductFAQ[];
};

export const products: Product[] = [
  {
    sku: "LK-BBQ-04",
    slug: "bbq-utility-lighter-28cm",
    name: "BBQ Utility Lighter 28cm",
    category: "bbq",
    image: "/products/lk-bbq-04.webp",
    specs: [
      { label: "LENGTH", value: "280mm" },
      { label: "FILL", value: "Isobutane 3.2ml" },
      { label: "IGNITION", value: "Piezo electric" },
      { label: "PACK", value: "25 / inner, 500 / carton" },
    ],
    description: "Long-reach BBQ lighter with child-resistant safety lock and adjustable flame.",
    faq: [
      { question: "What is the reach length of this BBQ lighter?", answer: "The BBQ Utility Lighter has a 280mm (28cm) reach, designed to safely light grills, fire pits, and gas stoves without getting your hands close to the flame." },
      { question: "Is this BBQ lighter child-resistant?", answer: "Yes. It features a child-resistant safety lock mechanism that meets EN ISO 9994 and ASTM F400 safety standards." },
      { question: "What is the minimum order quantity?", answer: "The standard MOQ is 1,000 units. Each carton contains 500 lighters (25 per inner box)." },
    ],
  },
  {
    sku: "LK-BBQ-07",
    slug: "bbq-flex-neck-lighter",
    name: "BBQ Flex-Neck Lighter",
    category: "bbq",
    image: "/products/lk-bbq-07.webp",
    specs: [
      { label: "LENGTH", value: "320mm (extended)" },
      { label: "FILL", value: "Isobutane 4ml" },
      { label: "IGNITION", value: "Piezo electric" },
      { label: "PACK", value: "20 / inner, 400 / carton" },
    ],
    description: "Flexible-neck BBQ lighter for hard-to-reach spots. Refillable.",
    faq: [
      { question: "What makes the flex-neck lighter different from a standard BBQ lighter?", answer: "The flexible neck bends up to 45 degrees, allowing you to reach recessed burners, deep fire pits, and awkward angles that fixed-neck lighters cannot access." },
      { question: "Is this lighter refillable?", answer: "Yes. The BBQ Flex-Neck Lighter is refillable with standard isobutane canisters, reducing long-term cost for end users." },
      { question: "What is the packing configuration?", answer: "20 units per inner box, 400 units per carton. MOQ is 1,000 units." },
    ],
  },
  {
    sku: "LK-REF-01",
    slug: "classic-refillable-pocket-lighter",
    name: "Classic Refillable Pocket Lighter",
    category: "refillable",
    image: "/products/lk-ref-01.jpg",
    specs: [
      { label: "HEIGHT", value: "82mm" },
      { label: "FILL", value: "Butane 5ml" },
      { label: "IGNITION", value: "Flint wheel" },
      { label: "PACK", value: "50 / inner, 1000 / carton" },
    ],
    description: "Standard refillable pocket lighter with adjustable flame and metal flint wheel.",
    faq: [
      { question: "How do you refill this pocket lighter?", answer: "Insert a standard butane refill canister into the valve on the bottom of the lighter and press for 3 to 5 seconds. The 5ml tank provides approximately 1,000 lights per fill." },
      { question: "What ignition type does this lighter use?", answer: "It uses a traditional metal flint wheel ignition, which is the most widely recognized and reliable pocket lighter mechanism." },
      { question: "What colours are available?", answer: "Contact us for the current colour options. Custom colours are available on orders of 5,000 units or more." },
    ],
  },
  {
    sku: "LK-REF-03",
    slug: "slim-refillable-lighter",
    name: "Slim Refillable Lighter",
    category: "refillable",
    image: "/products/lk-ref-03.jpg",
    specs: [
      { label: "HEIGHT", value: "78mm" },
      { label: "FILL", value: "Butane 3.5ml" },
      { label: "IGNITION", value: "Piezo electric" },
      { label: "PACK", value: "50 / inner, 1200 / carton" },
    ],
    description: "Slim-profile refillable lighter with transparent fuel window.",
    faq: [
      { question: "What is the advantage of the transparent fuel window?", answer: "The fuel window lets end users see the remaining butane level, so they know when to refill. This is a key selling point for retail and convenience store buyers." },
      { question: "What ignition system does the slim lighter use?", answer: "Piezo electric ignition — no flint replacement needed. One-click reliable ignition with no moving parts to wear out." },
      { question: "How many units per carton?", answer: "50 per inner box, 1,200 per carton. This is our highest-density packing option, reducing per-unit shipping cost." },
    ],
  },
  {
    sku: "LK-DSP-02",
    slug: "economy-disposable-lighter",
    name: "Economy Disposable Lighter",
    category: "disposable",
    image: "/products/lk-dsp-02.jpg",
    specs: [
      { label: "HEIGHT", value: "80mm" },
      { label: "FILL", value: "Isobutane 2.5ml" },
      { label: "IGNITION", value: "Flint wheel" },
      { label: "PACK", value: "50 / inner, 2000 / carton" },
    ],
    description: "Bulk economy disposable lighter. Available in 8 solid colors.",
    faq: [
      { question: "How many lights does a disposable lighter provide?", answer: "Each economy disposable lighter provides approximately 800 to 1,000 lights from a single 2.5ml isobutane fill, depending on flame setting and duration." },
      { question: "What safety standards does this lighter meet?", answer: "All disposable lighters comply with EN ISO 9994 (European) and ASTM F400 (US) safety standards for consumer lighters." },
      { question: "Can I get custom branding on disposable lighters?", answer: "Yes. For branded disposable lighters with your logo, see our Custom Print Disposable Lighter (LK-PRM-01) with full-wrap pad printing. MOQ for custom print is 5,000 units." },
    ],
  },
  {
    sku: "LK-TRC-01",
    slug: "single-jet-torch-lighter",
    name: "Single Jet Torch Lighter",
    category: "torch",
    image: "/products/lk-trc-01.webp",
    specs: [
      { label: "HEIGHT", value: "85mm" },
      { label: "FILL", value: "Butane 6ml" },
      { label: "FLAME", value: "Single jet, wind-resistant" },
      { label: "PACK", value: "25 / inner, 500 / carton" },
    ],
    description: "Single jet torch lighter with flame lock and fuel window. Refillable.",
    faq: [
      { question: "What is a jet torch lighter used for?", answer: "Jet torch lighters produce a focused, wind-resistant blue flame ideal for lighting cigars, outdoor camping stoves, soldering, and culinary applications like caramelizing sugar." },
      { question: "Is this torch lighter wind-resistant?", answer: "Yes. The single jet produces a concentrated blue flame that performs reliably in wind conditions where standard lighters fail." },
      { question: "Does this lighter have a flame lock?", answer: "Yes. The flame lock allows hands-free operation, which is useful for industrial and culinary applications requiring a sustained flame." },
    ],
  },
  {
    sku: "LK-TRC-05",
    slug: "triple-jet-torch",
    name: "Triple Jet Torch",
    category: "torch",
    image: "/products/lk-trc-05.webp",
    specs: [
      { label: "HEIGHT", value: "92mm" },
      { label: "FILL", value: "Butane 8ml" },
      { label: "FLAME", value: "Triple jet, wind-resistant" },
      { label: "PACK", value: "20 / inner, 400 / carton" },
    ],
    description: "Heavy-duty triple jet torch with rubberized grip and punch cutter.",
    faq: [
      { question: "What is the difference between a single jet and triple jet torch?", answer: "A triple jet lighter produces three converging flames for a wider, more powerful heat zone. It heats faster and more evenly, making it preferred for cigar enthusiasts and professional culinary use." },
      { question: "What is the punch cutter on this lighter?", answer: "The built-in punch cutter on the base of the lighter is used to cut a clean hole in the cap of a cigar before lighting. This is a common feature on premium cigar lighters." },
      { question: "How long does the butane last?", answer: "The 8ml butane tank is the largest in our range, providing extended use between refills. It supports approximately 20 to 30 minutes of continuous flame." },
    ],
  },
  {
    sku: "LK-PRM-01",
    slug: "custom-print-disposable-lighter",
    name: "Custom Print Disposable Lighter",
    category: "promotional",
    image: "/products/lk-prm-01.jpg",
    specs: [
      { label: "HEIGHT", value: "80mm" },
      { label: "FILL", value: "Isobutane 2.5ml" },
      { label: "BRANDING", value: "Full-wrap pad print" },
      { label: "PACK", value: "50 / inner, 2000 / carton" },
    ],
    description: "Custom-branded disposable lighter with full-wrap pad printing. MOQ 5,000 units.",
    faq: [
      { question: "What is the minimum order for custom-printed lighters?", answer: "The MOQ for custom-branded lighters is 5,000 units. This allows for full-wrap pad printing setup and ensures consistent print quality across the run." },
      { question: "What branding options are available?", answer: "Full-wrap pad printing supports up to 4 colours. We can match Pantone colours on request. Digital proofs are provided before production for your approval." },
      { question: "How long does a custom print order take?", answer: "Lead time for custom-printed lighters is typically 3 to 4 weeks from proof approval, plus shipping time to your destination." },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
