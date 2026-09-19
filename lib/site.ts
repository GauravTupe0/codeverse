export const siteConfig = {
  name: "CodeVerse",
  tagline: "Learn Programming the Modern Way",
  description:
    "Master programming with interactive documentation, real-world projects, coding examples, quizzes, and interview preparation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeverse.dev",
  keywords: [
    "learn programming",
    "coding documentation",
    "python tutorial",
    "javascript tutorial",
    "interview questions",
    "coding quizzes",
    "developer roadmaps",
  ],
  links: {
    github: "https://github.com/codeverse",
    twitter: "https://x.com/codeverse",
    discord: "https://discord.gg/codeverse",
  },
} as const;

export const navLinks = [
  { href: "/languages", label: "Languages" },
  { href: "/docs/python", label: "Docs" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/projects", label: "Projects" },
  { href: "/interview/python", label: "Interview" },
  { href: "/playground", label: "Playground" },
] as const;
