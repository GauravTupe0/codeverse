import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { LanguageMeta } from "@/lib/types";

export function LanguageCard({ language }: { language: LanguageMeta }) {
  return (
    <Link href={`/docs/${language.slug}`} className="group">
      <Card className="h-full transition hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl text-sm font-bold text-white" style={{ background: language.color }}>
            {language.icon}
          </span>
          <div>
            <CardTitle>{language.name}</CardTitle>
            <p className="text-xs text-muted-foreground">{language.tagline}</p>
          </div>
        </div>
        <CardDescription>{language.description}</CardDescription>
      </Card>
    </Link>
  );
}
