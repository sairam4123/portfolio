"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",        anchor: "about"        },
  { label: "Projects",     anchor: "projects"     },
  { label: "Skills",       anchor: "skills"       },
  { label: "Experience",   anchor: "experience"   },
  { label: "Achievements", anchor: "achievements" },
  { label: "Education",    anchor: "education"    },
  { label: "Contact",      anchor: "contact"      },
];

const pillClass =
  "flex items-center bg-[#020c1b]/80 backdrop-blur-md border border-sky-500/20 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_18px_rgba(14,165,233,0.08)]";

export default function Navbar({ variant = "home" }: { variant?: "home" | "project" }) {
  const [open, setOpen] = useState(false);

  const links = NAV_LINKS.map((l) => ({
    label: l.label,
    href: variant === "project" ? `/#${l.anchor}` : `#${l.anchor}`,
  }));

  const logoHref = variant === "project" ? "/" : "#";

  return (
    <>
      {/* Desktop: floating pill (home) or top-attached bar (project) */}
      {variant === "home" ? (
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 gap-8 px-8 py-3 ${pillClass}`}
        >
          <a
            href={logoHref}
            className="text-lg font-bold bg-linear-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
          >
            SM
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      ) : (
        <nav className="hidden md:flex sticky top-0 z-50 items-center gap-8 px-8 py-4 bg-[#020c1b]/90 backdrop-blur-md border-b border-white/10">
          <a
            href={logoHref}
            className="text-lg font-bold bg-linear-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
          >
            SM
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8892b0] hover:text-sky-400 transition-colors duration-200 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}

      {/* Mobile: floating bottom pill */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`md:hidden fixed bottom-5 left-1/2 w-[calc(100%-4rem)] -translate-x-1/2 z-50 gap-4 px-6 py-3 ${pillClass}`}
      >
        <a
          href={logoHref}
          className="text-lg font-bold bg-linear-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
        >
          SM
        </a>
        <motion.button
          onClick={() => setOpen(!open)}
          className="text-[#8892b0] ml-auto hover:text-sky-400"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.85 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile: links popover above pill */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-4 bottom-24 z-40 bg-[#0b1628]/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-1 shadow-2xl shadow-black/60"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
                className="text-[#8892b0] hover:text-sky-400 transition-colors text-sm font-medium border-b border-white/5 py-3 last:border-0"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-30"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
