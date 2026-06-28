/** Local app screenshots — filenames match the screen content */

export const APP_SCREEN_PATHS = {
  myRecipes: "/app-screens/my-recipes.png",
  socialImport: "/app-screens/social-import.png",
  imageImport: "/app-screens/image-import.png",
  textImport: "/app-screens/text-import.png",
  mealPlans: "/app-screens/meal-plans.png",
  whatToCook: "/app-screens/what-to-cook.png",
  aiRecipe: "/app-screens/ai-recipe.png",
  addRecipeMenu: "/app-screens/add-recipe-menu.png",
  recipeLink: "/app-screens/recipe-link.png",
  paywall: "/app-screens/paywall.png",
  premiumHero: "/app-screens/premium-hero.png",
} as const;

export const appShowcaseScreens = [
  {
    src: APP_SCREEN_PATHS.socialImport,
    label: "Social media import",
    description: "Paste or share links from Instagram, TikTok, Facebook, and YouTube.",
  },
  {
    src: APP_SCREEN_PATHS.imageImport,
    label: "Save from image",
    description: "Digitize handwritten cards, cookbooks, and menu photos.",
  },
  {
    src: APP_SCREEN_PATHS.mealPlans,
    label: "Meal plans",
    description: "Build weekly menus from your saved recipes.",
  },
  {
    src: APP_SCREEN_PATHS.whatToCook,
    label: "What to cook?",
    description: "Smart suggestions from your recipe library.",
  },
  {
    src: APP_SCREEN_PATHS.aiRecipe,
    label: "AI recipe generation",
    description: "Create recipes by name, ingredients, or surprise mode.",
  },
  {
    src: APP_SCREEN_PATHS.myRecipes,
    label: "My recipes",
    description: "Search, filter, favorite, and manage your library.",
  },
] as const;
