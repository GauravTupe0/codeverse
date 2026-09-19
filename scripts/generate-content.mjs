import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const snippets = {
  python: { lang: "python", hello: 'print("Hello, CodeVerse")', var: "count = 42\nname = 'Ada'", loop: "for item in [1, 2, 3]:\n    print(item)", fn: "def greet(name):\n    return f'Hello, {name}'" },
  java: { lang: "java", hello: 'System.out.println("Hello, CodeVerse");', var: "int count = 42;\nString name = \"Ada\";", loop: "for (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}", fn: "static String greet(String name) {\n    return \"Hello, \" + name;\n}" },
  javascript: { lang: "javascript", hello: 'console.log("Hello, CodeVerse");', var: "const count = 42;\nlet name = 'Ada';", loop: "for (const item of [1, 2, 3]) {\n  console.log(item);\n}", fn: "function greet(name) {\n  return `Hello, ${name}`;\n}" },
  typescript: { lang: "typescript", hello: 'console.log("Hello, CodeVerse");', var: "const count: number = 42;\nconst name: string = 'Ada';", loop: "for (const item of [1, 2, 3]) {\n  console.log(item);\n}", fn: "function greet(name: string): string {\n  return `Hello, ${name}`;\n}" },
  c: { lang: "c", hello: 'printf("Hello, CodeVerse\\n");', var: "int count = 42;\nchar name[] = \"Ada\";", loop: "for (int i = 0; i < 3; i++) {\n    printf(\"%d\\n\", i);\n}", fn: "void greet(const char *name) {\n    printf(\"Hello, %s\\n\", name);\n}" },
  cpp: { lang: "cpp", hello: 'std::cout << "Hello, CodeVerse\\n";', var: "int count = 42;\nstd::string name = \"Ada\";", loop: "for (int i = 0; i < 3; i++) {\n    std::cout << i << '\\n';\n}", fn: "std::string greet(const std::string& name) {\n    return \"Hello, \" + name;\n}" },
  csharp: { lang: "csharp", hello: 'Console.WriteLine("Hello, CodeVerse");', var: "int count = 42;\nstring name = \"Ada\";", loop: "foreach (var item in new[] {1,2,3}) {\n    Console.WriteLine(item);\n}", fn: "static string Greet(string name) => $\"Hello, {name}\";" },
  go: { lang: "go", hello: 'fmt.Println("Hello, CodeVerse")', var: "count := 42\nname := \"Ada\"", loop: "for i := 0; i < 3; i++ {\n    fmt.Println(i)\n}", fn: "func greet(name string) string {\n    return \"Hello, \" + name\n}" },
  rust: { lang: "rust", hello: 'println!("Hello, CodeVerse");', var: "let count = 42;\nlet name = \"Ada\";", loop: "for i in 0..3 {\n    println!(\"{i}\");\n}", fn: "fn greet(name: &str) -> String {\n    format!(\"Hello, {name}\")\n}" },
  php: { lang: "php", hello: 'echo "Hello, CodeVerse";', var: "$count = 42;\n$name = 'Ada';", loop: "foreach ([1,2,3] as $item) {\n    echo $item;\n}", fn: "function greet($name) {\n    return \"Hello, $name\";\n}" },
  swift: { lang: "swift", hello: 'print("Hello, CodeVerse")', var: "let count = 42\nvar name = \"Ada\"", loop: "for item in [1,2,3] {\n    print(item)\n}", fn: "func greet(_ name: String) -> String {\n    \"Hello, \\(name)\"\n}" },
  kotlin: { lang: "kotlin", hello: 'println("Hello, CodeVerse")', var: "val count = 42\nvar name = \"Ada\"", loop: "for (item in listOf(1,2,3)) {\n    println(item)\n}", fn: "fun greet(name: String) = \"Hello, $name\"" },
  sql: { lang: "sql", hello: "SELECT 'Hello, CodeVerse' AS message;", var: "SELECT 42 AS count, 'Ada' AS name;", loop: "SELECT generate_series(1,3) AS n;", fn: "CREATE FUNCTION greet(name TEXT) RETURNS TEXT AS $$\n  SELECT 'Hello, ' || name;\n$$ LANGUAGE sql;" },
  html: { lang: "html", hello: "<p>Hello, CodeVerse</p>", var: '<input id="count" value="42">', loop: "<!-- Repeat list items in markup or via templates -->", fn: "<button onclick=\"greet()\">Greet</button>" },
  css: { lang: "css", hello: "h1 { color: #22d3ee; }", var: ":root { --count: 42; }", loop: ".item + .item { margin-top: 8px; }", fn: "@mixin greet { content: 'Hello'; }" },
  react: { lang: "tsx", hello: "export function Hello() {\n  return <p>Hello, CodeVerse</p>;\n}", var: "const [count, setCount] = useState(42);", loop: "{items.map((item) => <li key={item}>{item}</li>)}", fn: "function greet(name: string) {\n  return `Hello, ${name}`;\n}" },
  nextjs: { lang: "tsx", hello: "export default function Page() {\n  return <h1>Hello, CodeVerse</h1>;\n}", var: "const count = 42;", loop: "{posts.map((post) => <Card key={post.slug} />)}", fn: "export async function generateMetadata() {\n  return { title: 'Hello' };\n}" },
  nodejs: { lang: "javascript", hello: 'console.log("Hello, CodeVerse");', var: "const count = 42;", loop: "for (const item of [1,2,3]) console.log(item);", fn: "function greet(name) {\n  return `Hello, ${name}`;\n}" },
  mongodb: { lang: "javascript", hello: 'db.messages.insertOne({ text: "Hello, CodeVerse" })', var: "const count = 42;", loop: "db.items.find().forEach((doc) => print(doc._id))", fn: "function greet(name) {\n  return db.users.findOne({ name });\n}" },
  postgresql: { lang: "sql", hello: "SELECT 'Hello, CodeVerse';", var: "SELECT 42;", loop: "SELECT * FROM generate_series(1,3);", fn: "CREATE FUNCTION greet(name TEXT) RETURNS TEXT LANGUAGE sql AS $$ SELECT 'Hello, ' || name; $$;" },
  git: { lang: "bash", hello: "git --version", var: "git config user.name 'Ada'", loop: "git log --oneline -3", fn: "git commit -m 'Hello, CodeVerse'" },
  docker: { lang: "dockerfile", hello: "CMD [\"echo\", \"Hello, CodeVerse\"]", var: "ENV COUNT=42", loop: "RUN for i in 1 2 3; do echo $i; done", fn: "COPY greet.sh /usr/local/bin/greet" },
  linux: { lang: "bash", hello: 'echo "Hello, CodeVerse"', var: "COUNT=42", loop: "for i in 1 2 3; do echo $i; done", fn: "greet() { echo \"Hello, $1\"; }" },
};

