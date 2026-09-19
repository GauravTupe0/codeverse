import { languages } from "@/data/languages";
import { getLessonSummaries } from "@/lib/content";
import { projects } from "@/data/projects";
import { roadmaps } from "@/data/roadmaps";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const urls = [
    "",
    "/languages",
    "/projects",
    "/roadmaps",
    "/playground",
    "/search",
    "/daily-challenge",
    "/leaderboard",
  ].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() }));

  for (const language of languages) {
    urls.push({ url: `${siteConfig.url}/docs/${language.slug}`, lastModified: new Date() });
    urls.push({ url: `${siteConfig.url}/interview/${language.slug}`, lastModified: new Date() });
    for (const lesson of getLessonSummaries(language.slug)) {
      urls.push({ url: `${siteConfig.url}${lesson.href}`, lastModified: new Date() });
    }
  }
  for (const project of projects) urls.push({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: new Date() });
  for (const roadmap of roadmaps) urls.push({ url: `${siteConfig.url}/roadmaps/${roadmap.slug}`, lastModified: new Date() });
  return urls;
}
