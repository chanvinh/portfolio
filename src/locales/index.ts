import { en } from "./en";
import { vi } from "./vi";
import type { Locale } from "./types";

export type { Locale };

export const locales = {
  en,
  vi,
} as const satisfies Record<Locale, typeof en>;

export const LOCALE_STORAGE_KEY = "portfolio-locale";

export const defaultLocale: Locale = "en";
