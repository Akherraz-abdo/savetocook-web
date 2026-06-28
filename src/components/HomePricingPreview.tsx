"use client";

import { useState } from "react";
import PremiumPaywall from "@/components/PremiumPaywall";
import { PremiumBrandMark } from "@/components/Logo";
import type { PaywallPlanId } from "@/lib/plans";

export default function HomePricingPreview() {
  const [selectedPlan, setSelectedPlan] = useState<PaywallPlanId>("yearly");

  return (
    <div>
      <div className="flex justify-center">
        <PremiumBrandMark />
      </div>
      <div className="mt-6">
        <PremiumPaywall
          selectedPlan={selectedPlan}
          onSelectPlan={setSelectedPlan}
          showBenefits={false}
        />
      </div>
    </div>
  );
}
