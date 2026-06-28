import PhoneMockup from "./PhoneMockup";
import SectionHeading from "./SectionHeading";
import { keyFeatures } from "@/lib/landing-content";

export default function KeyFeaturesSection() {
  return (
    <section id="features" className="bg-charcoal py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our Features"
          title="Key Features of Recipe Mobile App"
          highlight="Key Features"
          subtitle="Everything you need to save, organize, plan, and cook — built into one beautiful app."
          align="left"
          dark
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 text-center shadow-lg"
            >
              <PhoneMockup
                src={feature.screen}
                alt={feature.screenAlt}
                size="sm"
              />
              <h3 className="mt-6 font-bold text-text">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
