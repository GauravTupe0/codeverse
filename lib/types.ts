export type Difficulty = "beginner" | "intermediate" | "advanced";

export type LanguageCategory =
  | "language"
  | "web"
  | "framework"
  | "database"
  | "tooling"
  | "systems";

export interface LanguageMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  category: LanguageCategory;
  popularity: number;
  icon: string;
}

export interface LessonFrontmatter {
  title: string;
  description: string;
  language: string;
  slug: string;
  difficulty: Difficulty;
  order: number;
  section: string;
  tags: string[];
}

export interface LessonSummary extends LessonFrontmatter {
  href: string;
  readingTime: number;
}

export interface LessonDocument extends LessonSummary {
  content: string;
  headings: { id: string; text: string; level: number }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface QuizSet {
  language: string;
  slug: string;
  title: string;
  questions: QuizQuestion[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  level: Difficulty | "company" | "coding" | "hr";
}

export interface ProjectMeta {
  slug: string;
  title: string;
  language: string;
  level: Difficulty | "industry";
  description: string;
  features: string[];
  folderStructure: string[];
  code: string;
  future: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  optional?: boolean;
}

export interface Roadmap {
  slug: string;
  title: string;
  description: string;
  color: string;
  nodes: RoadmapNode[][];
}

export interface SearchItem {
  title: string;
  href: string;
  type: "lesson" | "language" | "project" | "roadmap" | "interview";
  language?: string;
  difficulty?: Difficulty;
  topic?: string;
  description: string;
}
