"use client";

import { GraduationCap, Award, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeIn, FloatingParticles } from "@/components/animations";

const ease = [0.22, 1, 0.36, 1] as const;

function EntryCard({
  index,
  icon: Icon,
  tone,
  title,
  subtitle,
  badge,
  children,
}: {
  index: number;
  icon: LucideIcon;
  tone: "sky" | "cyan";
  title: string;
  subtitle: string;
  badge?: ReactNode;
  children: ReactNode;
}) {
  const fromLeft = index % 2 === 0;
  const border =
    tone === "sky"
      ? "border-sky-500/20 hover:border-sky-500/45"
      : "border-cyan-500/20 hover:border-cyan-400/45";
  const iconBox =
    tone === "sky"
      ? "bg-sky-500/15 border-sky-400/25 text-sky-300"
      : "bg-cyan-500/15 border-cyan-400/25 text-cyan-300";
  const subtitleColor = tone === "sky" ? "text-sky-400/80" : "text-cyan-400/80";

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: 0.05 + index * 0.08, ease }}
      whileHover={{ y: -4 }}
    >
      <div
        className={`bg-white/5 backdrop-blur-sm border ${border} rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300 flex gap-5 items-start`}
      >
        <div
          className={`shrink-0 w-12 h-12 rounded-xl border ${iconBox} flex items-center justify-center`}
        >
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="text-white font-semibold">{title}</h3>
            {badge}
          </div>
          <p className={`${subtitleColor} text-sm mb-2`}>{subtitle}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease }}
      className="text-sky-400 font-mono text-xs tracking-widest uppercase mb-4"
    >
      {children}
    </motion.p>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <FloatingParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">
                Education &amp; Certifications
              </h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <Eyebrow>Education</Eyebrow>
        <div className="flex flex-col gap-4 mb-10">
          <EntryCard
            index={0}
            icon={GraduationCap}
            tone="sky"
            title="Bachelor of Technology - Information Technology"
            subtitle="Mookambigai College of Engineering, Pudukkottai"
            badge={
              <span className="text-sky-300 text-xs font-mono bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Expected 2027
              </span>
            }
          >
            <p className="text-gray-300 text-sm">
              CGPA: <span className="text-sky-100 font-semibold">8.66</span>
            </p>
          </EntryCard>

          <EntryCard
            index={1}
            icon={GraduationCap}
            tone="sky"
            title="Higher Secondary Certificate (HSC)"
            subtitle="SFS School, Pudukkottai"
          >
            <p className="text-gray-300 text-sm">
              Score:{" "}
              <span className="text-sky-300 font-semibold">527 / 600</span>
            </p>
          </EntryCard>
        </div>

        <Eyebrow>Certifications</Eyebrow>
        <div className="flex flex-col gap-4">
          <EntryCard
            index={2}
            icon={Award}
            tone="cyan"
            title="Introduction to Large Language Models"
            subtitle="NPTEL Certification"
            badge={
              <span className="flex items-center gap-1.5 text-yellow-400 text-xs font-mono bg-yellow-600/10 border border-yellow-500/25 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                <Trophy size={12} />
                Silver Medal
              </span>
            }
          >
            <p className="text-gray-300 text-sm">
              Score: <span className="text-sky-300 font-semibold">77%</span>
            </p>
          </EntryCard>
        </div>
      </div>
    </section>
  );
}
