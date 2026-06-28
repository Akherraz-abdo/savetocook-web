"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import SectionHeading from "./SectionHeading";
import { faqCategories } from "@/lib/faq-data";

const faqItems = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({ ...q, category: cat.label })),
).slice(0, 6);

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions? Look here."
          highlight="Questions?"
        />

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-2xl transition-colors ${
                  isOpen
                    ? "bg-primary text-white"
                    : "border border-border bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold ${isOpen ? "text-white" : "text-text"}`}>
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-white/20 text-white" : "bg-separator text-text-muted"
                    }`}
                  >
                    {isOpen ? <IoRemove size={18} /> : <IoAdd size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-white/90">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
