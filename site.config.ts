// site.config.ts - the single file to edit per client.
// This starter ships with an invented DEMO business. Replace everything below.
// No real clients, prices, reviews or photos are included.

export type Service = {
  title: string;
  description: string;
  price?: string;
};

export type Step = { title: string; text: string };
export type Testimonial = { name: string; text: string };

export type SiteConfig = {
  lang: "ru";
  demo: boolean;
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
  mapUrl?: string;
  hours: string;
  services: Service[];
  showPricing: boolean;
  pricingNote?: string;
  process: Step[];
  testimonials: Testimonial[];
  colors: { primary: string; accent: string; ink: string; paper: string };
  siteUrl: string;
  ogImage: string;
};

export const site: SiteConfig = {
  lang: "ru",
  demo: true,
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
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Demo",
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
  colors: {
    primary: "#0f766e",
    accent: "#f59e0b",
    ink: "#0f172a",
    paper: "#ffffff",
  },
  siteUrl: "https://demo-dental.example.com",
  ogImage: "/images/og.svg",
};
