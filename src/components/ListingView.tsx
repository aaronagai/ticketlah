import { BackLink } from "@/components/BackLink";
import { ListingRow } from "@/components/ListingRow";
import { getListingsByVertical, verticalMeta, type Vertical } from "@/lib/listings";

export function ListingView({ vertical }: { vertical: Vertical }) {
  const meta = verticalMeta[vertical];
  const items = getListingsByVertical(vertical);

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <BackLink href="/" className="mb-6" />

      <div className="mb-6">
        <div className="text-3xl mb-2">{meta.emoji}</div>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
          {meta.label}
        </h1>
        <p className="mt-1 text-[14px] text-muted">{meta.blurb}</p>
      </div>

      <div className="space-y-4 t-list-stagger">
        {items.map((listing) => (
          <ListingRow key={listing.slug} listing={listing} />
        ))}
      </div>
    </div>
  );
}
