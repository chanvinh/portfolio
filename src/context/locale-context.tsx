import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  locales,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/locales";
import type { LocaleData } from "@/locales/types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocaleData;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "vi" || stored === "en" ? stored : defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const t = locales[locale];

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = locale;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t.meta.description);
    }
  }, [locale, t.meta.description]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
