import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, FadeIn } from "@/components/layout/section-wrapper";
import { profile } from "@/data/profile";
import { techStack } from "@/data/tech-stack";
import { TechStackItemCard } from "@/components/ui/tech-stack-item";
import { useLocale } from "@/context/locale-context";

interface AboutBlockProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

function AboutBlock({ title, children, delay = 0 }: AboutBlockProps) {
  return (
    <FadeIn delay={delay} className="space-y-4">
      <h2 className="text-highlight font-semibold tracking-tight">
        {title}
      </h2>
      <div className="text-base text-muted leading-relaxed">{children}</div>
    </FadeIn>
  );
}

export function About() {
  const { t } = useLocale();
  const { about, role } = t.profile;

  const introTitle = about.introTitle
    .replace("{name}", profile.fullName)
    .replace("{role}", role);

  return (
    <SectionWrapper id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr] lg:gap-16 xl:grid-cols-[380px_1fr]">
        <FadeIn className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <img
              src={profile.avatar}
              alt={`${profile.fullName} portrait`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
          </motion.div>
        </FadeIn>

        <div className="min-w-0 space-y-10">
          <FadeIn>
            <p className="text-highlight font-semibold uppercase tracking-widest text-primary">
              {about.sectionLabel}
            </p>
          </FadeIn>

          <AboutBlock title={introTitle}>
            <p>{about.intro}</p>
          </AboutBlock>

          <AboutBlock title={about.expertiseTitle} delay={0.1}>
            <p>{about.expertise}</p>
          </AboutBlock>

          <FadeIn delay={0.2} className="space-y-4">
            <h2 className="text-highlight font-semibold tracking-tight">
              {about.techStackTitle}
            </h2>

            <ul className="grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              {techStack.map((item, index) => (
                <TechStackItemCard
                  key={item.name}
                  item={item}
                  index={index}
                />
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
