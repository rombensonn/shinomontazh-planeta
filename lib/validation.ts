import { z } from "zod";
import { serviceOptions } from "@/lib/site";

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength, `Не больше ${maxLength} символов`)
    .optional()
    .or(z.literal(""));

export const leadFormSchema = z.object({
  formType: z.enum(["main", "used-tires", "short"]),
  name: optionalText(80),
  phone: z
    .string()
    .trim()
    .min(5, "Укажите телефон")
    .max(32, "Телефон слишком длинный")
    .refine((value) => value.replace(/\D/g, "").length >= 10, "Укажите корректный телефон"),
  car: optionalText(120),
  service: z.enum(serviceOptions).optional().or(z.literal("")),
  desiredTime: optionalText(120),
  tireSize: optionalText(80),
  comment: optionalText(700),
  pageUrl: optionalText(300),
  website: optionalText(120),
  personalDataConsent: z.boolean().refine(Boolean, {
    message: "Нужно согласие на обработку персональных данных",
  }),
  privacyPolicyConsent: z.boolean().refine(Boolean, {
    message: "Нужно подтвердить ознакомление с политикой",
  }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const sanitizeValue = (value: unknown) => {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export const sanitizeLeadInput = (input: unknown) => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return input;
  }

  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key,
      typeof value === "string" ? sanitizeValue(value) : value,
    ]),
  );
};
