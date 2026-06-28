import { APP_SCREEN_PATHS } from "./app-screens";

export const APP_TAGLINE =
  "Keep every recipe you love from social media, websites, cookbooks, or handwritten notes — then turn them into meal plans and grocery lists. Get cooking with SaveToCook for free!";

export const heroStats = {
  rating: "5.0",
  reviewLabel: "Review",
};

export const downloadStats = [
  { value: "5M+", label: "Downloads" },
  { value: "150+", label: "Countries" },
  { value: "800+", label: "Recipes" },
];

export const experienceFeatures = [
  {
    title: "Search",
    description: "Search for any recipe you want.",
    icon: "search" as const,
  },
  {
    title: "Choose the best recipe",
    description: "Select from a wide variety.",
    icon: "restaurant" as const,
  },
  {
    title: "Cooking instructions",
    description: "Step-by-step easy guides.",
    icon: "list" as const,
  },
  {
    title: "Share with friends",
    description: "Share your favorite meals.",
    icon: "share" as const,
  },
];

export const keyFeatures = [
  {
    title: "Search for any recipe",
    description:
      "Find saved recipes instantly with search, filters, and smart categories across your library.",
    screen: APP_SCREEN_PATHS.myRecipes,
    screenAlt: "Search recipes",
  },
  {
    title: "Detailed instructions",
    description:
      "Follow clear step-by-step directions with ingredients and cook times on every recipe.",
    screen: APP_SCREEN_PATHS.imageImport,
    screenAlt: "Recipe instructions",
  },
  {
    title: "Save your favorites",
    description:
      "Favorite recipes, organize collections, and keep your go-to meals easy to find.",
    screen: APP_SCREEN_PATHS.myRecipes,
    screenAlt: "Favorite recipes",
  },
];

export const heroAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop",
];

export const appDemoScreens = [
  { src: APP_SCREEN_PATHS.myRecipes, alt: "My Recipes" },
  { src: APP_SCREEN_PATHS.socialImport, alt: "Social import" },
  { src: APP_SCREEN_PATHS.imageImport, alt: "Image import" },
  { src: APP_SCREEN_PATHS.mealPlans, alt: "Meal plans" },
  { src: APP_SCREEN_PATHS.whatToCook, alt: "What to cook" },
  { src: APP_SCREEN_PATHS.aiRecipe, alt: "AI recipe" },
  { src: APP_SCREEN_PATHS.textImport, alt: "Text import" },
  { src: APP_SCREEN_PATHS.recipeLink, alt: "Recipe link" },
];
