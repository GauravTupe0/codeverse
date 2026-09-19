import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LessonSummary } from "@/lib/types";

export function LessonPager({ lessons, slug }: { lessons: LessonSummary[]; slug: string }) {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  const prev = lessons[index - 1];
  const next = lessons[index + 1];
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className="rounded-2xl border border-border p-4 hover:bg-accent">
          <p className="flex items-center text-xs text-muted-foreground"><ChevronLeft className="size-3" /> Previous</p>
          <p className="font-medium">{prev.title}</p>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={next.href} className="rounded-2xl border border-border p-4 text-right hover:bg-accent">
          <p className="flex items-center justify-end text-xs text-muted-foreground">Next <ChevronRight className="size-3" /></p>
          <p className="font-medium">{next.title}</p>
        </Link>
      ) : null}
    </div>
  );
}
