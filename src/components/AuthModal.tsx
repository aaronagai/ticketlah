"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "@/lib/session";

function GoogleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export function AuthModal() {
  const { authOpen, authMessage, closeAuth, login } = useSession();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authOpen) {
      setMounted(true);
      requestAnimationFrame(() =>
        backdropRef.current?.classList.add("is-open")
      );
    } else if (mounted) {
      backdropRef.current?.classList.remove("is-open");
      const timer = setTimeout(() => setMounted(false), 250);
      return () => clearTimeout(timer);
    }
  }, [authOpen, mounted]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAuth();
    }
    if (authOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [authOpen, closeAuth]);

  if (!mounted) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    login(name, email);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div
      ref={backdropRef}
      className="t-modal-backdrop fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-[2px] p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeAuth();
      }}
    >
      <div className="t-modal-panel w-full max-w-sm rounded-2xl bg-background p-6 shadow-xl">
        <div className="flex flex-col items-center text-center mb-5">
          <div className="mb-3 text-2xl">✨</div>
          <h2 className="text-lg font-bold tracking-tight">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-1 text-[13px] text-muted">
            {authMessage ??
              "Join LokalHype to save events and discover local."}
          </p>
        </div>

        <button
          type="button"
          onClick={() => login(name || "Alex Tan", email || "alex@example.com")}
          className="t-surface flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background py-2.5 text-[13px] font-medium text-foreground hover:bg-border-light/60"
        >
          <GoogleGlyph />
          Continue with Google
        </button>

        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[11px] text-muted-light">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={submit} className="space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="field-input"
              autoComplete="name"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="field-input"
            autoComplete="email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="field-input"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="t-surface w-full rounded-lg py-2.5 text-[13px] font-semibold text-white hover:opacity-90"
            style={{ background: "var(--hype-gradient)" }}
          >
            {mode === "signup" ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="mt-4 text-center text-[12px] text-muted">
          {mode === "signup" ? "Already have an account?" : "New to LokalHype?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "signup" ? "login" : "signup")}
            className="font-semibold text-hype-purple hover:underline"
          >
            {mode === "signup" ? "Log in" : "Sign up"}
          </button>
        </p>

        <p className="mt-3 text-center text-[10.5px] text-muted-light leading-relaxed">
          Prototype demo — accounts are not real and reset on refresh.
        </p>
      </div>
    </div>
  );
}
