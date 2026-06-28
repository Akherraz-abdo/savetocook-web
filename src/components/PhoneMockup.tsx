import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const widths = {
  sm: 200,
  md: 260,
  lg: 300,
};

export default function PhoneMockup({
  src,
  alt,
  priority = false,
  size = "md",
  className = "",
}: PhoneMockupProps) {
  const width = widths[size];

  return (
    <div
      className={`mx-auto ${className}`}
      style={{ width: width + 16 }}
    >
      <div className="rounded-[2rem] border-[6px] border-black bg-black p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="overflow-hidden rounded-[1.5rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={width * 2.1}
            className="h-auto w-full object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
