import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { LanguageCard } from "@/components/cards/language-card";
import { RoadmapCard } from "@/components/cards/roadmap-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { languages } from "@/data/languages";
import { roadmaps } from "@/data/roadmaps";
import { faqs, features, testimonials } from "@/data/marketing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Popular Languages</h2>
            <p className="text-muted-foreground">Start with a language track and keep your progress as you go.</p>
          </div>
          <Link href="/languages" className="text-sm text-cyan-500">View all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((language) => (
            <LanguageCard key={language.slug} language={language} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Roadmaps</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.slug} roadmap={roadmap} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Top Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-lg">“{item.quote}”</p>
              <p className="mt-4 text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">FAQ</h2>
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`q-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
