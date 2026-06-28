"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="#cta" className="!px-5 !py-2.5 !text-sm shrink-0">
          Get App
        </Button>
      </div>
    </header>
  );
}
