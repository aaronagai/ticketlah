import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-malaysia-red text-white font-bold text-sm shadow-md shadow-malaysia-red/25 group-hover:scale-105 transition-transform">
            TL
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-malaysia-yellow border-2 border-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-foreground">
              TicketLah
            </span>
            <span className="text-[10px] font-medium text-muted uppercase tracking-widest">
              Events Malaysia
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link href="/#events" className="hover:text-malaysia-red transition-colors">
            Discover
          </Link>
          <Link href="/#categories" className="hover:text-malaysia-red transition-colors">
            Categories
          </Link>
          <Link href="/create" className="hover:text-malaysia-red transition-colors">
            Host Event
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden sm:inline-flex text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Log in
          </button>
          <Link
            href="/create"
            className="inline-flex items-center gap-1.5 rounded-full bg-malaysia-red px-4 py-2 text-sm font-semibold text-white shadow-md shadow-malaysia-red/20 hover:bg-red-700 transition-colors"
          >
            Create Event
            <span className="text-malaysia-yellow">lah</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
