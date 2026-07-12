"use client";

import { GraduationCap, Layers, Train, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp, FadeIn, FloatingParticles } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 9, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Symposium Wins" },
  { value: 2, suffix: "", label: "Professional Roles" },
];

const points = [
  {
    icon: GraduationCap,
    text: "Information Technology undergraduate with professional experience in full-stack, backend, and mobile development.",
  },
  {
    icon: Layers,
    text: "Built production systems including AI-powered content platforms and educational management software.",
  },
  {
    icon: Train,
    text: "Developed railway simulation and automation tools used for traffic modeling and optimization.",
  },
  {
    icon: Code2,
    text: (
      <>
        Skilled in{" "}
        <span className="text-sky-300 font-medium">
          TypeScript, Python, React Native, FastAPI, PostgreSQL
        </span>{" "}
        and scalable software architecture.
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="pt-8 pb-24 px-6 relative">
      <FloatingParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-2 gap-4 h-full">
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <GlowCard glowCircleSize={100}>
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <span className="text-4xl font-bold text-sky-400 mb-1">
                      <CountUp to={value} suffix={suffix} />
                    </span>
                    <span className="text-[#8892b0] text-sm font-medium">
                      {label}
                    </span>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <GlowCard className="p-8">
              <ul className="space-y-4 text-[#8892b0] text-base">
                {points.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease }}
                  >
                    <Icon size={18} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
