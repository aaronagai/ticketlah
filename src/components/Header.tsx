import Link from "next/link";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border-light">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <Link href="/" className="t-surface text-[17px] font-extrabold tracking-tight">
          <span className="text-foreground">Lokal</span>
          <span className="hype-text-gradient">Hype</span>
          <span className="text-muted-light font-semibold">.com</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="t-surface hidden sm:inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-[12.5px] font-medium text-foreground hover:border-border/60"
          >
            For Businesses
          </button>
          <span className="hidden sm:block h-4 w-px bg-border" aria-hidden />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
