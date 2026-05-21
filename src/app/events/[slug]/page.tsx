import Link from "next/link";
import { notFound } from "next/navigation";
import {
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

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-muted hover:text-foreground mb-6"
      >
        ← Back
      </Link>

      <div
        className="w-full aspect-[16/9] rounded-xl overflow-hidden flex items-center justify-center text-6xl mb-6"
        style={{ backgroundColor: event.coverColor + "18" }}
      >
        {event.emoji}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-border-light text-[8px] font-bold text-muted">
          {event.organizerAvatar}
        </span>
        <span className="text-[13px] text-muted">{event.organizer}</span>
        {event.soldOut && (
          <span className="ml-auto text-[12px] font-medium text-sold-out">
            Sold Out
          </span>
        )}
      </div>

      <h1 className="text-xl font-semibold text-foreground leading-snug mb-2">
        {event.title}
      </h1>
      <p className="text-[14px] text-muted leading-relaxed mb-6">
        {event.subtitle}
      </p>

      <div className="space-y-3 mb-8 pb-8 border-b border-border-light">
        <InfoRow label="Date">{formatEventDate(event.date)}</InfoRow>
        <InfoRow label="Time">{event.time} MYT</InfoRow>
        <InfoRow label="Location">
          {event.venue}, {event.city}
        </InfoRow>
        <InfoRow label="Price">{formatPrice(event.price, event.isFree)}</InfoRow>
        {!event.soldOut && (
          <InfoRow label="Spots">
            {event.spotsLeft} of {event.totalSpots} remaining
          </InfoRow>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-[13px] font-semibold text-foreground mb-2">
          About
        </h2>
        <p className="text-[14px] text-muted leading-relaxed">
          {event.description}
        </p>
      </div>

      <button
        type="button"
        disabled={event.soldOut}
        className={`w-full rounded-lg py-3 text-[14px] font-semibold transition-colors ${
          event.soldOut
            ? "bg-border-light text-muted-light cursor-not-allowed"
            : "bg-foreground text-background hover:bg-foreground/90"
        }`}
      >
        {event.soldOut ? "Sold Out" : "Register"}
      </button>
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-16 shrink-0 text-[13px] text-muted-light">{label}</span>
      <span className="text-[13px] text-foreground">{children}</span>
    </div>
  );
}
