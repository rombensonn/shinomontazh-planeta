import { CalendarClock, PhoneCall, ShieldCheck } from "lucide-react";
import { business } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { CtaLink, SectionHeading } from "@/components/ui";

export function MainLeadSection() {
  return (
    <section className="border-y border-graphite-300 bg-service-concrete pb-12 pt-6 md:pb-16 md:pt-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <SectionReveal className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Быстрая запись"
            title="Оставьте заявку, чтобы согласовать время без очереди"
            text="Мастер уточнит автомобиль, размер колёс, нужную услугу и свободное время. Если удобнее, можно просто позвонить."
          />
          <div className="mt-6 grid gap-3">
            <div className="bolt-corners flex items-start gap-3 rounded-lg border border-graphite-300 bg-white p-4 shadow-soft">
              <CalendarClock className="mt-1 h-5 w-5 shrink-0 text-service-orange" aria-hidden="true" />
              <p className="text-base font-semibold leading-7 text-graphite-800">Работаем ежедневно с 09:00 до 21:00.</p>
            </div>
            <div className="bolt-corners flex items-start gap-3 rounded-lg border border-graphite-300 bg-white p-4 shadow-soft">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-service-green" aria-hidden="true" />
              <p className="text-base font-semibold leading-7 text-graphite-800">После заявки нет рекламной рассылки — только связь по вашему обращению.</p>
            </div>
          </div>
          <CtaLink className="mt-6 w-full sm:w-fit" href={business.phoneHref} tone="secondary">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Позвонить сейчас
          </CtaLink>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <LeadForm variant="main" title="Записаться на удобное время" compact />
        </SectionReveal>
      </div>
    </section>
  );
}
