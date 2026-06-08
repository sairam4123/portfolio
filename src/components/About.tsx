import { FadeIn } from "@/components/animations";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-end gap-4">
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <div className="flex-1 h-px bg-linear-to-r from-sky-500/30 to-transparent mb-1.5" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 transition-colors duration-300">
            <p className="text-[#8892b0] text-lg leading-relaxed">
              Information Technology undergraduate with professional experience developing full-stack,
              backend, and mobile applications. Built production systems ranging from AI-powered
              content generation platforms and educational management software to railway simulation
              and automation tools. Skilled in{" "}
              <span className="text-sky-300 font-medium">
                TypeScript, Python, React Native, FastAPI, PostgreSQL
              </span>
              , and scalable software architecture.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
