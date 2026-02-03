import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

const DEFAULT_IMAGE = "https://placehold.co/1200x630/111827/ffffff?text=ToolScout.ai";

const setMetaTag = (selector: string, attr: "name" | "property", key: string, content?: string) => {
  if (!content) return;
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

export function useSeo({ title, description, image, url }: SeoConfig) {
  useEffect(() => {
    const metaImage = image ?? DEFAULT_IMAGE;
    const metaDescription = description ? description.slice(0, 160) : undefined;

    document.title = title;

    setMetaTag('meta[name="description"]', "name", "description", metaDescription);
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", metaDescription);
    setMetaTag('meta[property="og:image"]', "property", "og:image", metaImage);
    setMetaTag('meta[property="og:image:alt"]', "property", "og:image:alt", `${title} preview`);
    setMetaTag('meta[property="og:url"]', "property", "og:url", url);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "ToolScout.ai");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", metaDescription);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", metaImage);
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  }, [title, description, image, url]);
}

