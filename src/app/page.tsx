import { Hero } from "@/components/Hero";
import { YourEventsSection } from "@/components/YourEventsSection";
import { PickedForYouSection } from "@/components/PickedForYouSection";
import { events } from "@/lib/events";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="events" className="mx-auto max-w-lg px-4 py-6 scroll-mt-14">
        <YourEventsSection />
        <PickedForYouSection events={events} />
      </div>
    </>
  );
}
