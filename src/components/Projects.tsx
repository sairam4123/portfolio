"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { YouTubeIcon } from "@/components/BrandIcons";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";
import { projects } from "@/data/projects";

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
                <div className="flex items-start justify-between mb-4">
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.type === "youtube" ? (
                      <YouTubeIcon size={18} />
                    ) : (
                      <ExternalLink size={18} />
                    )}
                  </a>
                </div>

                <Link href={`/projects/${p.slug}`} className="block">
                  <h3 className="text-white font-semibold text-lg mb-0.5 hover:text-sky-300 transition-colors duration-200">
                    {p.name}
                  </h3>
                </Link>
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
