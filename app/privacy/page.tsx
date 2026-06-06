import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Wholesale Gas Lighters. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-clean py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">Privacy Policy</h1>
          <p className="mt-4 text-small text-steel">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 text-[length:var(--text-body)] text-steel">
            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">1. Information We Collect</h2>
              <p className="mt-3">When you submit a quote request on our website, we collect the information you provide, including your company name, contact name, email address, phone number, country, and details about the products you are interested in.</p>
              <p className="mt-2">We also collect standard web analytics data such as IP address, browser type, and pages visited to improve our website.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">2. How We Use Your Information</h2>
              <p className="mt-3">We use the information you provide to respond to your quote requests, provide pricing and shipping information, and communicate about orders. We do not use your information for marketing purposes without your consent.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">3. Information Sharing</h2>
              <p className="mt-3">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and fulfilling orders.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">4. Data Security</h2>
              <p className="mt-3">We implement appropriate security measures to protect your personal information. Our website uses HTTPS encryption for all data transmission. Quote form submissions include honeypot spam protection.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">5. Your Rights</h2>
              <p className="mt-3">You have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:infomegatitulocomerciotrade@gmail.com" className="text-ink underline underline-offset-2">infomegatitulocomerciotrade@gmail.com</a> to exercise these rights.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
