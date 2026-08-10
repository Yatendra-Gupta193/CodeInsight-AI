import { useState } from "react";

import HeroSection from "../components/home/HeroSection";
import SearchBar from "../components/home/SearchBar";
import FeatureCards from "../components/home/FeatureCards";
import RepositoryCard from "../components/home/RepositoryCard";
import ContributorsCard from "../components/home/ContributorsCard";
import AISummaryCard from "../components/home/AISummaryCard";
import AskCodebaseCard from "../components/home/AskCodebaseCard";

import { apiClient } from "../services/apiClient";
import type { Repository } from "../types/repository";
import type { Contributor } from "../types/contributor";

const HomePage = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState<Repository | null>(null);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const extractRepoInfo = (input: string) => {
    const cleaned = input
      .trim()
      .replace("https://github.com/", "")
      .replace("http://github.com/", "")
      .replace("github.com/", "")
      .replace(/\/$/, "");

    const parts = cleaned.split("/");

    if (parts.length < 2) return null;

    return {
      owner: parts[0],
      repo: parts[1],
    };
  };

  const handleAnalyze = async () => {
    setError("");

    const repoInfo = extractRepoInfo(repoUrl);

    if (!repoInfo?.owner || !repoInfo?.repo) {
      setError("Please enter a valid GitHub repository URL.");
      return;
    }

    try {
      setLoading(true);

      const [repoRes, contributorsRes, summaryRes] = await Promise.all([
        apiClient.get(
          `/github/analyze?owner=${repoInfo.owner}&repo=${repoInfo.repo}`,
        ),

        apiClient.get(
          `/github/contributors?owner=${repoInfo.owner}&repo=${repoInfo.repo}`,
        ),

        apiClient.get(
          `/github/summary?owner=${repoInfo.owner}&repo=${repoInfo.repo}`,
        ),
      ]);

      setResult(repoRes.data.data);
      setContributors(contributorsRes.data.data);
      setSummary(summaryRes.data.data);
    } catch (err) {
      console.error(err);

      setResult(null);
      setContributors([]);
      setSummary("");

      setError(
        "Unable to analyze this repository. Please check the URL and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed8_0%,transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0f172a_0%,transparent_40%)]" />
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        {/* Hero */}
        <HeroSection />

        {/* Search */}
        <div className="mt-10">
          <SearchBar
            repoUrl={repoUrl}
            setRepoUrl={setRepoUrl}
            loading={loading}
            onAnalyze={handleAnalyze}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <span className="text-slate-300">
                Analyzing repository and generating insights...
              </span>
            </div>
          </div>
        )}

        {/* Features Before Search */}
        {!result && !loading && (
          <div className="mt-16">
            <FeatureCards />
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div className="mt-12 space-y-6">
            {/* Repository Overview */}
            <RepositoryCard repository={result} />

            {/* Contributors + Summary */}
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <ContributorsCard contributors={contributors} />
              </div>

              <div className="lg:col-span-8">
                <AISummaryCard summary={summary} />
              </div>
            </div>

            {/* Ask Codebase */}
            <AskCodebaseCard repoUrl={repoUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
