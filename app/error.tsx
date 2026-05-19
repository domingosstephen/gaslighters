"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <Eyebrow>500</Eyebrow>
        <h1 className="text-display mt-4 text-[length:var(--text-display)]">
          Something went wrong
        </h1>
        <p className="mt-4 text-steel">
          An unexpected error occurred. Please try again or contact us directly.
        </p>
        <div className="mt-8 flex gap-3">
          <Button variant="primary" href="/">
            Back to homepage
          </Button>
          <button
            onClick={reset}
            className="inline-flex h-11 items-center border border-ink px-6 text-small font-medium text-ink"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
