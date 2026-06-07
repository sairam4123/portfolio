import { Mail, ArrowDown, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-cyan-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-blue-400 font-mono text-sm mb-5 tracking-[0.3em] uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mb-5 leading-tight">
          Sairam Mangeshkar
        </h1>
        <h2 className="text-lg md:text-2xl text-[#8892b0] font-light mb-6 max-w-2xl mx-auto">
          Full Stack Developer &middot; Backend Engineer &middot; Mobile Application Developer
        </h2>

        <p className="text-[#8892b0] text-sm mb-10 flex items-center justify-center gap-1.5">
          <MapPin size={14} className="text-blue-400 shrink-0" />
          <span>Pudukkottai, Tamil Nadu, India</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 rounded-lg font-medium transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8892b0] hover:text-blue-400 transition-colors duration-200 text-sm"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="mailto:sairam.m.2005.65@gmail.com"
            className="flex items-center gap-2 text-[#8892b0] hover:text-blue-400 transition-colors duration-200 text-sm"
            aria-label="Email"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">Email</span>
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="https://linkedin.com/in/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8892b0] hover:text-blue-400 transition-colors duration-200 text-sm"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 text-[#8892b0] hover:text-blue-400 animate-bounce transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
