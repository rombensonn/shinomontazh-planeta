import { MapPinned, Phone } from "lucide-react";
import { business } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { CtaLink, SectionHeading } from "@/components/ui";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-graphite-950 py-14 text-white md:py-20">
      <div className="absolute inset-0 bg-steel-grid bg-[size:42px_42px] opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionReveal className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Запись"
            title="Запишитесь на шиномонтаж в удобное время"
            text="Оставьте телефон — мастер свяжется с вами, уточнит услугу, автомобиль и свободное время для записи."
            tone="dark"
          />
          <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <CtaLink className="w-full sm:col-span-2" href="#main-form">
              Оставить заявку
            </CtaLink>
            <CtaLink className="w-full" href={business.phoneHref} tone="secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Позвонить сейчас
            </CtaLink>
            <CtaLink
              className="w-full"
              href={business.mapUrl}
              tone="secondary"
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              Построить маршрут
            </CtaLink>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1} className="[&_form]:bg-white">
          <LeadForm variant="short" title="Короткая заявка" compact />
        </SectionReveal>
      </div>
    </section>
  );
}
