import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  FileText,
  LineChart,
  Search,
  ServerCog,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  {
    value: "2024-2026",
    label: "Growth path across engineering, product, and analysis",
  },
  {
    value: "45",
    label: "users involved in the Kenangan pickup research sample",
  },
  {
    value: "12.78 min",
    label: "peak-hour estimate gap identified in the case study",
  },
];

export const experiences = [
  {
    period: "Jun 2025 - Present",
    role: "Full-Stack Developer",
    company: "PT Eluon",
    type: "Professional Experience",
    summary:
      "Builds and maintains web application features while collaborating across product, technical, and operational contexts.",
    highlights: [
      "Develops front-end and back-end features with attention to usability, maintainability, and business needs.",
      "Translates requirements into implementation tasks and communicates technical progress with stakeholders.",
      "Strengthens product thinking by connecting technical decisions with user flows and measurable outcomes.",
    ],
  },
  {
    period: "Aug 2024 - Feb 2025",
    role: "Golang Backend Bootcamp Participant",
    company: "Dibimbing",
    type: "Intensive Training",
    summary:
      "Completed structured backend training covering API design, database workflows, and practical software delivery.",
    highlights: [
      "Practiced REST API development, backend service structure, and database integration.",
      "Delivered a final project with collaborative planning, implementation, and presentation.",
      "Built stronger discipline in documentation, debugging, and iterative delivery.",
    ],
  },
  {
    period: "2024",
    role: "KUPS Final Project Contributor",
    company: "Academic and Project-Based Work",
    type: "Project Experience",
    summary:
      "Worked on project planning and implementation activities that connected technical execution with user needs.",
    highlights: [
      "Contributed to requirement exploration, feature planning, and delivery coordination.",
      "Practiced breaking down user problems into clearer flows and implementation steps.",
      "Used the experience as a bridge from pure development toward business analysis and product strategy.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Business Analysis",
    icon: BriefcaseBusiness,
    skills: [
      "Requirement Gathering",
      "Problem Framing",
      "User Flow Mapping",
      "Product Requirement Documentation",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Product Strategy",
    icon: LineChart,
    skills: [
      "Research Synthesis",
      "Experiment Planning",
      "MVP Scoping",
      "Metrics Thinking",
      "Product Prioritization",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    skills: [
      "Web Application Development",
      "Front-End Implementation",
      "Back-End APIs",
      "Database Integration",
      "Technical Documentation",
    ],
  },
  {
    title: "Tools and Methods",
    icon: ServerCog,
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Golang",
      "REST APIs",
      "Git and GitHub",
    ],
  },
];

export const projectMetrics = [
  { label: "Research sample", value: "45 users" },
  { label: "Displayed estimate", value: "15 min" },
  { label: "Peak-hour actual ready time", value: "27.78 min" },
  { label: "Estimate gap", value: "12.78 min" },
];

export const caseStudySections = [
  {
    label: "Overview",
    icon: FileText,
    title: "A pickup-time accuracy concept for Kopi Kenangan orders",
    body: "Kenangan Smart Pickup Time explores how a pickup-order experience could reduce user uncertainty by showing a more realistic ready-time estimate during busy hours.",
  },
  {
    label: "Problem",
    icon: Search,
    title:
      "The displayed pickup estimate did not always match peak-hour reality",
    body: "The baseline estimate communicated a 15-minute ready time, while the observed peak-hour actual ready time reached 27.78 minutes. This created a 12.78-minute gap that could affect planning, trust, and user satisfaction.",
  },
  {
    label: "Research Findings",
    icon: UsersRound,
    title: "Users needed clearer expectations before arriving at the store",
    body: "The research involved 45 users and validation with 2 informants. The key insight was not only that waiting happened, but that users needed a clearer expectation of when to leave, when to arrive, and whether the store was experiencing delay.",
  },
  {
    label: "Solution",
    icon: BarChart3,
    title: "A smarter pickup estimate supported by status communication",
    body: "The solution proposes a dynamic pickup-time experience with clearer order status, pickup estimation, and notification moments. The goal is to help users make better decisions before arriving at the outlet.",
  },
];

export const mvpRequirements = [
  "Show a dynamic pickup estimate based on order and outlet conditions.",
  "Display clear order status from confirmed order to ready for pickup.",
  "Notify users when the estimate changes or the order is ready.",
  "Keep the experience lightweight enough for MVP validation.",
];

export const contactLinks = [
  {
    label: "Email",
    value: "awwalul.cgs18@gmail.com",
    href: "mailto:awwalul.cgs18@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/annurjibril/",
    href: "https://www.linkedin.com/in/annurjibril/",
  },
  {
    label: "GitHub",
    value: "https://github.com/awalkarca29/",
    href: "https://github.com/awalkarca29/",
  },
];
