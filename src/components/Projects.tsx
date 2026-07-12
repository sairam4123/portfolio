"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { YouTubeIcon } from "@/components/BrandIcons";
import { FadeIn, FloatingParticles } from "@/components/animations";
import { GlowCard } from "@/components/GlowCard";
import { projects, type Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectLinkIcon({ p, size = 18 }: { p: Project; size?: number }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#8892b0] hover:text-sky-400 transition-colors duration-200"
      aria-label={p.type === "youtube" ? "Watch demo" : "View live"}
      onClick={(e) => e.stopPropagation()}
    >
      {p.type === "youtube" ? (
        <YouTubeIcon size={size} />
      ) : (
        <ExternalLink size={size} />
      )}
    </a>
  );
}

// Gradient border overlay — subtle by default, brightens when the group is hovered
function BorderHighlight({ rounded = "rounded-2xl" }: { rounded?: string }) {
  const maskStyle = {
    padding: "1px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  } as const;

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 ${rounded} pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500`}
        style={{
          ...maskStyle,
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.45), rgba(14,165,233,0.08) 40%, transparent 65%, rgba(14,165,233,0.25))",
        }}
      />
      <div
        aria-hidden
        className={`absolute inset-0 ${rounded} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          ...maskStyle,
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.85), rgba(14,165,233,0.3) 45%, rgba(56,189,248,0.5))",
        }}
      />
    </>
  );
}

function TechPills({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className ?? ""}`}>
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// Alternating spotlight row with a parallax visual panel
function FeaturedRow({ p, index }: { p: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [46, -46]);
  const numberY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <div
      ref={rowRef}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
    >
      {/* Visual panel */}
      <motion.div
        className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        <Link href={`/projects/${p.slug}`} className="block group">
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden bg-linear-to-br from-sky-950/70 via-[#04121f] to-cyan-950/40 transition-shadow duration-500 group-hover:shadow-[0_0_45px_rgba(14,165,233,0.18)]">
            {/* Glow wash */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sky-600/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
            <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-cyan-600/10 blur-3xl" />

            {/* Ghost number drifting on scroll */}
            <motion.span
              style={{ y: numberY }}
              className="absolute -right-2 -top-6 text-[9rem] md:text-[11rem] font-bold leading-none text-sky-400/8 select-none pointer-events-none"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            {/* Parallax icon */}
            <motion.div
              style={{ y: visualY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p.Icon
                strokeWidth={1.1}
                className="w-24 h-24 md:w-32 md:h-32 text-sky-400/60 transition-all duration-500 group-hover:text-sky-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_24px_rgba(14,165,233,0.45)]"
              />
            </motion.div>

            {p.sih && (
              <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white bg-sky-500 rounded-md">
                SIH
              </span>
            )}

            <BorderHighlight />
          </div>
        </Link>
      </motion.div>

      {/* Text side */}
      <motion.div
        className={`lg:col-span-5 ${
          reversed ? "lg:order-1 lg:text-right" : ""
        }`}
        initial={{ opacity: 0, x: reversed ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.12, ease }}
      >
        <p className="text-sky-400 font-mono text-xs tracking-widest uppercase mb-2">
          Featured Project
        </p>
        <div
          className={`flex items-center gap-3 mb-3 ${
            reversed ? "lg:justify-end" : ""
          }`}
        >
          <Link
            href={`/projects/${p.slug}`}
            className="group inline-flex items-center gap-1.5"
          >
            <h3 className="text-white font-bold text-2xl group-hover:text-sky-300 transition-colors duration-200">
              {p.name}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-sky-400/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <ProjectLinkIcon p={p} />
        </div>
        {p.sih && (
          <p className="text-sky-500/70 text-[12px] font-semibold mb-3">
            {p.sih}
          </p>
        )}
        <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 mb-4">
          <BorderHighlight rounded="rounded-xl" />
          <p className="text-[#8892b0] text-sm leading-relaxed">
            {p.description}
          </p>
        </div>
        <TechPills tech={p.tech} className={reversed ? "lg:justify-end" : ""} />
      </motion.div>
    </div>
  );
}

function GridCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <GlowCard sih={p.sih} className="p-6 hover:border-sky-500/35">
        <div className="flex items-start justify-between mb-4">
          <p.Icon
            size={28}
            className="text-sky-400/70 group-hover:text-sky-400 transition-colors duration-200"
          />
          <ProjectLinkIcon p={p} />
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

        {p.tech.length > 0 && <TechPills tech={p.tech} />}
      </GlowCard>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <FloatingParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">Projects</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-20 lg:gap-24 mb-24">
          {featured.map((p, i) => (
            <FeaturedRow key={p.slug} p={p} index={i} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center text-slate-300 font-semibold text-xl mb-10"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <GridCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
