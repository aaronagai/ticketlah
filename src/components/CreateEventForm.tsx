"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, nearbyOptions, type Event, type EventCategory } from "@/lib/events";
import { useSession } from "@/lib/session";

const categoryEmoji: Record<EventCategory, string> = {
  tech: "💻",
  food: "🍜",
  music: "🎵",
  outdoors: "⛰️",
  culture: "🎭",
  business: "🤝",
};

const categoryColor: Record<EventCategory, string> = {
  tech: "#6366f1",
  food: "#f97316",
  music: "#a855f7",
  outdoors: "#059669",
  culture: "#ec4899",
  business: "#0ea5e9",
};

function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "event"
  ) + "-" + Math.random().toString(36).slice(2, 6);
}

export function CreateEventForm() {
  const { isLoggedIn, user, openAuth, addCreatedEvent } = useSession();
  const [published, setPublished] = useState<Event | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState<EventCategory | "">("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLoggedIn) {
      openAuth({ message: "Log in to publish your event." });
      return;
    }

    const cat: EventCategory = category || "culture";
    const priceNum = Number(price) || 0;
    const cap = Number(capacity) || 50;

    const newEvent: Event = {
      slug: slugify(title),
      title: title.trim() || "Untitled Event",
      subtitle: description.trim().slice(0, 80) || "A new local event",
      description: description.trim() || "Details coming soon.",
      category: cat,
      date: date || "2026-05-24",
      time: time
        ? new Date(`2026-01-01T${time}`).toLocaleTimeString("en-MY", {
            hour: "numeric",
            minute: "2-digit",
          })
        : "7:00 PM",
      venue: venue.trim() || "TBA",
      city: city || "Kuching",
      state: "Sarawak",
      price: priceNum,
      isFree: priceNum === 0,
      spotsLeft: cap,
      totalSpots: cap,
      soldOut: false,
      organizer: user?.name ?? "You",
      organizerAvatar: user?.initials ?? "ME",
      coverColor: categoryColor[cat],
      emoji: categoryEmoji[cat],
      tags: ["New", categories.find((c) => c.id === cat)?.label ?? "Event"],
      isUserCreated: true,
    };

    addCreatedEvent(newEvent);
    setPublished(newEvent);
  }

  if (published) {
    return (
      <div className="rounded-2xl border border-hype-green/30 bg-hype-green/5 p-6 text-center">
        <div className="text-3xl mb-2">🎉</div>
        <h2 className="text-lg font-bold text-foreground">Event published!</h2>
        <p className="mt-1 text-[13px] text-muted">
          &ldquo;{published.title}&rdquo; is now live in your feed and My Events.
        </p>
        <p className="mt-3 text-[11px] text-muted-light leading-relaxed">
          In this prototype it lives in your session only. The full build saves
          it to a real database so anyone can find and register.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <Link
            href="/#your-events"
            className="t-surface w-full rounded-lg py-2.5 text-[13px] font-semibold text-white hover:opacity-90"
            style={{ background: "var(--hype-gradient)" }}
          >
            View in My Events
          </Link>
          <button
            type="button"
            onClick={() => setPublished(null)}
            className="t-surface w-full rounded-lg border border-border py-2.5 text-[13px] font-medium text-foreground hover:bg-border-light/60"
          >
            Create another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isLoggedIn && (
        <div className="rounded-lg border border-hype-purple/20 bg-hype-purple/5 px-4 py-3 text-[12px] text-muted">
          You&apos;ll be asked to log in when you publish.
        </div>
      )}

      <Field label="Event name" required>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Kuching Tech Meetup"
          className="field-input"
          required
        />
      </Field>

      <Field label="Description">
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What's this event about?"
          className="field-input resize-none"
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Date" required>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="field-input"
          />
        </Field>
        <Field label="Time" required>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="field-input"
          />
        </Field>
      </div>

      <Field label="Venue" required>
        <input
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder="e.g. Borneo744, Padungan"
          className="field-input"
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="City" required>
          <select
            className="field-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {nearbyOptions.slice(1).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Category">
          <select
            className="field-input"
            value={category}
            onChange={(e) => setCategory(e.target.value as EventCategory)}
          >
            <option value="" disabled>
              Select
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Price (RM)">
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0 = free"
            className="field-input"
          />
        </Field>
        <Field label="Capacity">
          <input
            type="number"
            min="1"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="100"
            className="field-input"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="t-surface w-full rounded-lg py-3 text-[14px] font-semibold text-white hover:opacity-90 mt-2"
        style={{ background: "var(--hype-gradient)" }}
      >
        Publish Event
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-muted-light ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
