export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  techStack: string;
  teamSize: number;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "fis",
    company: "ISB Vietnam - IVC",
    period: "04/2026 — 07/2026",
    techStack:
      "ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS, Copilot",
    teamSize: 5,
  },
  {
    id: "pubcare",
    company: "ISB Vietnam - IVC",
    period: "04/2026 — 07/2026",
    techStack:
      "PHP, Laravel, jQuery, MySQL, Docker, Docker Compose, Postman, Cursor AI",
    teamSize: 2,
  },
  {
    id: "smo",
    company: "ISB Vietnam - IVC",
    period: "01/2026 — 03/2026",
    techStack: "Google Apps Script (GAS), A5:SQL, jQuery, Cursor AI",
    teamSize: 2,
  },
  {
    id: "ucaro",
    company: "ISB Vietnam - IVC",
    period: "05/2025 — 01/2026",
    techStack:
      "Next.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest",
    teamSize: 4,
  },
  {
    id: "nehop",
    company: "ISB Vietnam - IVC",
    period: "02/2025 — 05/2025 &  03/2026 — 04/2026",
    techStack:
      "Angular, CSS, HTML, PostgreSQL, Excel, VB.Net, Java Spring Batch",
    teamSize: 14,
  },
  {
    id: "kwn",
    company: "ISB Vietnam - IVC",
    period: "01/2025 — 03/2025",
    techStack: "PHP, HTML, JavaScript, jQuery, SASS, DataTableJs",
    teamSize: 2,
  },
  {
    id: "core-banking",
    company: "ISB Vietnam - IVC",
    period: "05/2022 — 12/2024",
    techStack:
      "TypeScript, Next.js, Redux Saga, Styled Components, i18n, Jest, React.js",
    teamSize: 14,
  },
];
