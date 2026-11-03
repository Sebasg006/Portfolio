import { Reveal, SectionLabel } from "./ScrollReveal";

// Experiencia laboral. Una empresa puede tener varios cargos (el más reciente primero).
const jobs = [
  {
    company: "Infera",
    meta: "Full-time · Remote",
    roles: [
      {
        title: "Zoho CRM Developer",
        period: "Aug 2026 — Present",
        current: true,
        description:
          "CRM automations and the data sync between the company's apps and Zoho CRM: subscriptions, payments and customer events.",
        tags: "Zoho CRM · Deluge · REST APIs",
      },
      {
        title: "App Developer & Lead QA",
        period: "Jan 2025 — Present",
        current: true,
        description:
          "Mobile app features in React Native and backend work in PHP, plus payment integrations. Lead QA of the app on every release, and in charge of publishing builds to Google Play and the App Store.",
        tags: "React Native · Expo · PHP · MySQL · Stripe",
      },
    ],
  },
  {
    company: "Valinity",
    meta: "Contract · Remote",
    roles: [
      {
        title: "Solidity Developer",
        period: "Jan 2026 — Mar 2026",
        description:
          "Smart contracts for a cryptocurrency project: liquidity pool management logic and automated bot systems for the platform.",
        tags: "Solidity · Smart contracts · DeFi",
      },
    ],
  },
  {
    company: "Sapiensa",
    meta: "Freelance · Remote",
    roles: [
      {
        title: "Front-end Instructor",
        period: "Feb 2025 — Mar 2025",
        description: "Recorded online courses on front-end development with JavaScript.",
        tags: "JavaScript · HTML · CSS",
      },
    ],
  },
  {
    company: "Dream Venture Studio",
    meta: "Part-time",
    roles: [
      {
        title: "Software Developer & QA",
        period: "Sep 2023 — Aug 2024",
        description:
          "Built mobile apps on Bubble.io, designing their workflows and app logic, and tested them as QA before each release.",
        tags: "Bubble.io · No-code · UX · QA",
      },
    ],
  },
];

const education = {
  title: "Software and Data Engineering",
  school: "IU Digital de Antioquia",
  period: "Nov 2024 — Dec 2027",
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-32">
      <SectionLabel index="03">experience</SectionLabel>

      <ul className="border-t border-neutral-800">
        {jobs.map((job) => (
          <li key={job.company}>
            <Reveal>
              <div className="grid gap-6 border-b border-neutral-800 py-10 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-neutral-100 md:text-3xl">
                    {job.company}
                  </p>
                  <p className="mt-2 font-mono text-xs text-neutral-600">{job.meta}</p>
                </div>

                <div className="space-y-8 border-l border-neutral-800 pl-6">
                  {job.roles.map((role) => (
                    <div key={role.title} className="relative">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full ${
                          role.current
                            ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                            : "bg-neutral-700"
                        }`}
                      />
                      <p className="font-mono text-xs text-neutral-500">{role.period}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-100 md:text-2xl">
                        {role.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-neutral-500">{role.description}</p>
                      <p className="mt-3 font-mono text-xs text-neutral-600">{role.tags}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <div className="mt-16 grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">education</p>
          <div>
            <p className="text-xl font-semibold tracking-tight text-neutral-100">{education.title}</p>
            <p className="mt-1 text-neutral-500">
              {education.school} · <span className="font-mono text-xs">{education.period}</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
