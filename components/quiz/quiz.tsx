"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLearning } from "@/hooks/use-learning";
import type { QuizSet } from "@/lib/types";

export function Quiz({ quiz }: { quiz: QuizSet }) {
  const { saveQuiz, state } = useLearning();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const id = `${quiz.language}-${quiz.slug}`;

  const score = useMemo(() => {
    const correct = quiz.questions.filter((q) => answers[q.id] === q.answer).length;
    return Math.round((correct / quiz.questions.length) * 100);
  }, [answers, quiz.questions]);

  function submit() {
    setSubmitted(true);
    saveQuiz(id, score);
  }

  function retry() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          <p className="text-sm text-muted-foreground">10 MCQs · saved high score {state.quizScores[id] ?? 0}%</p>
        </div>
        {submitted ? <p className="text-2xl font-semibold">{score}%</p> : null}
      </div>
      {submitted ? <Progress value={score} /> : null}
      {quiz.questions.map((question, index) => (
        <Card key={question.id}>
          <p className="font-medium">{index + 1}. {question.question}</p>
          <div className="mt-3 space-y-2">
            {question.options.map((option, optionIndex) => {
              const selected = answers[question.id] === optionIndex;
              const correct = submitted && optionIndex === question.answer;
              const wrong = submitted && selected && optionIndex !== question.answer;
              return (
                <label key={option} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 ${correct ? "border-emerald-400 bg-emerald-500/10" : wrong ? "border-red-400 bg-red-500/10" : "border-border"}`}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={selected}
                    onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                    disabled={submitted}
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
          {submitted ? <p className="mt-3 text-sm text-muted-foreground">{question.explanation}</p> : null}
        </Card>
      ))}
      <div className="flex gap-3">
        {!submitted ? <Button onClick={submit}>Show score</Button> : <Button onClick={retry}>Retry quiz</Button>}
      </div>
    </div>
  );
}
