import Image from "next/image";
import {
  IoList,
  IoRestaurant,
  IoSearch,
  IoShareSocial,
} from "react-icons/io5";
import SectionHeading from "./SectionHeading";
import { experienceFeatures } from "@/lib/landing-content";

const iconMap = {
  search: IoSearch,
  restaurant: IoRestaurant,
  list: IoList,
  share: IoShareSocial,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="The Seamless Experience of Our App"
          highlight="Seamless Experience"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20"
              aria-hidden
            />
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop"
                alt="Woman enjoying healthy food"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-primary/20"
              aria-hidden
            />
            <div
              className="absolute -left-4 top-8 h-10 w-10 rounded-full bg-primary/30"
              aria-hidden
            />
          </div>

          <ul className="space-y-8">
            {experienceFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <li key={feature.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
