"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { business, serviceOptions } from "@/lib/site";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation";
import { Button } from "@/components/ui";

type LeadFormProps = {
  variant: "main" | "used-tires" | "short";
  title?: string;
  compact?: boolean;
};

const defaultValues = (variant: LeadFormProps["variant"]): LeadFormValues => ({
  formType: variant,
  name: "",
  phone: "",
  car: "",
  service: variant === "used-tires" ? "Б/У шины" : "шиномонтаж",
  desiredTime: "",
  tireSize: "",
  comment: "",
  pageUrl: "",
  website: "",
  personalDataConsent: false,
  privacyPolicyConsent: false,
});

export function LeadForm({ variant, title, compact = false }: LeadFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema) as Resolver<LeadFormValues>,
    defaultValues: defaultValues(variant),
    mode: "onBlur",
  });

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitStatus("idle");
    setServerMessage("");

    const payload = {
      ...values,
      formType: variant,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json().catch(() => null)) as { message?: string } | null;

    if (!response.ok) {
      setSubmitStatus("error");
      setServerMessage(result?.message || "Не удалось отправить заявку. Позвоните нам напрямую.");
      return;
    }

    setSubmitStatus("success");
    setServerMessage(
      result?.message || "Заявка отправлена. Мастер свяжется с вами для уточнения времени и услуги.",
    );
    reset(defaultValues(variant));
  };

  return (
    <form
      id={variant === "main" ? "main-form" : undefined}
      className="industrial-rail concrete-panel bolt-corners rounded-lg border border-graphite-400 p-4 pt-7 shadow-industrial md:p-6 md:pt-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {title ? (
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-normal text-service-orange">
            Заявка
          </p>
          <h3 className="mt-2 text-2xl font-black text-graphite-950">{title}</h3>
          <p className="mt-2 text-sm font-medium leading-6 text-graphite-600">
            Телефон обязателен. Чекбоксы согласий не отмечены заранее.
          </p>
        </div>
      ) : null}

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : ""}`}>
        {variant !== "short" ? (
          <Field label="Имя" error={errors.name?.message}>
            <input
              className={inputClass}
              type="text"
              autoComplete="name"
              placeholder="Как к вам обращаться"
              {...register("name")}
            />
          </Field>
        ) : null}

        <Field label="Телефон *" error={errors.phone?.message}>
          <input
            className={inputClass}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={business.phone}
            {...register("phone")}
          />
        </Field>

        {variant === "main" ? (
          <>
            <Field label="Автомобиль / модель" error={errors.car?.message}>
              <input
                className={inputClass}
                type="text"
                placeholder="Например: Kia Rio"
                {...register("car")}
              />
            </Field>

            <Field label="Услуга" error={errors.service?.message}>
              <select className={inputClass} {...register("service")}>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Желаемая дата / время" error={errors.desiredTime?.message}>
              <input
                className={inputClass}
                type="text"
                placeholder="Сегодня после 18:00"
                {...register("desiredTime")}
              />
            </Field>
          </>
        ) : null}

        {variant === "used-tires" ? (
          <Field label="Размер шин" error={errors.tireSize?.message}>
            <input
              className={inputClass}
              type="text"
              placeholder="Например: 205/55 R16"
              {...register("tireSize")}
            />
          </Field>
        ) : null}

        <Field
          label={variant === "short" ? "Комментарий" : "Комментарий"}
          error={errors.comment?.message}
          className={variant === "main" ? "md:col-span-2" : ""}
        >
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            placeholder={
              variant === "used-tires"
                ? "Напишите размер, марку или пожелания по комплекту"
                : "Напишите, что нужно уточнить"
            }
            {...register("comment")}
          />
        </Field>
      </div>

      <div className="mt-5 space-y-3">
        <Checkbox
          error={errors.personalDataConsent?.message}
          label="Я даю согласие на обработку персональных данных"
          {...register("personalDataConsent")}
        />
        <Checkbox
          error={errors.privacyPolicyConsent?.message}
          label={
            <>
              Я ознакомлен(а) с{" "}
              <a className="font-semibold text-service-blue underline underline-offset-4" href="/privacy">
                Политикой обработки персональных данных
              </a>
            </>
          }
          {...register("privacyPolicyConsent")}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button className="w-full sm:w-auto" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Отправляем" : "Оставить заявку"}
        </Button>
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-graphite-500 bg-white px-4 py-3 text-sm font-black uppercase text-graphite-950 transition hover:border-service-orange hover:bg-graphite-50"
          href={business.phoneHref}
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          Позвонить
        </a>
      </div>

      {submitStatus !== "idle" ? (
        <p
          className={`mt-4 rounded-md border px-4 py-3 text-sm leading-6 ${
            submitStatus === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
          role="status"
        >
          {submitStatus === "success" ? (
            <ShieldCheck className="mr-2 inline h-4 w-4" aria-hidden="true" />
          ) : null}
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "mt-2 min-h-12 w-full rounded-md border border-graphite-400 bg-white px-3 py-3 text-base font-semibold text-graphite-950 outline-none transition placeholder:font-medium placeholder:text-graphite-400 focus:border-service-orange focus:ring-2 focus:ring-service-amber/[0.25]";

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-black uppercase text-graphite-800 ${className}`}>
      {label}
      {children}
      {error ? <span className="mt-2 block text-sm font-medium text-red-700">{error}</span> : null}
    </label>
  );
}

function Checkbox({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="flex gap-3 rounded-md border border-graphite-300 bg-graphite-50 p-3 text-sm font-medium leading-6 text-graphite-700">
      <input
        className="mt-1 h-4 w-4 shrink-0 rounded border-graphite-300 text-service-blue focus:ring-service-blue"
        type="checkbox"
        {...props}
      />
      <span>
        {label}
        {error ? <span className="block font-medium text-red-700">{error}</span> : null}
      </span>
    </label>
  );
}
