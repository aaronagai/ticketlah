"use client";

import { categories, type EventCategory } from "@/lib/events";

type Props = {
  selected: EventCategory | "all";
  onSelect: (category: EventCategory | "all") => void;
};

export function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div id="categories" className="flex flex-wrap gap-2">
      <FilterChip
        label="All Events"
        emoji="🇲🇾"
        active={selected === "all"}
        onClick={() => onSelect("all")}
      />
      {categories.map((cat) => (
        <FilterChip
          key={cat.id}
          label={cat.label}
          emoji={cat.emoji}
          active={selected === cat.id}
          onClick={() => onSelect(cat.id)}
        />
      ))}
    </div>
  );
}

function FilterChip({
  label,
  emoji,
  active,
  onClick,
}: {
  label: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "bg-malaysia-red text-white shadow-md shadow-malaysia-red/20"
          : "bg-surface border border-border text-muted hover:border-malaysia-red/30 hover:text-foreground"
      }`}
    >
      <span>{emoji}</span>
      {label}
    </button>
  );
}
