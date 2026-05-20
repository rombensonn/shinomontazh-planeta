import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionHeading } from "@/components/ui";

const faqs = [
  {
    question: "Можно ли записаться заранее?",
    answer:
      "Да, в карточке указана предварительная запись. Оставьте заявку или позвоните, чтобы согласовать удобное время.",
  },
  {
    question: "До скольки работает шиномонтаж?",
    answer: "Каждый день с 09:00 до 21:00.",
  },
  {
    question: "Есть ли рядом парковка?",
    answer:
      "Да, рядом есть автостоянка / парковка. Это удобно, если нужно оставить автомобиль на время работ.",
  },
  {
    question: "Можно ли купить Б/У шины?",
    answer:
      "Да, указана продажа Б/У шин от 800 ₽ за штуку. Наличие нужного размера лучше уточнить заранее.",
  },
  {
    question: "Можно ли оплатить картой?",
    answer:
      "В данных указана оплата наличными и банковским переводом. Точный способ оплаты лучше уточнить при записи.",
  },
  {
    question: "Делаете балансировку?",
    answer: "Да, среди услуг указана балансировка.",
  },
  {
    question: "Можно ли хранить шины?",
    answer: "Да, среди услуг указано хранение шин. Условия лучше уточнить по телефону.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы"
            text="Коротко о записи, парковке, Б/У шинах, оплате и услугах."
            align="center"
          />
        </SectionReveal>
        <div className="mt-8 space-y-3">
          {faqs.map((item, index) => (
            <SectionReveal key={item.question} delay={index * 0.03}>
              <details className="group rounded-lg border border-graphite-300 bg-service-concrete p-4 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-graphite-950">
                  {item.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-service-orange transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 border-l-4 border-service-amber pl-4 text-base font-medium leading-7 text-graphite-700">{item.answer}</p>
              </details>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
