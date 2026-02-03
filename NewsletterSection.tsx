type NewsletterSectionProps = {
  email: string;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
  status: "idle" | "success";
};

export function NewsletterSection({ email, onEmailChange, onSubmit, status }: NewsletterSectionProps) {
  return (
    <section id="newsletter" className="border-t border-slate-200/60 bg-white/70 py-14 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Newsletter</p>
            <h2 className="text-3xl font-semibold">Get weekly AI tool drops in your inbox.</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              100% human-curated list, no spam. New tools, fresh discounts, aur practical use-cases.
            </p>
          </div>
          <form
            className="flex flex-col gap-4 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 active:scale-95"
            >
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
              Thanks for subscribing! We will send you fresh AI tool updates every week.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
