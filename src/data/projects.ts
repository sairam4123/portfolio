import type { LucideIcon } from "lucide-react";
import {
  Mic,
  School,
  Sparkles,
  TrainFront,
  Megaphone,
  Settings2,
} from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
  type: "live" | "youtube";
  youtubeId?: string;
  githubLink?: string;
  sih?: string;
  featured?: boolean;
  Icon: LucideIcon;
};

export const projects: Project[] = [
  {
    slug: "podolli-ai",
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
    featured: true,
    Icon: Mic,
  },
  {
    slug: "mce-app",
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
    featured: true,
    Icon: School,
  },
  {
    slug: "ideas-tinder",
    name: "Ideas Tinder",
    description:
      "Swipe-based platform for discovering and matching with project ideas, helping developers find side projects to build.",
    tech: ["React", "Expo", "tRPC", "Gemini", "PostgreSQL"],
    link: "https://ideas-tinder.vercel.app",
    type: "live",
    Icon: Sparkles,
  },
  {
    slug: "trax",
    name: "TRAX",
    description:
      "AI-assisted railway traffic control platform with Discrete Event Simulation for train throughput optimization. ~15% efficiency improvement.",
    tech: ["FastAPI", "Python", "PostgreSQL", "React", "Tailwind CSS", "DES"],
    link: "https://youtu.be/j4dJQz--pl8",
    type: "youtube",
    youtubeId: "j4dJQz--pl8",
    sih: "SIH25022",
    featured: true,
    Icon: TrainFront,
  },
  {
    slug: "iras",
    name: "IRAS",
    description:
      "Automated railway announcement platform using live train data with multilingual TTS pipelines, scheduling, and prioritization.",
    tech: ["Python", "aiohttp", "BeautifulSoup", "Google TTS", "Pydub"],
    link: "https://youtu.be/cbsLe3v-Kz4",
    type: "youtube",
    youtubeId: "cbsLe3v-Kz4",
    Icon: Megaphone,
  },
  {
    slug: "publication-summary-generator",
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
    youtubeId: "D6XI4GFsoec",
    sih: "SIH1614",
    Icon: Settings2,
  },
];
