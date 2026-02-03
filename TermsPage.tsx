import { Link } from "react-router-dom";
import { useSeo } from "../utils/useSeo";

export function TermsPage() {
  useSeo({
    title: "Terms of Service — ToolScout.ai",
    description: "Review the usage terms for ToolScout.ai, including listing guidelines and content standards.",
    image: "https://placehold.co/1200x630/111827/ffffff?text=Terms+of+Service",
    url: "https://toolscout.ai/terms",
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <Link to="/" className="text-sm font-semibold text-indigo-500">← Back to directory</Link>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          This placeholder terms document outlines how ToolScout.ai accepts submissions, displays listings, and
          safeguards the community. Use of the site implies agreement with these terms.
        </p>
        <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Listings:</span> Submitted tools are reviewed
            for accuracy, relevance, and compliance before publication.
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Content:</span> ToolScout.ai may edit
            descriptions for clarity and quality, while preserving factual accuracy.
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Contact:</span> Reach the team at
            hello@toolscout.ai for updates or listing changes.
          </p>
        </div>
      </div>
    </div>
  );
}
