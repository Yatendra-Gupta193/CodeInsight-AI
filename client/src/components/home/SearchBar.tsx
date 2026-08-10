import { FolderGit2, Search, Sparkles } from "lucide-react";

interface Props {
  repoUrl: string;
  setRepoUrl: (value: string) => void;
  loading: boolean;
  onAnalyze: () => void;
}

const SearchBar = ({ repoUrl, setRepoUrl, loading, onAnalyze }: Props) => {
  const examples = ["Yatendra-Gupta193/RAG_ChatBot", "Yatendra-Gupta193/DocChat-AI", "Yatendra-Gupta193/ML-House-Prediction"];

  return (
    <div className="mt-14 max-w-5xl mx-auto">
      {/* Search Container */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.08)]">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />

        <div className="relative p-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Input */}
            <div className="flex flex-1 items-center w-full rounded-2xl border border-slate-800 bg-slate-950/50 px-4">
              <FolderGit2 size={22} className="mr-3 text-slate-500 shrink-0" />

              <input
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onAnalyze();
                  }
                }}
                placeholder="Paste a GitHub repository URL..."
                className="w-full bg-transparent py-5 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={onAnalyze}
              disabled={loading}
              className="w-full md:w-auto rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white cursor-pointer transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Analyze Repository
                </>
              )}
            </button>
          </div>

          {/* Examples */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Sparkles size={14} />
              Try:
            </div>

            {examples.map((repo) => (
              <button
                key={repo}
                onClick={() => setRepoUrl(`https://github.com/${repo}`)}
                className="rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-300 cursor-pointer transition hover:border-blue-500 hover:text-white"
              >
                {repo}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="mt-4 text-center text-sm text-slate-500">
        Supports public GitHub repositories. Paste a URL and get AI-powered
        insights instantly.
      </p>
    </div>
  );
};

export default SearchBar;
