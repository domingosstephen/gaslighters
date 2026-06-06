import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-display text-base tracking-tight">Wholesale Gas Lighters</p>
            <p className="mt-3 text-small text-steel">
              Wholesale only — not for retail consumers.
              <br />
              Prices are not listed publicly.
            </p>
          </div>

          <div>
            <p className="text-label mb-3 text-ember">Contact</p>
            <ul className="space-y-2 text-small">
              <li>
                <a href="mailto:benserena416@gmail.com?subject=Wholesale%20Inquiry" className="underline underline-offset-2 hover:text-ember">
                  Send us an inquiry
                </a>
              </li>
              <li>
                <a href="tel:+33758885187" className="text-spec underline underline-offset-2 hover:text-ember">
                  +33 7 58 88 51 87
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-label mb-3 text-ember">Navigation</p>
            <ul className="space-y-2 text-small">
              <li><Link href="/products" className="underline underline-offset-2 hover:text-ember">Products</Link></li>
              <li><Link href="/capabilities" className="underline underline-offset-2 hover:text-ember">Capabilities</Link></li>
              <li><Link href="/about" className="underline underline-offset-2 hover:text-ember">About</Link></li>
              <li><Link href="/quote" className="underline underline-offset-2 hover:text-ember">Request a Quote</Link></li>
              <li><Link href="/blog" className="underline underline-offset-2 hover:text-ember">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-label mb-3 text-ember">Legal</p>
            <ul className="space-y-2 text-small">
              <li><Link href="/privacy" className="underline underline-offset-2 hover:text-ember">Privacy Policy</Link></li>
              <li><Link href="/terms" className="underline underline-offset-2 hover:text-ember">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-steel/20 pt-6 text-small text-steel">
          &copy; {new Date().getFullYear()} Wholesale Gas Lighters. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
