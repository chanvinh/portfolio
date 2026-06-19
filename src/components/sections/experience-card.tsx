import type { ExperienceEntry } from "@/data/experiences";
import type { ExperienceTranslation } from "@/types";

const periodBadgeClassName =
  "mt-2 inline-block w-fit max-w-full rounded-lg bg-primary/10 px-3 py-1 text-base font-medium text-primary";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  translation: ExperienceTranslation;
  techStackLabel: string;
  teamSizeLabel: string;
}

export function ExperienceCard({
  entry,
  translation,
  techStackLabel,
  teamSizeLabel,
}: ExperienceCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/30">
      <div className="space-y-1">
        <h3 className="text-highlight font-semibold">{translation.role}</h3>
        <p className="text-base text-primary">{entry.company}</p>
        <span className={periodBadgeClassName}>{entry.period}</span>
      </div>

      <div className="mt-3 space-y-2 text-base leading-relaxed">
        <p className="text-muted">
          <span className="font-medium text-foreground">{techStackLabel}</span>{" "}
          {entry.techStack}
        </p>
        <p className="text-muted">
          <span className="font-medium text-foreground">{teamSizeLabel}</span>{" "}
          {entry.teamSize}
        </p>
      </div>

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