const extraTopics = {
  python: ["lists-tuples", "dictionaries", "comprehensions", "decorators", "generators", "modules"],
  java: ["methods", "abstraction", "interfaces", "generics", "streams", "multithreading", "jdbc"],
  javascript: ["dom", "events", "es6", "async", "promises", "fetch", "modules", "error-handling", "closures"],
  typescript: ["types", "interfaces", "unions", "generics", "utility-types", "modules", "decorators", "tsconfig", "react-typescript"],
  c: ["pointers", "structs", "memory", "header-files"],
  cpp: ["pointers", "templates", "stl", "smart-pointers"],
  csharp: ["linq", "async", "dotnet"],
  go: ["maps", "structs", "interfaces", "error-handling", "goroutines", "channels", "packages"],
  rust: ["ownership", "borrowing", "structs", "enums", "pattern-matching", "error-handling", "traits", "lifetimes", "cargo"],
  php: ["composer", "sessions"],
  swift: ["optionals", "swiftui"],
  kotlin: ["null-safety", "coroutines"],
  sql: ["select", "where", "joins", "aggregates", "group-by", "subqueries", "indexes", "transactions", "normalization", "views", "stored-procedures"],
  html: ["elements", "attributes", "semantic-html", "forms", "tables", "media", "accessibility", "seo", "html5-apis"],
  css: ["selectors", "box-model", "flexbox", "grid", "positioning", "responsive", "animations", "transforms"],
  react: ["jsx", "components", "props", "state", "events", "lists", "useeffect", "usememo", "context", "forms", "routing", "performance"],
  nextjs: ["app-router", "server-components", "data-fetching", "layouts", "route-handlers", "metadata", "middleware", "caching", "deployment"],
  nodejs: ["modules", "fs", "http", "express", "middleware", "async", "streams", "authentication", "rest-api"],
  mongodb: ["documents", "crud", "query-operators", "indexes", "aggregation", "schema-design", "replication"],
  postgresql: ["psql", "tables", "select", "joins", "indexes", "json", "transactions", "explain"],
  git: ["init", "commit", "branch", "merge", "rebase", "remote", "stash", "reset", "github"],
  docker: ["images", "containers", "dockerfile", "volumes", "networks", "compose", "multi-stage", "security"],
  linux: ["filesystem", "shell", "permissions", "processes", "networking", "systemd", "package-managers", "ssh", "bash-scripting"],
};

const shared = [
  "introduction", "installation", "syntax", "variables", "data-types", "operators", "input-output",
  "conditions", "loops", "arrays", "strings", "functions", "oop", "classes", "objects",
  "inheritance", "polymorphism", "exception-handling", "file-handling", "collections", "concurrency",
  "projects", "interview-questions", "cheat-sheet", "mcq-quiz", "practice-problems",
];

const titleize = (slug) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

