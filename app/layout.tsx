import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wholesalegaslighters.com"),
  title: {
    default: "Wholesale Gas Lighters — Bulk Gas Lighters by the Pallet",
    template: "%s | Wholesale Gas Lighters",
  },
  description:
    "B2B wholesale gas lighters for distributors, retailers, and promotional buyers. Request a quote — no minimums published, fast turnaround.",
  keywords: [
    "wholesale gas lighters",
    "bulk gas lighters",
    "BBQ lighters wholesale",
    "disposable lighters bulk",
    "promotional lighters",
    "jet torch lighters wholesale",
    "refillable lighters bulk",
    "custom branded lighters",
    "lighter supplier",
    "lighter distributor",
    "gas lighter MOQ",
    "buy lighters by pallet",
    "wholesale lighter supplier",
    "B2B gas lighters",
  ],
  authors: [{ name: "Wholesale Gas Lighters", url: "https://www.wholesalegaslighters.com" }],
  creator: "Wholesale Gas Lighters",
  publisher: "Wholesale Gas Lighters",
  category: "wholesale",
  openGraph: {
    siteName: "Wholesale Gas Lighters",
    type: "website",
    url: "https://www.wholesalegaslighters.com",
    images: [
      {
        url: "https://www.wholesalegaslighters.com/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Wholesale Gas Lighters — Bulk Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Gas Lighters — Bulk Gas Lighters by the Pallet",
    description: "B2B wholesale gas lighters for distributors, retailers, and promotional buyers. Request a quote — fast turnaround.",
    images: ["https://www.wholesalegaslighters.com/hero-bg.jpg"],
  },
  alternates: { canonical: "https://www.wholesalegaslighters.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4eb14543200fea69",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
