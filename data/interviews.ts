import type { InterviewQuestion } from "@/lib/types";

const levels = ["beginner", "intermediate", "advanced", "company", "coding", "hr"] as const;

function makeQuestions(language: string): InterviewQuestion[] {
  const bank: InterviewQuestion[] = [];
  let i = 1;
  for (const level of levels) {
    const count = level === "beginner" || level === "intermediate" || level === "advanced" ? 22 : 12;
    for (let n = 1; n <= count; n += 1) {
      bank.push({
        id: `${language}-${level}-${n}`,
        level,
        question: questionFor(language, level, n),
        answer: answerFor(language, level, n),
      });
      i += 1;
    }
  }
  return bank.slice(0, 102);
}

function questionFor(language: string, level: string, n: number) {
  const name = language.toUpperCase();
  switch (level) {
    case "beginner":
      return `What is a core beginner concept #${n} in ${name}?`;
    case "intermediate":
      return `How would you apply intermediate ${name} pattern #${n} in production?`;
    case "advanced":
      return `Explain advanced ${name} topic #${n} and its trade-offs.`;
    case "company":
      return `Company-style ${name} question #${n}: design, debugging, or scale.`;
    case "coding":
      return `Write a ${name} solution for coding problem #${n}.`;
    default:
      return `HR question #${n} for a ${name} developer interview.`;
  }
}

function answerFor(language: string, level: string, n: number) {
  return `A strong answer covers definition, a concrete ${language} example, edge cases, and why this matters in interviews (item ${n}, ${level}). Prefer clarity over jargon, mention complexity when relevant, and close with a practical takeaway.`;
}

export const interviewBank: Record<string, InterviewQuestion[]> = {};

export function getInterviewQuestions(language: string) {
  if (!interviewBank[language]) {
    interviewBank[language] = makeQuestions(language);
  }
  return interviewBank[language];
}
