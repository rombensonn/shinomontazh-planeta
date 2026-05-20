import {
  BadgeCheck,
  CalendarClock,
  CircleDollarSign,
  ParkingCircle,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";
import { business, sitePath } from "@/lib/site";
import { SectionReveal } from "@/components/SectionReveal";
import { CtaLink } from "@/components/ui";

const badges = [
  { icon: Star, text: "Рейтинг 4,4 на Яндекс.Картах" },
  { icon: BadgeCheck, text: "14 оценок" },
  { icon: CalendarClock, text: "Ежедневно до 21:00" },
  { icon: ParkingCircle, text: "Рядом автостоянка" },
  { icon: CircleDollarSign, text: "Б/У шины от 800 ₽/шт." },
];

export function Hero() {
  return (
    <section
      id="top"
      className="industrial-rail relative overflow-hidden border-b border-graphite-800 bg-graphite-950 text-white"
    >
      <div className="absolute inset-0 bg-steel-grid bg-[size:42px_42px] opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-service-amber" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-12 sm:px-6 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <SectionReveal className="flex flex-col justify-center">
          <div className="mb-5 flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, text }) => (
              <span
                className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/[0.14] bg-white/[0.07] px-3 py-2 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={text}
              >
                <Icon className="h-4 w-4 text-service-amber" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-5xl lg:text-6xl">
            Шиномонтаж в Подольске рядом со стадионом Планета
          </h1>
          <p className="mt-5 max-w-3xl border-l-4 border-service-amber pl-4 text-lg font-medium leading-8 text-white/[0.78] md:text-xl">
            Переобуем, отбалансируем и подготовим колёса к сезону. Работаем каждый день
            с 09:00 до 21:00, рядом есть автостоянка — удобно оставить автомобиль и
            забрать после работ.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#main-form">Записаться на шиномонтаж</CtaLink>
            <CtaLink href={business.phoneHref} tone="secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Позвонить сейчас
            </CtaLink>
          </div>

        </SectionReveal>

        <SectionReveal delay={0.1} className="flex items-center">
          <ServiceVisual />
        </SectionReveal>
      </div>
    </section>
  );
}

function ServiceVisual() {
  return (
    <div
      className="bolt-corners relative min-h-[360px] w-full overflow-hidden rounded-lg border border-white/[0.16] bg-graphite-900 text-white shadow-industrial"
    >
      <Image
        src={sitePath("/images/industrial-hero.jpg")}
        alt="Колесо на шиномонтажном оборудовании в сервисной зоне"
        fill
        priority
        sizes="(min-width: 1024px) 44vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/[0.72] via-graphite-950/[0.24] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/[0.72] via-transparent to-graphite-950/[0.10]" />
      <div className="absolute left-0 top-0 h-full w-7 bg-hazard-stripes opacity-95" aria-hidden="true" />
      <div className="relative z-10 flex min-h-[360px] flex-col justify-between gap-6 p-5">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-service-amber">
            рабочий пост
          </p>
          <p className="mt-2 max-w-sm text-2xl font-black leading-tight">
            Живой сервисный формат: приехать, переобуться и поехать дальше
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md border border-white/[0.18] bg-graphite-950/[0.74] px-3 py-2 text-xs font-black uppercase text-white backdrop-blur">
            оборудование в работе
          </span>
          <span className="rounded-md border border-service-amber bg-service-amber px-3 py-2 text-xs font-black uppercase text-graphite-950">
            до 21:00
          </span>
        </div>
      </div>
    </div>
  );
}
