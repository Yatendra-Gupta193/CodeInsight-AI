import { Star, GitFork, Bug, Code2, ExternalLink, FolderGit2 } from "lucide-react";

import type { Repository } from "../../types/repository";

interface Props {
  repository: Repository;
}

const RepositoryCard = ({ repository }: Props) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <div className="relative p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <img
              src={repository.avatar}
              alt={repository.owner}
              className="h-20 w-20 rounded-2xl border border-slate-700 object-cover"
            />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-bold text-white">
                  {repository.fullName}
                </h2>

                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Public
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-slate-400">
                {repository.description || "No description available."}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {repository.language || "Unknown"}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  Owner: {repository.owner}
                </span>
              </div>
            </div>
          </div>

          {/* GitHub Button */}
          <a
            href={`https://github.com/${repository.fullName}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600 hover:bg-slate-700"
          >
            <FolderGit2 size={18} />
            View Repository
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Star size={18} />}
            label="Stars"
            value={repository.stars.toLocaleString()}
          />

          <StatCard
            icon={<GitFork size={18} />}
            label="Forks"
            value={repository.forks.toLocaleString()}
          />

          <StatCard
            icon={<Code2 size={18} />}
            label="Language"
            value={repository.language || "N/A"}
          />

          <StatCard
            icon={<Bug size={18} />}
            label="Open Issues"
            value={repository.openIssues}
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800">
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>

      <div className="text-slate-300">{icon}</div>
    </div>

    <h3 className="mt-4 text-3xl font-bold text-white">{value}</h3>
  </div>
);

export default RepositoryCard;
