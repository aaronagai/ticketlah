import { ListingView } from "@/components/ListingView";

export const metadata = {
  title: "Promotions — LokalHype.com",
  description: "Deals, discounts, and limited-time offers around town.",
};

export default function PromotionsPage() {
  return <ListingView vertical="promotions" />;
}
