"use client";

import { badges } from "@/data/gamification";
import { useLearning } from "@/hooks/use-learning";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AchievementsPage() {
  const { state } = useLearning();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold">Achievements</h1>
      <p className="mt-2 text-muted-foreground">XP {state.xp} · Streak {state.streak} day{state.streak === 1 ? "" : "s"}</p>
      <Progress className="mt-4" value={Math.min(100, state.xp / 20)} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {badges.map((badge) => (
          <Card key={badge.id} className={state.badges.includes(badge.id) ? "border-cyan-400/50" : "opacity-70"}>
            <p className="font-semibold">{badge.name}</p>
            <p className="text-sm text-muted-foreground">{badge.description}</p>
            <p className="mt-2 text-xs">{state.badges.includes(badge.id) ? "Unlocked" : "Locked"}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
