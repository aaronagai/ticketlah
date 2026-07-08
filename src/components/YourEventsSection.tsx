"use client";

import Link from "next/link";
import { Ticket, ChevronRight } from "reicon-react";
import { TextReveal } from "@/components/TextReveal";
import { iconProps } from "@/components/ui/Icon";

export function YourEventsSection() {
  return (
    <section className="mb-8">
      <TextReveal>
        <p className="t-stagger-line t-stagger-line--1 text-[14px] font-medium text-foreground tracking-tight mb-3">
          Hey, Heineken!
        </p>
        <Link href="/" className="t-stagger-line t-stagger-line--2 inline-flex items-center gap-1 mb-3 group t-surface">
          <h2 className="text-[15px] font-semibold text-foreground">Your Events</h2>
          <ChevronRight
            {...iconProps({
              size: 14,
              className: "text-muted-light group-hover:text-muted",
            })}
          />
        </Link>
      </TextReveal>

      <div className="flex items-start gap-3 rounded-xl border border-border px-4 py-3.5 t-surface hover:border-border/80">
        <div className="mt-0.5 shrink-0">
          <Ticket {...iconProps({ size: 20, className: "text-muted-light" })} />
        </div>
        <p className="text-[13px] leading-relaxed text-muted">
          You have a clear schedule ahead. Explore events below, or tap{" "}
          <Link href="/create" className="font-semibold text-foreground hover:underline">
            +
          </Link>{" "}
          to create one.
        </p>
      </div>
    </section>
  );
}