function sectionFor(slug) {
  if (["introduction", "installation"].includes(slug)) return "Getting Started";
  if (["syntax", "variables", "data-types", "operators", "input-output"].includes(slug)) return "Fundamentals";
  if (["conditions", "loops"].includes(slug)) return "Control Flow";
  if (["projects", "mcq-quiz", "practice-problems"].includes(slug)) return "Practice";
  if (slug === "interview-questions") return "Career";
  if (slug === "cheat-sheet") return "Reference";
  if (["oop", "classes", "objects", "inheritance", "polymorphism", "abstraction", "interfaces"].includes(slug)) return "Object Oriented";
  return "Core";
}

function difficultyFor(slug) {
  if (["generics", "streams", "multithreading", "concurrency", "ownership", "lifetimes", "aggregation"].includes(slug)) return "advanced";
  if (["oop", "classes", "async", "indexes", "middleware"].includes(slug)) return "intermediate";
  return "beginner";
}

function lessonMarkdown(language, name, slug, order, code) {
  const title = titleize(slug);
  const fence = code.lang;
  return `---
title: "${title}"
description: "Learn ${title} in ${name} with examples, diagrams, quizzes, and interview questions."
language: "${language}"
slug: "${slug}"
difficulty: "${difficultyFor(slug)}"
order: ${order}
section: "${sectionFor(slug)}"
tags:
  - ${language}
  - ${slug}
---

## Definition

**${title}** in ${name} is a core idea you will use constantly. Treat this lesson as the canonical explanation you can revisit before interviews, projects, and quizzes.

## Explanation

${name} approaches **${title}** with an emphasis on clarity and real-world usage. Start with the mental model, then look at syntax, then run a tiny example. After that, study the flow and the mistakes that usually appear in code reviews.

In production, ${title.toLowerCase()} is less about memorizing trivia and more about choosing the right abstraction. Ask: what data moves, what fails, and how would you test it?

## Syntax

\`\`\`${fence}
${code.fn}
\`\`\`

## Flow Diagram

\`\`\`
Start
  -> Identify the problem that ${title} solves
  -> Write the smallest ${name} example
  -> Run and inspect output
  -> Refactor toward best practices
  -> Add tests / edge cases
End
\`\`\`

## Code Examples

### Minimal example

\`\`\`${fence}
${code.hello}
\`\`\`

### Variables and values

\`\`\`${fence}
${code.var}
\`\`\`

### Iteration / repetition

\`\`\`${fence}
${code.loop}
\`\`\`

## Output

\`\`\`
Hello, CodeVerse
\`\`\`

## Real-world Example

Imagine a ${name} service that onboards users. **${title}** shows up when you validate input, persist a record, and return a response. A junior implementation works for the happy path. A senior implementation also covers empty input, duplicates, logging, and timeouts.

## Best Practices

- Prefer the obvious ${name} idiom over clever tricks.
- Name things after business intent, not after ${title.toLowerCase()} mechanics.
- Keep examples testable and under 20 lines when teaching a concept.
- Document failure modes next to the happy path.
- Re-read official docs when the language ships a new major version.

## Common Mistakes

- Copying syntax from another language without checking ${name} semantics.
- Ignoring edge cases (empty collections, null/none, encoding, locale).
- Skipping error handling because the demo "works on my machine".
- Over-abstracting a beginner topic into a framework too early.

## Interview Questions

1. Define ${title} in ${name} in one sentence.
2. Show a short example and explain the output.
3. What breaks if input is empty or invalid?
4. How does this interact with memory, types, or async behavior?
5. What would you improve in a pull request that misuses ${title.toLowerCase()}?

## Summary

${title} is a building block of ${name}. You learned the definition, syntax, a runnable example, the usual pitfalls, and how interviewers probe the topic. Continue with the next lesson and take the chapter quiz to lock it in.

## Related Topics

- [Practice problems](/docs/${language}/practice-problems)
- [Cheat sheet](/docs/${language}/cheat-sheet)
- [Interview questions](/interview/${language})
- [MCQ quiz](/quiz/${language}/${slug})
`;
}

function topicsFor(language) {
  const extras = extraTopics[language] ?? [];
  const skip = new Set();
  if (language === "c") ["oop", "classes", "objects", "inheritance", "polymorphism"].forEach((s) => skip.add(s));
  if (["sql", "html", "css", "git", "docker", "linux", "mongodb", "postgresql"].includes(language)) {
    ["oop", "classes", "objects", "inheritance", "polymorphism", "arrays", "strings"].forEach((s) => skip.add(s));
  }
  return [...shared.filter((slug) => !skip.has(slug)), ...extras.filter((slug) => !shared.includes(slug))];
}

for (const [language, code] of Object.entries(snippets)) {
  const topics = topicsFor(language);
  const name = language === "cpp" ? "C++" : language === "csharp" ? "C#" : language === "nextjs" ? "Next.js" : language === "nodejs" ? "Node.js" : language[0].toUpperCase() + language.slice(1);
  topics.forEach((slug, index) => {
    const file = join(root, "content", "languages", language, `${slug}.mdx`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, lessonMarkdown(language, name, slug, index + 1, code));
  });
  console.log(`wrote ${topics.length} lessons for ${language}`);
}
