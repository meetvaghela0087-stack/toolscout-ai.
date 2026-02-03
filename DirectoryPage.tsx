import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import directoryData from "../data/directoryData.json";
import type { DirectoryData, Tool, ToolPrice } from "../types/directory";
import { useSeo } from "../utils/useSeo";
import { CategorySidebar } from "./CategorySidebar";
import { DealSection } from "./DealSection";
import { EmptyState } from "./EmptyState";
import { FiltersBar } from "./FiltersBar";
import { Hero } from "./Hero";
import { NewsletterSection } from "./NewsletterSection";
import { Pagination } from "./Pagination";
import { ReviewsSection } from "./ReviewsSection";
import { ToolGrid } from "./ToolGrid";

const typedData = directoryData as DirectoryData;

const PAGE_SIZE = 4;

const createFuse = (tools: Tool[]) =>
  new Fuse(tools, {
    keys: ["name", "description", "category", "tags"],
    threshold: 0.35,
    includeScore: true,
  });

export function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | ToolPrice>("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  useSeo({
    title: "ToolScout.ai — Premium AI Tool Directory",
    description: "Discover human-curated AI tools, verified reviews, and daily deals in one premium directory.",
    image: "https://placehold.co/1200x630/111827/ffffff?text=ToolScout.ai+Directory",
    url: "https://toolscout.ai",
  });

  const filteredTools = useMemo(() => {
    const matchesFilter = (tool: Tool) =>
      (activeFilter === "All" || tool.price === activeFilter) &&
      (activeCategory === "All" || tool.category === activeCategory);

    const visibleTools = typedData.tools.filter(matchesFilter);

    if (!query.trim()) {
      return visibleTools;
    }

    const fuse = createFuse(visibleTools);
    return fuse
      .search(query)
      .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
      .map((result) => result.item);
  }, [query, activeFilter, activeCategory]);

  const paginatedTools = filteredTools.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTools.length;

  const handleClearFilters = () => {
    setQuery("");
    setActiveFilter("All");
    setActiveCategory("All");
    setVisibleCount(PAGE_SIZE);
  };

  const handleEmptyClear = () => handleClearFilters();

  const handleSearch = () => {
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredTools.length));
  };

  const handleNewsletterSubmit = () => {
    if (!email.trim()) {
      return;
    }
    setNewsletterStatus("success");
    setEmail("");
    setTimeout(() => setNewsletterStatus("idle"), 4000);
  };

  return (
    <main>
      <Hero query={query} onQueryChange={setQuery} onSearch={handleSearch} />
      <CategorySidebar
        categories={typedData.categories}
        activeCategory={activeCategory}
        onSelect={(category) => {
          setActiveCategory(category);
          setVisibleCount(PAGE_SIZE);
        }}
      />
      <FiltersBar
        activeCategory={activeCategory}
        activeFilter={activeFilter}
        onCategoryReset={() => {
          setActiveCategory("All");
          setVisibleCount(PAGE_SIZE);
        }}
        onFilterChange={(value) => {
          setActiveFilter(value);
          setVisibleCount(PAGE_SIZE);
        }}
      />
      {filteredTools.length === 0 ? (
        <section className="mx-auto w-full max-w-6xl px-6 py-14">
          <EmptyState onClear={handleEmptyClear} />
        </section>
      ) : (
        <>
          <ToolGrid tools={paginatedTools} query={query} />
          <Pagination
            showing={paginatedTools.length}
            total={filteredTools.length}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        </>
      )}
      <DealSection deal={typedData.deal} />
      <ReviewsSection reviews={typedData.reviews} />
      <NewsletterSection
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleNewsletterSubmit}
        status={newsletterStatus}
      />
    </main>
  );
}
