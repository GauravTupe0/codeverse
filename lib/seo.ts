export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CodeVerse",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeverse.dev",
    description:
      "Interactive programming documentation, quizzes, projects, and interview preparation.",
    educationalCredentialAwarded: "Certificate of Completion (coming soon)",
    teaches: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "React"],
  };
}
