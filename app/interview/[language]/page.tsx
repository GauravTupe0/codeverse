import { notFound } from "next/navigation";
import { getInterviewQuestions } from "@/data/interviews";
import { getLanguage } from "@/data/languages";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const levels = ["beginner", "intermediate", "advanced", "company", "coding", "hr"] as const;

export default async function InterviewPage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params;
  const meta = getLanguage(language);
  if (!meta) notFound();
  const questions = getInterviewQuestions(language);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Badge>Top 100</Badge>
      <h1 className="mt-3 text-4xl font-bold">{meta.name} Interview Questions</h1>
      <p className="mt-3 text-muted-foreground">Beginner, intermediate, advanced, company-style, coding, and HR questions.</p>
      <Tabs defaultValue="beginner" className="mt-8">
        <TabsList className="flex h-auto flex-wrap">
          {levels.map((level) => (
            <TabsTrigger key={level} value={level} className="capitalize">{level}</TabsTrigger>
          ))}
        </TabsList>
        {levels.map((level) => (
          <TabsContent key={level} value={level}>
            <Accordion type="single" collapsible>
              {questions.filter((item) => item.level === level).map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
