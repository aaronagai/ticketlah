"use client";

import { useSession } from "@/lib/session";

type Props = {
  slug: string;
  soldOut: boolean;
  isFree: boolean;
};

export function RegisterButton({ slug, soldOut, isFree }: Props) {
  const { isLoggedIn, openAuth, register, isRegistered } = useSession();
  const registered = isRegistered(slug);

  if (soldOut) {
    return (
      <button
        type="button"
        disabled
        className="w-full rounded-lg py-3 text-[14px] font-semibold bg-border-light text-muted-light cursor-not-allowed"
      >
        Sold Out
      </button>
    );
  }

  if (registered) {
    return (
      <div className="rounded-lg bg-hype-green/10 py-3 text-center text-[14px] font-semibold text-hype-green">
        You&apos;re going! ✓
      </div>
    );
  }

  function handleClick() {
    if (!isLoggedIn) {
      openAuth({ message: "Log in to register for this event." });
      return;
    }
    register(slug);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="t-surface w-full rounded-lg py-3 text-[14px] font-semibold bg-foreground text-background hover:bg-foreground/90"
    >
      {isFree ? "Register — Free" : "Get Ticket"}
    </button>
  );
}
