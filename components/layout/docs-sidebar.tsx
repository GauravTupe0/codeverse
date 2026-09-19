"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Bookmark, ChevronDown, Clock, Heart, Search } from "lucide-react";
import { languages } from "@/data/languages";
import { getCurriculum } from "@/data/curricula";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLearning } from "@/hooks/use-learning";
import { cn } from "@/lib/utils";
import type { LessonSummary } from "@/lib/types";

export function DocsSidebar({
  language,
  lessons,
}: {
  language: string;
  lessons: LessonSummary[];
}) {
  const pathname = usePathname();
  const current = pathname.split("/").filter(Boolean).pop();
  const { state, toggle } = useLearning();
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const lang = languages.find((item) => item.slug === language);
  const curriculum = getCurriculum(language);
  const completed = lessons.filter((lesson) => state.completed.includes(lesson.href)).length;
  const percent = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;

  const sections = useMemo(() => {
    const map = new Map<string, LessonSummary[]>();
    for (const lesson of lessons.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))) {
      const list = map.get(lesson.section) ?? [];
      list.push(lesson);
      map.set(lesson.section, list);
    }
    return Array.from(map.entries());
  }, [lessons, query]);

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-border bg-background/60 lg:block">
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Documentation</p>
          <p className="text-lg font-semibold">{lang?.name}</p>
        </div>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search topics" aria-label="Search topics" />
        <div>
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} />
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link className="rounded-full bg-muted px-2 py-1" href="/bookmarks">Bookmarks</Link>
          <Link className="rounded-full bg-muted px-2 py-1" href="/notes">Notes</Link>
          <Link className="rounded-full bg-muted px-2 py-1" href={`/interview/${language}`}>Interview</Link>
        </div>
      </div>
      <ScrollArea className="h-[calc(100%-210px)] px-2 pb-6">
        {state.favorites.length ? (
          <div className="mb-3 px-2">
            <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">Favorites</p>
            {languages.filter((item) => state.favorites.includes(item.slug)).map((item) => (
              <Link key={item.slug} href={`/docs/${item.slug}`} className="block rounded-lg px-2 py-1 text-sm hover:bg-accent">
                {item.name}
              </Link>
            ))}
          </div>
        ) : null}
        {state.recentlyViewed.length ? (
          <div className="mb-3 px-2">
            <p className="mb-1 flex items-center gap-1 text-xs font-semibold uppercase text-muted-foreground">
              <Clock className="size-3" /> Recently viewed
            </p>
            {state.recentlyViewed.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="block truncate rounded-lg px-2 py-1 text-sm hover:bg-accent">
                {item.title}
              </Link>
            ))}
          </div>
        ) : null}
        {sections.map(([section, items]) => (
          <div key={section} className="mb-2">
            <button
              className="flex w-full items-center justify-between px-2 py-1 text-xs font-semibold uppercase text-muted-foreground"
              onClick={() => setCollapsed((c) => ({ ...c, [section]: !c[section] }))}
            >
              {section}
              <ChevronDown className={cn("size-3 transition", collapsed[section] && "-rotate-90")} />
            </button>
            {!collapsed[section] &&
              items.map((lesson) => (
                <div key={lesson.slug} className="group flex items-center">
                  <Link
                    href={lesson.href}
                    className={cn(
                      "flex-1 rounded-lg px-2 py-1.5 text-sm hover:bg-accent",
                      current === lesson.slug && "bg-accent font-medium",
                    )}
                  >
                    {lesson.title}
                  </Link>
                  <button className="opacity-0 group-hover:opacity-100" onClick={() => toggle("bookmarks", lesson.href)} aria-label="Bookmark">
                    <Bookmark className={cn("size-3.5", state.bookmarks.includes(lesson.href) && "fill-current")} />
                  </button>
                </div>
              ))}
          </div>
        ))}
        <div className="mt-4 px-2 text-xs text-muted-foreground">{curriculum.length} lessons in catalog</div>
        <button className="mx-2 mt-2 flex items-center gap-2 text-sm" onClick={() => toggle("favorites", language)}>
          <Heart className={cn("size-4", state.favorites.includes(language) && "fill-red-500 text-red-500")} />
          Favorite language
        </button>
        <Link href="/search" className="mx-2 mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Search className="size-4" /> Global search
        </Link>
      </ScrollArea>
    </aside>
  );
}
