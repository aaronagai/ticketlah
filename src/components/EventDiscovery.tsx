"use client";

import { useMemo, useState } from "react";
import { events, type EventCategory } from "@/lib/events";
import { CategoryFilter } from "./CategoryFilter";
import { CityFilter } from "./CityFilter";
import { EventCard } from "./EventCard";

export function EventDiscovery() {
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const [city, setCity] = useState("All Malaysia");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchCategory = category === "all" || event.category === category;
      const matchCity =
        city === "All Malaysia" || event.city === city;
      const matchSearch =
        search === "" ||
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.city.toLowerCase().includes(search.toLowerCase()) ||
        event.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchCity && matchSearch;
    });
  }, [category, city, search]);

  const featured = events.filter((e) => e.featured);

  return (
    <>
      {featured.length > 0 && category === "all" && city === "All Malaysia" && search === "" && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">
            🔥 Hot picks this week
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </section>
      )}

      <section id="events" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              All events
            </h2>
            <p className="mt-1 text-muted text-sm">
              {filtered.length} event{filtered.length !== 1 ? "s" : ""} found — jom pick one lah!
            </p>
          </div>

          <div className="relative w-full lg:max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">🔍</span>
            <input
              type="search"
              placeholder="Search events, cities, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface py-2.5 pl-9 pr-4 text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-malaysia-red/20 focus:border-malaysia-red/40"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
            Filter by city
          </p>
          <CityFilter selected={city} onSelect={setCity} />
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
            Categories
          </p>
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface/50 py-16 text-center">
            <span className="text-4xl">😅</span>
            <p className="mt-3 font-semibold text-foreground">No events found lah</p>
            <p className="text-sm text-muted mt-1">Try a different filter or search term</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
