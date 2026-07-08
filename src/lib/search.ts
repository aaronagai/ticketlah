import { events, type Event } from "./events";
import { listings, type Listing } from "./listings";

export type SearchResults = {
  events: Event[];
  listings: Listing[];
  total: number;
};

function matches(haystack: string[], q: string): boolean {
  const needle = q.trim().toLowerCase();
  if (!needle) return false;
  const terms = needle.split(/\s+/);
  const blob = haystack.join(" ").toLowerCase();
  return terms.some((t) => blob.includes(t));
}

export function searchAll(query: string): SearchResults {
  const q = query.trim();
  if (!q) {
    return { events: [], listings: [], total: 0 };
  }

  const matchedEvents = events.filter((e) =>
    matches(
      [e.title, e.subtitle, e.description, e.venue, e.city, e.organizer, ...e.tags],
      q
    )
  );

  const matchedListings = listings.filter((l) =>
    matches(
      [l.title, l.subtitle, l.description, l.area, l.city, l.organizer, l.meta, ...l.tags],
      q
    )
  );

  return {
    events: matchedEvents,
    listings: matchedListings,
    total: matchedEvents.length + matchedListings.length,
  };
}
