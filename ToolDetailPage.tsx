import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Send, Star, Twitter } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import type { Tool } from "../types/directory";
import { useSeo } from "../utils/useSeo";
import { IMAGE_PLACEHOLDER, PREVIEW_PLACEHOLDER } from "../utils/placeholders";

 type ToolDetailPageProps = {
  tools: Tool[];
};


export function ToolDetailPage({ tools }: ToolDetailPageProps) {
  const { toolId } = useParams();
  const tool = tools.find((item) => item.id === toolId);
  const relatedTools = tool
    ? tools.filter((item) => item.category === tool.category && item.id !== tool.id).slice(0, 3)
    : [];
  const shareUrl = tool ? `https://toolscout.ai/tools/${tool.id}` : "https://toolscout.ai";
  const shareText = tool ? `${tool.name} — ${tool.tagline}` : "ToolScout.ai";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  useSeo({
    title: tool ? `${tool.name} — ToolScout.ai` : "Tool not found — ToolScout.ai",
    description: tool?.description ?? "Explore detailed AI tool reviews and pricing on ToolScout.ai.",
    image: tool?.logo,
    url: tool ? `https://toolscout.ai/tools/${tool.id}` : "https://toolscout.ai/tools",
  });

  if (!tool) {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">Tool not found</h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400">Looks like this tool is not listed yet.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Back to directory
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto w-full max-w-5xl px-6 py-14"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-sm font-semibold text-indigo-500">← Back to directory</Link>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <img
              src={tool.logo || IMAGE_PLACEHOLDER}
              alt={`${tool.name} logo`}
              className="h-16 w-16 rounded-2xl border border-slate-200 object-cover dark:border-slate-700"
              loading="lazy"
              onError={(event) => {
                const target = event.currentTarget;
                target.onerror = null;
                target.src = IMAGE_PLACEHOLDER;
              }}
            />
            <div>
              <h1 className="text-3xl font-semibold">{tool.name}</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">{tool.tagline}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{tool.category}</span>
                <span>• {tool.users}</span>
              </div>
            </div>
          </div>
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${tool.name} official site`}
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 active:scale-95"
          >
            Visit Official Site
          </a>
        </div>
        <div className="mt-6 flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < Math.round(tool.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-200 dark:text-slate-700"
              }`}
            />
          ))}
          <span className="text-sm text-slate-500 dark:text-slate-300">{tool.rating.toFixed(1)} rating</span>
        </div>
        <p className="mt-6 text-base text-slate-600 dark:text-slate-300">{tool.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-800 dark:text-slate-300"
          >
            <Send className="h-4 w-4" /> Share on WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on X"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-800 dark:text-slate-300"
          >
            <Twitter className="h-4 w-4" /> Share on X
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy tool link"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-300"
          >
            <Copy className="h-4 w-4" /> {copied ? "Copied" : "Copy Link"}
          </button>
        </div>

        {(tool.features?.length || tool.tags?.length) && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {tool.features?.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Top Features</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {tool.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-indigo-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tool.tags?.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {(tool.pros?.length || tool.cons?.length) && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {tool.pros?.length > 0 && (
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-500">Pros</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {tool.pros?.map((pro) => (
                    <li key={pro} className="flex items-center gap-2">
                      <span className="text-emerald-500">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tool.cons?.length > 0 && (
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-500">Cons</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {tool.cons?.map((con) => (
                    <li key={con} className="flex items-center gap-2">
                      <span className="text-rose-500">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {tool.pricing?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Pricing Plans</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {tool.pricing?.map((plan) => (
                <div key={plan.plan} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="text-sm font-semibold">{plan.plan}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{plan.price}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{plan.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tool.screenshots?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Screenshots</h3>
            <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
              {tool.screenshots?.map((shot) => (
                <img
                  key={shot}
                  src={shot || PREVIEW_PLACEHOLDER}
                  alt={`${tool.name} preview`}
                  className="h-48 w-full rounded-2xl border border-slate-200 object-cover dark:border-slate-800"
                  loading="lazy"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.onerror = null;
                    target.src = PREVIEW_PLACEHOLDER;
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
          This page may contain affiliate links. If you purchase through these links, we may earn a commission at no
          extra cost to you.
        </p>
      </div>

      {relatedTools.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Related Tools</p>
              <h2 className="text-2xl font-semibold">More in {tool.category}</h2>
            </div>
            <Link to="/" className="text-sm font-semibold text-indigo-500">View all</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedTools.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo || IMAGE_PLACEHOLDER}
                    alt={`${item.name} logo`}
                    className="h-10 w-10 rounded-xl border border-slate-200 object-cover dark:border-slate-700"
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.onerror = null;
                      target.src = IMAGE_PLACEHOLDER;
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.category}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">{item.description}</p>
                <Link
                  to={`/tools/${item.id}`}
                  className="mt-4 inline-flex rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-500"
                >
                  View details
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
