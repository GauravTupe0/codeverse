import { createHighlighter } from "shiki";
import { cache } from "react";

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export const getHighlighter = cache(async () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark-default", "github-light"],
      langs: [
        "javascript",
        "typescript",
        "python",
        "java",
        "c",
        "cpp",
        "csharp",
        "go",
        "rust",
        "php",
        "swift",
        "kotlin",
        "sql",
        "html",
        "css",
        "json",
        "bash",
        "tsx",
        "jsx",
        "markdown",
        "yaml",
        "dockerfile",
      ],
    });
  }
  return highlighterPromise;
});

const langAlias: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  py: "python",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  "c++": "cpp",
  "c#": "csharp",
  cs: "csharp",
  rs: "rust",
  kt: "kotlin",
};

export async function highlightCode(code: string, lang = "tsx") {
  const highlighter = await getHighlighter();
  const language = langAlias[lang] ?? lang;
  const loaded = highlighter.getLoadedLanguages();
  const resolved = loaded.includes(language as never) ? language : "javascript";
  return highlighter.codeToHtml(code, {
    lang: resolved,
    themes: {
      light: "github-light",
      dark: "github-dark-default",
    },
  });
}
