import { Link } from "react-router-dom";
import { useSeo } from "../utils/useSeo";

export function PrivacyPage() {
  useSeo({
    title: "Privacy Policy — ToolScout.ai",
    description: "Learn how ToolScout.ai handles data, analytics, and user privacy.",
    image: "https://placehold.co/1200x630/111827/ffffff?text=Privacy+Policy",
    url: "https://toolscout.ai/privacy",
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <Link to="/" className="text-sm font-semibold text-indigo-500">← Back to directory</Link>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          This placeholder policy explains how ToolScout.ai collects minimal analytics, stores newsletter submissions,
          and protects personal data. We never sell user information, and we only use data to improve the directory
          experience.
        </p>
        <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Data we collect:</span> email addresses for
            newsletter updates, submission details for tool listings, and aggregated usage analytics.
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">How we use it:</span> to send curated AI tool
            updates, review submissions, and optimize the directory for quality.
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Your rights:</span> you can request deletion
            or export of your data at any time by contacting hello@toolscout.ai.
          </p>
        </div>
      </div>
    </div>
  );
}
