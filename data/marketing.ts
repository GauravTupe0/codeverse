export const testimonials = [
  {
    name: "Aisha Rahman",
    role: "CS Student",
    quote: "CodeVerse finally feels like a modern MDN. The quizzes and roadmaps keep me consistent.",
  },
  {
    name: "Daniel Cho",
    role: "Junior Developer",
    quote: "I used the Java interview track and landed my first backend role. The examples are actually practical.",
  },
  {
    name: "Priya Mehta",
    role: "Career Switcher",
    quote: "The playground plus documentation is the combo I needed. Dark mode docs I actually want to read.",
  },
  {
    name: "Luis Ortega",
    role: "Bootcamp Mentor",
    quote: "I send students here instead of five scattered sites. Progress tracking is a game changer.",
  },
];

export const faqs = [
  {
    q: "Is CodeVerse free to use?",
    a: "Yes. The documentation, quizzes, roadmaps, and playground are free. Certificates are planned as a future feature.",
  },
  {
    q: "How is content organized?",
    a: "Every language lives in MDX files under content/languages. Add a folder and lessons appear automatically in the sidebar and sitemap.",
  },
  {
    q: "Can I track progress?",
    a: "Progress, bookmarks, likes, notes, streaks, and achievements are stored locally in your browser so you can resume instantly.",
  },
  {
    q: "Do quizzes save scores?",
    a: "Each chapter quiz stores your latest score and unlocks retry with full explanations.",
  },
  {
    q: "Is this production-ready for Vercel?",
    a: "Yes. It uses the Next.js App Router, static generation for docs, metadata, sitemap, robots, and JSON-LD.",
  },
  {
    q: "How do I add a new language?",
    a: "Create content/languages/your-lang/*.mdx, register the language in data/languages.ts, and add a curriculum in data/curricula.ts.",
  },
];

export const features = [
  { title: "Interactive Code", description: "Copyable, highlighted examples with tabs and real output.", icon: "Code2" },
  { title: "Real Projects", description: "Beginner to industry projects with folder structure and starter code.", icon: "FolderGit2" },
  { title: "Interview Questions", description: "Top questions by level, company style, coding, and HR.", icon: "MessagesSquare" },
  { title: "Practice", description: "Chapter quizzes, practice problems, and a daily challenge.", icon: "Dumbbell" },
  { title: "Notes", description: "Save private notes on any lesson and export them later.", icon: "NotebookPen" },
  { title: "Examples", description: "Syntax, flow, real-world usage, and common mistakes on every topic.", icon: "Sparkles" },
  { title: "Certificates", description: "Shareable certificates are on the roadmap as a future unlock.", icon: "BadgeCheck" },
  { title: "Playgrounds", description: "Run JavaScript instantly and keep a coding streak going.", icon: "TerminalSquare" },
];
