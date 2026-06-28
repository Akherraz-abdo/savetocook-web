import { FREE_TIER_LIMIT } from "./plans";
import { APP_SCREEN_PATHS } from "./app-screens";

/** Feature cards for the landing page — uses real app screenshots */
export const marketingFeatures = [
  {
    title: "Save recipes from Social Media",
    description:
      "Share posts from Instagram, TikTok, Facebook, and YouTube directly to SaveToCook. We extract the full recipe automatically.",
    image: APP_SCREEN_PATHS.socialImport,
    icon: "phone" as const,
  },
  {
    title: "Digitize your recipes",
    description:
      "Snap a photo of a cookbook page or handwritten note. Our AI reads and organizes the recipe for you.",
    image: APP_SCREEN_PATHS.imageImport,
    icon: "scan" as const,
  },
  {
    title: "Meal Plan with ease",
    description:
      "Plan your week in minutes. We build meal plans around the recipes and preferences that fit your life.",
    image: APP_SCREEN_PATHS.mealPlans,
    icon: "calendar" as const,
  },
  {
    title: "AI-powered cooking",
    description:
      "Generate recipes by name, ingredients, or surprise mode — plus smart “What to cook?” suggestions from your library.",
    image: APP_SCREEN_PATHS.aiRecipe,
    icon: "sparkles" as const,
  },
];

/** Value props from onboarding intro slides */
export const valueProps = [
  {
    title: "Personalized meal planning",
    description:
      "Plan your week in minutes. We build meal plans around the recipes and preferences that fit your life.",
    screen: APP_SCREEN_PATHS.mealPlans,
  },
  {
    title: "Import from anywhere",
    description:
      "Social links, photos, pasted text, or AI — six fast ways to add recipes from the + menu.",
    screen: APP_SCREEN_PATHS.addRecipeMenu,
  },
  {
    title: "Your recipe library",
    description:
      "Search, filter by meal type, favorite recipes, and cook from a library that stays organized.",
    screen: APP_SCREEN_PATHS.myRecipes,
  },
];

export const APP_TAGLINE =
  "Save recipes, plan meals, build grocery lists, and import from social links with AI.";

export const FREE_PLAN_LIMIT_PHRASE = `${FREE_TIER_LIMIT} free uses`;
