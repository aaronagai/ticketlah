"use client";

import { Clock, MapPoint, TicketExpired2 } from "reicon-react";
import Link from "next/link";
import type { Event } from "@/lib/events";
import { iconProps } from "@/components/ui/Icon";

function SoldOutBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sold-out shrink-0">
      <TicketExpired2 {...iconProps({ size: 12, color: "currentColor" })} />
      Sold Out
    </span>
  );
}

export function EventListRow({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="flex gap-3 group t-surface rounded-lg -mx-2 px-2 py-1 hover:bg-border-light/60"
    >
      <div
        className="shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-lg overflow-hidden flex items-center justify-center text-3xl transition-transform duration-[var(--duration-fast)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.02]"
        style={{ backgroundColor: event.coverColor + "18" }}
      >
        <span className="select-none">{event.emoji}</span>
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-border-light text-[7px] font-bold text-muted">
              {event.organizerAvatar}
            </span>
            <span className="text-[11px] text-muted truncate">
              {event.organizer}
            </span>
          </div>
          {event.soldOut && <SoldOutBadge />}
        </div>

        <h4 className="text-[14px] font-semibold text-foreground leading-snug mb-1.5 group-hover:underline decoration-foreground/30 underline-offset-2">
          {event.title}
        </h4>

        <div className="flex items-center gap-1.5 mb-0.5">
          <Clock {...iconProps({ size: 13, className: "text-muted-light shrink-0" })} />
          <span className="text-[12px] text-muted">{event.time}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPoint {...iconProps({ size: 13, className: "text-muted-light shrink-0" })} />
          <span className="text-[12px] text-muted truncate">{event.venue}</span>
        </div>
      </div>
    </Link>
  );
}

export function EventListSkeleton() {
  return (
    <div className="space-y-4" aria-hidden>
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex gap-3">
          <div className="skel-thumb" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="skel-bar w-20" />
            <div className="skel-bar w-full" />
            <div className="skel-bar w-24" />
            <div className="skel-bar w-32" />
          </div>
        </div>
      ))}
    </div>
  );
}
