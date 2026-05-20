import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных — Шиномонтаж Планета",
  description: "Политика обработки персональных данных для форм записи на сайте Шиномонтаж Планета.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-service-concrete py-12 md:py-16">
        <article className="industrial-rail bolt-corners concrete-panel mx-auto max-w-4xl rounded-lg border border-graphite-400 px-4 py-8 pt-10 shadow-industrial sm:px-6 md:px-8">
          <p className="text-xs font-black uppercase tracking-normal text-service-orange">
            Документ
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
            Политика обработки персональных данных
          </h1>
          <div className="mt-6 space-y-6 text-base font-medium leading-8 text-graphite-700">
            <p>
              Настоящая политика описывает, как {business.name} обрабатывает данные, которые
              посетитель оставляет в формах записи на сайте.
            </p>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Какие данные обрабатываются</h2>
              <p className="mt-2">
                Имя, телефон, автомобиль / модель, выбранная услуга, желаемое время, размер шин,
                комментарий, адрес страницы формы, дата и время заявки.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Цель обработки</h2>
              <p className="mt-2">
                Связаться с клиентом, уточнить услугу, наличие Б/У шин, свободное время записи и
                детали обращения.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Передача данных</h2>
              <p className="mt-2">
                Данные могут передаваться в Telegram-чат для обработки заявки и на email при
                настроенной SMTP-отправке. Данные не используются для рекламной рассылки.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Хранение и защита</h2>
              <p className="mt-2">
                Заявки могут сохраняться локально на сервере сайта в файле заявок. Доступ к серверу
                и переменным окружения должен быть ограничен владельцем сайта.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Контакты</h2>
              <p className="mt-2">
                По вопросам обработки данных можно обратиться по телефону{" "}
                <a className="font-semibold text-service-blue underline underline-offset-4" href={business.phoneHref}>
                  {business.phone}
                </a>
                . Адрес: {business.address}, ориентир — {business.landmark}.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
