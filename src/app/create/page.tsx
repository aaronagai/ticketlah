import Link from "next/link";
import { categories, nearbyOptions } from "@/lib/events";

export const metadata = {
  title: "Create Event — TicketLah",
  description: "Host your event on TicketLah.",
};

export default function CreateEventPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-muted hover:text-foreground mb-6"
      >
        ← Back
      </Link>

      <h1 className="text-xl font-semibold text-foreground mb-1">
        Create Event
      </h1>
      <p className="text-[14px] text-muted mb-8">
        Set up your event page in minutes.
      </p>

      <form className="space-y-5">
        <Field label="Event name" required>
          <input
            type="text"
            placeholder="e.g. KL Startup Meetup"
            className="field-input"
          />
        </Field>

        <Field label="Description">
          <textarea
            rows={3}
            placeholder="What's this event about?"
            className="field-input resize-none"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Date" required>
            <input type="date" className="field-input" />
          </Field>
          <Field label="Time" required>
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

        <div className="grid grid-cols-2 gap-4">
          <Field label="City" required>
            <select className="field-input" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              {nearbyOptions.slice(1).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Category">
            <select className="field-input" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Price (RM)">
            <input
              type="number"
              min="0"
              placeholder="0 = free"
              className="field-input"
            />
          </Field>
          <Field label="Capacity">
            <input
              type="number"
              min="1"
              placeholder="100"
              className="field-input"
            />
          </Field>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-foreground py-3 text-[14px] font-semibold text-background hover:bg-foreground/90 transition-colors mt-2"
        >
          Publish Event
        </button>
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
      <label className="block text-[13px] font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-muted-light ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
