/** Synced with SaveToCook mobile app utils/subscription.ts & utils/premiumUsage.ts */

export const FREE_TIER_LIMIT = 5;

export type PaywallPlanId = "weekly" | "monthly" | "yearly";

export type PaywallPlan = {
  id: PaywallPlanId;
  priceLabel: string;
  description: string;
  badge?: string;
};

export const FALLBACK_PAYWALL_PLANS: PaywallPlan[] = [
  {
    id: "yearly",
    priceLabel: "$59.99/year",
    description: "Unlimited access to all SaveToCook features.",
    badge: "Best value",
  },
  {
    id: "monthly",
    priceLabel: "$5.99/month",
    description: "Unlimited access to all SaveToCook features.",
  },
  {
    id: "weekly",
    priceLabel: "$2.99/week",
    description: "Try Premium with flexible weekly billing.",
  },
];

export const PREMIUM_MONTHLY_PRICE = "$5.99";
export const PREMIUM_YEARLY_PRICE = "$59.99";
export const PREMIUM_WEEKLY_PRICE = "$2.99";

/** Exact list from app utils/subscription.ts PREMIUM_BENEFITS */
export const PREMIUM_BENEFITS = [
  "Save unlimited recipes from social media",
  "Save unlimited recipes from images",
  "Save unlimited recipes from text",
  "Generate unlimited AI recipes",
  "Unlimited AI meal suggestions",
  "AI weekly dinner planning",
  "Unlimited deep recipe imports",
  "Cancel anytime, hassle-free",
] as const;

const limit = (n: number) => `${n} total`;

/** Free plan features — matches premiumUsage.ts limits */
export const FREE_PLAN_FEATURES = [
  "Unlimited collections",
  "Unlimited meal plans",
  "Unlimited grocery lists",
  `Up to ${FREE_TIER_LIMIT} social media imports`,
  `Up to ${FREE_TIER_LIMIT} link & website imports`,
  `Up to ${FREE_TIER_LIMIT} image imports`,
  `Up to ${FREE_TIER_LIMIT} text imports`,
  `Up to ${FREE_TIER_LIMIT} AI uses (generation, suggestions & weekly planning share one pool)`,
] as const;

export const PREMIUM_PLAN_FEATURES = [
  "Everything in Free, plus:",
  ...PREMIUM_BENEFITS,
] as const;

export type ComparisonRow = {
  feature: string;
  free: string | boolean;
  premium: string | boolean;
  freeType: "check" | "cross" | "text" | "unlimited";
  premiumType: "check" | "cross" | "text" | "unlimited";
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Collections & meal plans",
    free: true,
    premium: true,
    freeType: "check",
    premiumType: "check",
  },
  {
    feature: "Grocery lists",
    free: true,
    premium: true,
    freeType: "check",
    premiumType: "check",
  },
  {
    feature: "Social media imports",
    free: limit(FREE_TIER_LIMIT),
    premium: "Unlimited",
    freeType: "text",
    premiumType: "unlimited",
  },
  {
    feature: "Link & website imports",
    free: limit(FREE_TIER_LIMIT),
    premium: "Unlimited",
    freeType: "text",
    premiumType: "unlimited",
  },
  {
    feature: "Image / OCR digitize",
    free: limit(FREE_TIER_LIMIT),
    premium: "Unlimited",
    freeType: "text",
    premiumType: "unlimited",
  },
  {
    feature: "Text imports",
    free: limit(FREE_TIER_LIMIT),
    premium: "Unlimited",
    freeType: "text",
    premiumType: "unlimited",
  },
  {
    feature: "AI generation, suggestions & weekly planning",
    free: limit(FREE_TIER_LIMIT),
    premium: "Unlimited",
    freeType: "text",
    premiumType: "unlimited",
  },
];

/** Homepage pricing cards — Flavorish-style detailed lists */
export const HOME_FREE_PLAN_FEATURES = [
  "Save unlimited recipes manually",
  "Create unlimited collections",
  "Create unlimited meal plans",
  "Create unlimited grocery lists",
  `Import up to ${FREE_TIER_LIMIT} link & website recipes`,
  `Import up to ${FREE_TIER_LIMIT} social media recipes`,
  `Import up to ${FREE_TIER_LIMIT} recipes from images`,
  `Import up to ${FREE_TIER_LIMIT} recipes from text`,
  `Generate up to ${FREE_TIER_LIMIT} AI recipes`,
  "Use on iOS",
  "Automatic cloud sync across devices",
  "Ad-free experience",
] as const;

export const HOME_PREMIUM_PLAN_FEATURES = [
  "Everything in Free",
  "Import unlimited recipes from social media",
  "Import unlimited recipes from images",
  "Import unlimited recipes from text",
  "Generate unlimited AI recipes",
  "Unlimited AI meal suggestions",
  "AI weekly dinner planning",
  "Unlimited deep recipe imports",
  "Cancel anytime",
] as const;

export const FREE_PLAN_NAME = "Free";
export const FREE_PLAN_DISPLAY_NAME = "Basic";
export const FREE_PLAN_SUBTITLE = "All the essentials to cook smarter, at no cost.";
export const PREMIUM_PLAN_NAME = "Premium";
export const PREMIUM_PLAN_SUBTITLE =
  "The premium cooking experience, without compromise.";
export const PREMIUM_UPGRADE_SUBTITLE = "Upgrade for exclusive benefits";
export const SETTINGS_PREMIUM_SUBTITLE = "From $5.99/month";

export const SUBSCRIPTION_LEGAL_TEXT =
  "Subscriptions will be applied to your App Store account on confirmation. Subscriptions will automatically renew unless cancelled within 24-hours before the end of the current period. You can cancel anytime in your App Store settings.";

export const ACCOUNT_DELETION_TEXT =
  "This permanently deletes your login, recipes, collections, meal plans, grocery lists, and subscription data. This cannot be undone.";
