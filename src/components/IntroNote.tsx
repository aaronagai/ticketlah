"use client";

import { useState } from "react";

export function IntroNote() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2">
      <div className="t-surface rounded-xl border border-border bg-background/95 backdrop-blur-sm p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <span className="text-lg leading-none">👋</span>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-foreground">
              This is an interactive prototype
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted">
              Browse, search, sign up, and create an event to feel the flow.
              Data is mock and resets on refresh — real accounts, payments, and
              AI search come in the full build.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="t-surface mt-3 w-full rounded-lg py-2 text-[12px] font-medium text-white hover:opacity-90"
          style={{ background: "var(--hype-gradient)" }}
        >
          Got it — let&apos;s explore
        </button>
      </div>
    </div>
  );
}
