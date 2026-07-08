# LokalHype.com — Prototype & Roadmap

**LokalHype.com** is an all-in-one platform to discover local places, events,
promotions, and experiences in Malaysia.

This repository is an **interactive prototype** built to demonstrate the product
vision and the intended user experience. It is intentionally frontend-only:
everything you can click is real UI, but the data is mock and nothing is stored
on a server. Think of it as a high-fidelity, clickable demo — not a launch-ready
product.

Live demo: https://aaronagai.github.io/ticketlah/

---

## What the prototype demonstrates today

These flows are built and working in the demo (all client-side):

- **Discover hero** — AI-style "ask anything" search bar and category entry
  points (Food, Events, Promotions, Things to Do).
- **Fake-smart search** — typing a query filters across all mock events, places,
  and promotions and shows combined results. Feels intelligent; no real AI yet.
- **Four verticals** — browsable lists for Food, Events, Promotions, and Things
  to Do, each with detail pages, using Malaysian sample content.
- **Account experience (demo)** — sign up / log in modal (incl. a mock "Continue
  with Google"), a logged-in header with avatar menu, and gated actions.
  Accounts are session-only and reset on refresh — no real authentication.
- **Save & register** — logged-in users can register for events and save places;
  state shows in "My Events" for the session.
- **Create an event** — a logged-in user can publish an event and see it appear
  live in their feed. Session-only; not persisted or visible to others.
- **Design & motion polish** — responsive layout, brand identity, and considered
  transitions/micro-interactions.

---

## What a full (paid) build would add

The prototype deliberately stops short of the parts that make this a real,
operable business. A production engagement would deliver:

### Phase 1 — Foundations
- Backend API + database (persistent events, places, promotions, users)
- Real authentication (email/password, Google/Apple sign-in, sessions, security)
- User profiles, saved lists, and registrations that persist across devices

### Phase 2 — Two-sided marketplace
- **For Businesses** dashboard: claim/create listings, manage events &
  promotions, view analytics
- Listing moderation, verification, and roles/permissions
- Media uploads and image hosting

### Phase 3 — Real discovery
- Genuine AI natural-language search & recommendations
- Location awareness (maps, "near me", geosearch)
- Ratings, reviews, and social signals

### Phase 4 — Transactions & growth
- Ticketing & payments (FPX, Touch 'n Go, GrabPay, cards) with payouts
- Notifications (email/push), reminders, and calendar sync
- Admin tooling, reporting, and content operations

---

## Tech (prototype)

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- transitions.dev motion tokens · reicon-react icons

---

## Note on scope

This prototype is provided to illustrate capability and direction. Continued
development of the production platform (backend, authentication, payments,
business tooling, and real AI/search) is offered as a separate paid engagement.
