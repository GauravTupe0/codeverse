"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  html,
  code,
  filename,
}: {
  html: string;
  code: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="group relative my-4 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-zinc-400">
        <span>{filename ?? "example"}</span>
        <button onClick={copy} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-white/10" aria-label="Copy code">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className={cn("overflow-x-auto p-4 text-sm [&_pre]:bg-transparent [&_pre]:p-0")} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
