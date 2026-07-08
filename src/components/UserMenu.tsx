"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/session";

export function UserMenu() {
  const { user, logout } = useSession();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) return;
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    dropdown.classList.remove("is-closing");
    requestAnimationFrame(() => dropdown.classList.add("is-open"));
  }, [open]);

  function close() {
    const dropdown = dropdownRef.current;
    if (!dropdown?.classList.contains("is-open")) return;
    dropdown.classList.remove("is-open");
    dropdown.classList.add("is-closing");
    const closeMs =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dropdown-close-dur"
        )
      ) || 150;
    setTimeout(() => setOpen(false), closeMs);
  }

  if (!user) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        className="t-surface flex items-center gap-2"
        aria-label="Account menu"
        aria-expanded={open}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
          style={{ background: "var(--hype-gradient)" }}
        >
          {user.initials}
        </span>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          data-origin="top-right"
          className="t-dropdown absolute right-0 top-full z-30 mt-2 min-w-[180px] rounded-xl border border-border bg-background py-1.5 shadow-lg"
        >
          <div className="px-4 py-2 border-b border-border-light mb-1">
            <p className="text-[13px] font-semibold text-foreground truncate">
              {user.name}
            </p>
            <p className="text-[11px] text-muted truncate">{user.email}</p>
          </div>
          <Link
            href="/#your-events"
            onClick={close}
            className="t-surface block px-4 py-2 text-[13px] font-medium text-foreground hover:bg-border-light/60"
          >
            My Events
          </Link>
          <Link
            href="/create"
            onClick={close}
            className="t-surface block px-4 py-2 text-[13px] font-medium text-foreground hover:bg-border-light/60"
          >
            Create Event
          </Link>
          <button
            type="button"
            onClick={() => {
              logout();
              close();
            }}
            className="t-surface block w-full px-4 py-2 text-left text-[13px] font-medium text-sold-out hover:bg-border-light/60"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
