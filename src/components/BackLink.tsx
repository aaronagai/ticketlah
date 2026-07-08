"use client";

import Link from "next/link";
import { ArrowLeft } from "reicon-react";
import { iconProps } from "@/components/ui/Icon";

type Props = {
  href: string;
  className?: string;
};

export function BackLink({ href, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`t-surface inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground ${className}`}
    >
      <ArrowLeft {...iconProps({ size: 14 })} />
      Back
    </Link>
  );
}
