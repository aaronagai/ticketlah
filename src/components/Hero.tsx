"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ForkKnife, Calendar, Tag, MapPoint, Sparkles, Search } from "reicon-react";
import { Logo } from "@/components/Logo";
import { TextReveal } from "@/components/TextReveal";
import { iconProps } from "@/components/ui/Icon";

const categories = [
  { label: "Food", icon: ForkKnife, color: "#f97316", href: "/food" },
  { label: "Events", icon: Calendar, color: "#7c3aed", href: "/#events" },
  { label: "Promotions", icon: Tag, color: "#10b981", href: "/promotions" },
  { label: "Things to Do", icon: MapPoint, color: "#3b82f6", href: "/things-to-do" },
];

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <section className="relative overflow-hidden px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="hype-blob h-72 w-72 -left-16 top-10 bg-orange-300/40" />
      <div className="hype-blob h-80 w-80 right-0 top-0 bg-purple-300/40" />
      <div className="hype-blob h-64 w-64 right-10 top-40 bg-emerald-200/40" />

      <div className="relative mx-auto max-w-lg flex flex-col items-center text-center">
        <div className="mb-5 t-surface hover:scale-105">
          <Logo className="h-14 w-auto" />
        </div>

        <TextReveal as="div" className="mb-3">
          <h1 className="t-stagger-line t-stagger-line--1 text-[42px] sm:text-5xl font-extrabold tracking-tight leading-none">
            <span className="text-foreground">Discover </span>
            <span className="hype-text-gradient">local.</span>
          </h1>
          <p className="t-stagger-line t-stagger-line--2 mt-4 text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-sm mx-auto">
            An all-in-one platform to discover places, events, promotions and
            local experiences.
          </p>
        </TextReveal>

        <form onSubmit={handleSubmit} className="mt-7 w-full">
          <div className="t-surface flex items-center gap-2 rounded-full border border-border bg-background pl-4 pr-1.5 py-1.5 shadow-[0_8px_24px_rgba(124,58,237,0.08)] focus-within:border-hype-purple/40 focus-within:shadow-[0_8px_28px_rgba(124,58,237,0.14)]">
            <Sparkles {...iconProps({ size: 16, className: "text-hype-purple shrink-0" })} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything... e.g. Sarawak laksa, kolo mee, Rainforest Festival"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-light focus:outline-none py-1.5"
            />
            <button
              type="submit"
              aria-label="Search"
              className="t-surface flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white hover:opacity-90"
              style={{ background: "var(--hype-gradient)" }}
            >
              <Search {...iconProps({ size: 15, color: "#ffffff" })} />
            </button>
          </div>
        </form>

        <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-hype-purple/70">
          <Sparkles {...iconProps({ size: 11 })} />
          Powered by AI
          <Sparkles {...iconProps({ size: 11 })} />
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {categories.map(({ label, icon: Icon, color, href }) => (
            <Link
              key={label}
              href={href}
              className="t-surface inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-[12.5px] font-medium text-foreground hover:border-border/60 hover:-translate-y-0.5"
            >
              <Icon {...iconProps({ size: 14, color })} />
              {label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-1.5 hype-scroll-hint">
          <span className="text-[11px] text-muted-light">Scroll to explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
