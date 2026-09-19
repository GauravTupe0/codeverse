import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { languages } from "@/data/languages";
import { getLesson, getLessonSummaries } from "@/lib/content";
import { Breadcrumb } from "@/components/docs/breadcrumb";
import { LessonActions } from "@/components/docs/lesson-actions";
import { LessonNotes } from "@/components/docs/lesson-notes";
import { LessonPager } from "@/components/docs/lesson-pager";
import { MdxContent } from "@/components/docs/mdx-content";
import { TableOfContents } from "@/components/docs/tableofcontents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const params: { language: string; slug: string }[] = [];
  for (const language of languages) {
    for (const lesson of getLessonSummaries(language.slug)) {
      params.push({ language: language.slug, slug: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ language: string; slug: string }> }): Promise<Metadata> {
  const { language, slug } = await params;
  const lesson = getLesson(language, slug);
  if (!lesson) return {};
  return { title: `${lesson.title} in ${language}`, description: lesson.description };
}

export default async function LessonPage({ params }: { params: Promise<{ language: string; slug: string }> }) {
  const { language, slug } = await params;
  const lesson = getLesson(language, slug);
  const lessons = getLessonSummaries(language);
  const meta = languages.find((item) => item.slug === language);
  if (!lesson || !meta) notFound();

  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: `/docs/${language}`, label: meta.name }, { label: lesson.title }]} />
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge>{lesson.difficulty}</Badge>
          <Badge className="inline-flex items-center gap-1"><Clock className="size-3" /> {lesson.readingTime} min read</Badge>
          <Badge>{lesson.section}</Badge>
        </div>
        <h1 className="text-4xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-muted-foreground">{lesson.description}</p>
        <div className="mt-6">
          <LessonActions href={lesson.href} title={`${meta.name}: ${lesson.title}`} language={language} />
        </div>
        <div className="mt-8">
          <MdxContent source={lesson.content} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href={`/quiz/${language}/${slug}`}>Take 10-question quiz</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/interview/${language}`}>Interview bank</Link>
          </Button>
        </div>
        <LessonNotes href={lesson.href} />
        <LessonPager lessons={lessons} slug={slug} />
      </div>
      <TableOfContents headings={lesson.headings} />
    </div>
  );
}
