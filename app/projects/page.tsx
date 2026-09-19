import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const groups = ["beginner", "intermediate", "advanced", "industry"] as const;
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 text-muted-foreground">Build real software with guided briefs from beginner to industry scope.</p>
      {groups.map((level) => (
        <section key={level} className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold capitalize">{level} projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.level === level).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
