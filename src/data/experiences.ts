export interface ExperienceEntry {
  id: string;
  techStack: string;
  productivityToolsEn?: string;
  productivityToolsVi?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "fis",
    techStack:
      "Vue.js, Quasar, SCSS, Vitest, C#, ASP.NET Core, Pinia, SQL Server, Postman",
    productivityToolsEn:
      "GitHub Copilot (Used for backend service implementation and automated test-case generation)",
    productivityToolsVi:
      "GitHub Copilot (Sử dụng để triển khai dịch vụ backend và tự động tạo kịch bản kiểm thử).",
  },
  {
    id: "pubcare",
    techStack:
      "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest, PHP Laravel, Docker, MySQL",
  },
  {
    id: "ucaro",
    techStack:
      "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
  },
  {
    id: "nehop",
    techStack:
      "Next.js, React.js, Java Spring Boot, PostgreSQL, RESTful APIs, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
  },
  {
    id: "core-banking",
    techStack:
      "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
  },
];
