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
    teamSizeLabel: "Team size:",
    items: {
      fis: {
        role: "Financial Information System (Full Stack) (Support Team)",
        highlights: [
          "Inspection Scheduling",
          "Inspection Checklist Management",
          "Photo & Document Upload",
          "Digital Signature",
          "Defect Reporting",
          "Requirement gathering and develop system features",
          "Write QA and deploy features per client documentation",
        ],
      },
      pubcare: {
        role: "Public Health & Care System (Full Stack)",
        highlights: [
          "Healthcare Management System (PHR/EHR)",
          "Patient Management System",
          "Appointment Scheduling System",
          "Care Coordination System",
          "Clinical Data Management System",
          "Develop features, documentation, QA, and client deployment",
        ],
      },
      smo: {
        role: "Smart Medical Officer System (Front End)",
        highlights: [
          "Manage and monitor doctor information activities",
          "Analyze and report doctor information data",
          "Develop features, documentation, unit tests, and QA",
          "Deploy and confirm documentation with client",
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
          "Design components, interfaces, write Jest tests and QA",
        ],
      },
      nehop: {
        role: "Hotel Management System (Front End)",
        highlights: [
          "Manage hotel operations: accounts, room bookings, and room management",
          "Write Detail Design and Unit Test documents",
          "Implemented clean and robust code following DD",
        ],
      },
      kwn: {
        role: "Knowledge Management System (Front End)",
        highlights: [
          "Manage admin activities and account management",
          "CRUD operations and progress tracking",
          "Create admin, login, and management pages",
          "Upgrade PHP version from 5.0 to 8.0",
        ],
      },
      "core-banking": {
        role: "Core Banking System (Front End)",
        highlights: [
          "Manage banking activities: accounts, deposits, and loans",
          "Implement new features and fix issues per client requests",
          "Support colleagues and resolve issues during development",
          "Develop tools to enhance work efficiency",
          "Review code and assist team members",
          "Confirm features and correct documentation for client",
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
