import { ExternalLink, FolderOpen } from "lucide-react";
import { YouTubeIcon } from "@/components/BrandIcons";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

const projects = [
  {
    name: "Podolli AI",
    description:
      "AI-powered podcast generation platform that creates complete podcasts from arbitrary user-provided topics, with recommendation and trending systems.",
    tech: ["FastAPI", "Python", "React", "TypeScript", "Supabase", "PostgreSQL"],
    link: "https://podolli-ai.co.in",
    type: "live" as const,
  },
  {
    name: "MCE App",
    description:
      "College management platform for attendance tracking, on-duty forms, and academic records with an AI assistant (Gemini). Used by ~80% of students.",
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "tRPC", "PostgreSQL", "Gemini"],
    link: "https://mceapp-v2.vercel.app/",
    type: "live" as const,
  },
  {
    name: "Ideas Tinder",
    description:
      "Swipe-based platform for discovering and matching with project ideas, helping developers find side projects to build.",
    tech: [],
    link: "https://ideas-tinder.vercel.app",
    type: "live" as const,
  },
  {
    name: "TRAX",
    description:
      "AI-assisted railway traffic control platform with Discrete Event Simulation for train throughput optimization. ~15% efficiency improvement. SIH25022.",
    tech: ["FastAPI", "Python", "PostgreSQL", "React", "Tailwind CSS", "DES"],
    link: "https://youtu.be/j4dJQz--pl8",
    type: "youtube" as const,
  },
  {
    name: "IRAS",
    description:
      "Automated railway announcement platform using live train data with multilingual TTS pipelines, scheduling, and prioritization.",
    tech: ["Python", "aiohttp", "BeautifulSoup", "Google TTS", "Pydub"],
    link: "https://youtu.be/cbsLe3v-Kz4",
    type: "youtube" as const,
  },
  {
    name: "Publication Summary Generator",
    description:
      "Microservices platform aggregating publications from Google Scholar & DBLP. Real-time SSE progress, export to PDF/Word/Excel, containerised with Docker. SIH1614.",
    tech: ["FastAPI", "Python", "Celery", "Redis", "Docker", "React", "Tailwind CSS"],
    link: "https://youtu.be/D6XI4GFsoec",
    type: "youtube" as const,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-[#ccd6f6]">Projects</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
          {projects.map((p) => (
            <StaggerItem key={p.name}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-sky-500/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(14,165,233,0.08)] transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <FolderOpen
                    size={28}
                    className="text-sky-400/70 group-hover:text-sky-400 transition-colors duration-200"
                  />
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-sky-400 transition-colors duration-200"
                    aria-label={p.type === "youtube" ? "Watch demo" : "View live"}
                  >
                    {p.type === "youtube" ? <YouTubeIcon size={18} /> : <ExternalLink size={18} />}
                  </a>
                </div>

                <h3 className="text-[#ccd6f6] font-semibold text-lg mb-2 group-hover:text-sky-300 transition-colors duration-200">
                  {p.name}
                </h3>

                <p className="text-[#8892b0] text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>

                {p.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
