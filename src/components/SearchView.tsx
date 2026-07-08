"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Sparkles, Search } from "reicon-react";
import { searchAll } from "@/lib/search";
import { EventListRow } from "@/components/EventListRow";
import { ListingRow } from "@/components/ListingRow";
import { BackLink } from "@/components/BackLink";
import { iconProps } from "@/components/ui/Icon";

export function SearchView() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  const results = useMemo(() => searchAll(initial), [initial]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <BackLink href="/" className="mb-5" />

      <form onSubmit={handleSubmit} className="mb-2">
        <div className="t-surface flex items-center gap-2 rounded-full border border-border bg-background pl-4 pr-1.5 py-1.5 focus-within:border-hype-purple/40">
          <Sparkles {...iconProps({ size: 16, className: "text-hype-purple shrink-0" })} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
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

      <p className="mb-6 flex items-center gap-1.5 text-[11px] font-medium text-hype-purple/70">
        <Sparkles {...iconProps({ size: 11 })} />
        AI-powered search — full natural-language model in production
      </p>

      {!initial ? (
        <p className="text-[13px] text-muted py-8 text-center">
          Try searching for &ldquo;Sarawak laksa&rdquo;, &ldquo;orangutan&rdquo;, or &ldquo;jazz&rdquo;.
        </p>
      ) : results.total === 0 ? (
        <div className="py-10 text-center">
          <p className="text-[14px] font-semibold text-foreground">
            No results for &ldquo;{initial}&rdquo;
          </p>
          <p className="mt-1 text-[13px] text-muted">
            Try a different keyword lah.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <p className="text-[13px] text-muted">
            {results.total} result{results.total !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-foreground">
              &ldquo;{initial}&rdquo;
            </span>
          </p>

          {results.events.length > 0 && (
            <section>
              <h2 className="text-[13px] font-semibold text-foreground mb-3">
                Events
              </h2>
              <div className="space-y-4 t-list-stagger">
                {results.events.map((event) => (
                  <EventListRow key={event.slug} event={event} />
                ))}
              </div>
            </section>
          )}

          {results.listings.length > 0 && (
            <section>
              <h2 className="text-[13px] font-semibold text-foreground mb-3">
                Places &amp; Deals
              </h2>
              <div className="space-y-4 t-list-stagger">
                {results.listings.map((listing) => (
                  <ListingRow key={listing.slug} listing={listing} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
