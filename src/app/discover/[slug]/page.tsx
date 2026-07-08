import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { SaveListingButton } from "@/components/SaveListingButton";
import {
  getListingBySlug,
  listings,
  verticalMeta,
} from "@/lib/listings";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Not Found — LokalHype.com" };
  return {
    title: `${listing.title} — LokalHype.com`,
    description: listing.subtitle,
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const meta = verticalMeta[listing.vertical];

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-16">
      <BackLink href={`/${listing.vertical}`} className="mb-6" />

      <div
        className="w-full aspect-[16/9] rounded-xl overflow-hidden flex items-center justify-center text-6xl mb-6"
        style={{ backgroundColor: listing.coverColor + "18" }}
      >
        {listing.emoji}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
          {meta.emoji} {meta.label}
        </span>
        <span className="text-[13px] text-muted">{listing.meta}</span>
      </div>

      <h1 className="text-xl font-semibold text-foreground leading-snug mb-2">
        {listing.title}
      </h1>
      <p className="text-[14px] text-muted leading-relaxed mb-6">
        {listing.subtitle}
      </p>

      <div className="space-y-3 mb-8 pb-8 border-b border-border-light">
        <InfoRow label="Where">
          {listing.area}, {listing.city}
        </InfoRow>
        <InfoRow label="By">{listing.organizer}</InfoRow>
        <InfoRow label="Tags">{listing.tags.join(" · ")}</InfoRow>
      </div>

      <div className="mb-8">
        <h2 className="text-[13px] font-semibold text-foreground mb-2">About</h2>
        <p className="text-[14px] text-muted leading-relaxed">
          {listing.description}
        </p>
      </div>

      <SaveListingButton />
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-16 shrink-0 text-[13px] text-muted-light">{label}</span>
      <span className="text-[13px] text-foreground">{children}</span>
    </div>
  );
}
