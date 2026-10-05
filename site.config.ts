// site.config.ts - the single file to edit per client.
// This starter ships with an invented DEMO business. Replace everything below.
// No real clients, prices, reviews or photos are included.

export type ThemeName = "calm" | "bold" | "warm";

export type Background = {
  style: "grid" | "plain";
  size: number;
  margin: boolean;
};

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
  background: Background;
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
  background: { style: "grid", size: 24, margin: false },
  businessName: "Demo Dental (Demo)",
  tagline: "Стоматология для всей семьи в Алматы",
  description:
    "Demo: вымышленная стоматологическая клиника. Запишитесь по телефону или напишите в WhatsApp и Telegram. Все данные на странице вымышленные.",
  city: "Алматы",
  phone: "+7 (700) 000-00-00",
  whatsapp: "77000000000",
  telegram: "demo_dental",
  email: "demo@example.com",
  instagram: "demo_dental",
  address: "ул. Демонстрационная, 1 (Demo, не настоящий адрес)",
  hours: "Пн-Сб 09:00-19:00, Вс выходной",
  services: [
    {
      title: "Консультация",
      description: "Осмотр и обсуждение плана. Demo: вымышленная услуга.",
      price: "от 5 000 ₸",
    },
    {
      title: "Профессиональная гигиена",
      description: "Чистка и уход за полостью рта. Demo: вымышленная услуга.",
      price: "от 12 000 ₸",
    },
    {
      title: "Лечение кариеса",
      description: "Терапевтическое лечение. Demo: вымышленная услуга.",
      price: "от 15 000 ₸",
    },
    {
      title: "Отбеливание",
      description: "Кабинетное отбеливание. Demo: вымышленная услуга.",
      price: "от 25 000 ₸",
    },
    {
      title: "Удаление зуба",
      description: "Плановое удаление. Demo: вымышленная услуга.",
      price: "от 10 000 ₸",
    },
    {
      title: "Детский приём",
      description: "Приём для детей. Demo: вымышленная услуга.",
      price: "от 6 000 ₸",
    },
  ],
  showPricing: true,
  pricingNote: "Demo prices, цены вымышленные. Уточняйте по телефону.",
  process: [
    { title: "Заявка", text: "Позвоните или напишите в WhatsApp или Telegram." },
    { title: "Подтверждение", text: "Согласуем удобные дату и время." },
    { title: "Приём", text: "Врач проведёт осмотр и обсудит план." },
    { title: "Оплата", text: "Оплата в клинике удобным для вас способом." },
  ],
  testimonials: [],
  faq: [
    {
      q: "Как записаться на приём?",
      a: "Позвоните по телефону или напишите в WhatsApp или Telegram. Demo: вымышленный ответ.",
    },
    {
      q: "Что взять с собой?",
      a: "Удобный документ для записи и список принимаемых лекарств, если есть. Demo: вымышленный ответ.",
    },
    {
      q: "Как подготовиться к приёму?",
      a: "Приходите за 10 минут до времени приёма. Demo: вымышленный ответ.",
    },
    {
      q: "Сколько длится приём?",
      a: "Обычно от 30 до 60 минут, зависит от задачи. Demo: вымышленный ответ.",
    },
    {
      q: "Как можно оплатить?",
      a: "Оплата в клинике картой или наличными. Demo: вымышленный ответ.",
    },
    {
      q: "Что делать, если нужно отменить запись?",
      a: "Сообщите заранее по телефону или в мессенджере. Demo: вымышленный ответ.",
    },
    {
      q: "Есть ли детский приём?",
      a: "Да, есть отдельный детский приём. Demo: вымышленный ответ.",
    },
    {
      q: "Есть ли парковка?",
      a: "Рядом есть парковка. Demo: вымышленный ответ.",
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
