import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectMeta } from "@/lib/types";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="h-full transition hover:-translate-y-1">
        <div className="mb-3 flex gap-2">
          <Badge>{project.language}</Badge>
          <Badge>{project.level}</Badge>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
      </Card>
    </Link>
  );
}
