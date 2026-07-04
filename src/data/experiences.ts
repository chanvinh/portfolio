export interface ExperienceEntry {
  id: string;
  techStack: string;
  productivityTools?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "fis",
    techStack:
      "ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS",
    productivityTools:
      "GitHub Copilot (Used for boilerplate code generation and Vitest unit testing scaffolding)",
  },
  {
    id: "smo",
    techStack: "Google Apps Script (GAS), JQuery, A5:SQL",
    productivityTools:
      "Cursor AI (Used for legacy code refactoring and rapid prototyping)",
  },
  {
    id: "ucaro",
    techStack:
      "Next.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
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
