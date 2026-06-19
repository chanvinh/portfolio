import { experienceEntries } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper, FadeIn } from "@/components/layout/section-wrapper";
import { useLocale } from "@/context/locale-context";
import { ExperienceCard } from "@/components/sections/experience-card";

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

                  <ExperienceCard
                    entry={entry}
                    translation={translation}
                    techStackLabel={techStackLabel}
                    teamSizeLabel={teamSizeLabel}
                  />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
