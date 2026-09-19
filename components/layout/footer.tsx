import Link from "next/link";
import { languages } from "@/data/languages";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{siteConfig.description}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Learn</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/languages">Languages</Link></li>
            <li><Link href="/roadmaps">Roadmaps</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/playground">Playground</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Popular</p>
          <ul className="space-y-2 text-sm">
            {languages.slice(0, 6).map((language) => (
              <li key={language.slug}>
                <Link href={`/docs/${language.slug}`}>{language.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Platform</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/daily-challenge">Daily Challenge</Link></li>
            <li><Link href="/leaderboard">Leaderboard</Link></li>
            <li><Link href="/achievements">Achievements</Link></li>
            <li><Link href="/notes">Notes</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} CodeVerse. Built for learners.
      </div>
    </footer>
  );
}
