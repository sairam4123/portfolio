export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-blue-500/40 font-mono text-sm font-medium">01</span>
          <h2 className="text-3xl font-bold text-[#ccd6f6]">About Me</h2>
          <div className="flex-1 h-px bg-linear-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300">
          <p className="text-[#8892b0] text-lg leading-relaxed">
            Information Technology undergraduate with professional experience developing full-stack,
            backend, and mobile applications. Built production systems ranging from AI-powered
            content generation platforms and educational management software to railway simulation
            and automation tools. Skilled in{" "}
            <span className="text-blue-300 font-medium">
              TypeScript, Python, React Native, FastAPI, PostgreSQL
            </span>
            , and scalable software architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
