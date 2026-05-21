export type EventCategory =
  | "tech"
  | "food"
  | "music"
  | "outdoors"
  | "culture"
  | "business";

export type Event = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  price: number;
  isFree: boolean;
  spotsLeft: number;
  totalSpots: number;
  soldOut: boolean;
  organizer: string;
  organizerAvatar: string;
  coverColor: string;
  emoji: string;
  tags: string[];
};

export const categories: { id: EventCategory; label: string }[] = [
  { id: "tech", label: "Tech & Startup" },
  { id: "food", label: "Makan & Food" },
  { id: "music", label: "Music & Arts" },
  { id: "outdoors", label: "Outdoor & Hiking" },
  { id: "culture", label: "Culture & Fest" },
  { id: "business", label: "Business & Network" },
];

export const nearbyOptions = [
  "Nearby",
  "Kuala Lumpur",
  "Penang",
  "Johor Bahru",
  "Ipoh",
  "Kota Kinabalu",
  "Melaka",
];

export const events: Event[] = [
  {
    slug: "bitcoin-pizza-day-kl",
    title: "Bitcoin Pizza Day — Kuala Lumpur!",
    subtitle: "Celebrate the legendary pizza transaction with the MY crypto community",
    description:
      "Join Malaysia's crypto community for Bitcoin Pizza Day at Pizza Mansion. Free pizza slices for the first 50 attendees, lightning talks on Bitcoin in Malaysia, and networking with builders from KL's Web3 scene.",
    category: "tech",
    date: "2026-05-22",
    time: "6:00 PM",
    venue: "Pizza Mansion @ The Five",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 0,
    isFree: true,
    spotsLeft: 34,
    totalSpots: 80,
    soldOut: false,
    organizer: "Renaiss TCG",
    organizerAvatar: "RT",
    coverColor: "#f97316",
    emoji: "🍕",
    tags: ["Crypto", "Networking", "Free"],
  },
  {
    slug: "apubcc-hackathon-demo",
    title: "APUBCC Hackathon Demo Day",
    subtitle: "Watch student teams pitch their final projects",
    description:
      "Asia Pacific University Blockchain & Crypto Club presents their semester-end demo day. 12 teams showcase DeFi, NFT, and AI projects. Open to public — great for recruiters and mentors.",
    category: "tech",
    date: "2026-05-22",
    time: "2:00 PM",
    venue: "APU Main Campus, Technology Park",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 0,
    isFree: true,
    spotsLeft: 0,
    totalSpots: 200,
    soldOut: true,
    organizer: "APUBCC",
    organizerAvatar: "AP",
    coverColor: "#6366f1",
    emoji: "💻",
    tags: ["Hackathon", "Students", "Demo Day"],
  },
  {
    slug: "openclaw-kl-meetup",
    title: "OpenClaw KL Community Meetup",
    subtitle: "Monthly gathering for the OpenClaw open-source community",
    description:
      "The KL chapter of OpenClaw meets monthly to share updates, discuss contributions, and connect contributors. Bring your laptop — we'll have a mini hack session after the talks.",
    category: "tech",
    date: "2026-05-22",
    time: "7:30 PM",
    venue: "Raintree Club Kuala Lumpur",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 15,
    isFree: false,
    spotsLeft: 0,
    totalSpots: 60,
    soldOut: true,
    organizer: "OpenClaw MY",
    organizerAvatar: "OC",
    coverColor: "#0ea5e9",
    emoji: "🦞",
    tags: ["Open Source", "Dev", "Community"],
  },
  {
    slug: "tarumt-design-talk",
    title: "Design Systems Talk @ TAR UMT",
    subtitle: "Learn how Malaysian startups build design systems at scale",
    description:
      "Speakers from Grab, Shopee, and local startups share how they approach design systems. Q&A session and light refreshments provided. Open to students and working designers.",
    category: "tech",
    date: "2026-05-23",
    time: "10:00 AM",
    venue: "Tunku Abdul Rahman University of Management and Technology",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 0,
    isFree: true,
    spotsLeft: 45,
    totalSpots: 120,
    soldOut: false,
    organizer: "TAR UMT Design Club",
    organizerAvatar: "TU",
    coverColor: "#ec4899",
    emoji: "🎨",
    tags: ["Design", "Talk", "Students"],
  },
  {
    slug: "penang-char-kuey-teow-fest",
    title: "Penang Char Kuey Teow Festival",
    subtitle: "Wok hei competition + live pasar vibes",
    description:
      "Twenty hawkers, one island, infinite wok hei. Vote for your favourite char kuey teow, catch live busking at Armenian Street, and grab limited-edition festival merch.",
    category: "food",
    date: "2026-05-23",
    time: "4:00 PM",
    venue: "Armenian Street, George Town",
    city: "Penang",
    state: "Pulau Pinang",
    price: 25,
    isFree: false,
    spotsLeft: 412,
    totalSpots: 2000,
    soldOut: false,
    organizer: "Penang Food Society",
    organizerAvatar: "PF",
    coverColor: "#eab308",
    emoji: "🍜",
    tags: ["Food Fest", "Family", "Outdoor"],
  },
  {
    slug: "kl-startup-meetup-may",
    title: "KL Startup Meetup: Pitch & Makan",
    subtitle: "Founders, VCs, and nasi lemak — all in one evening lah",
    description:
      "Join 120+ founders, investors, and builders at Ruang in Bangsar. Lightning pitches, open networking, and proper mamak supper after.",
    category: "tech",
    date: "2026-05-28",
    time: "7:00 PM",
    venue: "Ruang Co-working, Bangsar",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 0,
    isFree: true,
    spotsLeft: 34,
    totalSpots: 120,
    soldOut: false,
    organizer: "StartupMY",
    organizerAvatar: "SM",
    coverColor: "#ef4444",
    emoji: "🚀",
    tags: ["Networking", "Pitch Night", "Free"],
  },
  {
    slug: "kk-sunset-hike-mount-nabalu",
    title: "KK Sunset Hike: Mount Nabalu Trail",
    subtitle: "Golden hour views over Kota Kinabalu bay",
    description:
      "Guided evening hike suitable for beginners. Experienced local guides, headlamps provided, and seafood dinner at a kampung-style warung after.",
    category: "outdoors",
    date: "2026-05-31",
    time: "4:00 PM",
    venue: "Tanjung Aru Trailhead",
    city: "Kota Kinabalu",
    state: "Sabah",
    price: 45,
    isFree: false,
    spotsLeft: 18,
    totalSpots: 30,
    soldOut: false,
    organizer: "Sabah Trails Co.",
    organizerAvatar: "ST",
    coverColor: "#059669",
    emoji: "⛰️",
    tags: ["Hiking", "Sunset", "Guided"],
  },
  {
    slug: "kl-indie-music-night",
    title: "Indie Malaya Live at Merdekarya",
    subtitle: "Local bands, cold drinks, good vibes only",
    description:
      "Four rising Malaysian indie acts take the stage at Merdekarya. Expect Malay, English, and Iban lyrics — a proper showcase of our sound.",
    category: "music",
    date: "2026-06-21",
    time: "8:00 PM",
    venue: "Merdekarya, Bangsar",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 35,
    isFree: false,
    spotsLeft: 55,
    totalSpots: 150,
    soldOut: false,
    organizer: "Soundwave MY",
    organizerAvatar: "SW",
    coverColor: "#a855f7",
    emoji: "🎸",
    tags: ["Live Music", "Indie", "Night Out"],
  },
  {
    slug: "kl-durian-party-bukit-bintang",
    title: "Durian Party: Musang King Edition",
    subtitle: "All-you-can-eat durian — confirm your slot lah!",
    description:
      "Premium Musang King, D24, and Black Thorn varieties. Air-cond tent, gloves provided, and durian pengat for dessert.",
    category: "food",
    date: "2026-07-12",
    time: "3:00 PM",
    venue: "Bukit Bintang Durian Hub",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan",
    price: 120,
    isFree: false,
    spotsLeft: 12,
    totalSpots: 80,
    soldOut: false,
    organizer: "Durian Kaki KL",
    organizerAvatar: "DK",
    coverColor: "#84cc16",
    emoji: "🥭",
    tags: ["Durian", "Foodie", "Limited Slots"],
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-MY", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatPrice(price: number, isFree: boolean): string {
  if (isFree) return "Free";
  return `RM ${price.toFixed(0)}`;
}
