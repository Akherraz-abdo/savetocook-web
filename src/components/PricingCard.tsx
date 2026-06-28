import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "./Button";

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
};

export default function PricingCard({
  title,
  subtitle,
  price,
  priceNote,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
        highlighted ? "border-primary shadow-[0_8px_30px_rgba(255,122,69,0.15)]" : "border-border"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{subtitle}</p>
      <div className="mt-6">
        <span
          className={`text-4xl font-bold ${highlighted ? "text-primary" : "text-text"}`}
        >
          {price}
        </span>
        {priceNote && (
          <span className="ml-1 text-sm text-text-muted">{priceNote}</span>
        )}
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-text">
            <IoCheckmarkCircle className="mt-0.5 shrink-0 text-secondary" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={highlighted ? "primary" : "outline"}
          className="w-full !rounded-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
