"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronExpandY } from "reicon-react";
import { iconProps } from "@/components/ui/Icon";

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function NearbyFilter({ options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeDropdown() {
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

  useEffect(() => {
    if (!open) return;
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    dropdown.classList.remove("is-closing");
    requestAnimationFrame(() => dropdown.classList.add("is-open"));
  }, [open]);

  function openDropdown() {
    setOpen(true);
  }

  function toggle() {
    if (open) closeDropdown();
    else openDropdown();
  }

  function select(option: string) {
    onChange(option);
    closeDropdown();
  }

  return (
    <div ref={rootRef} className="relative inline-flex mb-5">
      <button
        type="button"
        onClick={toggle}
        className="t-surface inline-flex items-center gap-1 text-[13px] font-medium text-muted hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {value}
        <ChevronExpandY {...iconProps({ size: 12, className: "text-muted-light" })} />
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="t-dropdown absolute left-0 top-full z-20 mt-1 min-w-[160px] rounded-lg border border-border bg-background py-1 shadow-lg"
          data-origin="top-left"
          role="listbox"
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              role="option"
              aria-selected={opt === value}
              onClick={() => select(opt)}
              className={`t-surface block w-full px-3 py-2 text-left text-[13px] ${
                opt === value
                  ? "font-medium text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
