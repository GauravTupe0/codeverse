import type { QuizSet } from "@/lib/types";
import { getCurriculum } from "@/data/curricula";

function questionsFor(language: string, slug: string, title: string) {
  return Array.from({ length: 10 }, (_, index) => {
    const n = index + 1;
    return {
      id: `${language}-${slug}-q${n}`,
      question: `Which statement about ${title} in ${language.toUpperCase()} is most accurate? (Q${n})`,
      options: [
        `${title} can be ignored in production systems.`,
        `${title} is a core concept you should understand and apply carefully.`,
        `${title} only exists in outdated documentation.`,
        `${title} cannot be demonstrated with code.`,
      ],
      answer: 1,
      explanation: `${title} is a foundational ${language} topic. The best answers explain the concept, show a small example, and call out a common pitfall.`,
    };
  });
}

export function getQuiz(language: string, slug: string): QuizSet | null {
  const topic = getCurriculum(language).find((item) => item.slug === slug);
  if (!topic) return null;
  return {
    language,
    slug,
    title: `${topic.title} Quiz`,
    questions: questionsFor(language, slug, topic.title),
  };
}
