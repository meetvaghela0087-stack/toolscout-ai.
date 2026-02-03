type EmptyStateProps = {
  onClear: () => void;
};

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
      <p className="text-lg font-semibold">No tools found.</p>
      <p className="mt-2 text-sm">Try a different keyword or clear filters to explore more tools.</p>
      <button
        onClick={onClear}
        className="mt-4 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-500"
      >
        Clear Filters
      </button>
    </div>
  );
}
