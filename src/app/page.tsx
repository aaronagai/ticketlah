import { YourEventsSection } from "@/components/YourEventsSection";
import { PickedForYouSection } from "@/components/PickedForYouSection";
import { events } from "@/lib/events";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      <YourEventsSection />
      <PickedForYouSection events={events} />
    </div>
  );
}
