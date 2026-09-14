import { CacheService } from './cache.service';

describe('CacheService', () => {
  let cache: CacheService;

  beforeEach(() => {
    cache = new CacheService();
  });

  it('returns a stored value before it expires', () => {
    cache.set('activity', { total: 12 }, 60, 1_000);
    expect(cache.get('activity', 30_000)).toEqual({ total: 12 });
  });

  it('returns undefined once the entry has expired', () => {
    cache.set('activity', { total: 12 }, 60, 1_000);
    expect(cache.get('activity', 120_000)).toBeUndefined();
  });

  it('returns undefined for a key that was never set', () => {
    expect(cache.get('missing')).toBeUndefined();
  });
});
