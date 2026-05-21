import Link from "next/link";
import {
  type Event,
  formatEventDate,
  formatPrice,
} from "@/lib/events";

export function EventCard({ event }: { event: Event }) {
  const fillPercent = Math.round(
    ((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100
  );
  const almostFull = event.spotsLeft <= event.totalSpots * 0.15;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm hover:shadow-xl hover:shadow-malaysia-red/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`relative h-40 bg-gradient-to-br ${event.coverGradient} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {event.emoji}
        </span>
        {event.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-malaysia-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-malaysia-blue">
            Featured
          </span>
        )}
        {event.isFree && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            Free lah!
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-muted mb-2">
          <span className="font-semibold text-malaysia-red">
            {formatEventDate(event.date)}
          </span>
          <span>·</span>
          <span>{event.time} MYT</span>
        </div>

        <h3 className="font-bold text-base leading-snug text-foreground group-hover:text-malaysia-red transition-colors line-clamp-2">
          {event.title}
        </h3>

        <p className="mt-1.5 text-sm text-muted line-clamp-2 leading-relaxed">
          {event.subtitle}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
          <span>📍</span>
          <span className="truncate">
            {event.venue}, {event.city}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-malaysia-blue/10 text-[10px] font-bold text-malaysia-blue">
              {event.organizerAvatar}
            </div>
            <span className="text-xs font-medium text-muted">{event.organizer}</span>
          </div>
          <span className="text-sm font-bold text-foreground">
            {formatPrice(event.price, event.isFree)}
          </span>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-medium mb-1">
            <span className={almostFull ? "text-malaysia-red" : "text-muted"}>
              {almostFull ? "Almost full lah!" : `${event.spotsLeft} spots left`}
            </span>
            <span className="text-muted">{fillPercent}% filled</span>
          </div>
          <div className="h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${almostFull ? "bg-malaysia-red" : "bg-malaysia-blue"}`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
