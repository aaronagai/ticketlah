"use client";

import Link from "next/link";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { UserMenu } from "@/components/UserMenu";
import { PrototypeBadge } from "@/components/PrototypeBadge";
import { Logo } from "@/components/Logo";
import { useSession } from "@/lib/session";

export function Header() {
  const { isLoggedIn, openAuth } = useSession();

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border-light">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="t-surface flex items-center gap-2">
            <Logo className="h-5 w-auto" />
            <span className="text-[17px] font-extrabold tracking-tight">
              <span className="text-foreground">Lokal</span>
              <span className="hype-text-gradient">Hype</span>
              <span className="text-muted-light font-semibold">.com</span>
            </span>
          </Link>
          <PrototypeBadge className="hidden sm:inline-flex" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="t-surface hidden sm:inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-[12.5px] font-medium text-foreground hover:border-border/60"
          >
            For Businesses
          </button>
          <span className="hidden sm:block h-4 w-px bg-border" aria-hidden />

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <button
              type="button"
              onClick={() => openAuth()}
              className="t-surface text-[13px] font-medium text-muted hover:text-foreground"
            >
              Log in
            </button>
          )}

          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
