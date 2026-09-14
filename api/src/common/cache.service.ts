import { Injectable } from '@nestjs/common';

type CacheEntry<T> = {
  value: T;
  expiresAt: number;
};

/**
 * Small in-process cache. The GitHub API allows 5000 authenticated requests an
 * hour and this endpoint is public, so every response is served from here until
 * it expires. Swap the Map for Redis if this ever runs on more than one instance.
 */
@Injectable()
export class CacheService {
  private readonly store = new Map<string, CacheEntry<unknown>>();

  get<T>(key: string, now: number = Date.now()): T | undefined {
    const entry = this.store.get(key);
    if (!entry) {
      return undefined;
    }
    if (entry.expiresAt <= now) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value as T;
  }

  set<T>(key: string, value: T, ttlSeconds: number, now: number = Date.now()): void {
    this.store.set(key, { value, expiresAt: now + ttlSeconds * 1000 });
  }

  clear(): void {
    this.store.clear();
  }
}
