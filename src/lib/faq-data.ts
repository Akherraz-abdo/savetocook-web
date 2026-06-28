import {
  DIET_OPTIONS,
  ALLERGY_OPTIONS,
} from "@/lib/preferences-data";
import {
  FREE_TIER_LIMIT,
  PREMIUM_MONTHLY_PRICE,
  PREMIUM_YEARLY_PRICE,
  PREMIUM_WEEKLY_PRICE,
  PREMIUM_BENEFITS,
  SUBSCRIPTION_LEGAL_TEXT,
} from "./plans";
import { SUPPORTED_SOCIAL_PLATFORMS } from "./constants";

const socialList = SUPPORTED_SOCIAL_PLATFORMS.join(", ");
const dietList = DIET_OPTIONS.join(", ");
const allergyList = ALLERGY_OPTIONS.join(", ");

export type FaqCategory = {
  id: string;
  label: string;
  icon: string;
  questions: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    icon: "help-circle",
    questions: [
      {
        question: "Is SaveToCook free to use?",
        answer: `Yes. SaveToCook includes a free plan with unlimited collections, meal plans, and grocery lists. Premium-gated features (social imports, link imports, image/text digitization, and AI) include ${FREE_TIER_LIMIT} free uses per feature before upgrade is required. Premium unlocks unlimited access to all of these.`,
      },
      {
        question: "Can I cancel my subscription?",
        answer: `${SUBSCRIPTION_LEGAL_TEXT} Manage your subscription in your device's App Store account settings — cancellation is not handled inside the SaveToCook app.`,
      },
      {
        question: "Can SaveToCook accommodate specific dietary restrictions?",
        answer: `Yes. During onboarding and in your preferences you can set a diet (${dietList}), allergies (${allergyList}), and ingredient dislikes. AI recipes and meal suggestions respect these preferences.`,
      },
    ],
  },
  {
    id: "recipes",
    label: "Recipe Management",
    icon: "document-text",
    questions: [
      {
        question:
          "How do I save recipes from social media on SaveToCook, and which platforms are supported?",
        answer: `Share a recipe post directly to SaveToCook from ${socialList}, or paste the link in the app. We extract ingredients, steps, and photos when possible. Free users get ${FREE_TIER_LIMIT} social media imports; Premium users get unlimited imports.`,
      },
      {
        question: "Can I save recipes from websites and blogs?",
        answer: `Yes. Paste any recipe URL into SaveToCook and we'll import the recipe — ingredients, instructions, cook time, and images when available. Free users get ${FREE_TIER_LIMIT} link imports (including websites and deep links); Premium users get unlimited deep recipe imports.`,
      },
      {
        question: "How accurate is the recipe extraction from an image?",
        answer: `Our OCR and AI pipeline extracts text from handwritten notes, cookbook pages, and recipe cards. For best results, use clear, well-lit photos. Free users get ${FREE_TIER_LIMIT} image imports; Premium users get unlimited image digitization.`,
      },
      {
        question: "How does SaveToCook help with grocery shopping?",
        answer:
          "SaveToCook builds grocery lists from your recipes and meal plans. Add items manually, check them off as you shop, and keep lists organized. Every meal plan can turn into a smart shopping list.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Features",
    icon: "sparkles",
    questions: [
      {
        question: "How does AI recipe generation work?",
        answer: `SaveToCook offers three AI modes: generate by recipe name, by ingredients on hand, or surprise me. The AI creates a complete recipe with ingredients and step-by-step instructions. Free users share ${FREE_TIER_LIMIT} AI uses across generation, meal suggestions, and weekly dinner planning; Premium users get unlimited access.`,
      },
      {
        question: "Are AI generated recipes safe and trustworthy?",
        answer:
          "Our AI generates practical, cookable recipes based on culinary knowledge. Always review ingredients for allergies and adjust seasoning to your taste. AI meal suggestions pick from your saved recipes and consider your dietary preferences.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing & Premium",
    icon: "card",
    questions: [
      {
        question: "What's included in Premium?",
        answer: `Premium includes: ${PREMIUM_BENEFITS.join("; ")}.`,
      },
      {
        question: "How much does Premium cost?",
        answer: `Premium is ${PREMIUM_MONTHLY_PRICE}/month, ${PREMIUM_YEARLY_PRICE}/year (best value), or ${PREMIUM_WEEKLY_PRICE}/week for flexible billing. Prices may vary slightly by region and platform store.`,
      },
    ],
  },
];
