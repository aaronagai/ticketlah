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
  isUserCreated?: boolean;
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
  "Kuching",
  "Miri",
  "Sibu",
  "Bintulu",
  "Samarahan",
  "Bau",
];

export const events: Event[] = [
  {
    slug: "timogah-open-day",
    title: "Timogah Open Day!",
    subtitle: "Come explore Nagai Pangan — tours, tastings, and good company",
    description:
      "Timogah welcomes everyone to Nagai Pangan for an open day. Walk through the space, meet the team, sample what's cooking, and connect with neighbours and friends. Free entry — just bring your appetite bah.",
    category: "food",
    date: "2026-05-22",
    time: "6:00 PM",
    venue: "Nagai Pangan",
    city: "Kuching",
    state: "Sarawak",
    price: 0,
    isFree: true,
    spotsLeft: 34,
    totalSpots: 80,
    soldOut: false,
    organizer: "Timogah",
    organizerAvatar: "TG",
    coverColor: "#f97316",
    emoji: "🎉",
    tags: ["Open Day", "Community", "Free"],
  },
  {
    slug: "kuching-sarawak-laksa-fest",
    title: "Kuching Sarawak Laksa Festival",
    subtitle: "The ultimate laksa showdown by the riverfront",
    description:
      "Fifteen kopitiam legends bring their best Sarawak laksa to the Waterfront. Slurp your way through sambal-rich broth, vote for your champion, and catch live keroncong as the sun sets over the Sarawak River.",
    category: "food",
    date: "2026-05-23",
    time: "4:00 PM",
    venue: "Kuching Waterfront",
    city: "Kuching",
    state: "Sarawak",
    price: 20,
    isFree: false,
    spotsLeft: 340,
    totalSpots: 1500,
    soldOut: false,
    organizer: "Kuching Food Society",
    organizerAvatar: "KF",
    coverColor: "#eab308",
    emoji: "🍜",
    tags: ["Food Fest", "Laksa", "Waterfront"],
  },
  {
    slug: "kuching-tech-meetup-borneo744",
    title: "Kuching Tech Meetup @ Borneo744",
    subtitle: "Founders, devs, and teh C peng — Borneo's builder night",
    description:
      "The monthly gathering for Sarawak's growing tech scene. Lightning talks from local startups, open networking, and mamak-style supper after. Great for students, devs, and anyone curious about building in Borneo.",
    category: "tech",
    date: "2026-05-28",
    time: "7:00 PM",
    venue: "Borneo744, Jalan Padungan",
    city: "Kuching",
    state: "Sarawak",
    price: 0,
    isFree: true,
    spotsLeft: 42,
    totalSpots: 120,
    soldOut: false,
    organizer: "Sarawak Tech Community",
    organizerAvatar: "ST",
    coverColor: "#6366f1",
    emoji: "💻",
    tags: ["Networking", "Startup", "Free"],
  },
  {
    slug: "gawai-dayak-open-longhouse",
    title: "Gawai Dayak Open Longhouse",
    subtitle: "Celebrate the harvest at Annah Rais",
    description:
      "Experience an authentic Gawai celebration at Annah Rais Bidayuh Longhouse. Traditional dances, ngajat performances, tuak toasts, and a communal feast. Open to visitors — come learn, eat, and celebrate together.",
    category: "culture",
    date: "2026-06-01",
    time: "10:00 AM",
    venue: "Annah Rais Longhouse, Padawan",
    city: "Kuching",
    state: "Sarawak",
    price: 30,
    isFree: false,
    spotsLeft: 0,
    totalSpots: 150,
    soldOut: true,
    organizer: "Annah Rais Homestay",
    organizerAvatar: "AR",
    coverColor: "#ec4899",
    emoji: "🌾",
    tags: ["Gawai", "Culture", "Longhouse"],
  },
  {
    slug: "bako-proboscis-trek",
    title: "Bako National Park Wildlife Trek",
    subtitle: "Spot proboscis monkeys and hidden beaches",
    description:
      "Guided day trek through Malaysia's oldest national park. Boat ride from Bako village, jungle trails, sea stacks, and close encounters with proboscis monkeys and bearded pigs. Lunch and park fees included.",
    category: "outdoors",
    date: "2026-05-31",
    time: "7:30 AM",
    venue: "Bako National Park Jetty",
    city: "Kuching",
    state: "Sarawak",
    price: 95,
    isFree: false,
    spotsLeft: 14,
    totalSpots: 25,
    soldOut: false,
    organizer: "Borneo Trails Co.",
    organizerAvatar: "BT",
    coverColor: "#059669",
    emoji: "🐒",
    tags: ["Wildlife", "Hiking", "Guided"],
  },
  {
    slug: "sibu-kolo-mee-championship",
    title: "Sibu Kolo Mee Championship",
    subtitle: "Who makes the best kolo mee in town?",
    description:
      "Sibu's most-loved noodle goes head to head. Ten stalls, one crown. Free tastings, cooking demos, and a heritage corner celebrating Foochow food culture at the Central Market.",
    category: "food",
    date: "2026-05-24",
    time: "9:00 AM",
    venue: "Sibu Central Market",
    city: "Sibu",
    state: "Sarawak",
    price: 0,
    isFree: true,
    spotsLeft: 220,
    totalSpots: 500,
    soldOut: false,
    organizer: "Sibu Municipal Council",
    organizerAvatar: "SM",
    coverColor: "#ef4444",
    emoji: "🍲",
    tags: ["Kolo Mee", "Foochow", "Free"],
  },
  {
    slug: "borneo-jazz-miri",
    title: "Borneo Jazz Festival, Miri",
    subtitle: "Two nights of world-class jazz by the sea",
    description:
      "One of Asia's longest-running jazz festivals returns to Miri. International and Malaysian acts perform beachside at Coco Cabana. Bring a mat, grab a drink, and soak in the Borneo sunset groove.",
    category: "music",
    date: "2026-06-20",
    time: "6:30 PM",
    venue: "Coco Cabana, Marina Bay",
    city: "Miri",
    state: "Sarawak",
    price: 85,
    isFree: false,
    spotsLeft: 130,
    totalSpots: 800,
    soldOut: false,
    organizer: "Sarawak Tourism Board",
    organizerAvatar: "TB",
    coverColor: "#a855f7",
    emoji: "🎷",
    tags: ["Jazz", "Festival", "Beachside"],
  },
  {
    slug: "rainforest-world-music-festival",
    title: "Rainforest World Music Festival",
    subtitle: "Three days of global rhythms in the jungle",
    description:
      "Sarawak's legendary RWMF returns to the Sarawak Cultural Village at the foot of Mount Santubong. Global acts, workshops, craft bazaars, and Bornean food — all wrapped in rainforest magic. A must-experience.",
    category: "music",
    date: "2026-06-27",
    time: "2:00 PM",
    venue: "Sarawak Cultural Village, Santubong",
    city: "Kuching",
    state: "Sarawak",
    price: 250,
    isFree: false,
    spotsLeft: 0,
    totalSpots: 6000,
    soldOut: true,
    organizer: "Sarawak Tourism Board",
    organizerAvatar: "TB",
    coverColor: "#0ea5e9",
    emoji: "🌏",
    tags: ["World Music", "Festival", "Rainforest"],
  },
  {
    slug: "bintulu-borneo-kite-festival",
    title: "Borneo International Kite Festival",
    subtitle: "The sky over Bintulu comes alive with colour",
    description:
      "Giant kites from around the world fill the skies at the Old Bintulu Airport field. Family-friendly with food trucks, night glow shows, and hands-on kite-making for the kids.",
    category: "culture",
    date: "2026-07-12",
    time: "3:00 PM",
    venue: "Old Bintulu Airport Field",
    city: "Bintulu",
    state: "Sarawak",
    price: 0,
    isFree: true,
    spotsLeft: 900,
    totalSpots: 3000,
    soldOut: false,
    organizer: "Bintulu Development Authority",
    organizerAvatar: "BD",
    coverColor: "#84cc16",
    emoji: "🪁",
    tags: ["Kite Festival", "Family", "Free"],
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
