import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { GlowCard } from "@/components/GlowCard";
import { YouTubeIcon } from "@/components/BrandIcons";
import { FloatingParticles } from "@/components/animations";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | by Sairam Mangeshkar`,
    keywords: project.tech,
    description: project.description,
    alternates: {
      canonical: `https://sairamthedev.vercel.app/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} | by Sairam Mangeshkar`,
      description: project.description,
      url: `https://sairamthedev.vercel.app/projects/${slug}`,
      siteName: "Sairam Mangeshkar Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | by Sairam Mangeshkar`,
      description: project.description,
      creator: "@sairamthedev",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#020c1b] text-white relative overflow-hidden">
      <FloatingParticles />
      <Navbar variant="project" />

      <main className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm mb-8"
        >
          <ArrowLeft size={15} />
          Back to Projects
        </Link>
        {project.youtubeId ? (
          /* Two-column layout for projects with a video */
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">
            {/* Left: video */}
            <div className="lg:sticky lg:top-8">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                  title={`${project.name} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right: details */}
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                {project.sih && (
                  <span className="inline-block mb-3 px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs tracking-wider font-medium rounded-full">
                    SIH &middot; {project.sih}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  {project.name}
                </h1>
                <p className="text-[#8892b0] text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <GlowCard>
                <h2 className="text-sm font-semibold text-[#8892b0] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlowCard>

              {/* Links */}
              <GlowCard>
                <h2 className="text-sm font-semibold text-[#8892b0] mb-4">
                  Links
                </h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold transition-colors duration-200 w-fit"
                  >
                    <YouTubeIcon size={15} />
                    Watch on YouTube
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </GlowCard>
            </div>
          </div>
        ) : (
          /* Single-column header + grid for live projects */
          <>
            <div className="mb-10 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {project.name}
              </h1>
              <p className="text-[#8892b0] text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              <GlowCard>
                <h2 className="text-sm font-semibold text-[#8892b0] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs bg-sky-600/10 border border-sky-500/20 text-sky-300 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlowCard>

              <GlowCard>
                <h2 className="text-sm font-semibold text-[#8892b0] mb-4">
                  Links
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={15} />
                  View Live Site
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm"
                  >
                    GitHub Repository
                  </a>
                )}
              </GlowCard>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
