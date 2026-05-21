import Link from "next/link";

function TicketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light">
      <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a2 2 0 0 0 0 4v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a2 2 0 0 0 0-4V9z" />
      <path d="M9 6v12" />
    </svg>
  );
}

export function YourEventsSection() {
  return (
    <section className="mb-8">
      <p className="text-[14px] font-medium text-foreground tracking-tight mb-3">
        Hey, Heineken!
      </p>
      <Link href="/" className="inline-flex items-center gap-1 mb-3 group">
        <h2 className="text-[15px] font-semibold text-foreground">Your Events</h2>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light group-hover:text-muted transition-colors">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Link>

      <div className="flex items-start gap-3 rounded-xl border border-border px-4 py-3.5">
        <div className="mt-0.5 shrink-0">
          <TicketIcon />
        </div>
        <p className="text-[13px] leading-relaxed text-muted">
          You have a clear schedule ahead. Explore events below, or tap{" "}
          <Link href="/create" className="font-semibold text-foreground hover:underline">
            +
          </Link>{" "}
          to create one.
        </p>
      </div>
    </section>
  );
}
