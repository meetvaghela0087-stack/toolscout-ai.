import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tool } from "../types/directory";
import { IMAGE_PLACEHOLDER } from "../utils/placeholders";

 type ToolCardProps = {
  tool: Tool;
  query?: string;
};


const MotionLink = motion(Link);

const highlightText = (text: string, query?: string) => {
  const trimmed = query?.trim();
  if (!trimmed) return text;
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const matchRegex = new RegExp(`^${escaped}$`, "i");
  return text.split(regex).map((part, index) =>
    matchRegex.test(part) ? (
      <mark key={`${part}-${index}`} className="rounded bg-amber-200/60 px-1 text-slate-900">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export function ToolCard({ tool, query }: ToolCardProps) { 
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-shadow dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={tool.logo || IMAGE_PLACEHOLDER}
            alt={`${tool.name} logo`}
            className="h-12 w-12 rounded-2xl border border-slate-200 object-cover dark:border-slate-700"
            loading="lazy"
            onError={(event) => {
              const target = event.currentTarget;
              target.onerror = null;
              target.src = IMAGE_PLACEHOLDER;
            }}
          />
          <div>
            <p className="text-lg font-semibold">{highlightText(tool.name, query)}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{tool.category} • {tool.users}</p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {tool.price}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{highlightText(tool.description, query)}</p>
      <p className="mt-3 text-xs font-semibold tracking-widest text-slate-400">1324 *** ****</p>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(tool.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-200 dark:text-slate-700"
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-300">{tool.rating.toFixed(1)}</span>
        </div>
        <MotionLink
          to={`/tools/${tool.id}`}
          whileTap={{ scale: 0.96 }}
          aria-label={`View details for ${tool.name}`}
          className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-500"
        >
          View Details
        </MotionLink>
      </div>
    </motion.div>
  );
}
