import PhoneMockup from "./PhoneMockup";
import { appShowcaseScreens } from "@/lib/app-screens";

export default function AppShowcase() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See SaveToCook in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            The same dark, focused experience you get in the app — built for saving
            recipes, planning meals, and cooking smarter.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {appShowcaseScreens.map((screen) => (
            <div key={screen.label} className="text-center">
              <PhoneMockup src={screen.src} alt={screen.label} size="sm" />
              <h3 className="mt-5 text-lg font-bold text-white">{screen.label}</h3>
              <p className="mt-2 text-sm text-white/60">{screen.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
