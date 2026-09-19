"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { getAllSearchItems } from "@/lib/client-search";
import { languages } from "@/data/languages";
import { useDebouncedValue } from "@/hooks/use-debounce";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [topic, setTopic] = useState("all");
  const debounced = useDebouncedValue(query);
  const items = useMemo(() => getAllSearchItems(), []);
  const fuse = useMemo(() => new Fuse(items, { keys: ["title", "description", "topic"], threshold: 0.4 }), [items]);
  const results = (debounced ? fuse.search(debounced).map((r) => r.item) : items)
    .filter((item) => language === "all" || item.language === language)
    .filter((item) => difficulty === "all" || item.difficulty === difficulty)
    .filter((item) => topic === "all" || item.topic === topic)
    .slice(0, 40);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">Search</h1>
      <p className="mt-2 text-muted-foreground">Instant search across languages, lessons, projects, and roadmaps.</p>
      <Input className="mt-6" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try Java loops, React hooks, Docker..." />
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <select className="h-10 rounded-xl border bg-background px-3" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="all">All languages</option>
          {languages.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
        <select className="h-10 rounded-xl border bg-background px-3" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="all">All difficulties</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <select className="h-10 rounded-xl border bg-background px-3" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="all">All topics</option>
          <option value="Fundamentals">Fundamentals</option>
          <option value="Control Flow">Control Flow</option>
          <option value="Practice">Practice</option>
        </select>
      </div>
      <div className="mt-6 space-y-3">
        {results.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-2xl border border-border p-4 hover:bg-accent">
            <p className="text-xs uppercase text-muted-foreground">{item.type}</p>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
