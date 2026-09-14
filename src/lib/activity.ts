import type { ActivitySummary, ApiResponse } from "@/types/activity";

const ENDPOINT =
  process.env.ACTIVITY_API_URL ?? "http://localhost:4000/api/v1/activity";

/**
 * Server side fetch, so the browser never talks to the API directly and there
 * is no CORS round trip. Returns null instead of throwing: if the API is down
 * the rest of the page is still worth rendering.
 */
export async function getActivity(): Promise<ActivitySummary | null> {
  try {
    const response = await fetch(ENDPOINT, {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return null;
    }

    const body = (await response.json()) as ApiResponse<ActivitySummary>;
    return body.data ?? null;
  } catch {
    return null;
  }
}

export function relativeTime(iso: string, now: Date = new Date()): string {
  const then = new Date(iso);
  const minutes = Math.round((now.getTime() - then.getTime()) / 60000);

  if (minutes < 60) {
    return `${Math.max(minutes, 1)}m ago`;
  }
  if (minutes < 1440) {
    return `${Math.floor(minutes / 60)}h ago`;
  }

  const days = Math.floor(minutes / 1440);
  if (days < 30) {
    return `${days}d ago`;
  }
  return `${Math.floor(days / 30)}mo ago`;
}
