import { notFound } from "next/navigation";
import { Quiz } from "@/components/quiz/quiz";
import { getQuiz } from "@/data/quizzes";
import { getLanguage } from "@/data/languages";

export default async function QuizPage({ params }: { params: Promise<{ language: string; slug: string }> }) {
  const { language, slug } = await params;
  const quiz = getQuiz(language, slug);
  if (!quiz || !getLanguage(language)) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Quiz quiz={quiz} />
    </div>
  );
}
