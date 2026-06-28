import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";
import { APP_SCREEN_PATHS } from "@/lib/app-screens";
import { APP_TAGLINE, heroAvatars, heroStats } from "@/lib/landing-content";
import { IoChevronDown, IoStar } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-separator">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-8 top-24 h-3 w-3 rounded-full bg-primary/30" />
        <div className="absolute left-[12%] top-16 h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute right-[8%] top-32 h-4 w-4 rounded-full bg-primary/20" />
        <div className="absolute bottom-20 left-[20%] h-2 w-2 rounded-full bg-primary/30" />
        <svg
          className="absolute -right-10 top-10 h-40 w-40 text-primary/10"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="20" cy="20" r="4" />
          <circle cx="60" cy="10" r="3" />
          <circle cx="80" cy="40" r="5" />
          <circle cx="40" cy="70" r="3" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Best Food Recipe App
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[3.25rem]">
              Welcome to Our{" "}
              <span className="text-primary">Food Recipe App!</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
              {APP_TAGLINE}
            </p>
            <StoreButtons variant="badge" className="mt-8" />

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {heroAvatars.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: heroAvatars.length - i }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="text-primary" size={16} />
                  ))}
                </div>
                <p className="text-sm font-medium text-text">
                  {heroStats.rating} ({heroStats.reviewLabel})
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-end justify-center gap-4 lg:justify-end">
            <PhoneMockup
              src={APP_SCREEN_PATHS.myRecipes}
              alt="My Recipes"
              priority
              size="md"
              className="lg:translate-y-6"
            />
            <PhoneMockup
              src={APP_SCREEN_PATHS.socialImport}
              alt="Social media import"
              size="md"
              className="hidden sm:block -translate-y-4"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Link
            href="#download"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="Scroll to download section"
          >
            <IoChevronDown size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}
