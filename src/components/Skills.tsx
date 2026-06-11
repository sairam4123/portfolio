import { Code2, Layout, Server, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiCplusplus,
  SiGodotengine,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiTailwindcss,
  SiFramer,
  SiFastapi,
  SiTrpc,
  SiDjango,
  SiExpress,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

const groups: {
  label: string;
  icon: LucideIcon;
  color: string;
  skills: {
    name: string;
    Icon?: React.ComponentType<{
      size?: number;
      color?: string;
      className?: string;
    }>;
  }[];
}[] = [
  {
    label: "Languages",
    icon: Code2,
    color: "text-violet-400",
    skills: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "Go", Icon: SiGo },
      { name: "C" },
      { name: "C++", Icon: SiCplusplus },
      { name: "GDScript", Icon: SiGodotengine },
    ],
  },
  {
    label: "Frontend",
    icon: Layout,
    color: "text-sky-400",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "tRPC", Icon: SiTrpc },
      { name: "Django", Icon: SiDjango },
      { name: "Express.js", Icon: SiExpress },
      { name: "Celery" },
      { name: "Redis", Icon: SiRedis },
      { name: "REST APIs" },
      { name: "Server-Sent Events" },
    ],
  },
  {
    label: "Databases",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    color: "text-orange-400",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Docker Compose", Icon: SiDocker },
      { name: "Vercel", Icon: SiVercel },
      { name: "Godot Engine", Icon: SiGodotengine },
    ],
  },
];

const particles = [
  { Icon: SiTypescript, x: 6, y: 8, size: 28, delay: "0s", dur: "7s" },
  { Icon: SiPython, x: 80, y: 5, size: 24, delay: "1.2s", dur: "6.5s" },
  { Icon: SiReact, x: 45, y: 3, size: 32, delay: "2.4s", dur: "5.8s" },
  { Icon: SiDocker, x: 90, y: 28, size: 26, delay: "0.6s", dur: "8s" },
  { Icon: SiPostgresql, x: 12, y: 60, size: 24, delay: "3.1s", dur: "6.2s" },
  { Icon: SiNextdotjs, x: 65, y: 70, size: 28, delay: "1.7s", dur: "7.4s" },
  { Icon: SiGo, x: 28, y: 82, size: 30, delay: "2.8s", dur: "5.5s" },
  { Icon: SiRedis, x: 85, y: 65, size: 22, delay: "0.9s", dur: "6.9s" },
  { Icon: SiSupabase, x: 3, y: 38, size: 26, delay: "3.6s", dur: "7.1s" },
  { Icon: SiDjango, x: 52, y: 50, size: 24, delay: "1.9s", dur: "5.9s" },
  { Icon: SiTailwindcss, x: 22, y: 20, size: 28, delay: "4.2s", dur: "6.4s" },
  { Icon: SiFastapi, x: 70, y: 18, size: 26, delay: "2.1s", dur: "7.7s" },
  { Icon: SiVercel, x: 38, y: 68, size: 22, delay: "0.4s", dur: "8.2s" },
  { Icon: SiGit, x: 88, y: 85, size: 24, delay: "3.8s", dur: "6s" },
  { Icon: SiGithub, x: 55, y: 90, size: 28, delay: "1.4s", dur: "7.3s" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute opacity-[0.07]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animation: `float-particle ${p.dur} ${p.delay} ease-in-out infinite`,
            }}
          >
            <p.Icon
              size={p.size}
              color="currentColor"
              className="text-sky-300"
            />
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">
                Technical Skills
              </h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <Stagger className="flex flex-col gap-4">
          {groups.map(({ label, icon: Icon, color, skills }, i) => (
            <StaggerItem key={label} index={i}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-sky-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={16} className={color} />
                  <p className="font-semibold text-xs uppercase text-[#8892b0] group-hover:text-[#ccd6f6] transition-colors duration-200">
                    {label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, Icon: SkillIcon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 px-3 py-1 bg-sky-600/10 border border-sky-500/20 text-[#ccd6f6] text-sm rounded-full hover:bg-sky-600/20 hover:border-sky-400/40 transition-colors duration-200 cursor-default"
                    >
                      {SkillIcon && (
                        <SkillIcon
                          size={13}
                          color="currentColor"
                          className="opacity-80"
                        />
                      )}
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
