import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '../common/cache.service';
import {
  ActivitySummary,
  ContributionWeek,
  GraphQLContributionsResponse,
  PublicEvent,
  RecentCommit,
} from './activity.types';

const CACHE_KEY = 'github:activity';
const RECENT_COMMIT_LIMIT = 8;

const CONTRIBUTIONS_QUERY = `
  query Contributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

@Injectable()
export class ActivityService {
  private readonly logger = new Logger(ActivityService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly cache: CacheService,
  ) {}

  async getActivity(): Promise<ActivitySummary> {
    const cached = this.cache.get<ActivitySummary>(CACHE_KEY);
    if (cached) {
      return cached;
    }

    const username = this.config.get<string>('GITHUB_USERNAME') ?? 'cheazer';
    const ttl = Number(this.config.get<string>('ACTIVITY_CACHE_TTL') ?? '1800');

    const [weeks, totalContributions] = await this.fetchContributions(username);
    const recentCommits = await this.fetchRecentCommits(username);

    const summary: ActivitySummary = {
      username,
      totalContributions,
      currentStreak: this.calculateStreak(weeks),
      weeks,
      recentCommits,
      fetchedAt: new Date().toISOString(),
    };

    this.cache.set(CACHE_KEY, summary, ttl);
    return summary;
  }

  /** Contribution calendar comes from the GraphQL API, which needs a token. */
  private async fetchContributions(login: string): Promise<[ContributionWeek[], number]> {
    const token = this.config.get<string>('GITHUB_TOKEN');
    if (!token) {
      throw new HttpException('GitHub token is not configured', HttpStatus.SERVICE_UNAVAILABLE);
    }

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: CONTRIBUTIONS_QUERY, variables: { login } }),
    });

    if (!response.ok) {
      this.logger.error(`GitHub GraphQL responded ${response.status}`);
      throw new HttpException('Could not reach GitHub', HttpStatus.BAD_GATEWAY);
    }

    const body = (await response.json()) as GraphQLContributionsResponse;
    if (body.errors?.length) {
      this.logger.error(`GitHub GraphQL error: ${body.errors[0].message}`);
      throw new HttpException('GitHub rejected the query', HttpStatus.BAD_GATEWAY);
    }

    const calendar = body.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      throw new HttpException('No contribution data for this user', HttpStatus.NOT_FOUND);
    }

    const weeks: ContributionWeek[] = calendar.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      })),
    }));

    return [weeks, calendar.totalContributions];
  }

  /**
   * Recent commits come from the public events feed. A failure here is not fatal,
   * the calendar on its own is still worth rendering.
   */
  private async fetchRecentCommits(login: string): Promise<RecentCommit[]> {
    const token = this.config.get<string>('GITHUB_TOKEN');

    try {
      const response = await fetch(`https://api.github.com/users/${login}/events/public`, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        this.logger.warn(`GitHub events responded ${response.status}`);
        return [];
      }

      const events = (await response.json()) as PublicEvent[];
      return events
        .filter((event) => event.type === 'PushEvent')
        .flatMap((event) =>
          (event.payload.commits ?? []).map((commit) => ({
            sha: commit.sha.slice(0, 7),
            message: commit.message.split('\n')[0],
            repository: event.repo.name,
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
            committedAt: event.created_at,
          })),
        )
        .slice(0, RECENT_COMMIT_LIMIT);
    } catch (error) {
      this.logger.warn(`Could not load recent commits: ${String(error)}`);
      return [];
    }
  }

  /** Days with at least one contribution, counting back from the most recent day. */
  calculateStreak(weeks: ContributionWeek[]): number {
    const days = weeks.flatMap((week) => week.days);
    let streak = 0;

    for (let index = days.length - 1; index >= 0; index -= 1) {
      if (days[index].count > 0) {
        streak += 1;
      } else if (index !== days.length - 1) {
        break;
      }
    }

    return streak;
  }
}
