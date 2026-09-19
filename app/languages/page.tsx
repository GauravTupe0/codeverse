import { LanguageCard } from "@/components/cards/language-card";
import { languages } from "@/data/languages";

export const metadata = { title: "Languages" };

export default function LanguagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">Languages & technologies</h1>
      <p className="mt-3 text-muted-foreground">Every track includes documentation, quizzes, projects, and interview prep.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((language) => (
          <LanguageCard key={language.slug} language={language} />
        ))}
      </div>
    </div>
  );
}
