"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, FloatingParticles } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as const;

const hi = (text: string) => (
  <span className="text-slate-300 font-medium">{text}</span>
);

const jobs: {
  title: string;
  company: string;
  period: string;
  points: ReactNode[];
  tech: string[];
}[] = [
  {
    title: "Full Stack & Mobile Engineer",
    company: "Competitive Pro Gaming (CPG App)",
    period: "Feb 2024 – Present",
    points: [
      <>
        Contributed to transforming an early-stage prototype into a{" "}
        {hi("production-ready mobile platform")}.
      </>,
      <>Integrated {hi("EA Sports APIs")} and supporting backend systems.</>,
      <>
        Implemented {hi("internationalization (i18n)")} support for multiple
        regions and languages.
      </>,
      <>
        Redesigned {hi("premium subscription")} and {hi("in-app purchase")}{" "}
        workflows.
      </>,
      <>
        Developed {hi("tournament")} and {hi("EMEA competition management")}{" "}
        features.
      </>,
      <>
        Built {hi("image generation pipelines")} for lineups, leaderboards, and
        dynamic visual assets.
      </>,
      <>
        Worked across {hi("backend services")}, {hi("mobile applications")}, and{" "}
        {hi("deployment workflows")}.
      </>,
    ],
    tech: ["TypeScript", "React Native", "Expo", "PostgreSQL"],
  },
  {
    title: "Backend Engineer Intern",
    company: "Anicha Digital Infrastructure (Campuzone)",
    period: "Jun 2023 – Jan 2024",
    points: [
      <>
        Developed {hi("bulk data ingestion pipelines")} for student and staff
        onboarding.
      </>,
      <>
        Built {hi("attendance management")} functionality for educational
        institutions.
      </>,
      <>
        Implemented backend features and resolved {hi("production issues")}{" "}
        across the platform.
      </>,
      <>
        Worked with {hi("large-scale academic data")} entry and management
        workflows.
      </>,
    ],
    tech: ["Python", "Django", "MySQL"],
  },
];


function JobCard({
  job,
  isOpen,
  onToggle,
}: {
  job: (typeof jobs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <GlowCard onClick={onToggle} className="">
      {/* always-visible header */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-3 mb-0.5">
          <h3 className="text-white font-semibold text-lg leading-snug">{job.title}</h3>
          <div className="flex items-center gap-3 shrink-0 mt-0.5">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300/80 text-sm font-semibold">
              <CalendarDays size={16} className="text-sky-400/70 shrink-0" />
              {job.period}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <ChevronDown size={18} className="text-sky-400/60" />
            </motion.div>
          </div>
        </div>
        <p className="text-sky-400 text-sm">{job.company}</p>
        <span className="md:hidden flex items-center gap-1.5 text-slate-300/80 text-sm font-semibold mt-2">
          <CalendarDays size={16} className="text-sky-400/70 shrink-0" />
          {job.period}
        </span>
      </div>

      {/* expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-white/8 mb-5" />

              <ul className="flex flex-col gap-2.5 mb-5">
                {job.points.map((p, j) => (
                  <motion.li
                    key={j}
                    className="text-[#8892b0] text-sm flex gap-2 items-start"
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease, delay: j * 0.06 }}
                  >
                    <span className="text-sky-400 mt-0.5 shrink-0 text-xs">
                      ▹
                    </span>
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t, k) => (
                  <motion.span
                    key={t}
                    className="px-2.5 py-0.5 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
                    initial={{ opacity: 0, scale: 0.8, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease,
                      delay: job.points.length * 0.06 + k * 0.055,
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlowCard>
  );
}

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false,
  );
}

export default function Experience() {
  const isDesktop = useIsDesktop();
  // overrides: explicitly toggled cards override the desktop default
  const [overrides, setOverrides] = useState<Map<number, boolean>>(new Map());

  const isOpen = (i: number) =>
    overrides.has(i) ? overrides.get(i)! : isDesktop;

  const toggle = (i: number) =>
    setOverrides((prev) => {
      const next = new Map(prev);
      next.set(i, !isOpen(i));
      return next;
    });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <FloatingParticles />
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
                  <JobCard
                    job={job}
                    isOpen={isOpen(i)}
                    onToggle={() => toggle(i)}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
