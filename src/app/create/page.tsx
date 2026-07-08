import { BackLink } from "@/components/BackLink";
import { CreateEventForm } from "@/components/CreateEventForm";

export const metadata = {
  title: "Create Event — LokalHype.com",
  description: "Host your event on LokalHype.",
};

export default function CreateEventPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <BackLink href="/" className="mb-6" />

      <h1 className="text-xl font-semibold text-foreground mb-1">
        Create Event
      </h1>
      <p className="text-[14px] text-muted mb-8">
        Set up your event page in minutes.
      </p>

      <CreateEventForm />
    </div>
  );
}
