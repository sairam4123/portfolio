import { GraduationCap, Award, Trophy } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold bg-linear-to-r from-sky-200 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Education &amp; Certifications
              </h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.05}>
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400/50 mb-4">
            — Education
          </p>
        </FadeIn>

        <Stagger className="flex flex-col gap-4 mb-10">
          {/* B.Tech */}
          <StaggerItem>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center">
                <GraduationCap size={22} className="text-sky-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-[#ccd6f6] font-semibold">
                    Bachelor of Technology — Information Technology
                  </h3>
                  <span className="text-sky-300 text-xs font-mono bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    Expected 2027
                  </span>
                </div>
                <p className="text-sky-300/70 text-sm mb-2">
                  Mookambigai College of Engineering, Pudukkottai
                </p>
                <p className="text-[#8892b0] text-sm">
                  CGPA: <span className="text-emerald-400 font-semibold">8.66</span>
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* HSC */}
          <StaggerItem>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center">
                <GraduationCap size={22} className="text-sky-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#ccd6f6] font-semibold mb-1">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-sky-300/70 text-sm mb-2">SFS School, Pudukkottai</p>
                <p className="text-[#8892b0] text-sm">
                  Score: <span className="text-emerald-400 font-semibold">527 / 600</span>
                </p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Certifications */}
        <FadeIn delay={0.05}>
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400/50 mb-4">
            — Certifications
          </p>
        </FadeIn>

        <Stagger className="flex flex-col gap-4">
          {/* NPTEL */}
          <StaggerItem>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-600/15 border border-yellow-500/25 flex items-center justify-center">
                <Award size={22} className="text-yellow-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-[#ccd6f6] font-semibold">
                    Introduction to Large Language Models
                  </h3>
                  <span className="flex items-center gap-1.5 text-yellow-400 text-xs font-mono bg-yellow-600/10 border border-yellow-500/25 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    <Trophy size={12} />
                    Silver Medal
                  </span>
                </div>
                <p className="text-[#a8b4d8] text-sm mb-2">NPTEL Certification</p>
                <p className="text-[#8892b0] text-sm">
                  Score: <span className="text-emerald-400 font-semibold">77%</span>
                </p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
