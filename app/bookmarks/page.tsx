"use client";

import Link from "next/link";
import { useLearning } from "@/hooks/use-learning";

export default function BookmarksPage() {
  const { state } = useLearning();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold">Bookmarks</h1>
      <ul className="mt-6 space-y-2">
        {state.bookmarks.length === 0 ? <p className="text-muted-foreground">No bookmarks yet.</p> : null}
        {state.bookmarks.map((href) => (
          <li key={href}><Link className="text-cyan-500" href={href}>{href}</Link></li>
        ))}
      </ul>
    </div>
  );
}
