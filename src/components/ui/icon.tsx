import type { IconType } from "react-icons";
import { DiJava, DiMsqlServer } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiGithubcopilot,
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
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
  SiDotnet,
  SiFigma,
  SiFormik,
  SiJest,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiPhp,
  SiReduxsaga,
  SiSpringboot,
  SiStorybook,
  SiTestinglibrary,
  SiVitest,
  SiZod,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const iconMap: Record<string, IconType> = {
  DiJava,
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
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
  SiDotnet,
  SiFigma,
  SiFormik,
  SiJest,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiPhp,
  SiReduxsaga,
  SiSpringboot,
  SiStorybook,
  SiTestinglibrary,
  SiVitest,
  SiZod,
  TbBrandCSharp,
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
