import Image from "next/image";
import Reveal from "./Reveal";
import { GoogleGIcon } from "./icons";

import {
  awards,
  education,
  inclusionNote,
  roles,
  skillGroups,
  spokenLanguages,
  whoIAm,
  type SkillAccent,
} from "@/data/background";

const chipClass: Record<SkillAccent, string> = {
  jade: "border-jade/30 bg-jade/5 text-granite hover:border-jade hover:bg-jade/15 hover:text-jade",
  azure: "border-azure/30 bg-azure/5 text-granite hover:border-azure hover:bg-azure/15 hover:text-azure",
  ember: "border-ember/30 bg-ember/5 text-granite hover:border-ember hover:bg-ember/15 hover:text-ember",
  plum: "border-plum/30 bg-plum/5 text-granite hover:border-plum hover:bg-plum/15 hover:text-plum",
  teal: "border-teal/30 bg-teal/5 text-granite hover:border-teal hover:bg-teal/15 hover:text-teal",
};

const dotClass: Record<SkillAccent, string> = {
  jade: "bg-jade",
  azure: "bg-azure",
  ember: "bg-ember",
  plum: "bg-plum",
  teal: "bg-teal",
};

export default function Background() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20" id="background">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-granite pb-4">
          <h2 className="display-sm text-2xl sm:text-3xl">Who I am</h2>
          <p className="meta">Aberdeen, and Addis Ababa before that</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-14 grid gap-4 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {whoIAm.map((paragraph) => (
              <p className="prose-column mt-3 text-[1.0625rem] text-mica first:mt-0" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <h3 className="display-sm text-lg">{education.institution}</h3>
          <p className="mt-2 text-[1.0625rem]">{education.degree}</p>
          <p className="meta mt-1">{education.period}</p>
          <p className="prose-column mt-4 text-mica">
            Coursework in {education.courses.join(", ").toLowerCase()}.
          </p>
          <p className="prose-column mt-2 text-mica">{education.roles}.</p>

          <ul className="mt-12 space-y-9">
            {roles.map((role) => (
              <li key={`${role.organisation}-${role.title}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="display-sm flex items-center gap-2 text-lg">
                    {role.badge === "google" ? (
                      <GoogleGIcon className="h-4 w-4 shrink-0" />
                    ) : null}
                    {role.organisation}
                  </h3>
                  <p className="meta">{role.period}</p>
                </div>
                <p className="mt-1 text-[1.0625rem]">{role.title}</p>
                <p className="prose-column mt-2 text-mica">{role.detail}</p>
                {role.image ? (
                  <div className="relative mt-4 aspect-[4/3] w-full max-w-sm overflow-hidden border border-edge">
                    <Image
                      alt={role.image.alt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 88vw, 384px"
                      src={role.image.src}
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:pl-8" delay={120}>
          <h3 className="display-sm text-[0.95rem] text-mica">Skills, straight from the CV</h3>
          <div className="mt-5 space-y-7">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-wide text-mica">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dotClass[group.accent]}`} />
                  {group.label}
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className={`cursor-default select-none rounded-full border px-3 py-1 text-[0.85rem] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-sm ${chipClass[group.accent]}`}
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-edge pt-8">
            <p className="text-[1.0625rem]">{spokenLanguages}</p>
            <ul className="mt-6 space-y-2 text-mica">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
            <p className="prose-column mt-6 text-mica">{inclusionNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
