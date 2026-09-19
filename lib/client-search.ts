import { languages } from "@/data/languages";
import { roadmaps } from "@/data/roadmaps";
import { projects } from "@/data/projects";
import type { SearchItem } from "@/lib/types";

export function getAllSearchItems(): SearchItem[] {
  const items: SearchItem[] = languages.map((language) => ({
    title: language.name,
    href: `/docs/${language.slug}`,
    type: "language",
    language: language.slug,
    description: language.description,
  }));
  for (const roadmap of roadmaps) {
    items.push({ title: roadmap.title, href: `/roadmaps/${roadmap.slug}`, type: "roadmap", description: roadmap.description });
  }
  for (const project of projects) {
    items.push({
      title: project.title,
      href: `/projects/${project.slug}`,
      type: "project",
      language: project.language,
      difficulty: project.level === "industry" ? "advanced" : project.level,
      description: project.description,
    });
  }
  return items;
}
