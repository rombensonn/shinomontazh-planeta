import { ExternalLink, Star } from "lucide-react";
import { business } from "@/lib/site";
import { Card, CtaLink, SectionHeading } from "@/components/ui";
import { SectionReveal } from "@/components/SectionReveal";

const reviews = [
  "Переобуваю здесь все машины, работа качественная, цена адекватная.",
  "Оставил машину на полчаса — вернулся, всё было готово.",
  "Быстро, качественно, цены ниже, чем у конкурентов.",
  "Каждый сезон приезжаю сюда, всё чётко и оперативно.",
  "Профессиональные и внимательные ребята, лишнего не навязывают.",
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Отзывы"
              title="Что отмечают клиенты"
              text={`Рейтинг ${business.rating}, ${business.ratingCount} оценок и ${business.reviewsCount} отзывов в карточке на Яндекс.Картах.`}
            />
            <CtaLink href={business.mapUrl} tone="secondary" target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Смотреть карточку на Яндекс.Картах
            </CtaLink>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {reviews.map((review, index) => (
            <SectionReveal key={review} delay={index * 0.04}>
              <Card className="h-full border-t-8 border-t-service-amber">
                <div className="flex gap-1 text-service-amber" aria-label="Положительная оценка">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-base font-semibold leading-7 text-graphite-800">«{review}»</p>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <p className="mt-5 border-l-4 border-graphite-300 pl-4 text-sm font-semibold leading-6 text-graphite-500">
          На основе отзывов клиентов на Яндекс.Картах. Длинные отзывы сокращены до смысла.
        </p>
      </div>
    </section>
  );
}
