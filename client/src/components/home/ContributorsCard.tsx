import type { Contributor } from "../../types/contributor";

interface Props {
  contributors: Contributor[];
}

const ContributorsCard = ({ contributors }: Props) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
            <span className="text-xl">👥</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Top Contributors</h2>

            <p className="mt-1 text-sm text-slate-400">
              Most active contributors in this repository
            </p>
          </div>
        </div>

        {/* Contributors */}
        <div className="space-y-4">
          {contributors.slice(0, 10).map((contributor, index) => (
            <div
              key={contributor.id}
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/40 p-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/70"
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-slate-300">
                  #{index + 1}
                </div>

                {/* Avatar */}
                <img
                  src={contributor.avatar}
                  alt={contributor.username}
                  className="h-12 w-12 rounded-full border border-slate-700"
                />

                {/* User */}
                <div>
                  <p className="font-semibold text-white">
                    {contributor.username}
                  </p>

                  <a
                    href={contributor.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    View GitHub Profile →
                  </a>
                </div>
              </div>

              {/* Contributions */}
              <div className="text-right">
                <p className="text-lg font-bold text-white">
                  {contributor.contributions}
                </p>

                <p className="text-xs text-slate-400">contributions</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-sm text-slate-500">
            Showing top {Math.min(contributors.length, 10)} contributors
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContributorsCard;
