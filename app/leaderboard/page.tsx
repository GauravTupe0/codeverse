import { leaderboard } from "@/data/gamification";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Leaderboard" };

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      <p className="mt-2 text-muted-foreground">Weekly XP from lessons, quizzes, and streaks.</p>
      <div className="mt-8 space-y-3">
        {leaderboard.map((row) => (
          <Card key={row.rank} className="flex items-center justify-between">
            <div>
              <p className="font-semibold">#{row.rank} {row.name}</p>
              <p className="text-xs text-muted-foreground">{row.streak}-day streak</p>
            </div>
            <p>{row.xp} XP</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
