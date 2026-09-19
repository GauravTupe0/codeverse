import { Playground } from "@/components/playground/playground";

export const metadata = { title: "Playground" };

export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold">Interactive playground</h1>
      <p className="mt-3 text-muted-foreground">Run JavaScript instantly. Python and Java tabs include starter examples for offline study.</p>
      <div className="mt-8">
        <Playground />
      </div>
    </div>
  );
}
