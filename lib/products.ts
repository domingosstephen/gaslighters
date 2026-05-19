export type Product = {
  sku: string;
  name: string;
  category: "bbq" | "refillable" | "disposable" | "torch" | "promotional";
  image: string;
  specs: { label: string; value: string }[];
  description: string;
};

export const products: Product[] = [
  {
    sku: "LK-BBQ-04",
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
  },
  {
    sku: "LK-BBQ-07",
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
  },
  {
    sku: "LK-REF-01",
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
  },
  {
    sku: "LK-REF-03",
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
  },
  {
    sku: "LK-DSP-02",
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
  },
  {
    sku: "LK-TRC-01",
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
  },
  {
    sku: "LK-TRC-05",
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
  },
  {
    sku: "LK-PRM-01",
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
  },
];
