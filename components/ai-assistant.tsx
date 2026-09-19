"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAllSearchItems } from "@/lib/client-search";

export function AiAssistant() {
  const [query, setQuery] = useState("");
  const [asked, setAsked] = useState("");
  const items = useMemo(() => getAllSearchItems(), []);
  const matches = items.filter((item) => asked && `${item.title} ${item.description}`.toLowerCase().includes(asked.toLowerCase())).slice(0, 5);

  return (
    <Card className="fixed bottom-4 right-4 z-30 hidden w-80 md:block">
      <p className="text-sm font-semibold">CodeVerse Assistant</p>
      <p className="mt-1 text-xs text-muted-foreground">Ask about a language or topic. Answers are sourced from local docs.</p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setAsked(query);
        }}
      >
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="How do Java loops work?" />
        <Button type="submit" size="sm">Ask</Button>
      </form>
      {asked ? (
        <div className="mt-3 space-y-2 text-sm">
          {matches.length ? matches.map((item) => (
            <a key={item.href} href={item.href} className="block rounded-lg bg-muted px-2 py-1">{item.title}</a>
          )) : <p>I could not find a matching lesson. Try Python, Java, or React.</p>}
        </div>
      ) : null}
    </Card>
  );
}
