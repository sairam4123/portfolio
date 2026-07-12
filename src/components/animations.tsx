"use client";

import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// Fades decorative layers out near section edges so they don't hard-clip
// at section boundaries
const edgeFadeMask = {
  maskImage:
    "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
} as const;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const offset =
    direction === "up"
      ? { y: 28 }
      : direction === "left"
        ? { x: -28 }
        : direction === "right"
          ? { x: 28 }
          : {};

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Stagger is now a plain layout wrapper — each StaggerItem manages its own scroll trigger
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

// Subtle atmospheric particles for section backgrounds — reuses hero-drift-* keyframes
export function SectionParticles() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={edgeFadeMask}
      aria-hidden
    >
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl bg-sky-800/10"
        style={{
          top: "-8%",
          left: "-6%",
          animation: "hero-drift-a 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-60 h-60 rounded-full blur-3xl bg-cyan-800/8"
        style={{
          bottom: "5%",
          right: "-4%",
          animation: "hero-drift-b 20s ease-in-out infinite 3s",
        }}
      />
      <div
        className="absolute w-44 h-44 rounded-full blur-2xl bg-sky-700/6"
        style={{
          top: "45%",
          right: "18%",
          animation: "hero-drift-c 24s ease-in-out infinite 1.5s",
        }}
      />
    </div>
  );
}

const DOTS = [
  { x: 5, y: 15, dur: "8.0s", delay: "-3s" },
  { x: 18, y: 72, dur: "6.5s", delay: "0s" },
  { x: 30, y: 8, dur: "7.0s", delay: "-5s" },
  { x: 45, y: 55, dur: "9.0s", delay: "-1.5s" },
  { x: 60, y: 28, dur: "6.0s", delay: "-4s" },
  { x: 72, y: 80, dur: "7.5s", delay: "0s" },
  { x: 85, y: 42, dur: "8.5s", delay: "-2s" },
  { x: 25, y: 40, dur: "5.8s", delay: "-6s" },
  { x: 90, y: 10, dur: "7.2s", delay: "-0.5s" },
  { x: 52, y: 88, dur: "6.8s", delay: "-3.5s" },
  { x: 38, y: 22, dur: "8.2s", delay: "-1s" },
  { x: 12, y: 90, dur: "7.8s", delay: "-4.5s" },
];

export function FloatingParticles() {
  return (
    <div
      className="absolute inset-0 blur-[6px] overflow-hidden pointer-events-none select-none z-0"
      style={edgeFadeMask}
      aria-hidden
    >
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-sky-400"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: 7,
            height: 7,
            marginLeft: -3.5,
            marginTop: -3.5,
            animation: `float-dot ${d.dur} ${d.delay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Number counts up from 0 when scrolled into view
export function CountUp({
  to,
  suffix = "",
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease });
    return () => controls.stop();
  }, [inView, to, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
