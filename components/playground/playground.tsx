"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const starters: Record<string, string> = {
  javascript: `function greet(name) {
  return \`Hello, \${name}\`;
}
console.log(greet("CodeVerse"));`,
  python: `def greet(name):
    return f"Hello, {name}"
print(greet("CodeVerse"))`,
  java: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello, CodeVerse");
  }
}`,
};

export function Playground() {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(starters.javascript);
  const [output, setOutput] = useState("");

  function run() {
    if (lang !== "javascript") {
      setOutput("Live execution is enabled for JavaScript. Other languages show documentation-backed examples.");
      return;
    }
    const logs: string[] = [];
    const original = console.log;
    console.log = (...args: unknown[]) => logs.push(args.map(String).join(" "));
    try {
      const result = eval(code);
      if (result !== undefined) logs.push(String(result));
      setOutput(logs.join("\n") || "Program ran with no output.");
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Error");
    } finally {
      console.log = original;
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div>
        <Tabs
          value={lang}
          onValueChange={(value) => {
            setLang(value);
            setCode(starters[value] ?? starters.javascript);
          }}
        >
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
          </TabsList>
          <TabsContent value={lang}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="min-h-[360px] w-full rounded-2xl border border-border bg-zinc-950 p-4 font-mono text-sm text-zinc-100"
              spellCheck={false}
            />
          </TabsContent>
        </Tabs>
        <Button className="mt-3" onClick={run}>Run</Button>
      </div>
      <pre className="min-h-[360px] rounded-2xl border border-border bg-zinc-900 p-4 text-sm text-emerald-300">{output || "Output will appear here."}</pre>
    </div>
  );
}
