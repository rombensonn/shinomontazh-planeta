import { Clock3, MapPin, Navigation, ParkingCircle, Phone } from "lucide-react";
import { business } from "@/lib/site";
import { CtaLink, SectionHeading } from "@/components/ui";
import { SectionReveal } from "@/components/SectionReveal";

const contacts = [
  { icon: Phone, label: "Телефон", value: business.phone, href: business.phoneHref },
  { icon: MapPin, label: "Адрес", value: business.address },
  { icon: Navigation, label: "Ориентир", value: business.landmark },
  { icon: Clock3, label: "Режим", value: business.hoursShort },
  { icon: ParkingCircle, label: "Парковка", value: "рядом есть автостоянка / парковка" },
];

export function ContactSection() {
  return (
    <section id="contacts" className="bg-service-concrete py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Шиномонтаж Планета"
            text="Московская область, Подольск, Железнодорожная улица. Ориентир — стадион Планета."
          />
        </SectionReveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="industrial-rail bolt-corners rounded-lg border border-graphite-400 bg-white p-5 pt-8 shadow-industrial">
              <div className="grid gap-3">
                {contacts.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-start gap-3 rounded-md border border-graphite-200 bg-graphite-50 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-graphite-950">
                        <Icon className="h-5 w-5 text-service-amber" aria-hidden="true" />
                      </span>
                      <p>
                        <span className="block text-xs font-black uppercase text-graphite-500">{label}</span>
                        <span className="mt-1 block text-base font-black leading-6 text-graphite-950">
                          {value}
                        </span>
                      </p>
                    </div>
                  );

                  return href ? (
                    <a key={label} href={href} className="transition hover:opacity-90">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
              <CtaLink
                className="mt-5 w-full"
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Построить маршрут
              </CtaLink>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="steel-panel relative min-h-[360px] overflow-hidden rounded-lg p-5 shadow-industrial">
              <div className="absolute inset-0 bg-steel-grid bg-[size:32px_32px] opacity-25" />
              <div className="absolute left-0 top-0 h-full w-8 bg-hazard-stripes" aria-hidden="true" />
              <div className="relative z-10 ml-5 flex h-full min-h-[320px] flex-col justify-between rounded-lg border border-white/[0.14] bg-white/[0.08] p-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-normal text-service-amber">
                    Яндекс.Карты
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    Маршрут к шиномонтажу рядом со стадионом Планета
                  </h3>
                  <p className="mt-3 max-w-xl text-base font-medium leading-7 text-white/[0.72]">
                    Откройте карточку на Яндекс.Картах, чтобы построить маршрут с телефона или
                    посмотреть подъезд к Железнодорожной улице.
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md border border-white/[0.16] bg-graphite-950 p-4 text-white">
                    <p className="text-sm text-white/70">Рейтинг</p>
                    <p className="mt-1 text-2xl font-black text-service-amber">{business.rating}</p>
                  </div>
                  <div className="rounded-md border border-white/[0.16] bg-white p-4">
                    <p className="text-sm font-semibold text-graphite-500">Оценок</p>
                    <p className="mt-1 text-2xl font-black text-graphite-950">{business.ratingCount}</p>
                  </div>
                  <div className="rounded-md border border-white/[0.16] bg-white p-4">
                    <p className="text-sm font-semibold text-graphite-500">Мест рядом</p>
                    <p className="mt-1 text-2xl font-black text-graphite-950">70</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
