import Reveal from "./Reveal";
import { getActivity, relativeTime } from "@/lib/activity";
import type { ContributionWeek } from "@/types/activity";

const WEEKS_SHOWN = 26;
const COMMITS_SHOWN = 5;

function levelClass(count: number): string {
  if (count === 0) return "bg-paper-deep";
  if (count < 3) return "bg-jade/25";
  if (count < 6) return "bg-jade/50";
  if (count < 10) return "bg-jade/75";
  return "bg-jade";
}

function Calendar({ weeks }: { weeks: ContributionWeek[] }) {
  const recent = weeks.slice(-WEEKS_SHOWN);

  return (
    <div className="flex gap-[3px]" role="img" aria-label="GitHub contribution calendar">
      {recent.map((week) => (
        <div className="flex flex-col gap-[3px]" key={week.days[0]?.date ?? Math.random()}>
          {week.days.map((day) => (
            <span
              className={`h-[9px] w-[9px] rounded-[1px] sm:h-[11px] sm:w-[11px] ${levelClass(day.count)}`}
              key={day.date}
              title={`${day.date}: ${day.count}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default async function Ledger() {
  const activity = await getActivity();

  if (!activity) {
    return null;
  }

  const commits = activity.recentCommits.slice(0, COMMITS_SHOWN);

  return (
    <section className="border-b border-edge bg-paper-deep/40" id="activity">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="display-sm text-2xl">Still building</h2>
              <p className="prose-column mt-3 text-mica">
                Pulled live from GitHub through an API I wrote, cached for half an hour
                so the token stays on the server and the rate limit stays intact.
              </p>

              <div className="mt-7 overflow-x-auto pb-1">
                <Calendar weeks={activity.weeks} />
              </div>

              <p className="meta mt-4">
                {activity.totalContributions} contributions in the last year
                {activity.currentStreak > 1 ? `  /  ${activity.currentStreak} day streak` : ""}
              </p>
            </div>

            <div className="lg:col-span-7">
              {commits.length > 0 ? (
                <ul className="divide-y divide-edge border-t border-edge">
                  {commits.map((commit) => (
                    <li key={`${commit.repository}-${commit.sha}`}>
                      <a
                        className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 transition-colors duration-200 hover:text-jade"
                        href={commit.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="meta text-granite transition-colors group-hover:text-jade">
                          {commit.sha}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[0.95rem]">
                          {commit.message}
                        </span>
                        <span className="meta">{relativeTime(commit.committedAt)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-mica">No public pushes in the last few days.</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
