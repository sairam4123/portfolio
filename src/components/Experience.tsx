"use client";

import {
  useState,
  useSyncExternalStore,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FadeIn, FloatingParticles } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as const;
// fraction of parent scrollYProgress over which each card fades/slides in
const REVEAL_WINDOW = 0.14;

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
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-3 mb-0.5">
          <h3 className="text-white font-semibold text-lg leading-snug">
            {job.title}
          </h3>
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

// ─── Each card reveals when the timeline line reaches its dot ─────────────────
function TimelineItem({
  job,
  parentProgress,
  threshold,
  dotRef,
  isOpen,
  onToggle,
}: {
  job: (typeof jobs)[number];
  parentProgress: MotionValue<number>;
  threshold: number;
  dotRef: (el: HTMLDivElement | null) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const t0 = threshold;
  const t1 = Math.min(t0 + REVEAL_WINDOW, 1);

  // Dot is part of the scroll/line — appears when the tip reaches it, no x-slide
  const dotT0 = Math.max(0, t0 - 0.04);
  const dotT1 = dotT0 + 0.08;
  const dotOpacity = useTransform(parentProgress, [dotT0, dotT1], [0, 1]);
  const dotInnerScale = useTransform(parentProgress, [dotT0, dotT1], [0, 1]);
  const dotInnerOpacity = useTransform(parentProgress, [dotT0, dotT1], [0, 0.9]);
  const borderColor = useTransform(parentProgress, [dotT0, t1], [
    "rgba(14,165,233,0.18)",
    "rgba(14,165,233,0.82)",
  ]);
  const boxShadow = useTransform(parentProgress, [dotT0, t1], [
    "0 0 0px rgba(14,165,233,0.00), 0 0 0px rgba(56,189,248,0.00)",
    "0 0 18px rgba(14,165,233,0.50), 0 0 5px rgba(56,189,248,0.75)",
  ]);

  // Card + connector slide in after the dot has appeared
  const cardOpacity = useTransform(parentProgress, [t0, t1], [0, 1]);
  const cardX = useTransform(parentProgress, [t0, t1], [36, 0]);
  const connectorScale = useTransform(parentProgress, [t0, t1], [0, 1]);

  return (
    <div className="pl-16 relative">
      {/* Connector — appears with the card, not the dot */}
      <motion.div
        className="absolute h-px bg-sky-500/25"
        style={{
          left: 40,
          top: "2.25rem",
          width: 24,
          transformOrigin: "left",
          scaleX: connectorScale,
          opacity: connectorScale,
        }}
      />

      {/* Dot — part of the scroll timeline, stays on the line (no x-translate) */}
      <motion.div
        ref={dotRef}
        className="absolute left-0 top-4 w-10 h-10 rounded-full bg-[#020c1b] border-2 flex items-center justify-center"
        style={{ opacity: dotOpacity, borderColor, boxShadow }}
      >
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-sky-400"
          style={{ scale: dotInnerScale, opacity: dotInnerOpacity }}
        />
      </motion.div>

      {/* Card slides in from the right after the dot appears */}
      <motion.div style={{ opacity: cardOpacity, x: cardX }}>
        <JobCard job={job} isOpen={isOpen} onToggle={onToggle} />
      </motion.div>
    </div>
  );
}

// ─── Container: owns the scroll progress and recomputes thresholds on resize ──
function AnimatedTimeline({
  isOpen,
  onToggle,
}: {
  isOpen: (i: number) => boolean;
  onToggle: (i: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initial estimates (overwritten after mount by real measurements)
  const [thresholds, setThresholds] = useState<number[]>(() =>
    jobs.map((_, i) => 0.05 + (i / Math.max(jobs.length - 1, 1)) * 0.8),
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.2"],
  });

  // Measure each dot's position relative to the container and normalise by
  // container height → threshold in [0,1] matching scrollYProgress scale.
  // Called on mount AND whenever the container resizes (card toggle changes height).
  const recompute = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    if (cr.height === 0) return;
    const next = dotRefs.current.map((dot) => {
      if (!dot) return 0.05;
      const dr = dot.getBoundingClientRect();
      return Math.max(0, (dr.top - cr.top) / cr.height);
    });
    setThresholds(next);
  }, []);

  useEffect(() => {
    recompute();
    const ro = new ResizeObserver(recompute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [recompute]);

  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const tipTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const tipOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.97, 1],
    [0, 1, 1, 0],
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Faint track (always visible) */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-800/70" />

      {/* Scroll-driven fill */}
      <div className="absolute left-5 top-2 bottom-2 w-px overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-x-0 top-0"
          style={{
            height: lineH,
            background:
              "linear-gradient(to bottom, #38bdf8, rgba(14,165,233,0.55) 60%, rgba(14,165,233,0.12))",
          }}
        />
      </div>

      {/* Glow blur layer */}
      <div
        className="absolute left-5 top-2 bottom-2 pointer-events-none"
        style={{ width: 1 }}
      >
        <motion.div
          className="absolute top-0"
          style={{
            height: lineH,
            width: 8,
            left: -3.5,
            background:
              "linear-gradient(to bottom, rgba(56,189,248,0.65), rgba(14,165,233,0.25), transparent)",
            filter: "blur(4px)",
          }}
        />
      </div>

      {/* Traveling tip dot */}
      <motion.div
        className="absolute left-5 pointer-events-none z-20"
        style={{ top: tipTop, opacity: tipOpacity, marginLeft: -7, marginTop: -7 }}
      >
        <motion.div
          className="w-3.5 h-3.5 rounded-full bg-sky-300"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            boxShadow:
              "0 0 10px 3px rgba(56,189,248,0.8), 0 0 24px 6px rgba(14,165,233,0.38)",
          }}
        />
      </motion.div>

      {/* Items — each card waits for the line to reach its dot */}
      <div className="flex flex-col gap-10">
        {jobs.map((job, i) => (
          <TimelineItem
            key={i}
            job={job}
            parentProgress={scrollYProgress}
            threshold={thresholds[i] ?? 0.05}
            dotRef={(el) => {
              dotRefs.current[i] = el;
            }}
            isOpen={isOpen(i)}
            onToggle={() => onToggle(i)}
          />
        ))}
      </div>
    </div>
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

        <AnimatedTimeline isOpen={isOpen} onToggle={toggle} />
      </div>
    </section>
  );
}
