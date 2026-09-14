export type WorkItem = {
  slug: string;
  name: string;
  context: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export const featuredWork: WorkItem = {
  slug: "vintageet",
  name: "VintageET",
  context: "Co-founder and backend engineer",
  period: "2025 to now",
  summary:
    "A two-sided second-hand marketplace for Ethiopia, where buying and selling clothes online still runs on group chats and trust. I lead the backend on a three-engineer team.",
  highlights: [
    "Listings, orders, search, reviews, chat and notifications. Orders run inside atomic database transactions, so two buyers cannot purchase the same listing.",
    "JWT auth with Google OAuth, role-based admin guards checked against live user state, and presigned image uploads to Cloudflare R2.",
    "Set up the CI pipeline that gates lint and type checks, squash-and-merge review, and wrote the unit and e2e suites.",
  ],
  stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Next.js", "TypeScript"],
  href: "https://github.com/cheazer/VintageET",
};

export const projects: WorkItem[] = [
  {
    slug: "studymate",
    name: "StudyMate",
    context: "AI study companion, GDG Build with Gemma hackathon",
    period: "One day, two people",
    summary:
      "A study companion that turns a lecture topic into a roadmap, flashcards and an explainer video.",
    highlights: [
      "Gemma generates the study content behind onboarding, streak tracking and a roadmap chatbot.",
      "Explainer videos come from driving the Manim animation library with Gemma output, run as a separate FastAPI service so a slow render never blocks the request path.",
      "Shipped a working demo, a pitch deck and a Kaggle submission inside the day.",
    ],
    stack: ["Next.js", "Supabase", "Gemma", "FastAPI", "Manim"],
  },
  {
    slug: "mushroom-toxicity",
    name: "Mushroom toxicity classification",
    context: "Machine learning experiment",
    period: "Personal project",
    summary:
      "How much accuracy does a classifier actually lose when it has to run on cheap hardware?",
    highlights: [
      "Trained and compared classifiers including KNN and XGBoost on a 61,000 record dataset with 21 attributes to predict edibility.",
      "Preprocessing, feature importance and hyperparameter sweeps in scikit-learn, Pandas, Matplotlib and Plotly.",
      "Deployed the trained model to a Raspberry Pi and wrote up accuracy against resource cost.",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "Pandas", "Raspberry Pi"],
  },
  {
    slug: "staff-workload",
    name: "Staff workload management system",
    context: "Team of four for the School of Computing, University of Aberdeen",
    period: "Professional development project",
    summary:
      "A web app for allocating and tracking teaching workload across department staff, built for a real client.",
    highlights: [
      "Scrum master and project manager: sprint plans, client meetings, and keeping four developers on one schedule.",
      "Owned the database architecture and design plus the Flask backend.",
    ],
    stack: ["Python", "Flask", "SQL", "phpMyAdmin"],
  },
];
