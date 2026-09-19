"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "codeverse-learning";

export interface LearningState {
  completed: string[];
  bookmarks: string[];
  favorites: string[];
  recentlyViewed: { href: string; title: string; at: number }[];
  likes: string[];
  notes: Record<string, string>;
  quizScores: Record<string, number>;
  streak: number;
  lastVisit: string;
  xp: number;
  badges: string[];
  languagesStudied: string[];
}

const defaultState: LearningState = {
  completed: [],
  bookmarks: [],
  favorites: [],
  recentlyViewed: [],
  likes: [],
  notes: {},
  quizScores: {},
  streak: 0,
  lastVisit: "",
  xp: 0,
  badges: [],
  languagesStudied: [],
};

function load(): LearningState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}

export function useLearning() {
  const [state, setState] = useState<LearningState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = load();
    const visit = today();
    if (current.lastVisit !== visit) {
      current.streak = current.lastVisit === yesterday() ? current.streak + 1 : 1;
      current.lastVisit = visit;
    }
    if (current.streak >= 7 && !current.badges.includes("streak-7")) current.badges.push("streak-7");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    setState(current);
    setReady(true);
  }, []);

  const persist = useCallback((updater: (current: LearningState) => LearningState) => {
    setState((current) => {
      const next = updater(current);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggle = useCallback(
    (key: "bookmarks" | "favorites" | "likes" | "completed", value: string) => {
      persist((current) => {
        const next = {
          ...current,
          [key]: current[key].includes(value) ? current[key].filter((item) => item !== value) : [...current[key], value],
        };
        if (key === "completed") next.xp = next.completed.length * 25;
        if (key === "bookmarks" && next.bookmarks.length >= 10 && !next.badges.includes("bookworm")) next.badges = [...next.badges, "bookworm"];
        if (key === "completed" && next.completed.length >= 1 && !next.badges.includes("first-lesson")) next.badges = [...next.badges, "first-lesson"];
        return next;
      });
    },
    [persist],
  );

  const view = useCallback(
    (href: string, title: string, language?: string) => {
      persist((current) => {
        if (current.recentlyViewed[0]?.href === href) return current;
        const recentlyViewed = [{ href, title, at: Date.now() }, ...current.recentlyViewed.filter((item) => item.href !== href)].slice(0, 12);
        const languagesStudied = language && !current.languagesStudied.includes(language) ? [...current.languagesStudied, language] : current.languagesStudied;
        const badges = languagesStudied.length >= 5 && !current.badges.includes("polyglot") ? [...current.badges, "polyglot"] : current.badges;
        return { ...current, recentlyViewed, languagesStudied, badges };
      });
    },
    [persist],
  );

  const saveNote = useCallback(
    (href: string, note: string) => persist((current) => ({ ...current, notes: { ...current.notes, [href]: note } })),
    [persist],
  );

  const saveQuiz = useCallback(
    (id: string, score: number) => {
      persist((current) => {
        const badges = score >= 80 && !current.badges.includes("quiz-ace") ? [...current.badges, "quiz-ace"] : current.badges;
        return { ...current, quizScores: { ...current.quizScores, [id]: score }, badges, xp: current.xp + Math.round(score / 10) };
      });
    },
    [persist],
  );

  return { state, ready, toggle, view, saveNote, saveQuiz };
}
