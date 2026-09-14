import Reveal from "./Reveal";
import { featuredWork, projects, type WorkItem } from "@/data/work";
import { ArrowIcon, iconMap } from "./icons";

function StackLine({ stack }: { stack: string[] }) {
  return <p className="meta mt-4 leading-relaxed">{stack.join("  /  ")}</p>;
}

function Bullets({ items, muted }: { items: string[]; muted?: boolean }) {
  return (
    <ul className={`prose-column mt-5 space-y-3 text-mica${muted ? " text-[0.95rem]" : ""}`}>
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-[0.7em] h-[6px] w-[6px] ${muted ? "bg-edge" : "bg-jade"}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedWork({ item }: { item: WorkItem }) {
  const Icon = iconMap[item.icon];

  return (
    <article className="group relative border-b border-edge pb-14">
      <span
        aria-hidden="true"
        className="absolute -left-6 top-0 hidden h-full w-px origin-top scale-y-0 bg-jade transition-transform duration-500 ease-out group-hover:scale-y-100 lg:block"
      />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Icon className="h-6 w-6 text-mica transition-colors duration-300 group-hover:text-jade" />
           <h3 className="display-sm mt-4 text-3xl sm:text-4xl">
            {item.href ? (
              <a
                className="inline-flex items-start gap-1.5 underline-link"
                href={item.href}
                rel="noreferrer"
                target="_blank"
              >
                {item.name}
                <ArrowIcon className="mt-1 h-4 w-4 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
          <Bullets items={item.highlights} />
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ item }: { item: WorkItem }) {
  const Icon = iconMap[item.icon];

  return (
    <article className="group relative border-b border-edge">
      <span
        aria-hidden="true"
        className="absolute -left-6 top-0 hidden h-full w-px origin-top scale-y-0 bg-jade transition-transform duration-500 ease-out group-hover:scale-y-100 lg:block"
      />
      <div className="grid gap-6 py-10 transition-colors duration-300 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-edge transition-colors duration-300 group-hover:text-jade" />
            <h3 className="display-sm text-xl transition-transform duration-300 group-hover:translate-x-0.5 sm:text-2xl">
              {item.name}
            </h3>
          </div>
          <p className="mt-2 text-[0.95rem] text-mica">{item.context}</p>
          <p className="meta mt-1">{item.period}</p>
        </div>

        <div className="lg:col-span-8">
          <p className="prose-column">{item.summary}</p>
          <Bullets items={item.highlights} muted />
          <StackLine stack={item.stack} />
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20" id="work">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-granite pb-4">
          <h2 className="display-sm text-2xl sm:text-3xl">Selected work</h2>
          <p className="meta">Backend systems, machine learning, and one marketplace</p>
        </div>
      </Reveal>

      <Reveal>
        <FeaturedWork item={featuredWork} />
      </Reveal>

      {projects.map((project, index) => (
        <Reveal delay={index * 90} key={project.slug}>
          <ProjectRow item={project} />
        </Reveal>
      ))}
    </section>
  );
}