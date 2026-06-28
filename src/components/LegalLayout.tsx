import Link from "next/link";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-bold text-text sm:text-4xl">{title}</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-muted [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-text [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-text [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
      <p className="mt-12 text-xs text-text-muted">
        Questions?{" "}
        <Link href="/faq" className="text-primary underline underline-offset-2">
          Visit our FAQ
        </Link>{" "}
        or email{" "}
        <a href="mailto:support@savetocook.app" className="text-primary underline underline-offset-2">
          support@savetocook.app
        </a>
        .
      </p>
    </article>
  );
}
