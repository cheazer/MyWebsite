export type IconKey = "server" | "brain" | "terminal" | "users" | "pulse";

export type WorkStatus = {
  label: string;
  tone: "live" | "building";
};

export type WorkItem = {
  slug: string;
  icon: IconKey;
  name: string;
  context: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
  status?: WorkStatus;
};

export const projects: WorkItem[] = [
  {
    slug: "vintageet",
    icon: "server",
    name: "VintageET",
    context: "Co-founder and backend engineer — my startup",
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
    status: { label: "Under construction — launching Feb 12, 2027", tone: "building" },
  },
  {
    slug: "gridpulse",
    icon: "pulse",
    name: "GridPulse",
    context: "Real-time UK grid intelligence platform",
    period: "In active development",
    summary:
      "An event-driven pipeline streaming live UK electricity data from National Grid ESO, Elexon and weather feeds through Kafka into TimescaleDB, feeding a forecasting service that predicts next-day demand and carbon intensity.",
    highlights: [
      "Schema-validated events, idempotent writes and resumable backfills, loading 3.3M records across two years.",
      "Day-ahead demand and carbon intensity forecasts with LightGBM and calibrated 80% prediction intervals (conformal prediction), halving error against a seasonal baseline in a 12-month leakage-safe backtest benchmarked against the grid operator's own forecasts.",
      "A production-style ML service: a scheduled forecast job, a FastAPI REST API, and an MLflow model registry with a champion/challenger gate that only promotes models that are no worse on unseen data.",
    ],
    stack: ["Java 21", "Spring Boot", "Kafka", "TimescaleDB", "Python", "LightGBM", "FastAPI", "MLflow", "Docker"],
    href: "https://github.com/cheazer/gridpulse",
  },
  {
    slug: "mushroom-toxicity",
    icon: "terminal",
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
    icon: "users",
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
