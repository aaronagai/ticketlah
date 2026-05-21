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
  organizer: string;
  organizerAvatar: string;
  coverGradient: string;
  emoji: string;
  tags: string[];
  featured?: boolean;
};

export const categories: { id: EventCategory; label: string; emoji: string }[] = [
  { id: "tech", label: "Tech & Startup", emoji: "💻" },
  { id: "food", label: "Makan & Food", emoji: "🍜" },
  { id: "music", label: "Music & Arts", emoji: "🎵" },
  { id: "outdoors", label: "Outdoor & Hiking", emoji: "⛰️" },
  { id: "culture", label: "Culture & Fest", emoji: "🎭" },
  { id: "business", label: "Business & Network", emoji: "🤝" },
];

export const cities = [
  "All Malaysia",
  "Kuala Lumpur",
  "Penang",
  "Johor Bahru",
  "Ipoh",
  "Kota Kinabalu",
  "Melaka",
];

export const events: Event[] = [
  {
    slug: "kl-startup-meetup-may",
    title: "KL Startup Meetup: Pitch & Makan",
    subtitle: "Founders, VCs, and nasi lemak — all in one evening lah",
    description:
      "Join 120+ founders, investors, and builders at Ruang in Bangsar. Lightning pitches, open networking, and proper mamak supper after. Bring your deck or just your ideas — confirm attendance via FPX or Touch 'n Go eWallet.",
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
    organizer: "StartupMY",
    organizerAvatar: "SM",
    coverGradient: "from-red-600 via-rose-500 to-orange-400",
    emoji: "🚀",
    tags: ["Networking", "Pitch Night", "Free"],
    featured: true,
  },
  {
    slug: "penang-char-kuey-teow-fest",
    title: "Penang Char Kuey Teow Festival",
    subtitle: "Wok hei competition + live pasar vibes",
    description:
      "Twenty hawkers, one island, infinite wok hei. Vote for your favourite char kuey teow, catch live busking at Armenian Street, and grab limited-edition festival merch. Family-friendly — kids under 12 free.",
    category: "food",
    date: "2026-06-07",
    time: "4:00 PM",
    venue: "Armenian Street, George Town",
    city: "Penang",
    state: "Pulau Pinang",
    price: 25,
    isFree: false,
    spotsLeft: 412,
    totalSpots: 2000,
    organizer: "Penang Food Society",
    organizerAvatar: "PF",
    coverGradient: "from-amber-500 via-yellow-400 to-orange-300",
    emoji: "🍜",
    tags: ["Food Fest", "Family", "Outdoor"],
    featured: true,
  },
  {
    slug: "jb-night-run-merdeka",
    title: "JB Night Run: Merdeka Edition",
    subtitle: "5K along the causeway skyline — jom lari!",
    description:
      "Run under the lights with views of Singapore across the straits. Finisher tee, isotonic, and post-run murtabak included. Categories: 5K fun run and 10K challenge. Bib collection at Dataran Bandaraya JB.",
    category: "outdoors",
    date: "2026-08-16",
    time: "6:30 PM",
    venue: "Dataran Bandaraya Johor Bahru",
    city: "Johor Bahru",
    state: "Johor",
    price: 65,
    isFree: false,
    spotsLeft: 89,
    totalSpots: 500,
    organizer: "RunJB Community",
    organizerAvatar: "RJ",
    coverGradient: "from-blue-900 via-indigo-700 to-blue-500",
    emoji: "🏃",
    tags: ["Running", "Merdeka", "Community"],
    featured: true,
  },
  {
    slug: "ipoh-white-coffee-workshop",
    title: "Ipoh White Coffee Roasting Workshop",
    subtitle: "From bean to cup — learn the kopitiam way",
    description:
      "Hands-on session at a heritage kopitiam in Old Town. Roast, blend, and pull your own white coffee. Take home 200g of beans and a vintage-style mug. Limited to 20 participants for intimate learning.",
    category: "food",
    date: "2026-06-14",
    time: "10:00 AM",
    venue: "Kedai Kopi Sin Yoon Loong",
    city: "Ipoh",
    state: "Perak",
    price: 88,
    isFree: false,
    spotsLeft: 6,
    totalSpots: 20,
    organizer: "Kopi Kita",
    organizerAvatar: "KK",
    coverGradient: "from-stone-600 via-amber-700 to-yellow-600",
    emoji: "☕",
    tags: ["Workshop", "Heritage", "Small Group"],
  },
  {
    slug: "kk-sunset-hike-mount-nabalu",
    title: "KK Sunset Hike: Mount Nabalu Trail",
    subtitle: "Golden hour views over Kota Kinabalu bay",
    description:
      "Guided evening hike suitable for beginners. Experienced local guides, headlamps provided, and seafood dinner at a kampung-style warung after. Weather contingency plan included — safety briefing at 4 PM sharp.",
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
    organizer: "Sabah Trails Co.",
    organizerAvatar: "ST",
    coverGradient: "from-emerald-700 via-teal-600 to-cyan-400",
    emoji: "⛰️",
    tags: ["Hiking", "Sunset", "Guided"],
  },
  {
    slug: "kl-indie-music-night",
    title: "Indie Malaya Live at Merdekarya",
    subtitle: "Local bands, cold drinks, good vibes only",
    description:
      "Four rising Malaysian indie acts take the stage at Merdekarya. Expect Malay, English, and Iban lyrics — a proper showcase of our sound. Early bird tickets include one drink. No cover charge for walk-ins after 10 PM.",
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
    organizer: "Soundwave MY",
    organizerAvatar: "SW",
    coverGradient: "from-purple-700 via-violet-600 to-fuchsia-500",
    emoji: "🎸",
    tags: ["Live Music", "Indie", "Night Out"],
  },
  {
    slug: "melaka-heritage-walk",
    title: "Melaka Heritage Night Walk",
    subtitle: "Jonker Street stories with a local historian",
    description:
      "Two-hour guided walk through UNESCO heritage zones. Learn about Peranakan culture, Dutch architecture, and the best cendol spots locals actually go to. Ends with satay celup at a hidden gem stall.",
    category: "culture",
    date: "2026-06-28",
    time: "6:00 PM",
    venue: "Jonker Walk, Melaka",
    city: "Melaka",
    state: "Melaka",
    price: 40,
    isFree: false,
    spotsLeft: 22,
    totalSpots: 40,
    organizer: "Heritage Walks MY",
    organizerAvatar: "HW",
    coverGradient: "from-red-800 via-orange-700 to-amber-600",
    emoji: "🏛️",
    tags: ["Heritage", "Walking Tour", "UNESCO"],
  },
  {
    slug: "kl-durian-party-bukit-bintang",
    title: "Durian Party: Musang King Edition",
    subtitle: "All-you-can-eat durian — confirm your slot lah!",
    description:
      "The event every Malaysian waits for. Premium Musang King, D24, and Black Thorn varieties. Air-cond tent, gloves provided, and durian pengat for dessert. Vegetarians welcome — we have cendol too.",
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
    organizer: "Durian Kaki KL",
    organizerAvatar: "DK",
    coverGradient: "from-lime-600 via-green-500 to-yellow-400",
    emoji: "🥭",
    tags: ["Durian", "Foodie", "Limited Slots"],
  },
  {
    slug: "penang-tech-coffee-chat",
    title: "Penang Tech Coffee Chat",
    subtitle: "Remote workers & devs — casual kopi session",
    description:
      "Monthly casual meetup for developers, designers, and digital nomads in Penang. No agenda, just good kopi and conversation. Co-working day passes available at partner venues. Free entry, pay for your own drinks.",
    category: "tech",
    date: "2026-06-05",
    time: "9:00 AM",
    venue: "@CAT Penang",
    city: "Penang",
    state: "Pulau Pinang",
    price: 0,
    isFree: true,
    spotsLeft: 28,
    totalSpots: 50,
    organizer: "Penang Dev Hub",
    organizerAvatar: "PD",
    coverGradient: "from-slate-700 via-blue-800 to-indigo-600",
    emoji: "💻",
    tags: ["Dev", "Remote Work", "Free"],
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-MY", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatPrice(price: number, isFree: boolean): string {
  if (isFree) return "Free lah!";
  return `RM ${price.toFixed(0)}`;
}
