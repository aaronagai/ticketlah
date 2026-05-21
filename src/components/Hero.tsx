import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-malaysia-red/5 via-transparent to-malaysia-blue/5 pointer-events-none" />
      <div className="absolute top-20 right-10 text-6xl opacity-10 animate-float hidden lg:block">🎫</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>🇲🇾</div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-malaysia-red/20 bg-malaysia-red/5 px-3 py-1 text-xs font-semibold text-malaysia-red mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-malaysia-red opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-malaysia-red" />
            </span>
            Live across Semenanjung &amp; Borneo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Discover events in{" "}
            <span className="bg-gradient-to-r from-malaysia-red via-orange-500 to-malaysia-yellow bg-clip-text text-transparent">
              Malaysia
            </span>
            , book your spot{" "}
            <span className="underline decoration-malaysia-yellow decoration-4 underline-offset-4">
              lah
            </span>
          </h1>

          <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
            Tech meetups in Bangsar, durian parties in KL, hikes in Sabah — TicketLah
            brings Malaysia&apos;s best events to one place. Free or paid, confirm via FPX
            or TnG eWallet.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#events"
              className="inline-flex items-center justify-center rounded-full bg-malaysia-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-malaysia-red/25 hover:bg-red-700 transition-all hover:scale-[1.02]"
            >
              Jom, browse events →
            </Link>
            <Link
              href="/create"
              className="inline-flex items-center justify-center rounded-full border-2 border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground hover:border-malaysia-blue/30 hover:bg-malaysia-blue/5 transition-all"
            >
              Host your own event
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <Stat value="2,400+" label="Events hosted" />
            <Stat value="85K+" label="Tickets sold" />
            <Stat value="12" label="States covered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-muted text-xs font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
}
