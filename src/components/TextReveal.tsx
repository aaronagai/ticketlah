"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function TextReveal({ children, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-shown");
    void el.offsetHeight;
    el.classList.add("is-shown");
  }, []);

  return (
    <Tag ref={ref} className={`t-stagger ${className}`}>
      {children}
    </Tag>
  );
}
