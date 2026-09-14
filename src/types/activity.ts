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

export type ApiResponse<T> = {
  success: true;
  data: T;
  timestamp: string;
};
