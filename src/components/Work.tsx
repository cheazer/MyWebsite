import Reveal from "./Reveal";
import { projects, type WorkItem } from "@/data/work";
import { ArrowIcon, iconMap } from "./icons";

type Accent = "jade" | "azure" | "ember" | "plum";

const accentClass: Record<Accent, { icon: string; bar: string; badge: string }> = {
  jade: {
    icon: "text-jade",
    bar: "bg-jade",
    badge: "border-jade/40 bg-jade/10 text-jade",
  },
  azure: {
    icon: "text-azure",
    bar: "bg-azure",
    badge: "border-azure/40 bg-azure/10 text-azure",
  },
  ember: {
    icon: "text-ember",
    bar: "bg-ember",
    badge: "border-ember/40 bg-ember/10 text-ember",
  },
  plum: {
    icon: "text-plum",
    bar: "bg-plum",
    badge: "border-plum/40 bg-plum/10 text-plum",
  },
};

const projectAccent: Record<string, Accent> = {
  vintageet: "jade",
  gridpulse: "azure",
  "mushroom-toxicity": "ember",
  "staff-workload": "plum",
};

function StackLine({ stack }: { stack: string[] }) {
  return <p className="meta mt-4 leading-relaxed">{stack.join("  /  ")}</p>;
}

function Bullets({ items, accent }: { items: string[]; accent: Accent }) {
  return (
    <ul className="prose-column mt-5 space-y-3 text-mica">
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-[0.7em] h-[6px] w-[6px] ${accentClass[accent].bar}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectSection({ item }: { item: WorkItem }) {
  const Icon = iconMap[item.icon];
  const accent = projectAccent[item.slug] ?? "jade";
  const classes = accentClass[accent];

  return (
    <article className="group relative border-b border-edge py-14 first:pt-0 last:border-b-0">
      <span
        aria-hidden="true"
        className={`absolute -left-6 top-0 hidden h-full w-px origin-top scale-y-0 ${classes.bar} transition-transform duration-500 ease-out group-hover:scale-y-100 lg:block`}
      />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Icon className={`h-7 w-7 ${classes.icon}`} />
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

          {item.status ? (
            <span
              className={`mt-4 inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.7rem] font-medium ${classes.badge}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
              {item.status.label}
            </span>
          ) : null}

          <StackLine stack={item.stack} />
        </div>

        <div className="lg:col-span-8">
          <p className="prose-column text-[1.0625rem]">{item.summary}</p>
          <Bullets accent={accent} items={item.highlights} />
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
          <p className="meta">Backend systems, machine learning, and the startup I&apos;m building</p>
        </div>
      </Reveal>

      {projects.map((project, index) => (
        <Reveal delay={index * 90} key={project.slug}>
          <ProjectSection item={project} />
        </Reveal>
      ))}
    </section>
  );
}
