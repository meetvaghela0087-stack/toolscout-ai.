import type { Tool } from "../types/directory";
import { ToolCard } from "./ToolCard";

type ToolGridProps = {
  tools: Tool[];
  query?: string;
};

export function ToolGrid({ tools, query }: ToolGridProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Tool Library</p>
          <h2 className="text-3xl font-semibold">High-quality picks curated by humans.</h2>
        </div>
        <p className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
          Har tool card mein short, edited description hai taaki aapko real-world clarity mile. Koi buzzword nahi.
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} query={query} />
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        Tip: Keep tool descriptions between 140–160 characters for the best Google search snippet.
      </p>
    </section>
  );
}
