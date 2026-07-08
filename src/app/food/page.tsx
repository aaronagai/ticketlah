import { ListingView } from "@/components/ListingView";

export const metadata = {
  title: "Food — LokalHype.com",
  description: "Where to makan near you — from mamak to fine dining.",
};

export default function FoodPage() {
  return <ListingView vertical="food" />;
}
