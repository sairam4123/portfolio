'use client'

import { motion } from "framer-motion";
import { Mail, ArrowDown, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-sky-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-cyan-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.p {...fadeUp(0.1)} className="text-[#8892b0] text-lg mb-3">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22, backgroundPosition: '0% 50%' }}
          animate={{
            opacity: 1,
            y: 0,
            backgroundPosition: ['0% 50%', '200% 50%'],
          }}
          transition={{
            opacity: { duration: 0.75, delay: 0.25, ease },
            y: { duration: 0.75, delay: 0.25, ease },
            backgroundPosition: { duration: 4, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
          }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent mb-5 leading-tight"
          style={{
            backgroundImage: 'linear-gradient(90deg, #0ea5e9, #7dd3fc, #f0f9ff, #7dd3fc, #0ea5e9)',
            backgroundSize: '200% auto',
          }}
        >
          Sairam Mangeshkar
        </motion.h1>

        <motion.h2
          {...fadeUp(0.4)}
          className="text-lg md:text-xl text-[#8892b0] font-light mb-6 max-w-xl mx-auto"
        >
          Full Stack Developer &middot; Mobile Application Developer
        </motion.h2>

        <motion.p
          {...fadeUp(0.5)}
          className="text-[#8892b0] text-sm mb-10 flex items-center justify-center gap-1.5"
        >
          <MapPin size={14} className="text-sky-400 shrink-0" />
          Pudukkottai, Tamil Nadu, India
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold transition-colors duration-200 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-sky-500/50 hover:border-sky-400 text-sky-400 hover:text-sky-300 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.75)}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm"
          >
            <GitHubIcon size={18} />
            <span>GitHub</span>
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="mailto:sairam.m.2005.65@gmail.com"
            className="flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="https://linkedin.com/in/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm"
          >
            <LinkedInIcon size={18} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      <motion.a
        {...fadeUp(0.9)}
        href="#about"
        className="absolute bottom-8 text-[#8892b0] hover:text-sky-400 animate-bounce transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
