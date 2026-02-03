type PaginationProps = {
  showing: number;
  total: number;
  onLoadMore: () => void;
  hasMore: boolean;
};

export function Pagination({ showing, total, onLoadMore, hasMore }: PaginationProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Showing {showing} of {total} tools
      </p>
      {hasMore && (
        <button
          onClick={onLoadMore}
          className="rounded-full border border-slate-200 px-6 py-2 text-xs font-semibold text-slate-600 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}
