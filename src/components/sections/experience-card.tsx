import { useMemo } from 'react'
import type { ExperienceEntry } from "@/data/experiences";
import type { ExperienceTranslation } from "@/types";
import { useLocale } from '@/context/locale-context';

interface ExperienceCardProps {
  entry: ExperienceEntry;
  translation: ExperienceTranslation;
  techStackLabel: string;
  productivityLabel?: string;
}

export function ExperienceCard({
  entry,
  translation,
  techStackLabel,
  productivityLabel,
}: ExperienceCardProps) {

  const { locale } = useLocale();

  const productivityTools = useMemo(() => {
    return locale === "en"
      ? entry.productivityToolsEn
      : entry.productivityToolsVi;
  }, [locale])

  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/30">
      <div className="space-y-1">
        <h3 className="text-highlight font-semibold">{translation.role}</h3>
      </div>

      <div className="mt-3 space-y-2 text-base leading-relaxed">
        <p className="text-muted">
          <span className="font-medium text-foreground">{techStackLabel}</span>{" "}
          {entry.techStack}
        </p>
      </div>

      {(entry.productivityToolsEn || entry.productivityToolsVi) && (<div className="mt-3 space-y-2 text-base leading-relaxed">
        <p className="text-muted">
          <span className="font-medium text-foreground">{productivityLabel}</span>{" "}
          {productivityTools}
        </p>
      </div>)}


      <ul className="mt-4 space-y-2">
        {translation.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-base text-muted"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
