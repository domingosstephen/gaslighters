import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpecRow } from "@/components/ui/SpecRow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Capabilities — Manufacturing, Compliance & Logistics",
  description:
    "Manufacturing, logistics, certifications, and MOQs — everything you need to know about ordering wholesale gas lighters.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-clean py-16 md:py-24 lg:py-32">
        <Container>
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">
            What we do and how we ship
          </h1>
          <p className="mt-4 max-w-2xl text-[length:var(--text-body)] text-steel md:text-[1.0625rem]">
            From raw materials to your warehouse — a transparent look at our manufacturing,
            compliance, logistics, and packaging.
          </p>
        </Container>
      </section>

      {/* Manufacturing */}
      <section className="border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <Eyebrow>Manufacturing</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">Production</h2>
          <p className="mt-4 max-w-2xl text-steel">
            Our facilities produce gas lighters across five product categories, from economy
            disposables to precision torch lighters. All lines run with in-house quality
            control at every stage.
          </p>
          <div className="mt-8 max-w-lg">
            <SpecRow label="MATERIALS" value="ABS body, brass valve, stainless ignition" />
            <SpecRow label="COLOR OPTIONS" value="8 standard / custom PMS on request" />
            <SpecRow label="BRANDING" value="Pad print, sleeve, laser engraving" />
            <SpecRow label="QC" value="100% flame test, leak test, drop test" />
          </div>
        </Container>
      </section>

      {/* Compliance & certifications */}
      <section className="border-t border-line bg-clean py-16 md:py-24">
        <Container>
          <Eyebrow>Compliance</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl text-steel">
            We hold the certifications required for distribution in key markets. All
            documentation is available on request.
          </p>
          <div className="mt-8 max-w-lg">
            <SpecRow label="ISO 9994" value="International lighter safety standard" />
            <SpecRow label="EN 13869" value="EU child-resistant lighter standard" />
            <SpecRow label="ASTM F400" value="US consumer lighter standard" />
          </div>
        </Container>
      </section>

      {/* Logistics */}
      <section className="border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <Eyebrow>Logistics</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">Shipping</h2>
          <p className="mt-4 max-w-2xl text-steel">
            We ship to 30+ countries with flexible Incoterms. Lead times depend on
            destination and order complexity.
          </p>
          <div className="mt-8 max-w-lg">
            <SpecRow label="INCOTERMS" value="FOB, CIF, DDP" />
            <SpecRow label="LEAD TIME (EU)" value="3-4 weeks" />
            <SpecRow label="LEAD TIME (US)" value="4-6 weeks" />
            <SpecRow label="LEAD TIME (ROW)" value="5-8 weeks" />
          </div>
        </Container>
      </section>

      {/* MOQ & Packaging */}
      <section className="border-t border-line bg-clean py-16 md:py-24">
        <Container>
          <Eyebrow>Packaging</Eyebrow>
          <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
            MOQ and packaging
          </h2>
          <p className="mt-4 max-w-2xl text-steel">
            Standard packing configurations are listed below. Custom packaging is available
            for orders above 10,000 units.
          </p>
          <div className="mt-8 max-w-lg">
            <SpecRow label="MOQ" value="1,000 units (standard)" />
            <SpecRow label="INNER PACK" value="25 or 50 units" />
            <SpecRow label="MASTER CARTON" value="500 - 2,000 units (varies by SKU)" />
            <SpecRow label="PALLET" value="40 - 80 cartons" />
            <SpecRow label="20FT CONTAINER" value="~800,000 disposables / ~200,000 BBQ" />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink py-16 md:py-24">
        <Container>
          <h2 className="text-h2 text-[length:var(--text-h2)] text-paper">
            Have specific requirements? Tell us.
          </h2>
          <div className="mt-8">
            <Button variant="ember" size="hero" href="/quote">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
