import { experienceEntries } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper, FadeIn } from "@/components/layout/section-wrapper";
import { useLocale } from "@/context/locale-context";

export function Experience() {
  const { t } = useLocale();
  const { title, subtitle, techStackLabel, teamSizeLabel, items } =
    t.experience;

  return (
    <SectionWrapper id="experience" className="bg-surface/30">
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent md:block"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experienceEntries.map((entry, index) => {
            const translation = items[entry.id];
            if (!translation) return null;

            return (
              <FadeIn key={entry.id} delay={index * 0.1}>
                <article className="relative md:pl-12">
                  <div
                    className="absolute left-2.5 top-2 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block"
                    aria-hidden="true"
                  />

                  <div className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/30">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-highlight font-semibold">
                          {translation.role}
                        </h3>
                        <p className="text-base text-primary">{entry.company}</p>
                      </div>
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-base font-medium text-primary">
                        {entry.period}
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-base leading-relaxed">
                      <p className="text-muted">
                        <span className="font-medium text-foreground">
                          {techStackLabel}
                        </span>{" "}
                        {entry.techStack}
                      </p>
                      <p className="text-muted">
                        <span className="font-medium text-foreground">
                          {teamSizeLabel}
                        </span>{" "}
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
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
