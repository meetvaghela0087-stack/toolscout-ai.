import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

 type HeaderProps = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
};

const navBase = "hover:text-slate-900 dark:hover:text-white";
const navActive = "text-indigo-600 dark:text-indigo-300";

export function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
            <span className="text-lg font-semibold">TS</span>
          </div>
          <div>
            <p className="text-lg font-semibold">ToolScout.ai</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Premium AI Tool Directory</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <NavLink to="/" className={({ isActive }) => `${navBase} ${isActive ? navActive : ""}`}>Tools</NavLink>
          <Link className={navBase} to="/#deals">Deals</Link>
          <Link className={navBase} to="/#reviews">Reviews</Link>
          <Link className={navBase} to="/#newsletter">Newsletter</Link>
          <NavLink to="/submit" className={({ isActive }) => `${navBase} ${isActive ? navActive : ""}`}>Submit Tool</NavLink>
        </nav>
        <button
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
          className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  );
}

