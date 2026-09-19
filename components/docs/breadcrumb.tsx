import Link from "next/link";

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href} className="hover:text-foreground">{item.label}</Link> : item.label}
          {index < items.length - 1 ? <span className="mx-2">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
