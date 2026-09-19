import { highlightCode } from "@/lib/highlight";
import { CodeBlock } from "@/components/docs/code-block";

export async function HighlightedCode({ code, lang, filename }: { code: string; lang?: string; filename?: string }) {
  const html = await highlightCode(code, lang);
  return <CodeBlock html={html} code={code} filename={filename} />;
}
