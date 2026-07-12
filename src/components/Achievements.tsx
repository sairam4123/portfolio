"use client";

import { Trophy, BookOpen, Award, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp, FadeIn, FloatingParticles } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as const;

const stats: {
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}[] = [
  {
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    value: 10,
    suffix: "+",
    label: "Prizes Won",
    detail: "Across 12+ technical symposiums",
  },
  {
    icon: Award,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    value: 2,
    suffix: "×",
    label: "Best Technical Student",
    detail: "Mookambigai College of Engineering",
  },
  {
    icon: Gamepad2,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    value: 5,
    suffix: "",
    label: "Game Jams Organized",
    detail: "For the Godot India Community",
  },
  {
    icon: BookOpen,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    value: 1,
    suffix: "",
    label: "Research Paper Published",
    detail: "TRAX — in the IJMRSET journal",
  },
];

function StatTile({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <GlowCard>
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center`}
          >
            <stat.icon size={22} className={stat.color} />
          </div>
        </div>
        <p
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2 leading-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f0f9ff 30%, #7dd3fc 80%)",
          }}
        >
          <CountUp to={stat.value} suffix={stat.suffix} />
        </p>
        <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
        <p className="text-[#8892b0] text-xs leading-relaxed">{stat.detail}</p>
      </GlowCard>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <FloatingParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatTile key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
