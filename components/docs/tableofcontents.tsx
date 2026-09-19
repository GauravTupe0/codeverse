export function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  if (!headings.length) return null;
  return (
    <nav className="sticky top-24 hidden w-60 shrink-0 xl:block">
      <p className="mb-3 text-sm font-semibold">On this page</p>
      <ul className="space-y-2 border-l border-border pl-3 text-sm text-muted-foreground">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-3" : ""}>
            <a href={`#${heading.id}`} className="hover:text-foreground">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
