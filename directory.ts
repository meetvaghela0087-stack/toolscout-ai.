export type ToolPrice = "Free" | "Freemium" | "Paid";

export type ToolPricingPlan = {
  plan: string;
  price: string;
  details: string;
};

export type Tool = {
  id: string;
  name: string;
  category: string;
  price: ToolPrice;
  rating: number;
  users: string;
  description: string;
  tagline: string;
  logo: string;
  url: string;
  tags: string[];
  features: string[];
  pros: string[];
  cons: string[];
  pricing: ToolPricingPlan[];
  screenshots: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: "spark" | "pen" | "play" | "code";
};

export type Review = {
  name: string;
  role: string;
  quote: string;
};

export type Deal = {
  label: string;
  title: string;
  subtitle: string;
  expires: string;
  badge: string;
  description: string;
  bullets: string[];
  cta: string;
};

export type DirectoryData = {
  categories: Category[];
  filters: Array<"All" | ToolPrice>;
  tools: Tool[];
  reviews: Review[];
  deal: Deal;
};
