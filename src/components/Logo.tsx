import Image from "next/image";
import Link from "next/link";
import { IoLeaf } from "react-icons/io5";
import { APP_NAME } from "@/lib/constants";

type LogoProps = {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
};

export default function Logo({
  className = "",
  showText = true,
  variant = "light",
}: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-text";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-light"
        aria-hidden
      >
        <Image
          src="/logo-mark.png"
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      {showText && (
        <span className={`text-lg font-bold ${textColor}`}>{APP_NAME}</span>
      )}
    </Link>
  );
}

export function PremiumBrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light">
        <IoLeaf className="text-primary" size={22} />
      </div>
      <span className="text-xl font-bold text-text">{APP_NAME} Premium</span>
    </div>
  );
}
