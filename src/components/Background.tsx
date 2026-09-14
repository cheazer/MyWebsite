import {
  awards,
  education,
  inclusionNote,
  roles,
  skillGroups,
  spokenLanguages,
} from "@/data/background";

export default function Background() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20" id="background">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-granite pb-4">
        <h2 className="display-sm text-2xl sm:text-3xl">Background</h2>
        <p className="meta">Aberdeen, and Addis Ababa before that</p>
      </div>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
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
                  <h3 className="display-sm text-lg">{role.organisation}</h3>
                  <p className="meta">{role.period}</p>
                </div>
                <p className="mt-1 text-[1.0625rem]">{role.title}</p>
                <p className="prose-column mt-2 text-mica">{role.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          <dl className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="display-sm text-[0.95rem] text-mica">{group.label}</dt>
                <dd className="mt-1 text-[1.0625rem]">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 border-t border-edge pt-8">
            <p className="text-[1.0625rem]">{spokenLanguages}</p>
            <ul className="mt-6 space-y-2 text-mica">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
            <p className="prose-column mt-6 text-mica">{inclusionNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
