import { ChevronRight, CalendarDays } from "lucide-react";

const jobs = [
  {
    title: "Full Stack & Mobile Engineer",
    company: "Competitive Pro Gaming (CPG App)",
    period: "Feb 2024 – Present",
    points: [
      "Contributed to transforming an early-stage prototype into a production-ready mobile platform.",
      "Integrated EA Sports APIs and supporting backend systems.",
      "Implemented internationalization (i18n) support for multiple regions and languages.",
      "Redesigned premium subscription and in-app purchase workflows.",
      "Developed tournament and EMEA competition management features.",
      "Built image generation pipelines for lineups, leaderboards, and dynamic visual assets.",
      "Worked across backend services, mobile applications, and deployment workflows.",
    ],
    tech: ["TypeScript", "React Native", "Expo", "PostgreSQL"],
  },
  {
    title: "Backend Engineer Intern",
    company: "Anicha Digital Infrastructure (Campuzone)",
    period: "Jun 2023 – Jan 2024",
    points: [
      "Developed bulk data ingestion pipelines for student and staff onboarding.",
      "Built attendance management functionality for educational institutions.",
      "Implemented backend features and resolved production issues across the platform.",
      "Worked with large-scale academic data entry and management workflows.",
    ],
    tech: ["Python", "Django", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-bold text-[#ccd6f6]">Experience</h2>
            <div className="flex-1 h-px bg-linear-to-r from-blue-500/30 to-transparent mb-1.5" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {jobs.map((job, i) => (
              <div key={i} className="pl-16 relative">
                <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-[#020c1b] border-2 border-blue-500/70 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="text-[#ccd6f6] font-semibold text-lg">{job.title}</h3>
                    {/* Date: icon + italic text, no pill */}
                    <span className="flex items-center gap-1.5 text-[#8892b0] text-sm italic">
                      <CalendarDays size={13} className="text-blue-400/70 shrink-0" />
                      {job.period}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-5">{job.company}</p>

                  <ul className="flex flex-col gap-2.5 mb-5">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-[#8892b0] text-sm flex gap-2 items-start">
                        <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs bg-blue-600/10 border border-blue-500/20 text-blue-300 rounded-full font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
