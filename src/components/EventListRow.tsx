import Link from "next/link";
import type { Event } from "@/lib/events";

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SoldOutBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sold-out shrink-0">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a2 2 0 0 0 0 4v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a2 2 0 0 0 0-4V9z" />
        <path d="M9 6v12" />
      </svg>
      Sold Out
    </span>
  );
}

export function EventListRow({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="flex gap-3 group"
    >
      <div
        className="shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-lg overflow-hidden flex items-center justify-center text-3xl"
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
          <ClockIcon />
          <span className="text-[12px] text-muted">{event.time}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <PinIcon />
          <span className="text-[12px] text-muted truncate">{event.venue}</span>
        </div>
      </div>
    </Link>
  );
}
