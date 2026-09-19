import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { MobileDocsNav } from "@/components/layout/mobile-docs-nav";
import { getLessonSummaries } from "@/lib/content";
import { languages } from "@/data/languages";
import { notFound } from "next/navigation";

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  if (!languages.some((item) => item.slug === language)) notFound();
  const lessons = getLessonSummaries(language);
  return (
    <div className="mx-auto flex max-w-[1600px]">
      <DocsSidebar language={language} lessons={lessons} />
      <div className="min-w-0 flex-1 px-4 py-8 lg:px-10">
        <MobileDocsNav lessons={lessons} />
        {children}
      </div>
    </div>
  );
}
