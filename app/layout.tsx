import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: "Шиномонтаж Планета в Подольске — шиномонтаж, балансировка, Б/У шины",
  description:
    "Шиномонтаж Планета в Подольске рядом со стадионом Планета. Шиномонтаж, балансировка, хранение шин, Б/У шины от 800 ₽. Работаем ежедневно с 09:00 до 21:00, рядом есть автостоянка.",
  keywords: [
    "шиномонтаж Подольск",
    "шиномонтаж рядом со стадионом Планета",
    "шиномонтаж Железнодорожная улица Подольск",
    "балансировка колес Подольск",
    "переобуть машину Подольск",
    "Б/У шины Подольск",
    "хранение шин Подольск",
    "шиномонтаж до 21:00 Подольск",
    "шиномонтаж рядом со мной Подольск",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: business.siteUrl,
    siteName: business.name,
    title: "Шиномонтаж Планета в Подольске",
    description:
      "Шиномонтаж, балансировка, хранение шин и Б/У шины от 800 ₽ рядом со стадионом Планета. Ежедневно 09:00–21:00.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
