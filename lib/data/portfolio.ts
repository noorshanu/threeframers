import { portfolioImage, portfolioVideo } from "@/lib/data/media"

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
  tagList: string[]
  image: string
  video?: string
  year: string
  categories: Exclude<PortfolioCategory, "all">[]
}

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "youtube", label: "YouTube" },
  { id: "social-media", label: "Social" },
  { id: "brand-films", label: "Brand Films" },
  { id: "short-form", label: "Short Form" },
  { id: "ads", label: "Ads" },
]

const img = portfolioImage
const vid = portfolioVideo

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gaming-live",
    title: "Gaming Live Series",
    tags: "Thumbnail Design, Branding",
    tagList: ["Thumbnails", "Branding", "YouTube"],
    year: "2025",
    image: img("image (1).png"),
    video: vid("Video-61844.mp4"),
    categories: ["youtube", "short-form"],
  },
  {
    id: "skincare-film",
    title: "Skincare Brand Film",
    tags: "Video Production, Editing",
    tagList: ["Production", "Editing", "Brand Film"],
    year: "2025",
    image: img("image (2).png"),
    video: vid("AD V3 draft 1.mp4"),
    categories: ["brand-films", "ads"],
  },
  {
    id: "fintech-launch",
    title: "Fintech App Launch",
    tags: "Product Video, Motion Graphics",
    tagList: ["Motion", "Product", "Launch"],
    year: "2024",
    image: img("image (3).png"),
    categories: ["ads", "brand-films"],
  },
  {
    id: "restaurant-ad",
    title: "Restaurant Ad",
    tags: "Short Form Video, Editing",
    tagList: ["Short Form", "Editing", "Ads"],
    year: "2024",
    image: img("image (4).png"),
    categories: ["short-form", "ads", "social-media"],
  },
  {
    id: "podcast-series",
    title: "Podcast Series",
    tags: "Multi-cam Editing, Branding",
    tagList: ["Multi-cam", "Podcast", "Long Form"],
    year: "2025",
    image: img("image.png"),
    categories: ["youtube", "brand-films"],
  },
  {
    id: "creator-rebrand",
    title: "Creator Channel Rebrand",
    tags: "Brand Identity, Thumbnails",
    tagList: ["Rebrand", "Identity", "Thumbnails"],
    year: "2024",
    image: img("32BCA058-F27E-4601-96E5-3B28918FBCA2.png"),
    categories: ["youtube", "social-media"],
  },
  {
    id: "product-launch",
    title: "Product Launch Film",
    tags: "Cinematic Edit, Color Grade",
    tagList: ["Cinematic", "Color Grade", "Launch"],
    year: "2025",
    image: img("8CB0C3F6-6DF3-4E59-8918-1D53C87818BE.png"),
    video: vid("FINAL OUTPUT.mp4"),
    categories: ["brand-films", "ads"],
  },
  {
    id: "social-campaign",
    title: "Social Growth Campaign",
    tags: "Short Form, Distribution",
    tagList: ["Social", "Distribution", "Growth"],
    year: "2024",
    image: img("C86BF55D-BBE4-4332-BB6E-F9625135CA72.png"),
    video: vid("Video-61981.mp4"),
    categories: ["social-media", "short-form"],
  },
]
