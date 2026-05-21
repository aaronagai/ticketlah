import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getEventBySlug,
  formatEventDate,
  formatPrice,
  events,
} from "@/lib/events";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found — TicketLah" };
  return {
    title: `${event.title} — TicketLah`,
    description: event.subtitle,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const category = categories.find((c) => c.id === event.category);
  const fillPercent = Math.round(
    ((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100
  );

  return (
    <div className="pb-16">
      <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${event.coverGradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl sm:text-9xl drop-shadow-2xl">{event.emoji}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#events"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white mb-3"
            >
              ← Back to events
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8 relative">
        <div className="rounded-2xl border border-border bg-surface shadow-xl p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {category && (
              <span className="inline-flex items-center gap-1 rounded-full bg-malaysia-blue/10 px-3 py-1 text-xs font-semibold text-malaysia-blue">
                {category.emoji} {category.label}
              </span>
            )}
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight">
            {event.title}
          </h1>
          <p className="mt-2 text-lg text-muted">{event.subtitle}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoBlock icon="📅" label="Date & Time">
              {formatEventDate(event.date)} · {event.time} MYT
            </InfoBlock>
            <InfoBlock icon="📍" label="Venue">
              {event.venue}
              <br />
              <span className="text-muted">
                {event.city}, {event.state}
              </span>
            </InfoBlock>
            <InfoBlock icon="👤" label="Organised by">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-malaysia-red/10 text-[10px] font-bold text-malaysia-red">
                  {event.organizerAvatar}
                </span>
                {event.organizer}
              </span>
            </InfoBlock>
            <InfoBlock icon="🎫" label="Availability">
              {event.spotsLeft} of {event.totalSpots} spots left
              <div className="mt-2 h-2 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-malaysia-red"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
            </InfoBlock>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h2 className="font-bold text-lg mb-3">About this event</h2>
            <p className="text-muted leading-relaxed">{event.description}</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-malaysia-red/5 to-malaysia-yellow/5 border border-malaysia-red/10">
            <div className="flex-1">
              <div className="text-2xl font-extrabold text-foreground">
                {formatPrice(event.price, event.isFree)}
              </div>
              <p className="text-xs text-muted mt-0.5">
                FPX · Touch &apos;n Go · GrabPay · Credit Card
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-malaysia-red px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-malaysia-red/25 hover:bg-red-700 transition-all hover:scale-[1.02]"
            >
              Confirm Spot Lah! 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-background border border-border p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted mb-1.5">
        <span>{icon}</span>
        {label}
      </div>
      <div className="text-sm font-medium text-foreground">{children}</div>
    </div>
  );
}
