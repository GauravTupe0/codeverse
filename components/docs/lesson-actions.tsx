"use client";

import { Bookmark, CheckCircle2, Heart, Share2, ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLearning } from "@/hooks/use-learning";

export function LessonActions({ href, title, language }: { href: string; title: string; language: string }) {
  const { state, toggle, view } = useLearning();

  useEffect(() => {
    view(href, title, language);
  }, [href, language, title, view]);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await navigator.clipboard.writeText(url);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={() => toggle("completed", href)}>
        <CheckCircle2 className="mr-1" /> {state.completed.includes(href) ? "Completed" : "Mark complete"}
      </Button>
      <Button variant="outline" size="sm" onClick={() => toggle("bookmarks", href)}>
        <Bookmark className="mr-1" /> {state.bookmarks.includes(href) ? "Bookmarked" : "Bookmark"}
      </Button>
      <Button variant="outline" size="sm" onClick={() => toggle("likes", href)}>
        <ThumbsUp className="mr-1" /> {state.likes.includes(href) ? "Liked" : "Like"}
      </Button>
      <Button variant="outline" size="sm" onClick={() => toggle("favorites", language)}>
        <Heart className="mr-1" /> Favorite
      </Button>
      <Button variant="outline" size="sm" onClick={share}>
        <Share2 className="mr-1" /> Share
      </Button>
    </div>
  );
}
