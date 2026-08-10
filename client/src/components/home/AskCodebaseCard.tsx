import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { apiClient } from "../../services/apiClient";

interface Props {
  repoUrl: string;
}

const AskCodebaseCard = ({ repoUrl }: Props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setError("");
      setAnswer("");

      const res = await apiClient.post("/repository/ask", {
        repoUrl,
        question,
      });

      setAnswer(res.data.answer);
    } catch (err) {
      console.error(err);
      setError("Failed to generate answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Explain the project architecture",
    "How is authentication implemented?",
    "What are the main API endpoints?",
    "Describe the folder structure",
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <div className="relative p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
            <span className="text-xl">💬</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Ask Codebase AI</h2>

            <p className="text-sm text-slate-400 mt-1">
              Ask questions about architecture, features, files, APIs, and
              implementation details.
            </p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-3 mb-6">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setQuestion(item)}
              className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 cursor-pointer transition hover:border-blue-500 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            placeholder="Ask anything about this repository..."
            className="w-full resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAsk}
              disabled={loading || !question.trim()}
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white cursor-pointer transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />

              <p className="text-slate-300">
                Analyzing repository and generating answer...
              </p>
            </div>
          </div>
        )}

        {/* Answer */}
        {answer && !loading && (
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/40">
            <div className="border-b border-slate-700 px-6 py-4">
              <h3 className="font-semibold text-white">AI Answer</h3>
            </div>

            <div className="p-6">
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
                    <strong className="font-semibold text-white">
                      {children}
                    </strong>
                  ),

                  ul: ({ children }) => (
                    <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-300">
                      {children}
                    </ul>
                  ),

                  li: ({ children }) => <li>{children}</li>,
                }}
              >
                {answer}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AskCodebaseCard;
