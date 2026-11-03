export type Role = {
  title: string;
  organisation: string;
  period: string;
  detail: string;
  image?: { src: string; alt: string };
  badge?: "google";
};

export type SkillAccent = "jade" | "azure" | "ember" | "plum" | "teal";

export type SkillGroup = {
  label: string;
  accent: SkillAccent;
  items: string[];
};

export const whoIAm = [
  "I'm a final-year computing science student at the University of Aberdeen, and most of what I build sits at the overlap of backend engineering and applied machine learning.",
  "I co-founded VintageET to give second-hand fashion in Ethiopia a real marketplace instead of group chats, I organise Google Developer Group workshops on agentic AI and the Gemini API, and I demonstrate first-year labs because I like watching the moment a problem stops being confusing. Outside of all that, GridPulse is where I spend most of my spare attention right now.",
];

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
    title: "Organiser and workshop lead",
    organisation: "GDG on Campus, University of Aberdeen",
    period: "2026 to now",
    detail:
      "Design and deliver workshops across the UK on building and scaling multiagent systems and multimodal web applications with the Google Gemini API, including \"Building Multimodal Web Apps with Gemini API\". Plan and run hackathons and tech events for students and local developers.",
    image: {
      src: "/gdg-workshop.jpg",
      alt: "Fanuel presenting a Gemini multimodal API workshop to a lecture room",
    },
    badge: "google",
  },
  {
    title: "Undergraduate course demonstrator",
    organisation: "University of Aberdeen, School of NCS",
    period: "2026 to now",
    detail:
      "Run lab practical sessions for CS1029 Modelling and Problem Solving, supporting students in breaking problems down and working through them step by step, adapting explanations to different levels.",
  },
  {
    title: "Private mathematics tutor",
    organisation: "Apparentus Tutoring",
    period: "2024 to now",
    detail:
      "76+ recorded hours of one-to-one online teaching across Pre-IB and GCSE maths, including applied statistics, linear algebra and calculus. I run my own scheduling and client relationships alongside full-time study.",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", accent: "jade", items: ["Python", "Java", "TypeScript", "SQL", "C"] },
  {
    label: "AI and ML",
    accent: "azure",
    items: ["Agentic AI", "Multi-agent systems", "Gemini API", "LightGBM", "XGBoost", "scikit-learn", "MLflow"],
  },
  {
    label: "Backend",
    accent: "ember",
    items: ["REST APIs", "Microservices", "Event-driven architecture", "Spring Boot", "FastAPI", "NestJS", "Flask"],
  },
  { label: "Data", accent: "plum", items: ["Kafka", "PostgreSQL", "TimescaleDB", "Redis", "MySQL"] },
  { label: "DevOps", accent: "teal", items: ["Docker", "GitHub Actions CI/CD", "Testcontainers", "Linux", "Git"] },
];

export const spokenLanguages = "English (fluent), Amharic, Arabic, Tigrinya";

export const awards = [
  "IUPUI Tech Silver Computer Science Award, Indiana University, 2024",
  "Member of Toastmasters International",
];

export const inclusionNote =
  "I work on LGBTQIA+ inclusion at university and care about seeing it taken seriously in industry.";
