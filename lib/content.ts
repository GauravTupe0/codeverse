import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { curricula } from "@/data/curricula";
import { languages } from "@/data/languages";
import type { LessonDocument, LessonFrontmatter, LessonSummary, SearchItem } from "@/lib/types";
import { readingTimeFromMarkdown } from "@/lib/utils";

const CONTENT_ROOT = path.join(process.cwd(), "content", "languages");

function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function extractHeadings(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => /^#{2,3} /.test(line))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3} /, "").trim();
      return { id: headingId(text), text, level };
    });
}

export const getLanguageSlugs = cache(() => languages.map((language) => language.slug));

export const getLessonSummaries = cache((language: string): LessonSummary[] => {
  const dir = path.join(CONTENT_ROOT, language);
  if (!fs.existsSync(dir)) {
    return (curricula[language] ?? []).map((topic, index) => ({
      title: topic.title,
      description: `${topic.title} in ${language}`,
      language,
      slug: topic.slug,
      difficulty: topic.difficulty,
      order: index + 1,
      section: topic.section,
      tags: [language, topic.section.toLowerCase()],
      href: `/docs/${language}/${topic.slug}`,
      readingTime: 6,
    }));
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as LessonFrontmatter;
      return {
        ...frontmatter,
        href: `/docs/${frontmatter.language}/${frontmatter.slug}`,
        readingTime: readingTimeFromMarkdown(content),
      };
    })
    .sort((a, b) => a.order - b.order);
});

export const getLesson = cache((language: string, slug: string): LessonDocument | null => {
  const file = path.join(CONTENT_ROOT, language, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as LessonFrontmatter;
  return {
    ...frontmatter,
    content,
    href: `/docs/${language}/${slug}`,
    readingTime: readingTimeFromMarkdown(content),
    headings: extractHeadings(content),
  };
});

export const getAllSearchItems = cache((): SearchItem[] => {
  const items: SearchItem[] = languages.map((language) => ({
    title: language.name,
    href: `/docs/${language.slug}`,
    type: "language",
    language: language.slug,
    description: language.description,
  }));

  for (const language of languages) {
    for (const lesson of getLessonSummaries(language.slug)) {
      items.push({
        title: `${language.name}: ${lesson.title}`,
        href: lesson.href,
        type: "lesson",
        language: language.slug,
        difficulty: lesson.difficulty,
        topic: lesson.section,
        description: lesson.description,
      });
    }
    items.push({
      title: `${language.name} interview questions`,
      href: `/interview/${language.slug}`,
      type: "interview",
      language: language.slug,
      description: `Top interview questions for ${language.name}`,
    });
  }

  return items;
});
