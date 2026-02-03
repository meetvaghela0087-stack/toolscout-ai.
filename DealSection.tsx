import { Check } from "lucide-react";
import type { Deal } from "../types/directory";

type DealSectionProps = {
  deal: Deal;
};

export function DealSection({ deal }: DealSectionProps) {
  return (
    <section id="deals" className="bg-slate-900 py-14 text-white dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">{deal.label}</p>
          <h2 className="text-3xl font-semibold">{deal.title}</h2>
          <p className="text-sm text-slate-300">{deal.description}</p>
        </div>
        <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">ClipPilot Pro</p>
              <p className="text-xs text-emerald-200">Expires in {deal.expires}</p>
            </div>
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">{deal.badge}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-emerald-100">
            {deal.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-emerald-700">
            {deal.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
