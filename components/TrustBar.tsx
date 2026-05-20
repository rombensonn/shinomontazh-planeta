import { Clock3, HandCoins, ParkingCircle, RotateCw, ShieldCheck } from "lucide-react";
import { Card, SectionHeading } from "@/components/ui";
import { SectionReveal } from "@/components/SectionReveal";

const items = [
  {
    icon: RotateCw,
    title: "Быстро",
    text: "Клиенты отмечают, что сезонная переобувка проходит оперативно: записался, приехал, переобулся и поехал.",
  },
  {
    icon: ShieldCheck,
    title: "Без лишнего навязывания",
    text: "В отзывах отдельно отмечают, что мастера не советуют лишние услуги без необходимости.",
  },
  {
    icon: ParkingCircle,
    title: "Удобно оставить автомобиль",
    text: "Рядом есть автостоянка / парковка, поэтому автомобиль можно оставить на время работ и забрать позже.",
  },
  {
    icon: Clock3,
    title: "Каждый день до 21:00",
    text: "Можно записаться в удобное время, включая вечер и выходные.",
  },
  {
    icon: HandCoins,
    title: "Б/У шины в наличии",
    text: "Можно уточнить наличие Б/У шин. Стоимость — от 800 ₽ за штуку.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-graphite-800 bg-graphite-900 py-14 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            title="Почему водители возвращаются сюда каждый сезон"
            text="Важны понятная запись, аккуратные работы и возможность не терять время рядом с сервисом."
            tone="dark"
          />
        </SectionReveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, text }, index) => (
            <SectionReveal key={title} delay={index * 0.04}>
              <Card className="h-full bg-graphite-950 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-service-amber bg-service-amber text-graphite-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-white/[0.68]">{text}</p>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
