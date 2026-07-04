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
        "Frontend Developer with over 3.5 years of experience building scalable web applications using React.js, Next.js, React Native, TypeScript, and modern frontend technologies. Skilled in component-based architecture, state management, API integration, and unit testing. Passionate about leveraging AI-assisted development tools such as ChatGPT, Cursor AI, GitHub Copilot, and Gemini to improve development efficiency and code quality.",
      expertiseTitle: "The main area of expertise is front end development",
      expertise:
        "A proactive team player with strong problem-solving, time management, and communication skills, capable of adapting quickly to new technologies and business requirements. Experienced in HTML5, CSS3, JavaScript/TypeScript, building medium to large web applications with React and Next.js, along with Redux, React Query, React Hook Form, and unit testing with Jest and Vitest.",
      techStackTitle: "My tech stack",
    },
  },
  experience: {
    title: "Experiences",
    subtitle: "Projects I've worked on at ISB Vietnam - IVC over 3.5+ years.",
    techStackLabel: "Tech stack:",
    productivityLabel: "Productivity Tools:",
    items: {
      fis: {
        role: "Financial Information System (Full Stack)",
        highlights: [
          "Developed and optimized core modules including Inspection Scheduling and Digital Signature, ensuring seamless cross-platform user experience using Vue.js and Quasar",
          "Designed scalable SQL Server database schemas and optimized complex stored procedures, improving query response times for heavy checklist reports",
          "Leveraged GitHub Copilot to accelerate backend service development and test-case generation, reducing feature delivery time by 20% while maintaining high code quality",
          "Collaborated directly with clients to analyze business requirements, translating them into robust technical solutions and ensuring successful User Acceptance Testing (UAT)",
        ],
      },
      smo: {
        role: "Smart Medical Officer System (Front End)",
        highlights: [
          "Built dynamic management dashboards and analytical reporting features using Google Apps Script and jQuery, providing stakeholders with real-time insights into doctor activities",
          "Utilized Cursor AI to accelerate the refactoring of legacy jQuery scripts and automate Unit Test documentation, cutting down QA validation cycles",
          "Partnered directly with stakeholders to clarify ambiguous requirements, leading to a significant improvement in system usability and user adoption",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End)",
        highlights: [
          "Architected responsive, SEO-friendly web pages using Next.js and TypeScript, delivering a seamless experience for high-traffic online exam registrations",
          "Streamlined global state management by implementing Redux Toolkit to handle complex, multi-step admission workflows and persistent user data across sessions",
          "Engineered dynamic, highly-validated forms using React Hook Form and Yup, reducing form submission errors and improving client-side data integrity",
          "Established a reusable UI component library that boosted development efficiency by 15% for subsequent modules",
          "Maintained code reliability by achieving high test coverage with Jest unit tests",
        ],
      },
      nehop: {
        role: "Hotel Management System (Front End)",
        highlights: [
          "Developed core hotel operation modules (room bookings and account management) using Angular, adhering strictly to complex enterprise business logic",
          "Delivered pixel-perfect user interfaces based on detailed design documents, ensuring cross-browser compatibility and application stability",
          "Proactively resolved critical defects identified during QA and production phases, minimizing system downtime during peak booking seasons",
        ],
      },
      kwn: {
        role: "Knowledge Management System (Front End)",
        highlights: [
          "Successfully modernized the legacy application by migrating the codebase from PHP 5 to PHP 8, ensuring 100% backward compatibility while enhancing overall system security",
          "Optimized legacy SQL queries and data rendering tables (DataTableJs), reducing page load times for administrative dashboards",
          "Implemented secure authentication and comprehensive CRUD operations for high-privilege administrator modules",
        ],
      },
      "core-banking": {
        role: "Core Banking System (Front End)",
        highlights: [
          "Developed and maintained mission-critical enterprise banking modules (deposits, loans) using Next.js and TypeScript, meeting strict performance and security standards",
          "Managed complex asynchronous data flows and API side-effects efficiently using Redux Saga, ensuring real-time data consistency for financial transactions",
          "Contributed to the internal design system by building scalable, reusable UI components, improving front-end delivery velocity across the wider team",
          "Drove continuous improvement by participating in code reviews, mentoring junior members, and building internal tools to optimize development workflows",
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
