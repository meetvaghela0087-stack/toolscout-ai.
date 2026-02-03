import { Code2, Paintbrush, PenSquare, PlayCircle } from "lucide-react";
import type { Category } from "../types/directory";

const iconMap = {
  spark: <PenSquare className="h-6 w-6" />,
  pen: <Paintbrush className="h-6 w-6" />,
  play: <PlayCircle className="h-6 w-6" />,
  code: <Code2 className="h-6 w-6" />,
};

type CategorySidebarProps = {
  categories: Category[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

export function CategorySidebar({ categories, activeCategory, onSelect }: CategorySidebarProps) {
  return (
    <section className="border-y border-slate-200/60 bg-white/60 py-12 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelect(category.name)}
              aria-label={`Filter by ${category.name}`}
              className={`flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                activeCategory === category.name
                  ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                {iconMap[category.icon]}
              </div>
              <div>
                <p className="text-sm font-semibold">{category.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
