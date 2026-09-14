import { featuredWork, projects, type WorkItem } from "@/data/work";

function StackLine({ stack }: { stack: string[] }) {
  return (
    <p className="meta mt-4 leading-relaxed">
      {stack.join("  /  ")}
    </p>
  );
}

function FeaturedWork({ item }: { item: WorkItem }) {
  return (
    <article className="grid gap-8 border-b border-edge pb-14 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <h3 className="display-sm text-3xl sm:text-4xl">
          {item.href ? (
            <a className="underline-link" href={item.href} rel="noreferrer" target="_blank">
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </h3>
        <p className="mt-3 text-mica">{item.context}</p>
        <p className="meta mt-1">{item.period}</p>
        <StackLine stack={item.stack} />
      </div>

      <div className="lg:col-span-8">
        <p className="prose-column text-[1.0625rem]">{item.summary}</p>
        <ul className="prose-column mt-6 space-y-4 text-mica">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.7em] h-[6px] w-[6px] bg-jade"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProjectRow({ item }: { item: WorkItem }) {
  return (
    <article className="grid gap-6 border-b border-edge py-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <h3 className="display-sm text-xl sm:text-2xl">{item.name}</h3>
        <p className="mt-2 text-[0.95rem] text-mica">{item.context}</p>
        <p className="meta mt-1">{item.period}</p>
      </div>

      <div className="lg:col-span-8">
        <p className="prose-column">{item.summary}</p>
        <ul className="prose-column mt-4 space-y-3 text-[0.95rem] text-mica">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.7em] h-[5px] w-[5px] bg-edge"
              />
              {highlight}
            </li>
          ))}
        </ul>
        <StackLine stack={item.stack} />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20" id="work">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-granite pb-4">
        <h2 className="display-sm text-2xl sm:text-3xl">Selected work</h2>
        <p className="meta">Backend systems, machine learning, and one marketplace</p>
      </div>

      <FeaturedWork item={featuredWork} />

      <div>
        {projects.map((project) => (
          <ProjectRow key={project.slug} item={project} />
        ))}
      </div>
    </section>
  );
}
