import { GraduationCap, Layers, Train, Code2 } from "lucide-react";
import {
  FadeIn,
  StaggerItem,
  FloatingParticles,
} from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "9+", label: "Projects" },
  { value: "10+", label: "Symposium Wins" },
  { value: "2", label: "Professional Roles" },
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
            {stats.map(({ value, label }, i) => (
              <StaggerItem key={label} index={i}>
                <GlowCard glowCircleSize={100}>
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <span className="text-4xl font-bold text-sky-400 mb-1">
                      {value}
                    </span>
                    <span className="text-[#8892b0] text-sm font-medium">
                      {label}
                    </span>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </div>

          <StaggerItem index={4}>
            <GlowCard className="p-8">
              <ul className="space-y-4 text-[#8892b0] text-base">
                {points.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={18} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </StaggerItem>
        </div>
      </div>
    </section>
  );
}
