import { business } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-graphite-800 bg-graphite-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm font-medium leading-6 text-white/[0.64] sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-black text-white">{business.name}</span> — шиномонтаж,
            балансировка, хранение шин и Б/У шины в Подольске.
          </p>
          <div className="flex flex-wrap gap-4 font-bold text-white">
            <a className="transition hover:text-service-amber" href="/privacy">
              Политика обработки персональных данных
            </a>
            <a className="transition hover:text-service-amber" href="/consent">
              Согласие на обработку персональных данных
            </a>
          </div>
        </div>
        <p>
          {business.address}. Ориентир: {business.landmark}. {business.hoursShort}. Рядом есть
          автостоянка / парковка.
        </p>
      </div>
    </footer>
  );
}
