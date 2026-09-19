import { dailyChallenges } from "@/data/gamification";
import { Playground } from "@/components/playground/playground";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Daily Challenge" };

export default function DailyChallengePage() {
  const challenge = dailyChallenges[0];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold">Daily challenge</h1>
      <Card className="mt-6">
        <p className="text-sm uppercase text-muted-foreground">{challenge.difficulty}</p>
        <h2 className="text-2xl font-semibold">{challenge.title}</h2>
        <p className="mt-2 text-muted-foreground">{challenge.prompt}</p>
        <p className="mt-2 font-mono text-xs">{challenge.tests}</p>
      </Card>
      <div className="mt-8">
        <Playground />
      </div>
    </div>
  );
}
