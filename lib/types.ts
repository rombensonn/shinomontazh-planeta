import type { LeadFormValues } from "@/lib/validation";

export type StoredLead = Omit<LeadFormValues, "website" | "personalDataConsent" | "privacyPolicyConsent"> & {
  id: string;
  createdAt: string;
  ip: string;
  userAgent: string;
  personalDataConsent: true;
  privacyPolicyConsent: true;
};
