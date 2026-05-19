import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="text-display mt-4 text-[length:var(--text-display)]">
          Page not found
        </h1>
        <p className="mt-4 text-steel">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
