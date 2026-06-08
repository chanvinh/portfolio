import type { ExperienceTranslation, NavLink } from "@/types";

export type Locale = "en" | "vi";

export interface LocaleData {
  meta: {
    description: string;
  };
  nav: NavLink[];
  header: {
    openMenu: string;
    closeMenu: string;
  };
  profile: {
    role: string;
    hero: {
      greeting: {
        before: string;
        highlight: string;
        after: string;
      };
      subtitle: {
        line1: string;
        line2: {
          before: string;
          highlight: string;
        };
      };
      resumeButton: string;
    };
    about: {
      sectionLabel: string;
      introTitle: string;
      intro: string;
      expertiseTitle: string;
      expertise: string;
      techStackTitle: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    techStackLabel: string;
    teamSizeLabel: string;
    items: Record<string, ExperienceTranslation>;
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      email: string;
      phone: string;
      location: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      submitted: string;
    };
  };
  footer: {
    copyright: string;
  };
}
