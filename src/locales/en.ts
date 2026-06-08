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
        "A skilled Front-end Developer with 3.5+ years of experience in ReactJS and NextJS, specializing in scalable e-commerce and booking platforms. Focused on user experience and performance optimization, I am also capable of handling full-stack tasks as needed. Dedicated to mastering new technologies, I am committed to enhancing customer experiences.",
      expertiseTitle: "The main area of expertise is front end development",
      expertise:
        "HTML, CSS, JS, building small and medium web applications with NextJS or React, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular javascript frameworks NestJS, NodeJS",
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
        role: "FIS System (Full Stack) (Support Team)",
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
        role: "PubCare System (Full Stack)",
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
        role: "SMO System (Front End)",
        highlights: [
          "Manage and monitor doctor information activities",
          "Analyze and report doctor information data",
          "Develop features, documentation, unit tests, and QA",
          "Deploy and confirm documentation with client",
        ],
      },
      ucaro: {
        role: "UCARO System (Front End)",
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
        role: "NEHOP System (Front End)",
        highlights: [
          "Manage hotel operations: accounts, room bookings, and room management",
          "Write Detail Design and Unit Test documents",
          "Implemented clean and robust code following DD",
        ],
      },
      kwn: {
        role: "KWN System (Front End)",
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
