import Link from "next/link";
import { categories, cities } from "@/lib/events";

export const metadata = {
  title: "Create Event — TicketLah",
  description: "Host your event on TicketLah. From meetups to food fests — set up in minutes lah!",
};

export default function CreateEventPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-malaysia-red mb-6"
      >
        ← Back to home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Create your event{" "}
          <span className="text-malaysia-red">lah</span>
        </h1>
        <p className="mt-2 text-muted">
          Tech talk, food fest, hiking trip — set up your event page in minutes.
          Accept payments via FPX and e-wallets.
        </p>
      </div>

      <form className="space-y-6">
        <Field label="Event name" required>
          <input
            type="text"
            placeholder="e.g. KL Startup Meetup: Pitch & Makan"
            className="field-input"
          />
        </Field>

        <Field label="Short description" required>
          <input
            type="text"
            placeholder="One-liner that hooks people — confirm attendance lah!"
            className="field-input"
          />
        </Field>

        <Field label="Full description">
          <textarea
            rows={4}
            placeholder="Tell attendees what to expect, what's included, dress code, etc."
            className="field-input resize-none"
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Date" required>
            <input type="date" className="field-input" />
          </Field>
          <Field label="Time (MYT)" required>
            <input type="time" className="field-input" />
          </Field>
        </div>

        <Field label="Venue" required>
          <input
            type="text"
            placeholder="e.g. Ruang Co-working, Bangsar"
            className="field-input"
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="City" required>
            <select className="field-input" defaultValue="">
              <option value="" disabled>
                Select city
              </option>
              {cities.slice(1).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Category" required>
            <select className="field-input" defaultValue="">
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.emoji} {cat.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Ticket price (RM)">
            <input
              type="number"
              min="0"
              placeholder="0 for free events"
              className="field-input"
            />
          </Field>
          <Field label="Max capacity">
            <input
              type="number"
              min="1"
              placeholder="e.g. 100"
              className="field-input"
            />
          </Field>
        </div>

        <Field label="Cover emoji">
          <div className="flex flex-wrap gap-2">
            {["🚀", "🍜", "🎸", "⛰️", "🎭", "☕", "🏃", "🥭", "💻", "🎉"].map(
              (emoji) => (
                <button
                  key={emoji}
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-2xl hover:border-malaysia-red hover:bg-malaysia-red/5 transition-all"
                >
                  {emoji}
                </button>
              )
            )}
          </div>
        </Field>

        <div className="rounded-xl border border-malaysia-yellow/30 bg-malaysia-yellow/5 p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            💳 Payment methods
          </p>
          <p className="text-xs text-muted">
            TicketLah supports FPX online banking, Touch &apos;n Go eWallet, GrabPay,
            Boost, and major credit/debit cards. Payouts to your Malaysian bank account
            within 3 business days.
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-malaysia-red py-4 text-sm font-bold text-white shadow-lg shadow-malaysia-red/25 hover:bg-red-700 transition-all hover:scale-[1.01]"
        >
          Publish Event Lah! 🚀
        </button>

        <p className="text-center text-xs text-muted">
          By publishing, you agree to TicketLah&apos;s Terms of Service. Free to create — we
          charge 3.5% + RM1 per paid ticket.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">
        {label}
        {required && <span className="text-malaysia-red ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
