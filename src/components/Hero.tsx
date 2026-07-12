"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  "Full-Stack Developer",
  "Mobile App Engineer",
  "AI Product Builder",
  "Railway Sim Enthusiast",
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

// Each word rises out of an overflow-hidden mask, staggered
function MaskedName({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.28em]">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block pb-1 -mb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.14, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Widest role string sizes the slot so surrounding text never shifts
const longestRole = roles.reduce((a, b) => (b.length > a.length ? b : a));

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom h-[1.5em]">
      <span aria-hidden className="invisible font-medium whitespace-nowrap">
        {longestRole}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="absolute inset-0 flex items-center justify-end text-sky-300 font-medium whitespace-nowrap text-right"
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked exit: content drifts up, fades, and shrinks as you scroll past
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Orbs drift at different rates for depth
  const orbAY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const orbBY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 relative overflow-hidden"
    >
      <motion.div
        style={{ y: orbAY }}
        className="absolute top-1/4 left-1/4 pointer-events-none"
      >
        <div
          className="w-80 h-80 bg-sky-700/20 rounded-full blur-3xl"
          style={{ animation: "hero-drift-a 12s ease-in-out infinite" }}
        />
      </motion.div>
      <motion.div
        style={{ y: orbBY }}
        className="absolute bottom-1/4 right-1/4 pointer-events-none"
      >
        <div
          className="w-72 h-72 bg-cyan-700/15 rounded-full blur-3xl"
          style={{ animation: "hero-drift-b 15s ease-in-out infinite" }}
        />
      </motion.div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-900/15 rounded-full blur-3xl pointer-events-none"
        style={{ animation: "hero-drift-c 18s ease-in-out infinite" }}
      />

      <motion.div
        className="relative z-10 max-w-4xl"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        <motion.p
          {...fadeUp(0.15)}
          className="text-[#8892b0] font-medium text-lg mb-3"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
          transition={{
            backgroundPosition: {
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent mb-5 leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0ea5e9, #7dd3fc, #f0f9ff, #7dd3fc, #0ea5e9)",
            backgroundSize: "200% auto",
          }}
        >
          <MaskedName text="Sairam Mangeshkar" delay={0.25} />
        </motion.h1>

        <motion.h2
          {...fadeUp(0.55)}
          className="text-base md:text-xl text-slate-300 font-light mb-3 max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap"
        >
          <RotatingRole />
          <span className="text-slate-500">&middot;</span>
          <span>Pudukkottai, India</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.65)}
          className="text-[#8892b0] text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Building mobile applications, AI products, and railway simulation
          systems.
        </motion.p>

        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-7 py-3 flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold transition-colors duration-200 animate-[glow-pulse_3s_ease-in-out_infinite]"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="/Sairam%20Mangeshkar%20Resume.docx"
            download="Sairam Mangeshkar Resume.docx"
            className="px-7 py-3 border border-sky-500/50 hover:border-sky-400 text-sky-400 hover:text-sky-300 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
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
      </motion.div>

      {/* Scroll cue — fades as soon as scrolling starts */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#8892b0] hover:text-sky-400 transition-colors duration-200"
        style={{ opacity: cueOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
