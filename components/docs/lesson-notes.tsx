"use client";

import { useLearning } from "@/hooks/use-learning";
import { Button } from "@/components/ui/button";

export function LessonNotes({ href }: { href: string }) {
  const { state, saveNote } = useLearning();
  const value = state.notes[href] ?? "";

  function download() {
    const blob = new Blob([value || "No notes yet."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codeverse-notes.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="mt-10 rounded-2xl border border-border bg-card/40 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your notes</h2>
        <Button variant="outline" size="sm" onClick={download}>Download notes</Button>
      </div>
      <textarea
        className="min-h-32 w-full rounded-xl border border-input bg-background p-3 text-sm outline-none"
        placeholder="Write private notes for this lesson..."
        value={value}
        onChange={(e) => saveNote(href, e.target.value)}
      />
    </section>
  );
}
