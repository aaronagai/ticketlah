import { Suspense } from "react";
import { SearchView } from "@/components/SearchView";

export const metadata = {
  title: "Search — LokalHype.com",
  description: "Search places, events, and promotions near you.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-lg px-4 py-10 text-center text-[13px] text-muted">
          Loading…
        </div>
      }
    >
      <SearchView />
    </Suspense>
  );
}
