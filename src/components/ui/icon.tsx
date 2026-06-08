import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  DiMsqlServer,
  FaGithub,
  FaLinkedin,
  HiMail,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} aria-hidden="true" />;
}
