import type { ProjectMeta } from "@/lib/types";

export const projects: ProjectMeta[] = [
  {
    slug: "python-todo-cli",
    title: "TaskForge CLI",
    language: "python",
    level: "beginner",
    description: "A command-line task manager that stores todos in JSON and supports filters.",
    features: ["Add/complete/delete tasks", "Due dates", "Priority tags", "JSON persistence"],
    folderStructure: ["taskforge/", "taskforge/cli.py", "taskforge/store.py", "tests/", "README.md"],
    code: `import json
from pathlib import Path

DB = Path("tasks.json")

def load():
    if not DB.exists():
        return []
    return json.loads(DB.read_text())

def save(tasks):
    DB.write_text(json.dumps(tasks, indent=2))

def add(title: str):
    tasks = load()
    tasks.append({"title": title, "done": False})
    save(tasks)
`,
    future: ["SQLite backend", "Recurring tasks", "TUI with rich"],
  },
  {
    slug: "js-weather-dashboard",
    title: "SkyBoard",
    language: "javascript",
    level: "intermediate",
    description: "A weather dashboard that fetches forecasts and caches results in localStorage.",
    features: ["City search", "5-day forecast", "Unit toggle", "Cached responses"],
    folderStructure: ["index.html", "styles.css", "app.js", "lib/api.js"],
    code: `async function getWeather(city) {
  const cached = localStorage.getItem(city);
  if (cached) return JSON.parse(cached);
  const res = await fetch(\`/api/weather?q=\${city}\`);
  const data = await res.json();
  localStorage.setItem(city, JSON.stringify(data));
  return data;
}
`,
    future: ["Geolocation", "Charts", "PWA offline mode"],
  },
  {
    slug: "java-library-api",
    title: "Athena Library API",
    language: "java",
    level: "advanced",
    description: "A REST API for a library with books, members, and borrow transactions.",
    features: ["CRUD books", "Borrow/return flow", "Validation", "In-memory repository"],
    folderStructure: ["src/main/java/athena/", "Book.java", "LibraryService.java", "LibraryController.java"],
    code: `public class Book {
  private final String isbn;
  private final String title;
  private boolean available = true;

  public Book(String isbn, String title) {
    this.isbn = isbn;
    this.title = title;
  }
}
`,
    future: ["Spring Boot + JPA", "JWT auth", "Search with Elasticsearch"],
  },
  {
    slug: "next-docs-clone",
    title: "DocsKit",
    language: "nextjs",
    level: "industry",
    description: "A documentation starter with MDX, search, and progress tracking.",
    features: ["MDX lessons", "Command palette", "Progress store", "SEO metadata"],
    folderStructure: ["app/", "content/", "components/", "lib/content.ts"],
    code: `export async function getLesson(language: string, slug: string) {
  const file = await fs.readFile(\`content/languages/\${language}/\${slug}.mdx\`, "utf8");
  return matter(file);
}
`,
    future: ["Auth and teams", "Comments", "AI summaries"],
  },
  {
    slug: "react-quiz-app",
    title: "QuizForge",
    language: "react",
    level: "beginner",
    description: "A timed multiple-choice quiz with score review and explanations.",
    features: ["10 questions", "Timer", "Scoreboard", "Retry"],
    folderStructure: ["src/App.tsx", "src/components/Quiz.tsx", "src/data/questions.ts"],
    code: `export function score(answers: number[], correct: number[]) {
  return answers.filter((answer, i) => answer === correct[i]).length;
}
`,
    future: ["Backend persistence", "Leaderboard", "Question bank CMS"],
  },
  {
    slug: "sql-analytics",
    title: "Retail Insights",
    language: "sql",
    level: "intermediate",
    description: "A set of analytics queries for an e-commerce schema.",
    features: ["Revenue by month", "Top products", "Cohorts", "Funnel"],
    folderStructure: ["schema.sql", "queries/revenue.sql", "queries/cohorts.sql"],
    code: `SELECT date_trunc('month', created_at) AS month,
       SUM(total) AS revenue
FROM orders
WHERE status = 'paid'
GROUP BY 1
ORDER BY 1;
`,
    future: ["dbt models", "Materialized views", "Looker dashboards"],
  },
  {
    slug: "docker-compose-stack",
    title: "ShipStack",
    language: "docker",
    level: "advanced",
    description: "A Compose stack with API, Postgres, Redis, and Nginx.",
    features: ["Multi-service compose", "Healthchecks", "Named volumes", "Reverse proxy"],
    folderStructure: ["docker-compose.yml", "api/Dockerfile", "nginx/nginx.conf"],
    code: `services:
  api:
    build: ./api
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
`,
    future: ["Kubernetes manifests", "Observability sidecar", "Secrets manager"],
  },
  {
    slug: "go-url-shortener",
    title: "Shortlink",
    language: "go",
    level: "intermediate",
    description: "A URL shortener with in-memory storage and HTTP handlers.",
    features: ["Create short URLs", "Redirect", "Hit counts", "JSON API"],
    folderStructure: ["cmd/server/main.go", "internal/store/store.go", "internal/http/handlers.go"],
    code: `func (s *Store) Put(url string) string {
  id := strconv.FormatUint(uint64(len(s.items)+1), 36)
  s.items[id] = url
  return id
}
`,
    future: ["Postgres store", "Rate limiting", "Custom aliases"],
  },
];
