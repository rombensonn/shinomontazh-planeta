import { MapPin, Phone } from "lucide-react";
import { business, navLinks } from "@/lib/site";
import { CtaLink } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite-950/[0.94] text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3" href="#top" aria-label="На первый экран">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-service-amber bg-service-amber text-sm font-black text-graphite-950 shadow-[4px_4px_0_rgba(255,255,255,0.12)]">
            ШП
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-white sm:text-base">
              {business.name}
            </span>
            <span className="hidden text-xs font-medium text-white/[0.58] sm:block">
              Подольск, рядом со стадионом Планета
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-bold text-white/[0.72] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded-md px-3 py-2 transition hover:bg-white/[0.08] hover:text-service-amber"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden min-h-11 items-center gap-2 rounded-md border border-white/10 px-3 text-sm font-bold text-white transition hover:border-service-amber hover:bg-white/[0.08] md:inline-flex"
            href={business.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="h-4 w-4 text-service-orange" aria-hidden="true" />
            Маршрут
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-black text-white transition hover:bg-white/[0.08]"
            href={business.phoneHref}
            aria-label={`Позвонить ${business.phone}`}
          >
            <Phone className="h-4 w-4 text-service-green" aria-hidden="true" />
            <span className="hidden sm:inline">{business.phone}</span>
            <span className="sm:hidden">Звонок</span>
          </a>
          <CtaLink className="hidden md:inline-flex" href="#main-form">
            Записаться
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
