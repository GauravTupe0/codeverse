import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLanguage } from "@/data/languages";
import { getLessonSummaries } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: Promise<{ language: string }> }): Promise<Metadata> {
  const { language } = await params;
  const meta = getLanguage(language);
  if (!meta) return {};
  return { title: `${meta.name} documentation`, description: meta.description };
}

export default async function LanguageDocsPage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params;
  const meta = getLanguage(language);
  if (!meta) notFound();
  const lessons = getLessonSummaries(language);
  const first = lessons[0];
  return (
    <div>
      <Badge>{meta.category}</Badge>
      <h1 className="mt-3 text-4xl font-bold">{meta.name} documentation</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{meta.description}</p>
      <div className="mt-6 flex gap-3">
        {first ? (
          <Button asChild>
            <Link href={first.href}>Start {meta.name}</Link>
          </Button>
        ) : null}
        <Button asChild variant="outline">
          <Link href={`/interview/${language}`}>Interview questions</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <Link key={lesson.slug} href={lesson.href}>
            <Card>
              <div className="mb-2 flex gap-2">
                <Badge>{lesson.section}</Badge>
                <Badge>{lesson.difficulty}</Badge>
              </div>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription className="mt-1">{lesson.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
