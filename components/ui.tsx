import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTone = "primary" | "secondary" | "ghost" | "dark";

const toneClasses: Record<ButtonTone, string> = {
  primary:
    "border border-graphite-950 bg-service-amber text-graphite-950 shadow-[6px_6px_0_rgba(9,13,17,0.18)] hover:-translate-y-0.5 hover:bg-[#ffd45a] hover:shadow-[8px_8px_0_rgba(9,13,17,0.22)] focus-visible:ring-service-amber",
  secondary:
    "border border-graphite-500 bg-white text-graphite-950 hover:border-service-orange hover:bg-graphite-50 focus-visible:ring-service-orange",
  ghost:
    "border border-graphite-300 bg-graphite-100 text-graphite-900 hover:bg-white focus-visible:ring-graphite-400",
  dark:
    "border border-graphite-700 bg-graphite-950 text-white shadow-[6px_6px_0_rgba(245,197,66,0.22)] hover:bg-graphite-800 focus-visible:ring-graphite-700",
};

const baseButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-black uppercase transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

export function CtaLink({
  children,
  tone = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: ButtonTone;
}) {
  return (
    <a className={`${baseButton} ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Button({
  children,
  tone = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  tone?: ButtonTone;
}) {
  return (
    <button className={`${baseButton} ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleClass = tone === "dark" ? "text-white" : "text-graphite-950";
  const textClass = tone === "dark" ? "text-white/[0.72]" : "text-graphite-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 border-l-4 border-service-amber bg-graphite-950 px-3 py-2 text-xs font-black uppercase tracking-normal text-white">
          <span className="h-1.5 w-1.5 bg-service-amber" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black leading-tight md:text-4xl ${titleClass}`}>{title}</h2>
      {text ? <p className={`mt-4 text-base font-medium leading-7 md:text-lg ${textClass}`}>{text}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bolt-corners concrete-panel rounded-lg border border-graphite-300 p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-graphite-500 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}
