import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "../utils/useSeo";

export function SubmitToolPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useSeo({
    title: "Submit Tool — ToolScout.ai",
    description: "Submit your AI tool to be reviewed and listed on ToolScout.ai.",
    image: "https://placehold.co/1200x630/4f46e5/ffffff?text=Submit+Your+Tool",
    url: "https://toolscout.ai/submit",
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <Link to="/" className="text-sm font-semibold text-indigo-500">← Back to directory</Link>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Submit a Tool</p>
          <h1 className="text-3xl font-semibold">List your AI product with a human-first review.</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Share details about your tool. Our team will verify the quality and reach out within 48 hours.
          </p>
        </div>
        <form
          className="mt-8 grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus("success");
            setTimeout(() => setStatus("idle"), 4000);
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Tool name"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
            <input
              required
              placeholder="Website URL"
              type="url"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Founder name"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
            <input
              required
              placeholder="Work email"
              type="email"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="Short description"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Category (e.g., Writing)"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
            <input
              placeholder="Pricing (Free / Paid / Freemium)"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 active:scale-95"
          >
            Submit for Review
          </button>
        </form>
        {status === "success" && (
          <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
            Submission received! We will reach out within 48 hours.
          </p>
        )}
      </div>
    </div>
  );
}
