"use client";

import { useState } from "react";
import { useSession } from "@/lib/session";

export function SaveListingButton() {
  const { isLoggedIn, openAuth } = useSession();
  const [saved, setSaved] = useState(false);

  function handleClick() {
    if (!isLoggedIn) {
      openAuth({ message: "Log in to save places you love." });
      return;
    }
    setSaved((s) => !s);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`t-surface w-full rounded-lg py-3 text-[14px] font-semibold ${
        saved
          ? "bg-hype-green/10 text-hype-green"
          : "bg-foreground text-background hover:bg-foreground/90"
      }`}
    >
      {saved ? "Saved to your list ✓" : "Save this spot"}
    </button>
  );
}
