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
    items: {
      fis: {
        role: "Financial Information System (Full Stack)",
        highlights: [
          "Inspection Scheduling",
          "Inspection Checklist Management",
          "Photo & Document Upload",
          "Digital Signature",
          "Defect Reporting",
          "Developed frontend features using Vue.js and backend services with ASP.NET Core 8",
          "Implemented inspection scheduling, checklist management, document upload, and digital signature functionalities",
          "Participated in requirement analysis and translated business requirements into technical solutions",
          "Deployed application updates and supported user acceptance testing",
          "Worked closely with clients to review documentation and finalize delivered functionalities",
        ],
      },
      smo: {
        role: "Smart Medical Officer System (Front End)",
        highlights: [
          "Manage and monitor doctor information activities",
          "Analyze and report doctor information data",
          "Developed management dashboards and reporting features using Google Apps Script and jQuery",
          "Implemented business logic for monitoring and analyzing medical activity data",
          "Created technical documentation and Unit Test documentation for implemented features",
          "Performed feature testing and QA validation before deployment",
          "Supported deployment activities and confirmed completed features with clients",
          "Worked directly with stakeholders to clarify requirements and improve system usability",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End)",
        highlights: [
          "Search and gather information about universities",
          "Register for exams online",
          "Download and print exam admission tickets",
          "Check exam results and receive admission notifications",
          "Complete enrollment procedures",
          "Developed responsive web applications using Next.js and TypeScript",
          "Built dynamic forms using React Hook Form with comprehensive client-side validation",
          "Managed application state using Redux Toolkit",
          "Integrated RESTful APIs and implemented multilingual support using i18n",
          "Designed reusable components to improve consistency and development efficiency",
          "Wrote Jest unit tests to ensure code quality and maintainability",
          "Participated in feature deployment and validated completed functionalities with clients",
          "Collaborated with designers, backend developers, and QA engineers to deliver project milestones",
        ],
      },
      nehop: {
        role: "Hotel Management System (Front End)",
        highlights: [
          "Manage hotel operations: accounts, room bookings, and room management",
          "Developed hotel management modules using Angular based on business requirements",
          "Implemented user interfaces following detailed design documents",
          "Prepared Detail Design and Unit Test documentation for assigned features",
          "Maintained and enhanced existing functionalities while ensuring application stability",
          "Fixed defects identified during testing and production support",
          "Collaborated with developers, QA engineers, and business analysts throughout the project lifecycle",
        ],
      },
      kwn: {
        role: "Knowledge Management System (Front End)",
        highlights: [
          "Manage admin activities and account management",
          "CRUD operations and progress tracking",
          "Create admin, login, and management pages",
          "Developed administration modules using PHP, JavaScript, jQuery, and HTML",
          "Implemented authentication, user management, and CRUD functionalities for administrators",
          "Enhanced existing features and maintained legacy source code",
          "Upgraded the application from PHP 5 to PHP 8 while ensuring backward compatibility",
          "Optimized SQL queries and improved application performance",
          "Worked closely with team members to analyze requirements and deliver requested features",
        ],
      },
      "core-banking": {
        role: "Core Banking System (Front End)",
        highlights: [
          "Manage banking activities: accounts, deposits, and loans",
          "Developed and maintained enterprise banking modules using React.js, Next.js, and TypeScript",
          "Built reusable and scalable UI components following the project's design system",
          "Integrated RESTful APIs and handled asynchronous data using Redux Saga",
          "Implemented new features and enhanced existing functionalities based on business requirements",
          "Wrote comprehensive Jest unit tests to ensure application reliability and maintainability",
          "Investigated and resolved production issues while optimizing application performance",
          "Developed internal tools to improve development efficiency and team productivity",
          "Collaborated closely with backend developers, QA engineers, and business analysts throughout the development lifecycle",
          "Reviewed design documents and validated implemented features before client delivery",
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
