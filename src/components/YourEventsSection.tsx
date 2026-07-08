"use client";

import Link from "next/link";
import { Ticket, ChevronRight } from "reicon-react";
import { TextReveal } from "@/components/TextReveal";
import { EventListRow } from "@/components/EventListRow";
import { iconProps } from "@/components/ui/Icon";
import { useSession } from "@/lib/session";
import { events as baseEvents } from "@/lib/events";

export function YourEventsSection() {
  const { user, isLoggedIn, createdEvents, registeredSlugs, openAuth } =
    useSession();

  const registeredEvents = baseEvents.filter((e) =>
    registeredSlugs.includes(e.slug)
  );
  const myEvents = [...createdEvents, ...registeredEvents];

  const greeting = isLoggedIn
    ? `Hey, ${user?.name.split(" ")[0]}!`
    : "Hey there!";

  return (
    <section id="your-events" className="mb-8 scroll-mt-16">
      <TextReveal>
        <p className="t-stagger-line t-stagger-line--1 text-[14px] font-medium text-foreground tracking-tight mb-3">
          {greeting}
        </p>
        <Link
          href="/#your-events"
          className="t-stagger-line t-stagger-line--2 inline-flex items-center gap-1 mb-3 group t-surface"
        >
          <h2 className="text-[15px] font-semibold text-foreground">
            Your Events
          </h2>
          <ChevronRight
            {...iconProps({
              size: 14,
              className: "text-muted-light group-hover:text-muted",
            })}
          />
        </Link>
      </TextReveal>

      {myEvents.length > 0 ? (
        <div className="space-y-4 t-list-stagger">
          {myEvents.map((event) => (
            <EventListRow key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex items-start gap-3 rounded-xl border border-border px-4 py-3.5 t-surface hover:border-border/80">
          <div className="mt-0.5 shrink-0">
            <Ticket {...iconProps({ size: 20, className: "text-muted-light" })} />
          </div>
          <p className="text-[13px] leading-relaxed text-muted">
            You have a clear schedule ahead. Explore events below,{" "}
            {isLoggedIn ? (
              <>
                or tap{" "}
                <Link
                  href="/create"
                  className="font-semibold text-foreground hover:underline"
                >
                  +
                </Link>{" "}
                to create one.
              </>
            ) : (
              <>
                or{" "}
                <button
                  type="button"
                  onClick={() => openAuth()}
                  className="font-semibold text-foreground hover:underline"
                >
                  log in
                </button>{" "}
                to save your own.
              </>
            )}
          </p>
        </div>
      )}
    </section>
  );
}
