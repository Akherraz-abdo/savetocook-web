import StoreButtons from "./StoreButtons";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-sm font-medium text-white/90">
          The best recipe app in the world for you
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Download the App Now!
        </h2>
        <p className="mt-4 text-sm text-white/90 sm:text-base">
          Get started today and explore thousands of recipes on your iPhone.
        </p>
        <StoreButtons variant="badge" className="mt-8 justify-center" />
      </div>
    </section>
  );
}
