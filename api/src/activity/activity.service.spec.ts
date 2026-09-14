import { ConfigService } from '@nestjs/config';
import { CacheService } from '../common/cache.service';
import { ActivityService } from './activity.service';
import { ContributionWeek } from './activity.types';

const week = (...counts: number[]): ContributionWeek => ({
  days: counts.map((count, index) => ({ date: `2026-09-0${index + 1}`, count })),
});

describe('ActivityService', () => {
  let service: ActivityService;

  beforeEach(() => {
    service = new ActivityService(new ConfigService(), new CacheService());
  });

  it('counts back from the most recent day', () => {
    expect(service.calculateStreak([week(1, 1, 0, 2, 3, 4)])).toBe(3);
  });

  it('does not break the streak when today has no commits yet', () => {
    expect(service.calculateStreak([week(2, 3, 0)])).toBe(2);
  });

  it('returns zero when there is nothing to count', () => {
    expect(service.calculateStreak([])).toBe(0);
  });
});
