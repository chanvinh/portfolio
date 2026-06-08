import type { SocialLink } from "@/types";
import { profile } from "@/data/profile";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/chanvinh", icon: "FaGithub" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ch%E1%BA%A5n-vinh-26b930215/",
    icon: "FaLinkedin",
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: "HiMail" },
];
