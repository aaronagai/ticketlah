import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
      <div className="mx-auto flex h-12 max-w-lg items-center justify-between px-4">
        <Link href="/" className="text-[15px] font-semibold text-foreground tracking-tight">
          TicketLah
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-[13px] font-medium text-muted hover:text-foreground transition-colors"
          >
            Log in
          </button>
          <Link
            href="/create"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-lg leading-none hover:bg-foreground/85 transition-colors"
            aria-label="Create event"
          >
            +
          </Link>
        </div>
      </div>
    </header>
  );
}
