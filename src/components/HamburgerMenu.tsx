"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "reicon-react";
import { iconProps } from "@/components/ui/Icon";

const links = [
  { label: "Discover", href: "/#events" },
  { label: "Create Event", href: "/create" },
  { label: "Log in", href: "#" },
];

export function HamburgerMenu() {
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
    setTimeout(() => {
      dropdown.classList.remove("is-closing");
      setOpen(false);
    }, closeMs);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        className="t-surface flex h-8 w-8 items-center justify-center text-foreground"
        aria-label="Menu"
        aria-expanded={open}
      >
        <Menu {...iconProps({ size: 18 })} />
      </button>

      {open && (
        <div
          ref={dropdownRef}
          data-origin="top-right"
          className="t-dropdown absolute right-0 top-full z-30 mt-2 min-w-[160px] rounded-xl border border-border bg-background py-1.5 shadow-lg"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              className="t-surface block px-4 py-2 text-[13px] font-medium text-foreground hover:bg-border-light/60"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
