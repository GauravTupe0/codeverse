import type { LanguageMeta } from "@/lib/types";

export const languages: LanguageMeta[] = [
  { slug: "python", name: "Python", tagline: "Readable, versatile, powerful", description: "Learn Python from syntax to data science, automation, and backend APIs.", color: "#3776AB", category: "language", popularity: 98, icon: "Py" },
  { slug: "java", name: "Java", tagline: "Write once, run anywhere", description: "Master object-oriented Java, collections, concurrency, and enterprise patterns.", color: "#E76F00", category: "language", popularity: 94, icon: "Ja" },
  { slug: "javascript", name: "JavaScript", tagline: "The language of the web", description: "Build interactive websites and full-stack apps with modern JavaScript.", color: "#F7DF1E", category: "language", popularity: 99, icon: "JS" },
  { slug: "typescript", name: "TypeScript", tagline: "JavaScript with types", description: "Ship safer applications with static typing, generics, and tooling.", color: "#3178C6", category: "language", popularity: 92, icon: "TS" },
  { slug: "c", name: "C", tagline: "Systems programming foundation", description: "Understand memory, pointers, and performance at the metal.", color: "#A8B9CC", category: "language", popularity: 80, icon: "C" },
  { slug: "cpp", name: "C++", tagline: "Performance with abstraction", description: "Learn modern C++ for games, systems, and high-performance software.", color: "#00599C", category: "language", popularity: 84, icon: "C+" },
  { slug: "csharp", name: "C#", tagline: "Modern .NET development", description: "Build desktop, web, and game applications with C# and .NET.", color: "#68217A", category: "language", popularity: 83, icon: "C#" },
  { slug: "go", name: "Go", tagline: "Simple, concurrent, fast", description: "Write cloud-native services with goroutines, channels, and simplicity.", color: "#00ADD8", category: "language", popularity: 81, icon: "Go" },
  { slug: "rust", name: "Rust", tagline: "Safety without garbage collection", description: "Master ownership, borrowing, and fearless concurrency.", color: "#DEA584", category: "language", popularity: 78, icon: "Rs" },
  { slug: "php", name: "PHP", tagline: "The web's workhorse", description: "Create dynamic websites and APIs with modern PHP.", color: "#777BB4", category: "language", popularity: 76, icon: "Ph" },
  { slug: "swift", name: "Swift", tagline: "Apple platform development", description: "Build iOS, macOS, and SwiftUI applications with confidence.", color: "#F05138", category: "language", popularity: 74, icon: "Sw" },
  { slug: "kotlin", name: "Kotlin", tagline: "Modern JVM & Android", description: "Write concise Android and backend apps on the JVM.", color: "#7F52FF", category: "language", popularity: 75, icon: "Kt" },
  { slug: "sql", name: "SQL", tagline: "Talk to your data", description: "Query, model, and optimize relational databases.", color: "#336791", category: "database", popularity: 90, icon: "SQL" },
  { slug: "html", name: "HTML", tagline: "Structure of the web", description: "Learn semantic markup, accessibility, and modern HTML5.", color: "#E34F26", category: "web", popularity: 97, icon: "Ht" },
  { slug: "css", name: "CSS", tagline: "Design the interface", description: "Layout, animation, and responsive design with modern CSS.", color: "#1572B6", category: "web", popularity: 96, icon: "Cs" },
  { slug: "react", name: "React", tagline: "UI as a function of state", description: "Build component-driven interfaces with hooks and modern React.", color: "#61DAFB", category: "framework", popularity: 95, icon: "Re" },
  { slug: "nextjs", name: "Next.js", tagline: "The React production framework", description: "Ship full-stack React apps with App Router, RSC, and edge rendering.", color: "#000000", category: "framework", popularity: 91, icon: "Nx" },
  { slug: "nodejs", name: "Node.js", tagline: "JavaScript on the server", description: "Create APIs, CLIs, and realtime backends with Node.js.", color: "#339933", category: "framework", popularity: 93, icon: "No" },
  { slug: "mongodb", name: "MongoDB", tagline: "Document database at scale", description: "Model flexible JSON-like data and query with aggregation.", color: "#47A248", category: "database", popularity: 82, icon: "Mg" },
  { slug: "postgresql", name: "PostgreSQL", tagline: "The world's most advanced open source database", description: "Learn SQL, indexing, JSON, and production Postgres operations.", color: "#4169E1", category: "database", popularity: 88, icon: "Pg" },
  { slug: "git", name: "Git", tagline: "Version control for everyone", description: "Commit, branch, merge, and collaborate with confidence.", color: "#F05032", category: "tooling", popularity: 97, icon: "Gt" },
  { slug: "docker", name: "Docker", tagline: "Containers everywhere", description: "Package, ship, and run applications with Docker and Compose.", color: "#2496ED", category: "tooling", popularity: 86, icon: "Dk" },
  { slug: "linux", name: "Linux", tagline: "The developer's operating system", description: "Shell, processes, permissions, and server fundamentals.", color: "#FCC624", category: "systems", popularity: 89, icon: "Lx" },
];

export function getLanguage(slug: string) {
  return languages.find((language) => language.slug === slug);
}

export const popularLanguages = languages.slice().sort((a, b) => b.popularity - a.popularity);
