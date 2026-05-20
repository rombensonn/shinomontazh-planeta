"use client";

import { CalendarCheck, MapPinned, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-service-amber bg-graphite-950 px-3 py-2 shadow-[0_-8px_28px_rgba(9,13,17,0.32)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-white/[0.12] bg-white/[0.08] text-xs font-black text-white"
          href={business.phoneHref}
          aria-label={`Позвонить ${business.phone}`}
        >
          <Phone className="h-4 w-4 text-service-green" aria-hidden="true" />
          Позвонить
        </a>
        <a
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-service-amber bg-service-amber text-xs font-black text-graphite-950"
          href="#main-form"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Записаться
        </a>
        <a
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-white/[0.12] bg-white/[0.08] text-xs font-black text-white"
          href={business.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPinned className="h-4 w-4 text-service-amber" aria-hidden="true" />
          Маршрут
        </a>
      </div>
    </div>
  );
}
