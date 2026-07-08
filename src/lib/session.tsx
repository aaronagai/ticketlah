"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Event } from "./events";

export type SessionUser = {
  name: string;
  email: string;
  initials: string;
};

type AuthIntent = {
  message?: string;
};

type SessionValue = {
  user: SessionUser | null;
  isLoggedIn: boolean;
  login: (name: string, email: string) => void;
  logout: () => void;

  createdEvents: Event[];
  addCreatedEvent: (event: Event) => void;

  registeredSlugs: string[];
  isRegistered: (slug: string) => boolean;
  register: (slug: string) => void;

  authOpen: boolean;
  authMessage?: string;
  openAuth: (intent?: AuthIntent) => void;
  closeAuth: () => void;
};

const SessionContext = createContext<SessionValue | null>(null);

function initials(name: string, email: string): string {
  const source = name.trim() || email.trim();
  const parts = source.split(/[\s@.]+/).filter(Boolean);
  const letters = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  return (letters || source.slice(0, 2)).toUpperCase();
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [createdEvents, setCreatedEvents] = useState<Event[]>([]);
  const [registeredSlugs, setRegisteredSlugs] = useState<string[]>([]);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMessage, setAuthMessage] = useState<string | undefined>(undefined);

  const login = useCallback((name: string, email: string) => {
    setUser({ name: name.trim() || "Guest", email, initials: initials(name, email) });
    setAuthOpen(false);
    setAuthMessage(undefined);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setCreatedEvents([]);
    setRegisteredSlugs([]);
  }, []);

  const addCreatedEvent = useCallback((event: Event) => {
    setCreatedEvents((prev) => [event, ...prev]);
  }, []);

  const register = useCallback((slug: string) => {
    setRegisteredSlugs((prev) =>
      prev.includes(slug) ? prev : [...prev, slug]
    );
  }, []);

  const isRegistered = useCallback(
    (slug: string) => registeredSlugs.includes(slug),
    [registeredSlugs]
  );

  const openAuth = useCallback((intent?: AuthIntent) => {
    setAuthMessage(intent?.message);
    setAuthOpen(true);
  }, []);

  const closeAuth = useCallback(() => {
    setAuthOpen(false);
    setAuthMessage(undefined);
  }, []);

  const value = useMemo<SessionValue>(
    () => ({
      user,
      isLoggedIn: user !== null,
      login,
      logout,
      createdEvents,
      addCreatedEvent,
      registeredSlugs,
      isRegistered,
      register,
      authOpen,
      authMessage,
      openAuth,
      closeAuth,
    }),
    [
      user,
      login,
      logout,
      createdEvents,
      addCreatedEvent,
      registeredSlugs,
      isRegistered,
      register,
      authOpen,
      authMessage,
      openAuth,
      closeAuth,
    ]
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession(): SessionValue {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return ctx;
}
