import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных — Шиномонтаж Планета",
  description: "Согласие пользователя на обработку персональных данных для заявки на шиномонтаж.",
  alternates: {
    canonical: "/consent",
  },
};

export default function ConsentPage() {
  return (
    <>
      <Header />
      <main className="bg-service-concrete py-12 md:py-16">
        <article className="industrial-rail bolt-corners concrete-panel mx-auto max-w-4xl rounded-lg border border-graphite-400 px-4 py-8 pt-10 shadow-industrial sm:px-6 md:px-8">
          <p className="text-xs font-black uppercase tracking-normal text-service-orange">
            Документ
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
            Согласие на обработку персональных данных
          </h1>
          <div className="mt-6 space-y-6 text-base font-medium leading-8 text-graphite-700">
            <p>
              Оставляя заявку на сайте {business.name}, пользователь подтверждает согласие на
              обработку персональных данных для связи по обращению.
            </p>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Состав данных</h2>
              <p className="mt-2">
                Имя, телефон, автомобиль / модель, услуга, желаемое время, размер шин и комментарий.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Цель</h2>
              <p className="mt-2">
                Обработка заявки, уточнение свободного времени, услуги, размера шин и обратная связь
                с пользователем.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Срок действия</h2>
              <p className="mt-2">
                Согласие действует до достижения цели обработки или до отзыва согласия пользователем.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-graphite-950">Как отозвать согласие</h2>
              <p className="mt-2">
                Для отзыва согласия можно обратиться по телефону{" "}
                <a className="font-semibold text-service-blue underline underline-offset-4" href={business.phoneHref}>
                  {business.phone}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
