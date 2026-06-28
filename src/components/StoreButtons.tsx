import { IoLogoApple } from "react-icons/io5";
import { APP_STORE_URL } from "@/lib/constants";

type StoreButtonsProps = {
  className?: string;
  variant?: "light" | "dark" | "badge";
  size?: "sm" | "md";
};

export default function StoreButtons({
  className = "",
  variant = "dark",
  size = "md",
}: StoreButtonsProps) {
  if (variant === "badge") {
    const badgeBase =
      size === "sm"
        ? "inline-flex items-center gap-2 rounded-lg px-4 py-2.5"
        : "inline-flex items-center gap-3 rounded-xl px-5 py-3";

    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${badgeBase} bg-black text-white transition-opacity hover:opacity-90`}
        >
          <IoLogoApple size={size === "sm" ? 24 : 28} className="shrink-0" />
          <div className="text-left leading-tight">
            <span className="block text-[10px] font-medium opacity-80">Download on the</span>
            <span className="block text-sm font-bold">App Store</span>
          </div>
        </a>
      </div>
    );
  }

  const base =
    size === "sm"
      ? "inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-semibold"
      : "inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold";

  const styles =
    variant === "dark"
      ? "bg-white/10 text-white transition-colors hover:bg-white/20"
      : "border border-border bg-white text-text transition-colors hover:bg-separator";

  const iconSize = size === "sm" ? 22 : 26;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        <IoLogoApple size={iconSize} className="shrink-0" />
        <span>App Store</span>
      </a>
    </div>
  );
}
