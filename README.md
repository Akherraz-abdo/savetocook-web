# SaveToCook Website

Marketing website for the SaveToCook mobile app. Content and plan limits are synced with the mobile app at `MyApp/SaveToCook`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/pricing` | Plans, billing options, feature comparison |
| `/faq` | Searchable FAQ |
| `/terms` | Terms of Service (linked from app) |
| `/privacy` | Privacy Policy (linked from app) |
| `/whats-new` | Release notes (linked from app Settings) |

## Shared data (keep in sync with mobile app)

| Web file | Mobile source |
|----------|---------------|
| `src/lib/plans.ts` | `utils/subscription.ts`, `utils/premiumUsage.ts` |
| `src/lib/constants.ts` | `utils/constants.ts` |
| `src/lib/preferences-data.ts` | `utils/preferences.ts` |
| `src/lib/features.ts` | Onboarding slides, README |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
