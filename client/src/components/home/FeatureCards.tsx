import { Code2, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Repository Analysis",
    description:
      "Understand project structure, languages, stars, forks, activity, and repository health instantly.",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "AI Architecture Summary",
    description:
      "Get AI-generated insights about architecture, workflows, technologies, and implementation patterns.",
    color: "from-cyan-500/20 to-violet-500/20 border-cyan-500/20",
  },
  {
    icon: Users,
    title: "Developer Analytics",
    description:
      "Discover key contributors, development activity, and collaboration patterns across the repository.",
    color: "from-violet-500/20 to-pink-500/20 border-violet-500/20",
  },
];

const FeatureCards = () => {
  return (
    <section className="mt-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          Powerful Repository Intelligence
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Everything you need to understand a codebase
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Analyze GitHub repositories, generate AI-powered architecture
          summaries, inspect contributors, and ask questions about any codebase
          in seconds.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

                {/* Footer */}
                {/* <div className="mt-8 flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight size={16} />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
