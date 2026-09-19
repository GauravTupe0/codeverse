export const dailyChallenges = [
  {
    date: "rotating",
    title: "Two Sum",
    difficulty: "beginner" as const,
    prompt: "Return the indices of two numbers that add up to target.",
    starter: `function twoSum(nums, target) {
  // your code
}
`,
    tests: "twoSum([2,7,11,15], 9) === [0,1]",
  },
  {
    date: "rotating",
    title: "Valid Parentheses",
    difficulty: "intermediate" as const,
    prompt: "Determine if a string of brackets is valid.",
    starter: `function isValid(s) {
  // your code
}
`,
    tests: 'isValid("()[]{}") === true',
  },
];

export const badges = [
  { id: "first-lesson", name: "First Steps", description: "Complete your first lesson." },
  { id: "bookworm", name: "Bookworm", description: "Bookmark 10 lessons." },
  { id: "quiz-ace", name: "Quiz Ace", description: "Score 80%+ on a quiz." },
  { id: "streak-7", name: "On Fire", description: "Maintain a 7-day streak." },
  { id: "polyglot", name: "Polyglot", description: "Study 5 different languages." },
  { id: "project-starter", name: "Builder", description: "Open 3 project briefs." },
];

export const leaderboard = [
  { rank: 1, name: "Nova", xp: 12840, streak: 41 },
  { rank: 2, name: "Pixel", xp: 11220, streak: 28 },
  { rank: 3, name: "Ada", xp: 10110, streak: 19 },
  { rank: 4, name: "Linus", xp: 9330, streak: 12 },
  { rank: 5, name: "Grace", xp: 8740, streak: 9 },
  { rank: 6, name: "You", xp: 120, streak: 1 },
];
