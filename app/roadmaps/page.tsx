import { RoadmapCard } from "@/components/cards/roadmap-card";
import { roadmaps } from "@/data/roadmaps";

export const metadata = { title: "Roadmaps" };

export default function RoadmapsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">Developer roadmaps</h1>
      <p className="mt-3 text-muted-foreground">Pick a career path and follow a sequenced learning graph.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.slug} roadmap={roadmap} />
        ))}
      </div>
    </div>
  );
}
