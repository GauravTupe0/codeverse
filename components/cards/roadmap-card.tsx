import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { Roadmap } from "@/lib/types";

export function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  return (
    <Link href={`/roadmaps/${roadmap.slug}`}>
      <Card className="h-full transition hover:-translate-y-1">
        <div className="mb-3 h-1.5 w-16 rounded-full" style={{ background: roadmap.color }} />
        <CardTitle>{roadmap.title}</CardTitle>
        <CardDescription className="mt-2">{roadmap.description}</CardDescription>
      </Card>
    </Link>
  );
}
