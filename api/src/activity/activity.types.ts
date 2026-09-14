export type ContributionDay = {
  date: string;
  count: number;
};

export type ContributionWeek = {
  days: ContributionDay[];
};

export type RecentCommit = {
  sha: string;
  message: string;
  repository: string;
  url: string;
  committedAt: string;
};

export type ActivitySummary = {
  username: string;
  totalContributions: number;
  currentStreak: number;
  weeks: ContributionWeek[];
  recentCommits: RecentCommit[];
  fetchedAt: string;
};

export type GraphQLContributionsResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{ date: string; contributionCount: number }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

export type PushEventCommit = {
  sha: string;
  message: string;
};

export type PublicEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: { commits?: PushEventCommit[] };
};
