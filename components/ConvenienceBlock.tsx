import {
  Banknote,
  Bus,
  CarFront,
  Clock3,
  MapPinned,
  ParkingCircle,
  Shield,
  Toilet,
} from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionHeading } from "@/components/ui";

const items = [
  { icon: MapPinned, text: "рядом стадион Планета" },
  { icon: ParkingCircle, text: "рядом есть автостоянка / парковка" },
  { icon: CarFront, text: "можно приехать на легковом автомобиле" },
  { icon: Bus, text: "подходит для микроавтобусов" },
  { icon: Shield, text: "открытая уличная парковка, есть длительная платная стоянка" },
  { icon: Clock3, text: "работает каждый день до 21:00" },
  { icon: Toilet, text: "есть туалет" },
  { icon: Banknote, text: "оплата наличными или банковским переводом" },
];

export function ConvenienceBlock() {
  return (
    <section className="bg-service-concrete py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Удобство"
            title="Удобно приехать, оставить машину и забрать после работ"
            text="Для шиномонтажа важна не только скорость работ, но и то, насколько просто подъехать, припарковаться и не терять время рядом с машиной."
          />
        </SectionReveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, text }, index) => (
            <SectionReveal key={text} delay={index * 0.035}>
              <div className="bolt-corners flex h-full items-start gap-3 rounded-lg border border-graphite-300 bg-white p-4 shadow-soft">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-graphite-950">
                  <Icon className="h-5 w-5 text-service-amber" aria-hidden="true" />
                </span>
                <p className="text-base font-semibold leading-7 text-graphite-800">{text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
