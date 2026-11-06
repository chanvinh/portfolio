import type { LocaleData } from "./types";

export const en: LocaleData = {
  meta: {
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experience" },
    { label: "Contact Now", href: "#contact" },
  ],
  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  profile: {
    role: "Full-Stack Software Engineer",
    hero: {
      greeting: {
        before: "Hi! I'm Chan Vinh, A ",
        highlight: "Software Developer",
        after: " Based in Vietnam",
      },
      subtitle: {
        line1: "A problem solver and enjoy",
        line2: {
          before: "building better ",
          highlight: "web experiences.",
        },
      },
      resumeButton: "My Resume",
    },
    about: {
      sectionLabel: "About me & Skills",
      introTitle: "Hi! I'm {name}, A {role}",
      intro:
        "Full-Stack Software Engineer with 4+ years shipping production enterprise web applications across banking, healthcare, education, and financial information systems. I own features end-to-end: React/Next.js and Vue.js frontends through ASP.NET Core, PHP Laravel, and Java Spring Boot RESTful APIs on PostgreSQL, SQL Server, and MySQL, with clean architecture, strict validation (Yup, Zod), and RBAC integration. Most recently I built a financial document workflow system, a clinic queue management SaaS, and an enterprise banking transaction platform.",
      expertiseTitle: "Full-stack web development, from accessible UIs to secure APIs",
      expertise:
        "I work across the full product delivery lifecycle: designing secure backend services, optimizing database query performance, building accessible UI systems, and speeding up delivery with AI tooling (GitHub Copilot, Cursor AI). I review and confirm technical specs and business requirements in English, have experience working with Japanese clients, and have led teams as a sub-leader. A problem solver with strong time management and teamwork who adapts quickly to new technologies. Currently researching Microservices, CI/CD with GitHub Actions, and AWS.",
      techStackTitle: "My tech stack",
    },
  },
  experience: {
    title: "Experiences",
    subtitle: "Projects I've worked on at ISB Vietnam - IVC over 4+ years.",
    techStackLabel: "Tech stack:",
    productivityLabel: "Productivity Tools:",
    items: {
      fis: {
        role: "Financial Information System (Full Stack) · 06/2026 - Present",
        highlights: [
          "Core PDF & Digital Signature Workflows: Spearheaded the end-to-end development of document processing modules, enabling seamless PDF generation, rendering, and secure digital signature integration using Vue.js and Quasar.",
          "Analyzed business requirements: Collaborated directly with stakeholders to translate complex compliance and document workflow rules into production-ready technical architectures.",
          "Accelerated delivery with AI tooling: Leveraged GitHub Copilot for backend service implementation and automated test-case generation, cutting feature delivery time by 20%.",
          "Ensured system stability & UAT: Supported client User Acceptance Testing (UAT) by diagnosing root causes, hot-fixing document processing bugs, and clarifying technical specs.",
        ],
      },
      pubcare: {
        role: "Pubcare System (Full Stack) · 04/2026 - Present",
        highlights: [
          "Engineered end-to-end healthcare workflows: Architected patient queuing, online appointment booking, and automated notifications using Next.js, React, and PHP Laravel.",
          "Optimized APIs & User Experience: Refactored frontend state management and streamlined backend RESTful APIs for medical staff, integrating RBAC (Role-Based Access Control) and strict validation.",
          "Facilitated seamless client delivery: Actively led client requirement discussions and resolved critical UAT blockers to maintain high product stability.",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End) · 05/2025 - 04/2026",
        highlights: [
          "Architected high-performance web workflows: Designed responsive, SEO-friendly admission and registration pipelines using Next.js, TypeScript, and Redux Toolkit to support complex multi-step user journeys and persistent state.",
          "Optimized form validation and efficiency: Engineered highly validated, reusable form UI components using React Hook Form, Yup, and TypeScript, boosting development efficiency by 15% and minimizing form submission errors.",
          "Ensured application reliability: Maintained high code quality and test coverage through Jest unit testing, robust component architecture, and consistent frontend standards.",
        ],
      },
      nehop: {
        role: "Hospitality Management System (Full Stack) · 05/2024 - 05/2025",
        highlights: [
          "End-to-End Architecture & Design: Authored Detailed Design (DD) and Unit Test (UT) documentation while architecting end-to-end workflows connecting Next.js frontends with Java Spring Boot backend services.",
          "Backend APIs & Business Logic: Developed secure RESTful APIs using Java Spring Boot to handle complex hospitality workflows, including reservation queuing, table booking, and billing logic.",
          "Database Optimization: Designed and optimized PostgreSQL database structures to ensure strict data consistency and high-speed query execution.",
          "Frontend Execution & Quality: Built responsive web interfaces and reusable form components using Next.js, Redux Toolkit, and React Hook Form, while maintaining test coverage with Jest.",
        ],
      },
      "core-banking": {
        role: "Banking Transaction System (Front End) · 05/2022 - 05/2024",
        highlights: [
          "Developed mission-critical financial modules: Spearheaded the development of core banking workflows including deposit and loan processing using Next.js and TypeScript.",
          "Managed complex asynchronous data flows: Implemented advanced API side effects and state management using Redux Saga to handle secure financial transaction workflows.",
          "Built scalable design systems: Created reusable UI components as part of the internal design system, driving consistency and improving cross-team development efficiency.",
          "Drove technical leadership & quality: Actively participated in code reviews, mentored junior developers on best coding practices, and contributed to internal tooling to optimize frontend performance.",
        ],
      },
    },
  },
  contact: {
    title: "Contact",
    subtitle:
      "Have a project in mind or want to connect? I'd love to hear from you.",
    info: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      submitted: "Message Sent!",
    },
  },
  footer: {
    copyright: "Portfolio. Built with React & Tailwind CSS.",
  },
};
