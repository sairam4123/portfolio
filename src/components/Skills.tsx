import { Code2, Layout, Server, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const groups: { label: string; icon: LucideIcon; color: string; skills: string[] }[] = [
  {
    label: "Languages",
    icon: Code2,
    color: "text-violet-400",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "C", "C++", "GDScript"],
  },
  {
    label: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    skills: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      "FastAPI",
      "tRPC",
      "Django",
      "Express.js",
      "Celery",
      "Redis",
      "REST APIs",
      "Server-Sent Events",
    ],
  },
  {
    label: "Databases",
    icon: Database,
    color: "text-emerald-400",
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    color: "text-orange-400",
    skills: ["Git", "GitHub", "Docker", "Docker Compose", "Vercel", "Godot Engine"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-blue-500/40 font-mono text-sm font-medium">02</span>
          <h2 className="text-3xl font-bold text-[#ccd6f6]">Technical Skills</h2>
          <div className="flex-1 h-px bg-linear-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="flex flex-col gap-4">
          {groups.map(({ label, icon: Icon, color, skills }) => (
            <div
              key={label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={16} className={color} />
                <p className="font-mono text-xs uppercase tracking-wider text-[#8892b0] group-hover:text-[#ccd6f6] transition-colors duration-200">
                  {label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-[#ccd6f6] text-sm rounded-full hover:bg-blue-600/20 hover:border-blue-400/40 transition-colors duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
