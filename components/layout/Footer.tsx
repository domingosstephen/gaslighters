import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-display text-base tracking-tight">Wholesale Lighters</p>
            <p className="mt-3 text-small text-steel">
              Wholesale only — not for retail consumers.
              <br />
              Prices are not listed publicly.
            </p>
          </div>

          <div>
            <p className="text-label mb-3 text-steel">Contact</p>
            <ul className="space-y-2 text-small">
              <li>
                <a href="mailto:sales@wholesalelighters.com" className="underline underline-offset-2 hover:text-ember">
                  sales@wholesalelighters.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/0000000000" className="text-spec underline underline-offset-2 hover:text-ember">
                  {/* // TBD: real WhatsApp number */}
                  +00 000 000 0000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-label mb-3 text-steel">Address</p>
            {/* // TBD: real address from client */}
            <p className="text-small text-steel">
              Company Address Line 1<br />
              City, Country
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-steel/20 pt-6 text-small text-steel">
          &copy; {new Date().getFullYear()} Wholesale Lighters. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
