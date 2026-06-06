import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Wholesale Gas Lighters. Read our terms of use, ordering policies, and shipping conditions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-clean py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">Terms & Conditions</h1>
          <p className="mt-4 text-small text-steel">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 text-[length:var(--text-body)] text-steel">
            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">1. General</h2>
              <p className="mt-3">These terms govern the use of the Wholesale Gas Lighters website and any wholesale purchase agreements. This website is intended for B2B buyers only — not for retail consumers.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">2. Product Information</h2>
              <p className="mt-3">Product specifications and images are provided for general reference. Actual specifications are confirmed in the formal quotation. All products comply with ISO 9994, EN 13869, and ASTM F400 safety standards where applicable.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">3. Quotations & Orders</h2>
              <p className="mt-3">All prices are quoted per unit and are subject to confirmation. Quotations are valid for the period specified. Orders are confirmed only upon written acceptance by Wholesale Gas Lighters.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">4. Minimum Order Quantities</h2>
              <p className="mt-3">Standard MOQ is 1,000 units. Custom-branded promotional lighters have a MOQ of 5,000 units. MOQs may vary by product and are confirmed at quotation.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">5. Shipping & Delivery</h2>
              <p className="mt-3">We offer FOB, CIF, and DDP shipping terms. Lead times are estimates and vary by destination and order volume. All shipments comply with international hazardous goods transport regulations for pressurized gas containers.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">6. Payment</h2>
              <p className="mt-3">Payment terms are established per order and specified in the formal quotation. Standard terms include advance payment and letter of credit.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">7. Limitation of Liability</h2>
              <p className="mt-3">Wholesale Gas Lighters shall not be liable for indirect or consequential damages. Our liability is limited to the value of the goods in question.</p>
            </div>

            <div>
              <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">8. Contact</h2>
              <p className="mt-3">For questions about these terms, contact us at <a href="mailto:benserena416@gmail.com" className="text-ink underline underline-offset-2">benserena416@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
