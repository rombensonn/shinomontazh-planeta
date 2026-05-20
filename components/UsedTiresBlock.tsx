import { CircleDollarSign, PhoneCall, Ruler } from "lucide-react";
import { business } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { CtaLink, SectionHeading } from "@/components/ui";

export function UsedTiresBlock() {
  return (
    <section id="used-tires" className="relative overflow-hidden bg-graphite-950 py-14 text-white md:py-20">
      <div className="absolute inset-0 bg-steel-grid bg-[size:34px_34px] opacity-20" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionReveal className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Б/У шины"
            title="Б/У шины от 800 ₽ за штуку"
            text="Если нужно заменить одно колесо или подобрать недорогой комплект, можно уточнить наличие Б/У шин. Позвоните или оставьте заявку — мастер подскажет, есть ли подходящий размер."
            tone="dark"
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="industrial-rail rounded-lg border border-white/[0.15] bg-white/[0.08] p-4 pt-8">
              <CircleDollarSign className="h-6 w-6 text-service-amber" aria-hidden="true" />
              <p className="mt-3 text-2xl font-black">{business.usedTiresPrice}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-white/70">Цена указана только для Б/У шин.</p>
            </div>
            <div className="industrial-rail rounded-lg border border-white/[0.15] bg-white/[0.08] p-4 pt-8">
              <Ruler className="h-6 w-6 text-service-amber" aria-hidden="true" />
              <p className="mt-3 text-lg font-black">Размер лучше уточнить</p>
              <p className="mt-1 text-sm font-medium leading-6 text-white/70">Оставьте размер шин в форме или позвоните.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#used-tires-form">Уточнить наличие шин</CtaLink>
            <CtaLink href={business.phoneHref} tone="secondary">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Позвонить
            </CtaLink>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="relative [&_form]:bg-white">
          <div id="used-tires-form">
            <LeadForm variant="used-tires" title="Уточнить наличие Б/У шин" compact />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
