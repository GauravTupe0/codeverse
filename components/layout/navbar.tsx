"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Menu, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/search/command-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobile((v) => !v)} aria-label="Open menu">
            <Menu />
          </Button>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
              <Sparkles className="size-4" />
            </span>
            {siteConfig.name}
          </Link>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                pathname.startsWith(link.href) && "bg-accent text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden w-56 justify-start text-muted-foreground sm:inline-flex" onClick={() => setOpen(true)}>
            <Search className="mr-2" /> Search docs...
            <kbd className="ml-auto rounded bg-muted px-1.5 text-[10px]">⌘K</kbd>
          </Button>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setOpen(true)} aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => router.push("/bookmarks")} aria-label="Bookmarks">
            <BookOpen />
          </Button>
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/docs/python/introduction">Start Learning</Link>
          </Button>
        </div>
      </div>
      {mobile ? (
        <div className="border-t border-border px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-lg px-2 py-2 text-sm" onClick={() => setMobile(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
      <CommandMenu open={open} onOpenChange={setOpen} />
    </header>
  );
}
