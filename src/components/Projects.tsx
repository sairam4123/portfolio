"use client";

import {
  ExternalLink,
  Mic,
  School,
  Sparkles,
  TrainFront,
  Megaphone,
  Settings2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { YouTubeIcon } from "@/components/BrandIcons";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";

const projects: {
  name: string;
  description: string;
  tech: string[];
  link: string;
  type: "live" | "youtube";
  Icon: LucideIcon;
  sih?: string;
}[] = [
  {
    name: "Podolli AI",
    description:
      "AI-powered podcast generation platform that creates complete podcasts from arbitrary user-provided topics, with recommendation and trending systems.",
    tech: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
    ],
    link: "https://podolli-ai.co.in",
    type: "live",
    Icon: Mic,
  },
  {
    name: "MCE App",
    description:
      "College management platform for attendance tracking, on-duty forms, and academic records with an AI assistant (Gemini). Used by ~80% of students.",
    tech: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Gemini",
    ],
    link: "https://mceapp-v2.vercel.app/",
    type: "live",
    Icon: School,
  },
  {
    name: "Ideas Tinder",
    description:
      "Swipe-based platform for discovering and matching with project ideas, helping developers find side projects to build.",
    tech: ["React", "Expo", "tRPC", "Gemini", "PostgreSQL"],
    link: "https://ideas-tinder.vercel.app",
    type: "live",
    Icon: Sparkles,
  },
  {
    name: "TRAX",
    description:
      "AI-assisted railway traffic control platform with Discrete Event Simulation for train throughput optimization. ~15% efficiency improvement.",
    tech: ["FastAPI", "Python", "PostgreSQL", "React", "Tailwind CSS", "DES"],
    link: "https://youtu.be/j4dJQz--pl8",
    type: "youtube",
    Icon: TrainFront,
    sih: "SIH25022",
  },
  {
    name: "IRAS",
    description:
      "Automated railway announcement platform using live train data with multilingual TTS pipelines, scheduling, and prioritization.",
    tech: ["Python", "aiohttp", "BeautifulSoup", "Google TTS", "Pydub"],
    link: "https://youtu.be/cbsLe3v-Kz4",
    type: "youtube",
    Icon: Megaphone,
  },
  {
    name: "Publication Summary Generator",
    description:
      "Microservices platform aggregating publications from Google Scholar & DBLP. Real-time SSE progress, export to PDF/Word/Excel, containerised with Docker.",
    tech: [
      "FastAPI",
      "Python",
      "Celery",
      "Redis",
      "Docker",
      "React",
      "Tailwind CSS",
    ],
    link: "https://youtu.be/D6XI4GFsoec",
    type: "youtube",
    Icon: Settings2,
    sih: "SIH1614",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">Projects</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <StaggerItem key={p.name} index={i}>
              <GlowCard sih={p.sih}>
                <div
                  onClick={() => window.open(p.link, "_blank")}
                  role="button"
                  className="flex items-start justify-between mb-4"
                >
                  <p.Icon
                    size={28}
                    className="text-sky-400/70 group-hover:text-sky-400 transition-colors duration-200"
                  />
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-sky-400 transition-colors duration-200"
                    aria-label={
                      p.type === "youtube" ? "Watch demo" : "View live"
                    }
                  >
                    {p.type === "youtube" ? (
                      <YouTubeIcon size={18} />
                    ) : (
                      <ExternalLink size={18} />
                    )}
                  </a>
                </div>

                <h3 className="text-white font-semibold text-lg mb-0.5 group-hover:text-sky-300 transition-colors duration-200">
                  {p.name}
                </h3>
                {p.sih && (
                  <p className="text-sky-500/70 text-[12px] font-semibold mb-2">
                    {p.sih}
                  </p>
                )}

                <p className="text-[#8892b0] text-sm leading-relaxed flex-1 mb-5 mt-1">
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
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
