"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020c1b]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
        >
          SM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8892b0] hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#8892b0] hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#020c1b]/95 border-t border-white/5 px-6 py-4 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#8892b0] hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
