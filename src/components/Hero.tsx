import Image from "next/image";

type HeroLink = {
  label: string;
  href: string;
};

const links: HeroLink[] = [
  { label: "github.com/cheazer", href: "https://github.com/cheazer" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
  { label: "FisehaFanuel@gmail.com", href: "mailto:FisehaFanuel@gmail.com" },
];

export default function Hero() {
  return (
    <header className="border-b border-edge">
      <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-12 sm:px-10 sm:pt-20 sm:pb-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:pt-4">
            <h1 className="wordmark">
              Fanuel
              <br />
              Gebru
            </h1>

            <p className="lede mt-8 text-granite">
              I build backend systems and machine learning tools, and I care most about
              the ones that reach people the market usually skips.
            </p>

            <p className="prose-column mt-6 text-mica">
              I am in my final year of computing science at Aberdeen. Outside of the
              degree I run the engineering on VintageET, a second-hand fashion
              marketplace built for Ethiopia, where buying and selling clothes online is
              still mostly done through group chats and trust. I teach maths one to one
              online, and I am heading towards research and AI engineering work. Software is
              the fastest lever I have for the places and people I come from.
            </p>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="underline-link text-[0.95rem]"
                    href={link.href}
                    rel="noreferrer"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative w-full max-w-sm lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full bg-jade/90"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                <Image
                  alt="Fanuel Gebru"
                  className="h-full w-full object-cover"
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 88vw, 380px"
                  src="/fanu.jpg"
                  width={800}
                />
              </div>
              <figcaption className="meta relative mt-5 flex flex-col gap-1">
                <span>Aberdeen, Scotland</span>
                <span>Open to 2027 graduate roles, internships and research</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}
