import ReactMarkdown from "react-markdown";

interface Props {
  summary: string;
}

const AISummaryCard = ({ summary }: Props) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <div className="relative p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <span className="text-xl">🤖</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Repository Summary
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Generated insights about architecture, purpose, and code
              structure.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-slate-800" />

        {/* Summary Content */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="mb-6 text-3xl font-bold text-white">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 text-2xl font-bold text-white">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mt-6 mb-3 text-xl font-semibold text-white">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-4 leading-8 text-slate-300">{children}</p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),

              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-300">
                  {children}
                </ul>
              ),

              li: ({ children }) => <li>{children}</li>,
            }}
          >
            {summary}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default AISummaryCard;
