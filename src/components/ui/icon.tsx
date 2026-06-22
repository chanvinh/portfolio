import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiGithubcopilot,
  SiGit,
  SiGitlab,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiReacthookform,
  SiReactquery,
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
  SiGithubcopilot,
  SiGit,
  SiGitlab,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiReacthookform,
  SiReactquery,
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
