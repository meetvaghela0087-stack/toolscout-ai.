import type { Review } from "../types/directory";

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Real Reviews</p>
          <h2 className="text-3xl font-semibold">Users trust ToolScout for honest insights.</h2>
        </div>
        <p className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
          Har review ko manual check kiya jata hai taaki aapko reliable feedback mile.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">“{review.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold">{review.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
