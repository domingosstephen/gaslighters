"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-display text-lg tracking-tight text-paper" onClick={() => setMenuOpen(false)}>
          Wholesale Gas Lighters
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small font-medium text-paper/80 transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="inline-flex h-11 items-center rounded-full bg-ember px-5 text-small font-medium text-paper transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-ink/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-h3 font-semibold text-paper"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ember text-base font-medium text-paper"
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
