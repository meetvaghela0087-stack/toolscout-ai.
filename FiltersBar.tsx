import { Filter } from "lucide-react";
import type { ToolPrice } from "../types/directory";

const filters: Array<"All" | ToolPrice> = ["All", "Free", "Freemium", "Paid"];

type FiltersBarProps = {
  activeCategory: string;
  activeFilter: "All" | ToolPrice;
  onFilterChange: (value: "All" | ToolPrice) => void;
  onCategoryReset: () => void;
};

export function FiltersBar({ activeCategory, activeFilter, onFilterChange, onCategoryReset }: FiltersBarProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        <button
          onClick={onCategoryReset}
          aria-label="Clear category filter"
          className={`rounded-full border px-4 py-2 ${
            activeCategory === "All"
              ? "border-indigo-500 text-indigo-600 dark:text-indigo-300"
              : "border-slate-200 text-slate-500 dark:border-slate-800"
          }`}
        >
          All Categories
        </button>
        <span className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Quick filter:
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            aria-label={`Filter ${filter} tools`}
            className={`rounded-full border px-4 py-2 ${
              activeFilter === filter
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-300"
                : "border-slate-200 text-slate-500 dark:border-slate-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
