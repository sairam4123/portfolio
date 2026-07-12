"use client";

import { useRef, type ReactNode } from "react";
import { CalendarDays } from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { SectionParticles, FadeIn } from "@/components/animations";
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

function TimelineEntry({
  job,
  index,
}: {
  job: (typeof jobs)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px -25% 0px" });
  const cardLeft = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-x-20"
    >
      {/* Dot on the line */}
      <motion.div
        className="absolute left-5 md:left-1/2 top-5 -translate-x-1/2 w-10 h-10 rounded-full bg-[#020c1b] border-2 border-sky-500/25 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                borderColor: "rgba(14,165,233,0.75)",
                boxShadow:
                  "0 0 18px rgba(14,165,233,0.45), 0 0 5px rgba(56,189,248,0.65)",
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-sky-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.9 } : {}}
          transition={{ duration: 0.3, delay: 0.1, ease }}
        />
      </motion.div>

      {/* Connector from dot to card (desktop) */}
      <motion.div
        className={`hidden md:block absolute top-[2.45rem] h-px bg-sky-500/30 w-5 ${
          cardLeft ? "right-1/2 mr-5" : "left-1/2 ml-5"
        }`}
        style={{ transformOrigin: cardLeft ? "right" : "left" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease, delay: 0.2 }}
      />

      {/* Meta column — period on the opposite side of the card */}
      <motion.div
        className={`hidden md:flex flex-col gap-2.5 pt-6 ${
          cardLeft ? "md:order-2 items-start" : "items-end text-right"
        }`}
        initial={{ opacity: 0, x: cardLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      >
        <span className="flex items-center gap-2 text-slate-200 font-semibold">
          <CalendarDays size={16} className="text-sky-400/80 shrink-0" />
          {job.period}
        </span>
      </motion.div>

      {/* Card — slides in from its own side */}
      <motion.div
        className={cardLeft ? "md:order-1" : ""}
        initial={{ opacity: 0, x: cardLeft ? -56 : 56, scale: 0.95 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
      >
        <GlowCard>
          <span className="md:hidden flex items-center gap-1.5 text-slate-300/80 text-xs font-semibold mb-0.5">
            <CalendarDays size={14} className="text-sky-400/70 shrink-0" />
            {job.period}
          </span>

          <h3 className="text-white font-semibold text-lg leading-snug mt-2 md:mt-0">
            {job.title}
          </h3>
          <p className="text-sky-400 text-sm mb-4">{job.company}</p>

          <ul className="flex flex-col gap-2.5 mb-5">
            {job.points.map((p, j) => (
              <motion.li
                key={j}
                className="text-[#8892b0] text-sm flex gap-2 items-start"
                initial={{ opacity: 0, x: cardLeft ? -14 : 14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, ease, delay: 0.3 + j * 0.07 }}
              >
                <span className="text-sky-400 mt-0.5 shrink-0 text-xs">▹</span>
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
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  ease,
                  delay: 0.3 + job.points.length * 0.07 + k * 0.05,
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </GlowCard>
      </motion.div>
    </div>
  );
}

function ScrubbedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Line fill is scrubbed by scroll position — it grows and shrinks as you scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.5"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });
  const headTop = useTransform(progress, (v) => `${v * 100}%`);
  const headOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Line stack: track, scrubbed fill, glow, travelling head */}
      <div className="absolute left-5 md:left-1/2 top-2 bottom-2 -translate-x-1/2 pointer-events-none">
        <div className="absolute inset-y-0 w-px bg-slate-800/60" />

        <div className="absolute inset-y-0 w-px overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              scaleY: progress,
              transformOrigin: "top",
              background:
                "linear-gradient(to bottom, #38bdf8, rgba(14,165,233,0.55) 65%, rgba(14,165,233,0.15))",
            }}
          />
        </div>

        <motion.div
          className="absolute inset-y-0"
          style={{
            scaleY: progress,
            transformOrigin: "top",
            width: 8,
            left: -3.5,
            background:
              "linear-gradient(to bottom, rgba(56,189,248,0.6), rgba(14,165,233,0.2), transparent)",
            filter: "blur(4px)",
          }}
        />

        <motion.div
          className="absolute w-3 h-3 ml-[-5.5px] -mt-1.5 rounded-full bg-sky-300"
          style={{
            top: headTop,
            opacity: headOpacity,
            boxShadow:
              "0 0 12px rgba(56,189,248,0.9), 0 0 28px rgba(14,165,233,0.5)",
          }}
          aria-hidden
        />
      </div>

      <div className="flex flex-col gap-14 md:gap-20">
        {jobs.map((job, i) => (
          <TimelineEntry key={i} job={job} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <SectionParticles />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
          </div>
        </FadeIn>
        <ScrubbedTimeline />
      </div>
    </section>
  );
}
