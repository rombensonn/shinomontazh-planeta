export const business = {
  name: "Шиномонтаж Планета",
  city: "Подольск",
  phone: "+7 (926) 757-44-72",
  phoneHref: "tel:+79267574472",
  address: "Московская область, Подольск, Железнодорожная улица",
  landmark: "стадион Планета",
  mapUrl: "https://yandex.ru/maps/-/CPwAEM6V",
  rating: "4,4",
  ratingSchema: 4.4,
  ratingCount: 14,
  reviewsCount: 12,
  hoursShort: "Ежедневно 09:00–21:00",
  openingHours: "Mo-Su 09:00-21:00",
  usedTiresPrice: "от 800 ₽/шт.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const sitePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

export const serviceOptions = [
  "шиномонтаж",
  "балансировка",
  "хранение шин",
  "Б/У шины",
  "утилизация шин",
  "другое",
] as const;

export const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#used-tires", label: "Б/У шины" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export const sectionIds = {
  mainForm: "main-form",
  usedTires: "used-tires",
  contacts: "contacts",
};
