"use client";

import { TicketExpired2 } from "reicon-react";
import { iconProps } from "@/components/ui/Icon";

export function SoldOutLabel({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[12px] font-medium text-sold-out ${className}`}
    >
      <TicketExpired2 {...iconProps({ size: 12 })} />
      Sold Out
    </span>
  );
}
