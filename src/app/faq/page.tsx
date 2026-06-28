"use client";

import { useMemo, useState } from "react";
import {
  IoHelpCircle,
  IoDocumentText,
  IoSparkles,
  IoCard,
  IoSearch,
} from "react-icons/io5";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import { faqCategories } from "@/lib/faq-data";
import { SUPPORT_EMAIL } from "@/lib/constants";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "help-circle": IoHelpCircle,
  "document-text": IoDocumentText,
  sparkles: IoSparkles,
  card: IoCard,
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [search, setSearch] = useState("");

  const filteredQuestions = useMemo(() => {
    const category = faqCategories.find((c) => c.id === activeCategory);
    if (!category) return [];

    if (!search.trim()) return category.questions;

    const query = search.toLowerCase();
    return category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query),
    );
  }, [activeCategory, search]);

  const allMatchingQuestions = useMemo(() => {
    if (!search.trim()) return null;
    const query = search.toLowerCase();
    return faqCategories.flatMap((cat) =>
      cat.questions
        .filter(
          (q) =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query),
        )
        .map((q) => ({ ...q, category: cat.label })),
    );
  }, [search]);

  const displayQuestions = allMatchingQuestions ?? filteredQuestions;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-12 text-center lg:px-8 lg:py-16">
        <h1 className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
          How can we help you cook today?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-text-muted">
          Find answers to commonly asked questions about SaveToCook&apos;s features,
          pricing, and recipe management tools.
        </p>
        <div className="relative mx-auto mt-8 max-w-xl">
          <IoSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            size={20}
          />
          <input
            type="search"
            placeholder="Search for answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-border bg-white py-3.5 pl-12 pr-5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Categories
            </p>
            <nav className="space-y-1">
              {faqCategories.map((cat) => {
                const Icon = categoryIcons[cat.icon] ?? IoHelpCircle;
                const isActive = activeCategory === cat.id && !search.trim();
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearch("");
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-text-muted hover:bg-separator hover:text-text"
                    }`}
                  >
                    <Icon size={18} />
                    {cat.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* FAQ list */}
          <div className="space-y-3">
            {displayQuestions.length === 0 ? (
              <p className="text-center text-text-muted py-8">
                No results found. Try a different search term.
              </p>
            ) : (
              displayQuestions.map((item, i) => (
                <div key={`${item.question}-${i}`}>
                  {allMatchingQuestions && (
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {(item as { category?: string }).category}
                    </p>
                  )}
                  <FaqItem question={item.question} answer={item.answer} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-black p-8 sm:flex-row sm:items-center lg:p-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Still have questions?</h2>
            <p className="mt-2 max-w-md text-sm text-white/70">
              We&apos;re here to help you make the most of your kitchen. Reach out to
              our support team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${SUPPORT_EMAIL}`} className="!rounded-full">
              Contact Support
            </Button>
            <Button href="/whats-new" variant="ghost" className="!rounded-full">
              What&apos;s New
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
