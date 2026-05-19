import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a wholesale quote for gas lighters — BBQ, refillable, disposable, torch, and promotional lighters. We respond within one business day.",
};

export default function QuotePage() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Quote</Eyebrow>
          <h1 className="text-display mt-4 text-[length:var(--text-display)]">
            Request a quote
          </h1>
          <p className="mt-4 text-[length:var(--text-body)] text-steel md:text-[1.0625rem]">
            Tell us what you need and we&apos;ll get back to you within one business day with
            pricing, lead times, and shipping options.
          </p>

          <div className="mt-12 shadow-sm">
            <Suspense>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
