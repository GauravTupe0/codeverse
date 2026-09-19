"use client";

import Link from "next/link";
import type { LessonSummary } from "@/lib/types";

export function MobileDocsNav({ lessons }: { lessons: LessonSummary[] }) {
  return (
    <div className="mb-6 lg:hidden">
      <label className="mb-2 block text-xs uppercase text-muted-foreground">Lessons</label>
      <select
        className="h-10 w-full rounded-xl border bg-background px-3"
        onChange={(event) => {
          if (event.target.value) window.location.href = event.target.value;
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Jump to a lesson
        </option>
        {lessons.map((lesson) => (
          <option key={lesson.slug} value={lesson.href}>
            {lesson.title}
          </option>
        ))}
      </select>
      <Link href="/search" className="mt-2 inline-block text-sm text-cyan-500">
        Open global search
      </Link>
    </div>
  );
}
