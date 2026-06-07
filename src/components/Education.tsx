import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-blue-500/40 font-mono text-sm font-medium">05</span>
          <h2 className="text-3xl font-bold text-[#ccd6f6]">Education & Certifications</h2>
          <div className="flex-1 h-px bg-linear-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="flex flex-col gap-4">
          {/* B.Tech */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <GraduationCap size={22} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-[#ccd6f6] font-semibold">
                  Bachelor of Technology — Information Technology
                </h3>
                <span className="text-[#8892b0] text-xs font-mono bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  Expected 2027
                </span>
              </div>
              <p className="text-blue-400 text-sm mb-2">
                Mookambigai College of Engineering, Pudukkottai
              </p>
              <p className="text-[#8892b0] text-sm">
                CGPA: <span className="text-cyan-400 font-semibold">8.66</span>
              </p>
            </div>
          </div>

          {/* HSC */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <GraduationCap size={22} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[#ccd6f6] font-semibold mb-1">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-blue-400 text-sm mb-2">SFS School, Pudukkottai</p>
              <p className="text-[#8892b0] text-sm">
                Score: <span className="text-cyan-400 font-semibold">527 / 600</span>
              </p>
            </div>
          </div>

          {/* NPTEL */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 hover:bg-white/[0.07] transition-all duration-300 flex gap-5 items-start">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center">
              <Award size={22} className="text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-[#ccd6f6] font-semibold">
                  Introduction to Large Language Models
                </h3>
                <span className="text-yellow-400 text-xs font-mono bg-yellow-600/10 border border-yellow-500/30 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  🥈 Silver Medal
                </span>
              </div>
              <p className="text-blue-400 text-sm mb-2">NPTEL Certification</p>
              <p className="text-[#8892b0] text-sm">
                Score: <span className="text-cyan-400 font-semibold">77%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
