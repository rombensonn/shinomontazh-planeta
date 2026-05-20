import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionHeading } from "@/components/ui";

const items = [
  "проверка давления после работ",
  "аккуратная установка колёс",
  "балансировка по запросу и необходимости",
  "возможность уточнить, какие работы были выполнены",
  "рекомендация проверить комплект перед выездом",
  "без навязывания лишних услуг",
];

export function QualityBlock() {
  return (
    <section className="border-y border-graphite-800 bg-graphite-950 py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Контроль"
            title="Делаем так, чтобы после выезда не было неприятных сюрпризов"
            text="Перед отъездом можно уточнить у мастера, какие работы выполнены, и спокойно проверить комплект."
            tone="dark"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div
                className="flex min-h-20 items-start gap-3 rounded-lg border border-white/[0.12] bg-white/[0.06] p-4 shadow-soft"
                key={item}
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-service-green" aria-hidden="true" />
                <p className="text-base font-semibold leading-7 text-white/[0.82]">{item}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
