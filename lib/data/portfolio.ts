export type PortfolioCategory =
  | "all"
  | "youtube"
  | "social-media"
  | "brand-films"
  | "short-form"
  | "ads"

export type PortfolioProject = {
  id: string
  title: string
  tags: string
  image: string
  categories: Exclude<PortfolioCategory, "all">[]
}

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "youtube", label: "YouTube" },
  { id: "social-media", label: "Social Media" },
  { id: "brand-films", label: "Brand Films" },
  { id: "short-form", label: "Short Form" },
  { id: "ads", label: "Ads" },
]

const img = (filename: string) =>
  `/portfoilio/${encodeURIComponent(filename)}`

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gaming-live",
    title: "Gaming Live Series",
    tags: "Thumbnail Design, Branding",
    image: img("image (1).png"),
    categories: ["youtube", "short-form"],
  },
  {
    id: "skincare-film",
    title: "Skincare Brand Film",
    tags: "Video Production, Editing",
    image: img("image (2).png"),
    categories: ["brand-films", "ads"],
  },
  {
    id: "fintech-launch",
    title: "Fintech App Launch",
    tags: "Product Video, Motion Graphics",
    image: img("image (3).png"),
    categories: ["ads", "brand-films"],
  },
  {
    id: "restaurant-ad",
    title: "Restaurant Ad",
    tags: "Short Form Video, Editing",
    image: img("image (4).png"),
    categories: ["short-form", "ads", "social-media"],
  },
  {
    id: "podcast-series",
    title: "Podcast Series",
    tags: "Multi-cam Editing, Branding",
    image: img("image.png"),
    categories: ["youtube", "brand-films"],
  },
  {
    id: "creator-rebrand",
    title: "Creator Channel Rebrand",
    tags: "Brand Identity, Thumbnails",
    image: img("32BCA058-F27E-4601-96E5-3B28918FBCA2.png"),
    categories: ["youtube", "social-media"],
  },
  {
    id: "product-launch",
    title: "Product Launch Film",
    tags: "Cinematic Edit, Color Grade",
    image: img("8CB0C3F6-6DF3-4E59-8918-1D53C87818BE.png"),
    categories: ["brand-films", "ads"],
  },
  {
    id: "social-campaign",
    title: "Social Growth Campaign",
    tags: "Short Form, Distribution",
    image: img("C86BF55D-BBE4-4332-BB6E-F9625135CA72.png"),
    categories: ["social-media", "short-form"],
  },
]
