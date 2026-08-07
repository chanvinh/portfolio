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
      "ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS",
    productivityToolsEn:
      "GitHub Copilot (Used for boilerplate code generation and Vitest unit testing scaffolding)",
    productivityToolsVi:
      "GitHub Copilot (Sử dụng để tự động tạo mã nguồn mẫu và dựng khung kiểm thử đơn vị với Vitest).",
  },
  {
    id: "smo",
    techStack: "Google Apps Script (GAS), JQuery, A5:SQL",
    productivityToolsEn:
      "Cursor AI (Used for legacy code refactoring and rapid prototyping)",
    productivityToolsVi:
      "Cursor AI (Sử dụng để tái cấu trúc mã nguồn cũ và xây dựng nhanh các bản mẫu thử nghiệm)",
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
    id: "kwn",
    techStack: "PHP, HTML, JavaScript, jQuery, SASS, DataTableJs",
  },
  {
    id: "core-banking",
    techStack:
      "TypeScript, Next.js, Redux Saga, Styled Components, i18n, Jest, React.js",
  },
];
