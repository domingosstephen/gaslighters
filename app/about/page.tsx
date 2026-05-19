import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are, where we ship, and how to get in touch — Wholesale Lighters.",
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          {/* Who we are */}
          <Eyebrow>About</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">
            Who we are
          </h1>
          <p className="mt-6 text-[length:var(--text-body)] text-steel md:text-[1.0625rem]">
            Wholesale Lighters is a B2B supplier of gas lighters for distributors, retailers,
            convenience chains, hospitality buyers, and promotional merchandise companies. We
            keep it simple: a focused product range, competitive pricing on volume, and
            reliable logistics from factory to warehouse. No retail sales, no middlemen, no
            fluff.
          </p>

          {/* Where we ship */}
          <div className="mt-16 border-t border-line pt-10">
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">Where we ship</h2>
            <div className="mt-6 grid gap-x-12 gap-y-4 text-[length:var(--text-body)] text-steel sm:grid-cols-2 md:text-[1.0625rem]">
              <ul className="space-y-2">
                <li>Europe (EU & UK)</li>
                <li>North America</li>
                <li>Latin America</li>
                <li>Middle East</li>
              </ul>
              <ul className="space-y-2">
                <li>Africa</li>
                <li>Southeast Asia</li>
                <li>Oceania</li>
                {/* // TBD: confirm full shipping regions with client */}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 border-t border-line pt-10">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">Get in touch</h2>
            <div className="mt-6 space-y-4">
              {/* // TBD: real address from client */}
              <div>
                <p className="text-label text-steel">Address</p>
                <p className="mt-1 text-steel">
                  Company Address Line 1<br />
                  City, Country
                </p>
              </div>
              <div>
                <p className="text-label text-steel">Email</p>
                <a
                  href="mailto:sales@wholesalelighters.com"
                  className="mt-1 block text-ink underline underline-offset-2"
                >
                  sales@wholesalelighters.com
                </a>
              </div>
              <div>
                <p className="text-label text-steel">Phone / WhatsApp</p>
                {/* // TBD: real phone number from client */}
                <a
                  href="https://wa.me/0000000000"
                  className="text-spec mt-1 block text-ink underline underline-offset-2"
                >
                  +00 000 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
