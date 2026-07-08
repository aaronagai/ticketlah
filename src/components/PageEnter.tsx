"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  back?: boolean;
};

export function PageEnter({ children, back = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-entering");
    void el.offsetHeight;
    el.classList.add("is-entering");
  }, [pathname]);

  return (
    <div
      ref={ref}
      className={`t-page-enter ${back ? "is-back" : ""}`}
    >
      {children}
    </div>
  );
}
