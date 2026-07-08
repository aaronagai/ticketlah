"use client";

import { SessionProvider } from "@/lib/session";
import { AuthModal } from "@/components/AuthModal";
import { IntroNote } from "@/components/IntroNote";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <AuthModal />
      <IntroNote />
    </SessionProvider>
  );
}
