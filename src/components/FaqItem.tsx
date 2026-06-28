"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-border bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-text sm:text-base">{question}</span>
        <IoChevronDown
          className={`shrink-0 text-text-muted transition-transform ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-muted">
          {answer}
        </div>
      )}
    </div>
  );
}
