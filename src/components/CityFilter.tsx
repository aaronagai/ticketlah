"use client";

import { cities } from "@/lib/events";

type Props = {
  selected: string;
  onSelect: (city: string) => void;
};

export function CityFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {cities.map((city) => (
        <button
          key={city}
          type="button"
          onClick={() => onSelect(city)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            selected === city
              ? "bg-malaysia-blue text-white"
              : "bg-surface border border-border text-muted hover:text-foreground"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
