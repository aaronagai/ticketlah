"use client";

import { useEffect, useMemo, useState } from "react";
import { nearbyOptions } from "@/lib/events";
import { EventListRow, EventListSkeleton } from "./EventListRow";
import { NearbyFilter } from "./NearbyFilter";
import { groupEventsByDate } from "@/lib/dates";
import type { Event } from "@/lib/events";

type Props = {
  events: Event[];
};

export function PickedForYouSection({ events: allEvents }: Props) {
  const [nearby, setNearby] = useState("Nearby");
  const [revealed, setRevealed] = useState(false);
  const [listKey, setListKey] = useState(0);

  useEffect(() => {
    const pulseMs =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--pulse-dur")
      ) || 1000;
    const timer = setTimeout(() => setRevealed(true), pulseMs * 0.6);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return nearby === "Nearby"
      ? allEvents
      : allEvents.filter((e) => e.city === nearby);
  }, [allEvents, nearby]);

  const grouped = groupEventsByDate(filtered);

  function handleNearbyChange(value: string) {
    setNearby(value);
    setListKey((k) => k + 1);
  }

  return (
    <section>
      <h2 className="text-[15px] font-semibold text-foreground mb-3">
        Picked for You
      </h2>

      <NearbyFilter
        options={nearbyOptions}
        value={nearby}
        onChange={handleNearbyChange}
      />

      <div className={`t-skel t-resize ${revealed ? "is-revealed" : ""}`}>
        <div className="t-skel-skeleton is-pulsing">
          <EventListSkeleton />
        </div>

        <div className="t-skel-content">
          {grouped.length === 0 ? (
            <p className="text-[13px] text-muted py-8 text-center">
              No events found nearby lah.
            </p>
          ) : (
            <div key={listKey} className="space-y-6">
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
                  <div className="space-y-4 t-list-stagger">
                    {group.events.map((event) => (
                      <EventListRow key={event.slug} event={event} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
