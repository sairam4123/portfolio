import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#ccd6f6]">Contact</h2>
        </div>

        <p className="text-[#8892b0] text-lg mb-10">
          Open to new opportunities, collaborations, and interesting conversations. Feel free to
          reach out!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <a
            href="mailto:sairam.m.2005.65@gmail.com"
            className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-600/5 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-[#8892b0] text-xs">Email</span>
          </a>

          <a
            href="tel:+917904302458"
            className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-600/5 transition-all duration-300"
            aria-label="Phone"
          >
            <Phone size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-[#8892b0] text-xs">Phone</span>
          </a>

          <a
            href="https://github.com/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-600/5 transition-all duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-[#8892b0] text-xs">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/sairam4123"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-blue-600/5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-[#8892b0] text-xs">LinkedIn</span>
          </a>
        </div>

        <a
          href="mailto:sairam.m.2005.65@gmail.com"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
        >
          Say Hello
        </a>
      </div>

      <div className="mt-20 text-center">
        <p className="text-[#8892b0]/50 text-xs">
          Built with Next.js & Tailwind CSS &nbsp;·&nbsp; Sairam Mangeshkar © 2026
        </p>
      </div>
    </section>
  );
}
