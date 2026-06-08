'use client'

import { useRef, useState, type ReactNode } from "react";
import { ChevronRight, CalendarDays } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

const hi = (text: string) => (
  <span className="text-slate-300 font-medium">{text}</span>
);

const jobs: { title: string; company: string; period: string; points: ReactNode[]; tech: string[] }[] = [
  {
    title: "Full Stack & Mobile Engineer",
    company: "Competitive Pro Gaming (CPG App)",
    period: "Feb 2024 – Present",
    points: [
      <>Contributed to transforming an early-stage prototype into a {hi("production-ready mobile platform")}.</>,
      <>Integrated {hi("EA Sports APIs")} and supporting backend systems.</>,
      <>Implemented {hi("internationalization (i18n)")} support for multiple regions and languages.</>,
      <>Redesigned {hi("premium subscription")} and {hi("in-app purchase")} workflows.</>,
      <>Developed {hi("tournament")} and {hi("EMEA competition management")} features.</>,
      <>Built {hi("image generation pipelines")} for lineups, leaderboards, and dynamic visual assets.</>,
      <>Worked across {hi("backend services")}, {hi("mobile applications")}, and {hi("deployment workflows")}.</>,
    ],
    tech: ["TypeScript", "React Native", "Expo", "PostgreSQL"],
  },
  {
    title: "Backend Engineer Intern",
    company: "Anicha Digital Infrastructure (Campuzone)",
    period: "Jun 2023 – Jan 2024",
    points: [
      <>Developed {hi("bulk data ingestion pipelines")} for student and staff onboarding.</>,
      <>Built {hi("attendance management")} functionality for educational institutions.</>,
      <>Implemented backend features and resolved {hi("production issues")} across the platform.</>,
      <>Worked with {hi("large-scale academic data")} entry and management workflows.</>,
    ],
    tech: ["Python", "Django", "MySQL"],
  },
];

function GlowCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      className="relative rounded-2xl"
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setGlow({ x: e.clientX - r.left, y: e.clientY - r.top, active: true });
      }}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
    >
      <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/9 transition-colors duration-300">
        {children}
      </div>
      {/* border-only glow: masked to the 1px border area */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          opacity: glow.active ? 1 : 0,
          transition: 'opacity 0.3s',
          background: `radial-gradient(350px circle at ${glow.x}px ${glow.y}px, rgba(14,165,233,0.8), transparent 65%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">Experience</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-sky-500/50 via-sky-500/20 to-transparent" />

          <Stagger className="flex flex-col gap-10">
            {jobs.map((job, i) => (
              <StaggerItem key={i} index={i}>
                <div className="pl-16 relative">
                  <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-[#020c1b] border-2 border-sky-500/70 flex items-center justify-center shadow-[0_0_12px_rgba(14,165,233,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  </div>

                  <GlowCard>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                      <span className="flex items-center gap-1.5 text-slate-300/80 text-sm font-semibold">
                        <CalendarDays size={16} className="text-sky-400/70 shrink-0" />
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sky-400 text-sm mb-5">{job.company}</p>

                    <ul className="flex flex-col gap-2.5 mb-5">
                      {job.points.map((p, j) => (
                        <li key={j} className="text-[#8892b0] text-sm flex gap-2 items-start">
                          <ChevronRight size={14} className="text-sky-400 mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
