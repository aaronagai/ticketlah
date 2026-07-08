export type Vertical = "food" | "promotions" | "things-to-do";

export type Listing = {
  slug: string;
  vertical: Vertical;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  coverColor: string;
  area: string;
  city: string;
  meta: string;
  organizer: string;
  organizerAvatar: string;
  tags: string[];
};

export const verticalMeta: Record<
  Vertical,
  { label: string; blurb: string; emoji: string }
> = {
  food: {
    label: "Food",
    blurb: "Where to makan near you — from mamak to fine dining.",
    emoji: "🍜",
  },
  promotions: {
    label: "Promotions",
    blurb: "Deals, discounts, and limited-time offers around town.",
    emoji: "🏷️",
  },
  "things-to-do": {
    label: "Things to Do",
    blurb: "Experiences, spots, and activities to fill your weekend.",
    emoji: "📍",
  },
};

export const listings: Listing[] = [
  // ── Food ──────────────────────────────────────────────
  {
    slug: "choon-hui-cafe",
    vertical: "food",
    title: "Choon Hui Cafe",
    subtitle: "The Sarawak laksa Anthony Bourdain swore by",
    description:
      "A Kuching institution serving what many call the best Sarawak laksa in town — rich, aromatic sambar broth over rice vermicelli, prawns, chicken, and omelette. Come before 10am or risk missing out.",
    emoji: "🍜",
    coverColor: "#f97316",
    area: "Jalan Ban Hock",
    city: "Kuching",
    meta: "RM 9–15 · Sarawak Laksa",
    organizer: "Choon Hui",
    organizerAvatar: "CH",
    tags: ["Sarawak Laksa", "Breakfast", "Heritage"],
  },
  {
    slug: "top-spot-food-court",
    vertical: "food",
    title: "Top Spot Food Court",
    subtitle: "Rooftop seafood feast above Kuching",
    description:
      "A buzzing open-air food court perched on a car park rooftop. Point at the fresh catch, pick your style — butter prawns, midin belacan, umai — and enjoy a proper Kuching seafood dinner under the stars.",
    emoji: "🦐",
    coverColor: "#ef4444",
    area: "Jalan Padungan",
    city: "Kuching",
    meta: "RM 25–50 · Seafood",
    organizer: "Top Spot",
    organizerAvatar: "TS",
    tags: ["Seafood", "Dinner", "Local Favourite"],
  },
  {
    slug: "black-bean-coffee",
    vertical: "food",
    title: "Black Bean Coffee & Tea",
    subtitle: "Small-batch Sarawak Liberica, roasted daily",
    description:
      "A tiny, fragrant shop roasting local Liberica and Robusta beans on-site. No frills, no wifi — just some of the best kopi in Borneo, ground fresh while you wait. Cash only.",
    emoji: "☕",
    coverColor: "#a855f7",
    area: "Jalan Carpenter (Old Town)",
    city: "Kuching",
    meta: "RM 6–14 · Coffee Roaster",
    organizer: "Black Bean",
    organizerAvatar: "BB",
    tags: ["Coffee", "Local Roast", "Old Town"],
  },
  {
    slug: "kek-lapis-dayang-salhah",
    vertical: "food",
    title: "Kek Lapis Dayang Salhah",
    subtitle: "Sarawak's iconic layered cakes",
    description:
      "Dozens of intricate, colourful layered and patterned cakes — a Sarawak specialty perfected over generations. Free samples, and they vacuum-pack so you can bring some home.",
    emoji: "🍰",
    coverColor: "#eab308",
    area: "Kampung Gersik",
    city: "Kuching",
    meta: "RM 30–60/cake · Dessert",
    organizer: "Dayang Salhah",
    organizerAvatar: "DS",
    tags: ["Kek Lapis", "Dessert", "Souvenir"],
  },
  // ── Promotions ────────────────────────────────────────
  {
    slug: "spay-global-cashback",
    vertical: "promotions",
    title: "10% cashback with S Pay Global",
    subtitle: "Scan to pay at participating Sarawak stalls",
    description:
      "Pay with S Pay Global at participating hawker stalls and cafes across Sarawak and get 10% back (up to RM5/day) this month. Support local, go cashless bah.",
    emoji: "📱",
    coverColor: "#10b981",
    area: "Sarawak-wide",
    city: "Kuching",
    meta: "10% cashback · This month",
    organizer: "S Pay Global",
    organizerAvatar: "SP",
    tags: ["Cashback", "e-Wallet", "Local"],
  },
  {
    slug: "vivacity-megamall-sale",
    vertical: "promotions",
    title: "Vivacity Megamall — Mega Sale",
    subtitle: "Up to 70% off across 3 floors",
    description:
      "Kuching's largest mall goes all out with fashion, gadgets, and lifestyle deals. Members get an extra 10% off, and free parking with min. spend RM120.",
    emoji: "🛍️",
    coverColor: "#ec4899",
    area: "Jalan Wan Alwi",
    city: "Kuching",
    meta: "Up to 70% off · 4 days only",
    organizer: "Vivacity Megamall",
    organizerAvatar: "VM",
    tags: ["Shopping", "Sale", "Mall"],
  },
  {
    slug: "kolo-mee-1for1",
    vertical: "promotions",
    title: "1-for-1 Kolo Mee mornings",
    subtitle: "Weekday breakfast deal in Kuching",
    description:
      "Buy one bowl of kolo mee, get one free before 9am on weekdays at participating kopitiams. Perfect for the office kaki. While stocks last each morning.",
    emoji: "🍥",
    coverColor: "#6366f1",
    area: "Kuching City",
    city: "Kuching",
    meta: "1-for-1 · Weekdays before 9am",
    organizer: "Kuching Kopitiam Assoc.",
    organizerAvatar: "KK",
    tags: ["Kolo Mee", "Breakfast", "Deal"],
  },
  // ── Things to Do ──────────────────────────────────────
  {
    slug: "semenggoh-orangutan-feeding",
    vertical: "things-to-do",
    title: "Semenggoh Orangutan Feeding",
    subtitle: "Meet Borneo's semi-wild orangutans",
    description:
      "At the Semenggoh Wildlife Centre, rehabilitated orangutans swing in for morning and afternoon feedings. A rare, ethical chance to see them up close in their natural rainforest home. Arrive early for the best viewing.",
    emoji: "🦧",
    coverColor: "#f59e0b",
    area: "Semenggoh Nature Reserve",
    city: "Kuching",
    meta: "RM 10 · Feeding 9am & 3pm",
    organizer: "Sarawak Forestry",
    organizerAvatar: "SF",
    tags: ["Wildlife", "Nature", "Family"],
  },
  {
    slug: "kuching-waterfront-darul-hana",
    vertical: "things-to-do",
    title: "Kuching Waterfront & Darul Hana Bridge",
    subtitle: "Golden-hour stroll along the Sarawak River",
    description:
      "Wander the riverside esplanade, cross the S-shaped Darul Hana Bridge, and watch the sun set behind the State Legislative Assembly. Grab an ice cream and hop a penambang boat across for RM1.",
    emoji: "🌉",
    coverColor: "#0ea5e9",
    area: "Kuching Waterfront",
    city: "Kuching",
    meta: "Free · Best at sunset",
    organizer: "Kuching City",
    organizerAvatar: "KC",
    tags: ["Landmark", "Sunset", "Free"],
  },
  {
    slug: "fairy-cave-bau",
    vertical: "things-to-do",
    title: "Fairy Cave & Wind Cave, Bau",
    subtitle: "Cathedral-like limestone caverns near Kuching",
    description:
      "An hour from the city, the towering Fairy Cave opens into a vast chamber of stalactites and jungle light, while the nearby Wind Cave river passage keeps things cool. Bring a torch and good shoes.",
    emoji: "🕳️",
    coverColor: "#059669",
    area: "Bau District",
    city: "Bau",
    meta: "RM 5 · Half-day trip",
    organizer: "Bau Tourism",
    organizerAvatar: "BT",
    tags: ["Caves", "Nature", "Day Trip"],
  },
];

export function getListingsByVertical(vertical: Vertical): Listing[] {
  return listings.filter((l) => l.vertical === vertical);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
