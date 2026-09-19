import type { Roadmap } from "@/lib/types";

export const roadmaps: Roadmap[] = [
  {
    slug: "frontend",
    title: "Frontend Developer",
    description: "HTML, CSS, JavaScript, React, and production UI engineering.",
    color: "#38BDF8",
    nodes: [
      [{ id: "html", title: "HTML", description: "Semantic markup and accessibility." }, { id: "css", title: "CSS", description: "Layout, responsive design, and motion." }],
      [{ id: "js", title: "JavaScript", description: "Language fundamentals and DOM." }, { id: "ts", title: "TypeScript", description: "Typed applications and tooling." }],
      [{ id: "react", title: "React", description: "Components, hooks, and state." }, { id: "next", title: "Next.js", description: "App Router and server components." }],
      [{ id: "test", title: "Testing", description: "Playwright, Vitest, and a11y checks." }, { id: "perf", title: "Performance", description: "Core Web Vitals and bundling." }],
    ],
  },
  {
    slug: "backend",
    title: "Backend Developer",
    description: "APIs, databases, auth, and scalable server architecture.",
    color: "#34D399",
    nodes: [
      [{ id: "lang", title: "Pick a language", description: "Node, Python, Java, Go, or C#." }],
      [{ id: "http", title: "HTTP & REST", description: "Resources, status codes, and versioning." }, { id: "db", title: "SQL + NoSQL", description: "Postgres and MongoDB modeling." }],
      [{ id: "auth", title: "Auth", description: "Sessions, JWT, OAuth, and RBAC." }, { id: "cache", title: "Caching", description: "Redis, CDN, and invalidation." }],
      [{ id: "obs", title: "Observability", description: "Logs, metrics, tracing, and SLOs." }],
    ],
  },
  {
    slug: "fullstack",
    title: "Full Stack Developer",
    description: "Ship complete products from database to polished UI.",
    color: "#A78BFA",
    nodes: [
      [{ id: "web", title: "Web foundations", description: "HTML, CSS, JS, Git." }],
      [{ id: "ui", title: "Frontend", description: "React + TypeScript + Next.js." }, { id: "api", title: "Backend", description: "Node APIs and authentication." }],
      [{ id: "data", title: "Data layer", description: "PostgreSQL, Prisma, and caching." }],
      [{ id: "ship", title: "Ship", description: "CI/CD, Docker, and Vercel/AWS." }],
    ],
  },
  {
    slug: "java-developer",
    title: "Java Developer",
    description: "Core Java through Spring Boot and production JVM apps.",
    color: "#FB923C",
    nodes: [
      [{ id: "core", title: "Core Java", description: "OOP, collections, and concurrency." }],
      [{ id: "build", title: "Build tools", description: "Maven/Gradle and testing." }, { id: "spring", title: "Spring Boot", description: "REST, Data JPA, Security." }],
      [{ id: "sql", title: "SQL & JDBC", description: "Relational modeling and transactions." }],
      [{ id: "cloud", title: "Cloud JVM", description: "Docker, Kubernetes, and observability." }],
    ],
  },
  {
    slug: "python-developer",
    title: "Python Developer",
    description: "Pythonic foundations, APIs, automation, and packaging.",
    color: "#60A5FA",
    nodes: [
      [{ id: "py", title: "Python core", description: "Syntax, data model, and packaging." }],
      [{ id: "api", title: "APIs", description: "FastAPI or Django REST." }, { id: "data", title: "Data", description: "SQL, pandas, and files." }],
      [{ id: "test", title: "Quality", description: "pytest, typing, and linting." }],
      [{ id: "ops", title: "Deploy", description: "Docker, CI, and cloud functions." }],
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    description: "Python, data pipelines, models, and LLM applications.",
    color: "#F472B6",
    nodes: [
      [{ id: "py", title: "Python + Math", description: "NumPy, probability, linear algebra." }],
      [{ id: "ml", title: "ML foundations", description: "Supervised learning and evaluation." }, { id: "dl", title: "Deep learning", description: "PyTorch and transformers." }],
      [{ id: "llm", title: "LLM apps", description: "RAG, evals, and prompt systems." }],
      [{ id: "prod", title: "Production ML", description: "Serving, monitoring, and safety." }],
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Statistics, SQL, experimentation, and applied ML.",
    color: "#2DD4BF",
    nodes: [
      [{ id: "sql", title: "SQL", description: "Analytics queries and warehousing." }, { id: "py", title: "Python", description: "pandas, visualization, notebooks." }],
      [{ id: "stats", title: "Statistics", description: "Inference, A/B tests, and modeling." }],
      [{ id: "ml", title: "Machine learning", description: "Feature work and model selection." }],
      [{ id: "story", title: "Communication", description: "Dashboards and decision memos." }],
    ],
  },
  {
    slug: "devops",
    title: "DevOps Engineer",
    description: "Linux, CI/CD, containers, and infrastructure as code.",
    color: "#818CF8",
    nodes: [
      [{ id: "linux", title: "Linux", description: "Shell, processes, networking." }, { id: "git", title: "Git", description: "Branching and review workflows." }],
      [{ id: "ci", title: "CI/CD", description: "Pipelines, artifacts, and gates." }, { id: "docker", title: "Docker", description: "Images, Compose, registries." }],
      [{ id: "k8s", title: "Kubernetes", description: "Workloads, services, and GitOps." }],
      [{ id: "obs", title: "SRE basics", description: "SLIs, alerts, and incident response." }],
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Engineer",
    description: "Design, secure, and operate cloud platforms.",
    color: "#38BDF8",
    nodes: [
      [{ id: "fund", title: "Cloud fundamentals", description: "Regions, IAM, networking, billing." }],
      [{ id: "compute", title: "Compute & storage", description: "VMs, containers, object storage." }],
      [{ id: "iac", title: "IaC", description: "Terraform and policy as code." }],
      [{ id: "sec", title: "Security & cost", description: "Least privilege and FinOps." }],
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cyber Security",
    description: "Defensive fundamentals, secure coding, and operations.",
    color: "#F87171",
    nodes: [
      [{ id: "net", title: "Networking", description: "TCP/IP, DNS, TLS, and firewalls." }],
      [{ id: "linux", title: "Linux & scripting", description: "Logs, permissions, automation." }],
      [{ id: "appsec", title: "AppSec", description: "OWASP, auth, and secure SDLC." }],
      [{ id: "ops", title: "SOC basics", description: "Detection, IR, and threat modeling." }],
    ],
  },
  {
    slug: "mobile",
    title: "Mobile Developer",
    description: "Native and cross-platform mobile product engineering.",
    color: "#C084FC",
    nodes: [
      [{ id: "lang", title: "Kotlin or Swift", description: "Language and platform APIs." }],
      [{ id: "ui", title: "Mobile UI", description: "Compose or SwiftUI patterns." }],
      [{ id: "data", title: "Local + remote data", description: "Persistence, networking, offline." }],
      [{ id: "store", title: "Ship", description: "Testing, CI, and store release." }],
    ],
  },
];

export function getRoadmap(slug: string) {
  return roadmaps.find((roadmap) => roadmap.slug === slug);
}
