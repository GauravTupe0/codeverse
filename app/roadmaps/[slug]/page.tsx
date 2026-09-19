import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoadmap, roadmaps } from "@/data/roadmaps";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return roadmaps.map((roadmap) => ({ slug: roadmap.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmap(slug);
  if (!roadmap) return {};
  return { title: roadmap.title, description: roadmap.description };
}

export default async function RoadmapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const roadmap = getRoadmap(slug);
  if (!roadmap) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold">{roadmap.title}</h1>
      <p className="mt-3 text-muted-foreground">{roadmap.description}</p>
      <div className="mt-10 space-y-8">
        {roadmap.nodes.map((row, index) => (
          <div key={index} className="relative">
            <div className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">Stage {index + 1}</div>
            <div className="grid gap-3 md:grid-cols-2">
              {row.map((node) => (
                <Card key={node.id}>
                  <p className="font-semibold">{node.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{node.description}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
