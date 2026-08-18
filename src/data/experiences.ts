export interface ExperienceEntry {
  id: string;
  techStack: string;
  productivityToolsEn?: string;
  productivityToolsVi?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "core-banking",
    techStack:
      "TypeScript, Next.js, Redux Saga, Styled Components, i18n, Jest, React.js",
  },
  {
    id: "ucaro",
    techStack:
      "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
  },
  {
    id: "nehop",
    techStack:
      "Angular, CSS, HTML, PostgreSQL, Excel, VB.Net, Java Spring Batch",
  },
  {
    id: "fis",
    techStack:
      "ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS",
    productivityToolsEn:
      "GitHub Copilot (Used for boilerplate code generation and Vitest unit testing scaffolding)",
    productivityToolsVi:
      "GitHub Copilot (Sử dụng để tự động tạo mã nguồn mẫu và dựng khung kiểm thử đơn vị với Vitest).",
  },
  {
    id: "pubcare",
    techStack: "PHP Laravel, JavaScript, jQuery, Docker, MySQL",
  },
  {
    id: "kwn",
    techStack: "PHP, HTML, JavaScript, jQuery, SASS, DataTableJs",
  },
];
