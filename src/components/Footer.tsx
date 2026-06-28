"use client";

import { useState } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
  IoPaperPlane,
} from "react-icons/io5";
import Link from "next/link";
import Logo from "./Logo";
import {
  APP_NAME,
  PRIVACY_URL,
  TERMS_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/faq", label: "FAQ" },
];

const legalLinks = [
  { href: PRIVACY_URL, label: "Privacy Policy" },
  { href: TERMS_URL, label: "Terms of Service" },
];

const socialIcons = [
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: IoLogoFacebook },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: IoLogoInstagram },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: IoLogoTiktok },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: IoLogoYoutube },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: IoLogoLinkedin },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Save recipes from social media, websites, and cookbooks. Plan meals,
              build grocery lists, and cook smarter with {APP_NAME}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialIcons.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide">Latest News</h3>
            <p className="mt-4 text-sm text-white/60">
              Subscribe for cooking tips, new features, and updates.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
                aria-label="Subscribe"
              >
                <IoPaperPlane size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
