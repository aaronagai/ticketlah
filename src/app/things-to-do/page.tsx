import { ListingView } from "@/components/ListingView";

export const metadata = {
  title: "Things to Do — LokalHype.com",
  description: "Experiences, spots, and activities to fill your weekend.",
};

export default function ThingsToDoPage() {
  return <ListingView vertical="things-to-do" />;
}
