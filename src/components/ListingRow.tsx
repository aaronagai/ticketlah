"use client";

import Link from "next/link";
import { MapPoint } from "reicon-react";
import type { Listing } from "@/lib/listings";
import { iconProps } from "@/components/ui/Icon";

export function ListingRow({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/discover/${listing.slug}`}
      className="flex gap-3 group t-surface rounded-lg -mx-2 px-2 py-1 hover:bg-border-light/60"
    >
      <div
        className="shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-lg overflow-hidden flex items-center justify-center text-3xl transition-transform duration-[var(--duration-fast)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.02]"
        style={{ backgroundColor: listing.coverColor + "18" }}
      >
        <span className="select-none">{listing.emoji}</span>
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center gap-1.5 mb-1 min-w-0">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-border-light text-[7px] font-bold text-muted">
            {listing.organizerAvatar}
          </span>
          <span className="text-[11px] text-muted truncate">
            {listing.organizer}
          </span>
        </div>

        <h4 className="text-[14px] font-semibold text-foreground leading-snug mb-1.5 group-hover:underline decoration-foreground/30 underline-offset-2">
          {listing.title}
        </h4>

        <p className="text-[12px] text-muted leading-snug mb-1 line-clamp-1">
          {listing.meta}
        </p>

        <div className="flex items-center gap-1.5">
          <MapPoint {...iconProps({ size: 13, className: "text-muted-light shrink-0" })} />
          <span className="text-[12px] text-muted truncate">
            {listing.area}, {listing.city}
          </span>
        </div>
      </div>
    </Link>
  );
}
