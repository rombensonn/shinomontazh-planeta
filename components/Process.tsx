import { CalendarPlus, Car, ClipboardCheck, MessageCircle, ParkingCircle } from "lucide-react";
import { Card, SectionHeading } from "@/components/ui";
import { SectionReveal } from "@/components/SectionReveal";

const steps = [
  { icon: MessageCircle, title: "Вы оставляете заявку или звоните" },
  { icon: ClipboardCheck, title: "Мастер уточняет автомобиль, размер колёс и нужную услугу" },
  { icon: CalendarPlus, title: "Вы приезжаете к выбранному времени" },
  { icon: Car, title: "Работы выполняются, после чего можно забрать автомобиль" },
];

export function Process() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Запись"
            title="Как проходит запись"
            text="Короткий сценарий без лишних шагов: оставляете телефон, согласовываете время и приезжаете к сервису."
          />
        </SectionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title }, index) => (
            <SectionReveal key={title} delay={index * 0.04}>
              <Card className="h-full border-l-8 border-l-service-amber">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-graphite-950 font-mono text-sm font-black text-service-amber">
                  {index + 1}
                </span>
                <Icon className="mt-5 h-7 w-7 text-service-orange" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black leading-snug text-graphite-950">{title}</h3>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="industrial-rail mt-6 flex items-start gap-3 rounded-lg border border-graphite-500 bg-graphite-950 p-5 pt-8 text-white shadow-industrial">
            <ParkingCircle className="mt-1 h-6 w-6 shrink-0 text-service-orange" aria-hidden="true" />
            <p className="text-base font-semibold leading-7">
              Если нужно, автомобиль можно оставить рядом на автостоянке / парковке и забрать после работ.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
