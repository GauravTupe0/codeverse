"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { languages } from "@/data/languages";
import { roadmaps } from "@/data/roadmaps";

export function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden">
        <Command className="bg-transparent" loop>
          <Command.Input placeholder="Search languages, docs, roadmaps..." className="h-12 w-full border-b bg-transparent px-4 outline-none" />
          <Command.List className="max-h-80 overflow-auto p-2">
            <Command.Empty className="px-3 py-6 text-sm text-muted-foreground">No results found.</Command.Empty>
            <Command.Group heading="Languages">
              {languages.map((language) => (
                <Command.Item
                  key={language.slug}
                  value={language.name}
                  onSelect={() => {
                    router.push(`/docs/${language.slug}`);
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm data-[selected=true]:bg-accent"
                >
                  {language.name}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Roadmaps">
              {roadmaps.map((roadmap) => (
                <Command.Item
                  key={roadmap.slug}
                  value={roadmap.title}
                  onSelect={() => {
                    router.push(`/roadmaps/${roadmap.slug}`);
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm data-[selected=true]:bg-accent"
                >
                  {roadmap.title}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
