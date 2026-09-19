import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { HighlightedCode } from "@/components/docs/highlighted-code";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex gap-2">
        <Badge>{project.language}</Badge>
        <Badge>{project.level}</Badge>
      </div>
      <h1 className="mt-3 text-4xl font-bold">{project.title}</h1>
      <p className="mt-3 text-muted-foreground">{project.description}</p>
      <h2 className="mt-8 text-2xl font-semibold">Features</h2>
      <ul className="mt-3 list-disc pl-6">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <h2 className="mt-8 text-2xl font-semibold">Folder structure</h2>
      <ul className="mt-3 list-disc pl-6 font-mono text-sm">{project.folderStructure.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2 className="mt-8 text-2xl font-semibold">Code</h2>
      <HighlightedCode code={project.code} lang={project.language === "sql" || project.language === "docker" ? project.language : "javascript"} filename="starter" />
      <h2 className="mt-8 text-2xl font-semibold">Screenshots</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="grid h-40 place-items-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">UI screenshot placeholder</div>
        <div className="grid h-40 place-items-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">Architecture placeholder</div>
      </div>
      <h2 className="mt-8 text-2xl font-semibold">Future improvements</h2>
      <ul className="mt-3 list-disc pl-6">{project.future.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
