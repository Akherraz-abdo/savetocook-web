type SectionHeadingProps = {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const muted = dark ? "text-white/50" : "text-text-muted";
  const text = dark ? "text-white" : "text-text";

  const titleParts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : [title];

  return (
    <div className={alignClass}>
      <p className={`text-sm font-semibold tracking-wide ${muted}`}>
        <span className="text-primary">—</span> {label}{" "}
        <span className="text-primary">—</span>
      </p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${text}`}>
        {highlight && title.includes(highlight) ? (
          <>
            {titleParts[0]}
            <span className="text-primary">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${muted} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
