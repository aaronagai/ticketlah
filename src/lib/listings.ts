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
    slug: "village-park-nasi-lemak",
    vertical: "food",
    title: "Village Park Restaurant",
    subtitle: "Legendary nasi lemak ayam goreng in PJ",
    description:
      "One of the most famous nasi lemak spots in the Klang Valley. Crispy fried chicken, fragrant coconut rice, and sambal that keeps people queueing every morning. Come early — it runs out by lunch.",
    emoji: "🍗",
    coverColor: "#f97316",
    area: "Damansara Uptown",
    city: "Petaling Jaya",
    meta: "RM 12–20 · Malaysian",
    organizer: "Village Park",
    organizerAvatar: "VP",
    tags: ["Nasi Lemak", "Halal", "Breakfast"],
  },
  {
    slug: "merchants-lane-cafe",
    vertical: "food",
    title: "Merchant's Lane",
    subtitle: "Heritage shoplot cafe with a leafy rooftop",
    description:
      "A hidden gem above Petaling Street. Restored pre-war shoplot serving fusion brunch, great coffee, and Instagram-worthy interiors. Best for a lazy weekend catch-up.",
    emoji: "☕",
    coverColor: "#a855f7",
    area: "Petaling Street",
    city: "Kuala Lumpur",
    meta: "RM 20–40 · Cafe · Wifi",
    organizer: "Merchant's Lane",
    organizerAvatar: "ML",
    tags: ["Cafe", "Brunch", "Wifi"],
  },
  {
    slug: "line-clear-nasi-kandar",
    vertical: "food",
    title: "Line Clear Nasi Kandar",
    subtitle: "24-hour nasi kandar institution in Penang",
    description:
      "Tucked in an alley off Penang Road, Line Clear has served banjir-style nasi kandar around the clock for decades. Pick your curries, mix the gravies, and dig in.",
    emoji: "🍛",
    coverColor: "#eab308",
    area: "Penang Road",
    city: "Penang",
    meta: "RM 10–18 · Open 24h",
    organizer: "Line Clear",
    organizerAvatar: "LC",
    tags: ["Nasi Kandar", "Halal", "Late Night"],
  },
  {
    slug: "huttons-satay",
    vertical: "food",
    title: "Hutton Lane Satay",
    subtitle: "Charcoal-grilled satay with thick peanut sauce",
    description:
      "Nightly satay stall famous for juicy chicken and beef skewers grilled over charcoal. Pair with ketupat and cucumber. Cash only lah.",
    emoji: "🍢",
    coverColor: "#ef4444",
    area: "Hutton Lane",
    city: "Penang",
    meta: "RM 0.90/stick · Street Food",
    organizer: "Hutton Satay",
    organizerAvatar: "HS",
    tags: ["Satay", "Street Food", "Dinner"],
  },
  // ── Promotions ────────────────────────────────────────
  {
    slug: "grabfood-rm15-off",
    vertical: "promotions",
    title: "RM15 off your first GrabFood order",
    subtitle: "New users only — this weekend",
    description:
      "Get RM15 off (min. spend RM25) on your first order this weekend. Applies to selected restaurants in the Klang Valley. Use code at checkout while slots last.",
    emoji: "🛵",
    coverColor: "#10b981",
    area: "Klang Valley",
    city: "Kuala Lumpur",
    meta: "Ends Sun · Code HYPE15",
    organizer: "GrabFood",
    organizerAvatar: "GF",
    tags: ["Food Delivery", "New User", "Weekend"],
  },
  {
    slug: "pavilion-raya-sale",
    vertical: "promotions",
    title: "Pavilion KL — Raya Warehouse Sale",
    subtitle: "Up to 70% off across 100+ stores",
    description:
      "Massive mid-year clearance across fashion, beauty, and lifestyle brands. Members get an extra 10% off. Free parking with min. spend RM150.",
    emoji: "🛍️",
    coverColor: "#ec4899",
    area: "Bukit Bintang",
    city: "Kuala Lumpur",
    meta: "Up to 70% off · 3 days only",
    organizer: "Pavilion KL",
    organizerAvatar: "PV",
    tags: ["Shopping", "Sale", "Fashion"],
  },
  {
    slug: "kopi-loyalty-1for1",
    vertical: "promotions",
    title: "1-for-1 Kopi at ZUS Coffee",
    subtitle: "Every weekday, 2–5pm happy hour",
    description:
      "Buy one handcrafted drink, get one free during the afternoon lull. Redeemable via the app at all outlets nationwide. Perfect excuse for a kopi break.",
    emoji: "🥤",
    coverColor: "#6366f1",
    area: "Nationwide",
    city: "Kuala Lumpur",
    meta: "1-for-1 · Weekdays 2–5pm",
    organizer: "ZUS Coffee",
    organizerAvatar: "ZC",
    tags: ["Coffee", "Happy Hour", "Daily"],
  },
  // ── Things to Do ──────────────────────────────────────
  {
    slug: "batu-caves-sunrise",
    vertical: "things-to-do",
    title: "Batu Caves Sunrise Climb",
    subtitle: "272 rainbow steps before the crowds",
    description:
      "Beat the heat and the tour buses. Climb the colourful steps at dawn, watch the macaques wake up, and catch the golden Murugan statue in the morning light. Free to enter.",
    emoji: "🛕",
    coverColor: "#f59e0b",
    area: "Gombak",
    city: "Selangor",
    meta: "Free · Best at sunrise",
    organizer: "KL Explorers",
    organizerAvatar: "KE",
    tags: ["Landmark", "Outdoor", "Free"],
  },
  {
    slug: "kl-forest-eco-park",
    vertical: "things-to-do",
    title: "KL Forest Eco Park Canopy Walk",
    subtitle: "A rainforest in the middle of the city",
    description:
      "Walk the elevated canopy bridge through one of the oldest permanent forest reserves in Malaysia, right beside KL Tower. A quick nature escape between meetings.",
    emoji: "🌳",
    coverColor: "#059669",
    area: "Bukit Nanas",
    city: "Kuala Lumpur",
    meta: "RM 40 · Canopy walk",
    organizer: "KL Forest Park",
    organizerAvatar: "FP",
    tags: ["Nature", "Canopy Walk", "Family"],
  },
  {
    slug: "thean-hou-lantern-night",
    vertical: "things-to-do",
    title: "Thean Hou Temple Lantern Night",
    subtitle: "Hundreds of red lanterns lit after dark",
    description:
      "One of the largest Chinese temples in Southeast Asia glows with red lanterns every evening. Sweeping city views, ornate architecture, and a peaceful atmosphere.",
    emoji: "🏮",
    coverColor: "#ef4444",
    area: "Robson Heights",
    city: "Kuala Lumpur",
    meta: "Free · Evenings",
    organizer: "Thean Hou",
    organizerAvatar: "TH",
    tags: ["Temple", "Photography", "Free"],
  },
];

export function getListingsByVertical(vertical: Vertical): Listing[] {
  return listings.filter((l) => l.vertical === vertical);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
