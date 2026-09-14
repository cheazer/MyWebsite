export type Role = {
  title: string;
  organisation: string;
  period: string;
  detail: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const education = {
  degree: "BSc (Hons) Computing Science",
  institution: "University of Aberdeen",
  period: "Final year, graduating July 2027",
  courses: [
    "Machine Learning and Data Mining",
    "Artificial Intelligence",
    "Software Engineering",
    "Databases",
    "Distributed Systems",
  ],
  roles:
    "Class representative for international students, Computing Society, Google Developer Society, AUSA member",
};

export const roles: Role[] = [
  {
    title: "Co-founder and backend engineer",
    organisation: "VintageET",
    period: "2025 to now",
    detail:
      "Backend lead on a three-engineer team, remote to Addis Ababa. Architecture, APIs, auth, testing and CI.",
  },
  {
    title: "Private mathematics tutor",
    organisation: "Apparentus Tutoring",
    period: "2024 to now",
    detail:
      "76+ recorded hours of one-to-one online teaching across Pre-IB and GCSE maths, including applied statistics, linear algebra and calculus. I run my own scheduling and client relationships alongside full-time study.",
  },
  {
    title: "Store clerk, volunteer",
    organisation: "Home-Start Aberdeen",
    period: "2025",
    detail: "Charity shop floor and stock work.",
  },
  {
    title: "Events organiser, board member",
    organisation: "Rotaract Club",
    period: "2024",
    detail: "Planned and ran club events.",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C"] },
  { label: "Frameworks", items: ["React", "Next.js", "NestJS", "Node.js", "Flask"] },
  { label: "Databases", items: ["PostgreSQL", "Prisma ORM", "Redis", "Supabase", "MySQL"] },
  { label: "Cloud and DevOps", items: ["Cloudflare R2", "GitHub Actions", "Docker", "Linux", "Git"] },
  {
    label: "Practices",
    items: ["Agile", "Scrum", "TDD", "REST API design", "Unit and e2e testing", "Code review"],
  },
];

export const spokenLanguages = "English (fluent), Amharic, Arabic, Tigrinya";

export const awards = [
  "IUPUI Tech Silver Computer Science Award, Indiana University, 2024",
  "Member of Toastmasters International",
];

export const inclusionNote =
  "I work on LGBTQIA+ inclusion at university and care about seeing it taken seriously in industry.";
