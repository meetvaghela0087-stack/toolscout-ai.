export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2025 ToolScout.ai — Crafted with clarity and care.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
          <a href="mailto:hello@toolscout.ai" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
