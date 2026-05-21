"use client";

import { useState } from "react";
import { nearbyOptions } from "@/lib/events";
import { EventListRow } from "./EventListRow";
import { groupEventsByDate } from "@/lib/dates";
import type { Event } from "@/lib/events";

type Props = {
  events: Event[];
};

export function PickedForYouSection({ events: allEvents }: Props) {
  const [nearby, setNearby] = useState("Nearby");

  const filtered =
    nearby === "Nearby"
      ? allEvents
      : allEvents.filter((e) => e.city === nearby);

  const grouped = groupEventsByDate(filtered);

  return (
    <section>
      <h2 className="text-[15px] font-semibold text-foreground mb-3">
        Picked for You
      </h2>

      <div className="relative inline-flex items-center mb-5">
        <select
          value={nearby}
          onChange={(e) => setNearby(e.target.value)}
          className="appearance-none bg-transparent text-[13px] font-medium text-muted pr-4 cursor-pointer focus:outline-none"
        >
          {nearbyOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-light pointer-events-none -ml-1"
        >
          <path d="M7 15l5 5 5-5" />
          <path d="M7 9l5-5 5 5" />
        </svg>
      </div>

      {grouped.length === 0 ? (
        <p className="text-[13px] text-muted py-8 text-center">
          No events found nearby lah.
        </p>
      ) : (
        <div className="space-y-6">
          {grouped.map((group) => (
            <div key={group.date}>
              <h3 className="text-[13px] font-semibold text-foreground mb-3">
                {group.label.split(" / ").map((part, i) =>
                  i === 1 ? (
                    <span key={part} className="font-normal text-muted">
                      {" / "}
                      {part}
                    </span>
                  ) : (
                    <span key={part}>{part}</span>
                  )
                )}
              </h3>
              <div className="space-y-4">
                {group.events.map((event) => (
                  <EventListRow key={event.slug} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
