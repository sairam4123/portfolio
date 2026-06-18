import { Trophy, BookOpen, Award, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  FloatingParticles,
} from "@/components/animations";

const hi = (text: string) => (
  <span className="text-white font-semibold">{text}</span>
);

const achievements: {
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  content: React.ReactNode;
}[] = [
  {
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    content: (
      <>
        Won {hi("10+ prizes")} across {hi("12+ symposiums")}.
      </>
    ),
  },
  {
    icon: BookOpen,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    content: (
      <>
        Published a research paper on {hi("TRAX")} in the {hi("IJMRSET")}.
      </>
    ),
  },
  {
    icon: Award,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    content: (
      <>
        Received {hi("2× Best Technical Student Award")} at Mookambigai College
        of Engineering.
      </>
    ),
  },
  {
    icon: Gamepad2,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    content: (
      <>Organized {hi("5 GIC Game Jams")} for the Godot India Community.</>
    ),
  },
];

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

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <StaggerItem key={i} index={i}>
              <div className="bg-white/5 h-full backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex gap-5 items-center hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center`}
                >
                  <a.icon size={22} className={a.color} />
                </div>
                <p className="text-[#8892b0] text-sm leading-relaxed">
                  {a.content}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
