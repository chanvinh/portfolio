import { useLocale } from "@/context/locale-context";
import type { Locale } from "@/locales";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center rounded-lg border border-border bg-surface p-0.5"
      role="group"
      aria-label="Language"
    >
      {languages.map(({ code, label }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground"
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
