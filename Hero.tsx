import { Search } from "lucide-react";

type HeroProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
};

export function Hero({ query, onQueryChange, onSearch }: HeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <span className="rounded-full border border-indigo-200/70 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300">
            Find the best AI tools in seconds
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Build faster with a curated AI directory that actually feels human.
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            ToolScout.ai ek premium AI directory hai jahan aapko verified tools, genuine reviews aur live deals milte
            hain. No fluff, sirf high-quality recommendations.
          </p>
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/30 sm:flex-row sm:items-center">
            <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-500 focus-within:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
              <Search className="h-5 w-5" />
              <input
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                aria-label="Search AI tools"
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search for video editing, free tools, marketing..."
              />
            </div>
            <button
              onClick={onSearch}
              aria-label="Search directory"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500"
            >
              Search Directory
            </button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">2,400+</p>
              <p>Handpicked tools</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">98%</p>
              <p>Verified reviews</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">Daily</p>
              <p>New drops & deals</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Trending Picks</h2>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              Updated today
            </span>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">ClipPilot</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Video • 21k editors</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Free
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Smart trimming and captions that feel like a real editor.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">PromptVault</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Writing • 4k founders</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Paid
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Curated prompt bundles for marketing, sales, and support teams.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">DataWisp</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Coding • 6k builders</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Freemium
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                SQL generation and dashboard summaries without the busy work.
              </p>
            </div>
          </div>
          <button className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-200">
            Explore all tools
          </button>
        </div>
      </div>
    </section>
  );
}
