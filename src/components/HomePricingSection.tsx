"use client";

import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "./Button";
import {
  FREE_PLAN_DISPLAY_NAME,
  FREE_PLAN_SUBTITLE,
  PREMIUM_PLAN_NAME,
  PREMIUM_PLAN_SUBTITLE,
  PREMIUM_MONTHLY_PRICE,
  PREMIUM_YEARLY_PRICE,
  HOME_FREE_PLAN_FEATURES,
  HOME_PREMIUM_PLAN_FEATURES,
} from "@/lib/plans";

export default function HomePricingSection() {
  const [annual, setAnnual] = useState(false);
  const premiumPrice = annual ? PREMIUM_YEARLY_PRICE : PREMIUM_MONTHLY_PRICE;
  const premiumNote = annual ? "/year" : "/month";

  return (
    <section id="pricing" className="bg-separator py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">Plans & Pricing</h2>
          <p className="mt-4 text-text-muted">
            No ads. No data-selling. 100% powered by users.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-border bg-white p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                !annual ? "bg-primary text-white" : "text-text-muted"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                annual ? "bg-primary text-white" : "text-text-muted"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Free / Basic */}
          <div className="rounded-3xl border border-border bg-white p-8 lg:p-10">
            <h3 className="text-xl font-bold text-text">{FREE_PLAN_DISPLAY_NAME}</h3>
            <p className="mt-2 text-sm text-text-muted">{FREE_PLAN_SUBTITLE}</p>
            <p className="mt-6 text-4xl font-bold text-text">FREE</p>
            <h4 className="mt-8 text-sm font-bold text-text">What&apos;s included?</h4>
            <ul className="mt-4 space-y-3">
              {HOME_FREE_PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <IoCheckmarkCircle className="mt-0.5 shrink-0 text-secondary" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#cta" variant="outline" className="mt-8 w-full !rounded-full">
              Try it for free
            </Button>
          </div>

          {/* Premium */}
          <div className="relative rounded-3xl border-2 border-primary bg-white p-8 shadow-[0_12px_40px_rgba(255,122,69,0.12)] lg:p-10">
            <span className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
              Popular
            </span>
            <h3 className="text-xl font-bold text-text">{PREMIUM_PLAN_NAME}</h3>
            <p className="mt-2 text-sm text-text-muted">{PREMIUM_PLAN_SUBTITLE}</p>
            <p className="mt-6 text-4xl font-bold text-primary">
              {premiumPrice}
              <span className="text-lg font-medium text-text-muted">{premiumNote}</span>
            </p>
            <h4 className="mt-8 text-sm font-bold text-text">What&apos;s included?</h4>
            <ul className="mt-4 space-y-3">
              {HOME_PREMIUM_PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <IoCheckmarkCircle className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#cta" className="mt-8 w-full !rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
