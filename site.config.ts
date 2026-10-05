// site.config.ts - the single file to edit per client.
// This starter ships with an invented DEMO business. Replace everything below.
// No real clients, prices, reviews or photos are included.

export type ThemeName = "calm" | "bold" | "warm";

export type Service = {
  title: string;
  description: string;
  price?: string;
};

export type Step = { title: string; text: string };
export type Testimonial = { name: string; text: string };
export type FaqItem = { q: string; a: string };

export type MapConfig = {
  provider: "osm-embed" | "links-only";
  lat: number;
  lon: number;
  zoom: number;
  label: string;
  links: { label: string; url: string }[];
};

export type SiteConfig = {
  lang: "ru" | "en";
  demo: boolean;
  theme: ThemeName;
  businessName: string;
  tagline: string;
  description: string;
  city: string;
  phone: string;
  whatsapp?: string;
  telegram?: string;
  email?: string;
  instagram?: string;
  address: string;
  hours: string;
  services: Service[];
  showPricing: boolean;
  pricingNote?: string;
  process: Step[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  map: MapConfig;
  siteUrl: string;
  ogImage: string;
};

export const site: SiteConfig = {
  lang: "ru",
  demo: true,
  theme: "calm",
  businessName: "Demo Dental (Demo)",
  tagline: "Стоматология для всей семьи",
  description:
    "Demo: вымышленный лендинг стоматологии. Позвоните или напишите в WhatsApp и Telegram, чтобы записаться.",
  city: "Алматы",
  phone: "+7 000 000-00-00",
  whatsapp: "70000000000",
  telegram: "demo_dental",
  email: "demo@example.com",
  instagram: "demo_dental",
  address: "Demo: улица Пример, 1",
  hours: "Пн-Сб 09:00-19:00",
  services: [
    {
      title: "Консультация",
      description: "Осмотр и план лечения. Demo: вымышленная услуга.",
    },
    {
      title: "Лечение зубов",
      description: "Терапия и реставрация. Demo: вымышленная услуга.",
    },
    {
      title: "Профгигиена",
      description: "Чистка и уход за полостью рта. Demo: вымышленная услуга.",
    },
  ],
  showPricing: false,
  pricingNote: "Цены уточняйте по телефону.",
  process: [
    { title: "Звонок или сообщение", text: "Свяжитесь по телефону, WhatsApp или Telegram." },
    { title: "Согласуем время", text: "Подберём удобный слот для визита." },
    { title: "Визит", text: "Осмотр и план действий в клинике." },
  ],
  testimonials: [],
  faq: [
    {
      q: "Как записаться?",
      a: "Позвоните, напишите в WhatsApp или Telegram. Demo: это вымышленный ответ.",
    },
    {
      q: "Где вы находитесь?",
      a: "Адрес указан в разделе «Как нас найти». Demo: адрес вымышленный.",
    },
  ],
  map: {
    provider: "osm-embed",
    lat: 43.238949,
    lon: 76.889709,
    zoom: 13,
    label: "Demo location, не настоящий адрес",
    links: [
      {
        label: "Построить маршрут",
        url: "https://www.openstreetmap.org/directions?to=43.238949%2C76.889709",
      },
      {
        label: "Открыть в картах",
        url: "https://www.openstreetmap.org/?mlat=43.238949&mlon=76.889709#map=15/43.238949/76.889709",
      },
    ],
  },
  siteUrl: "https://demo-dental.example.com",
  ogImage: "/images/og.svg",
};
