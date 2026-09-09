import { viralReelVideo } from "@/lib/data/media"

export type ViralReelItem = {
  id: string
  label: string
  video: string
}

export const viralReels: ViralReelItem[] = [
  {
    id: "reel-791",
    label: "Podcast clip",
    video: viralReelVideo("Video-791.mp4"),
  },
  {
    id: "reel-80248",
    label: "Talking head",
    video: viralReelVideo("Video-80248.mp4"),
  },
  {
    id: "reel-83544",
    label: "Split edit",
    video: viralReelVideo("Video-83544.mp4"),
  },
  {
    id: "reel-98595",
    label: "Hook cut",
    video: viralReelVideo("Video-98595.mp4"),
  },
]
