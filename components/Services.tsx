import {
  CalendarCheck,
  CircleDollarSign,
  Gauge,
  PackageCheck,
  Recycle,
  Wrench,
} from "lucide-react";
import { business } from "@/lib/site";
import { Card, CtaLink, SectionHeading } from "@/components/ui";
import { SectionReveal } from "@/components/SectionReveal";

const services = [
  {
    icon: Wrench,
    title: "Шиномонтаж",
    text: "Сезонная переобувка, снятие и установка колёс, подготовка автомобиля к сезону.",
  },
  {
    icon: Gauge,
    title: "Балансировка",
    text: "Балансировка колёс для более ровного хода и снижения вибраций на скорости.",
  },
  {
    icon: PackageCheck,
    title: "Хранение шин",
    text: "Можно уточнить условия хранения шин, чтобы не занимать место дома или в гараже.",
  },
  {
    icon: CircleDollarSign,
    title: "Продажа Б/У шин",
    text: "Б/У шины от 800 ₽ за штуку. Наличие и подходящий размер лучше уточнить заранее по телефону.",
  },
  {
    icon: Recycle,
    title: "Утилизация шин",
    text: "Поможем с утилизацией старых шин после замены.",
  },
  {
    icon: CalendarCheck,
    title: "Предварительная запись",
    text: "Запишитесь заранее, чтобы не стоять в очереди в сезон.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-service-concrete py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Услуги шиномонтажа"
            text="Стоимость шиномонтажа и балансировки лучше уточнить по телефону: мастер сориентирует по автомобилю, размеру колёс и нужным работам."
          />
        </SectionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <SectionReveal key={title} delay={index * 0.04}>
              <Card className="industrial-rail flex h-full flex-col overflow-hidden pt-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-graphite-800 bg-graphite-950">
                    <Icon className="h-6 w-6 text-service-amber" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm font-black text-graphite-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-black text-graphite-950">{title}</h3>
                <p className="mt-3 flex-1 text-base font-medium leading-7 text-graphite-600">{text}</p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <CtaLink href={business.phoneHref} tone="secondary" className="px-4">
                    Уточнить стоимость
                  </CtaLink>
                  <CtaLink href="#main-form" tone="ghost" className="px-4">
                    Записаться
                  </CtaLink>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
