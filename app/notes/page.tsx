"use client";

import Link from "next/link";
import { useLearning } from "@/hooks/use-learning";
import { Button } from "@/components/ui/button";

export default function NotesPage() {
  const { state } = useLearning();
  const entries = Object.entries(state.notes).filter(([, note]) => note.trim());

  function downloadAll() {
    const text = entries.map(([href, note]) => `# ${href}\n${note}`).join("\n\n");
    const blob = new Blob([text || "No notes"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codeverse-notes.txt";
    a.click();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Notes</h1>
        <Button onClick={downloadAll} variant="outline">Download PDF-ready notes</Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Print this page to save a PDF. Notes stay on this device for offline reading.</p>
      <div className="mt-6 space-y-4">
        {entries.map(([href, note]) => (
          <article key={href} className="rounded-2xl border p-4">
            <Link href={href} className="text-sm text-cyan-500">{href}</Link>
            <pre className="mt-2 whitespace-pre-wrap text-sm">{note}</pre>
          </article>
        ))}
      </div>
    </div>
  );
}
