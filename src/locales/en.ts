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
    role: "Web Developer",
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
        "Full Stack Developer with 4+ years of experience building enterprise web applications, with strong expertise in frontend development using React.js, Next.js, TypeScript, and JavaScript. Experienced in developing scalable UI architectures, state management, API integration, automated testing, and backend services using ASP.NET Core and PHP Laravel. Worked across banking, education, healthcare, financial information, and business management systems, collaborating with cross-functional teams and clients to deliver production-ready solutions.",
      expertiseTitle: "The main area of expertise is front end development",
      expertise:
        "A proactive team player with strong problem-solving, time management, and communication skills, capable of adapting quickly to new technologies and business requirements. Experienced in HTML5, CSS3, JavaScript/TypeScript, building medium to large web applications with React and Next.js, along with Redux, React Query, React Hook Form, and unit testing with Jest and Vitest.",
      techStackTitle: "My tech stack",
    },
  },
  experience: {
    title: "Experiences",
    subtitle: "Projects I've worked on at ISB Vietnam - IVC over 4+ years.",
    techStackLabel: "Tech stack:",
    productivityLabel: "Productivity Tools:",
    items: {
      "core-banking": {
        role: "Banking Transaction System (Front End)",
        highlights: [
          "Developed and maintained mission-critical banking modules, including deposit and loan workflows, using Next.js, React.js, and TypeScript.",
          "Implemented complex asynchronous data flows and API side effects using Redux Saga to support financial transaction workflows.",
          "Built reusable and scalable UI components as part of the internal design system, improving consistency and development efficiency across the team.",
          "Participated in code reviews and mentored junior developers to improve code quality and development practices.",
          "Contributed to internal development tools and workflow improvements to increase frontend development efficiency.",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End)",
        highlights: [
          "Architected responsive and SEO-friendly admission and registration workflows using Next.js, TypeScript, and Redux Toolkit, supporting complex multi-step processes and persistent user state.",
          "Built reusable, highly validated form and UI components using React Hook Form, Yup, and TypeScript, improving development efficiency by 15% across subsequent modules while reducing form submission errors.",
          "Maintained application reliability through Jest unit testing, reusable component architecture, and consistent frontend development practices.",
        ],
      },
      nehop: {
        role: "Hotel Management System (Front End)",
        highlights: [
          "Developed core hotel operation modules, including room booking and account management, using Angular",
          "Implemented responsive and pixel-perfect interfaces based on design specifications while resolving critical QA and production defects",
        ],
      },
      fis: {
        role: "Financial Information System (Full Stack)",
        highlights: [
          "Developed and optimized core modules including Inspection Scheduling and Digital Signature using Vue.js and Quasar.",
          "Collaborated directly with clients to analyze business requirements and translate them into technical solutions.",
          "Supported User Acceptance Testing (UAT) by resolving functional issues and clarifying technical requirements.",
          "Contributed to backend service development and automated test-case generation using GitHub Copilot, reducing feature delivery time by 20%.",
        ],
      },
      pubcare: {
        role: "Pubcare System (Full Stack)",
        highlights: [
          "Developed full-stack modules for patient queuing, appointment booking, and automated notifications",
          "Optimized frontend workflows and backend REST APIs for medical staff while implementing input validation and role-based access control.",
        ],
      },
      kwn: {
        role: "Knowledge Management System (Full Stack)",
        highlights: [
          "Modernized a legacy application from PHP 5 to PHP 8 while maintaining existing business functionality and improving application security.",
          "Optimized legacy SQL queries and data rendering tables (DataTableJs), reducing page load times for administrative dashboards.",
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
