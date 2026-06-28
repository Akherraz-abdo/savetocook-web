import HomePricingSection from "@/components/HomePricingSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import StoreButtons from "@/components/StoreButtons";

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
        <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
          Simple pricing for every cook
        </h1>
        <p className="mt-4 text-text-muted">
          Start free. Upgrade when you need unlimited imports and AI.
        </p>
      </section>
      <HomePricingSection />
      <section className="border-t border-border py-16 text-center">
        <StoreButtons variant="light" className="justify-center" />
      </section>
      <HomeFaqSection />
    </>
  );
}
