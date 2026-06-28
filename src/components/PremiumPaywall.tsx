"use client";

import { IoCheckmark, IoCheckmarkCircle } from "react-icons/io5";
import {
  FALLBACK_PAYWALL_PLANS,
  PREMIUM_BENEFITS,
  PREMIUM_UPGRADE_SUBTITLE,
  type PaywallPlanId,
} from "@/lib/plans";

type PremiumPaywallProps = {
  selectedPlan: PaywallPlanId;
  onSelectPlan: (id: PaywallPlanId) => void;
  showBenefits?: boolean;
};

export default function PremiumPaywall({
  selectedPlan,
  onSelectPlan,
  showBenefits = true,
}: PremiumPaywallProps) {
  return (
    <div>
      {showBenefits && (
        <>
          <p className="text-base font-medium text-text">{PREMIUM_UPGRADE_SUBTITLE}</p>
          <ul className="mt-6 space-y-4">
            {PREMIUM_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <IoCheckmarkCircle className="mt-0.5 shrink-0 text-primary" size={22} />
                <span className="text-base leading-snug text-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-8 space-y-2">
        {FALLBACK_PAYWALL_PLANS.map((plan) => {
          const selected = selectedPlan === plan.id;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onSelectPlan(plan.id)}
              className={`w-full rounded-2xl border-[1.5px] bg-white p-4 text-left transition-colors ${
                selected ? "border-primary" : "border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 ${
                    selected
                      ? "border-primary bg-primary"
                      : "border-border bg-white"
                  }`}
                >
                  {selected && <IoCheckmark size={14} className="text-white" />}
                </span>
                <span className="flex-1 text-base font-bold text-text">
                  {plan.priceLabel}
                </span>
                {plan.badge ? (
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                ) : (
                  <span className="w-16" />
                )}
              </div>
              <p className="mt-1 pl-[34px] text-sm text-text-muted">{plan.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
