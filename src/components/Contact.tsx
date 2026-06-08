'use client'

import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:sairam.m.2005.65@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#ccd6f6] placeholder-[#8892b0]/50 text-sm focus:outline-none focus:border-sky-500/60 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-sky-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Contact</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[#8892b0] text-lg mb-10 text-center">
            Open to new opportunities, collaborations, and interesting conversations. Feel free to
            reach out!
          </p>
        </FadeIn>

        {/* Contact form */}
        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-10 hover:border-sky-500/20 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#8892b0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-[#8892b0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono uppercase text-[#8892b0] mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-[0_0_20px_rgba(14,165,233,0.25)]"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </FadeIn>

        {/* Social links */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto" stagger={0.07}>
          <StaggerItem>
            <a
              href="mailto:sairam.m.2005.65@gmail.com"
              className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/40 hover:bg-sky-600/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} className="text-sky-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-[#8892b0] text-xs">Email</span>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="tel:+917904302458"
              className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/40 hover:bg-sky-600/5 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={24} className="text-sky-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-[#8892b0] text-xs">Phone</span>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://github.com/sairam4123"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/40 hover:bg-sky-600/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon size={24} className="text-sky-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-[#8892b0] text-xs">GitHub</span>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://linkedin.com/in/sairam4123"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/40 hover:bg-sky-600/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={24} className="text-sky-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-[#8892b0] text-xs">LinkedIn</span>
            </a>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="mt-20 text-center">
        <p className="text-[#8892b0]/50 text-xs">
          Built with Next.js &amp; Tailwind CSS &nbsp;·&nbsp; Sairam Mangeshkar © 2026
        </p>
      </div>
    </section>
  );
}
