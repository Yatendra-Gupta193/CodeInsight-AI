import { Sparkles, FolderGit2, MessageSquare, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative mx-auto max-w-6xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl">
        <Sparkles size={14} />
        AI-Powered GitHub Repository Intelligence
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
        Understand Any
        <span className="block px-4 pb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
  GitHub Repository
</span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
        Analyze repository architecture, explore contributors,
        generate AI-powered summaries, and chat with any codebase
        using natural language.
      </p>

      {/* Feature Pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <div className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
          📊 Repository Analysis
        </div>

        <div className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
          🤖 AI Architecture Summary
        </div>

        <div className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
          💬 Ask Codebase AI
        </div>

        <div className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
          👥 Contributor Insights
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <FolderGit2 className="mx-auto mb-4 text-blue-400" size={28} />

          <h3 className="text-lg font-semibold text-white">
            Analyze Repositories
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Understand project structure, technologies,
            activity, and repository health.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <Brain className="mx-auto mb-4 text-cyan-400" size={28} />

          <h3 className="text-lg font-semibold text-white">
            AI Insights
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Generate technical summaries and architecture
            explanations instantly.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <MessageSquare
            className="mx-auto mb-4 text-violet-400"
            size={28}
          />

          <h3 className="text-lg font-semibold text-white">
            Ask Questions
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Chat with the repository and get answers about
            files, APIs, workflows, and implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;