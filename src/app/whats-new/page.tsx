import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { APP_NAME, APP_VERSION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What's New",
  description: `Latest updates for ${APP_NAME}.`,
};

const releases = [
  {
    version: APP_VERSION,
    date: "2024",
    title: "SaveToCook launch",
    items: [
      "Save recipes from Instagram, Facebook, TikTok, and YouTube",
      "Import recipes from websites, images, and pasted text",
      "AI recipe generation — by recipe name, ingredients, or surprise mode",
      "Collections to organize your favorite recipes",
      "Weekly meal planner with drag-and-drop scheduling",
      "Grocery lists synced from meal plans and recipes",
      "AI meal suggestions from your saved recipes",
      "Premium subscription with unlimited imports and AI uses",
      "Diet, allergy, and dislike preferences for personalized suggestions",
      "Optional weekly meal-plan reminders",
    ],
  },
];

export default function WhatsNewPage() {
  return (
    <LegalLayout title="What's New">
      <p>See the latest features and improvements in {APP_NAME}.</p>

      {releases.map((release) => (
        <section key={release.version}>
          <h2>
            Version {release.version}
            <span className="ml-2 font-normal text-text-muted">— {release.date}</span>
          </h2>
          <h3>{release.title}</h3>
          <ul>
            {release.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </LegalLayout>
  );
}
