import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Gas Lighter Catalog — All Products",
  description:
    "Browse our full catalog of wholesale gas lighters — BBQ, refillable, disposable, torch, and promotional lighters. 8 SKUs available for bulk order.",
  alternates: { canonical: "/products" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
