import { portfolioImage, portfolioVideo } from "@/lib/data/media"

export type LongFormReel = {
  id: string
  title: string
  format: string
  timecode: string
  poster: string
  video: string
}

export const longFormReels: LongFormReel[] = [
  {
    id: "ad-v3",
    title: "AD V3 Draft",
    format: "Ad · Short Form",
    timecode: "00:45:00",
    poster: portfolioImage("image (4).png"),
    video: portfolioVideo("AD V3 draft 1.mp4"),
  },
  {
    id: "final-output",
    title: "Final Output",
    format: "Brand Film · Cinematic",
    timecode: "03:12:00",
    poster: portfolioImage("8CB0C3F6-6DF3-4E59-8918-1D53C87818BE.png"),
    video: portfolioVideo("FINAL OUTPUT.mp4"),
  },
  {
    id: "video-61844",
    title: "Social Clip 61844",
    format: "Social · Vertical",
    timecode: "00:30:00",
    poster: portfolioImage("image (1).png"),
    video: portfolioVideo("Video-61844.mp4"),
  },
  {
    id: "video-61981",
    title: "Social Clip 61981",
    format: "Social · Vertical",
    timecode: "00:42:00",
    poster: portfolioImage("C86BF55D-BBE4-4332-BB6E-F9625135CA72.png"),
    video: portfolioVideo("Video-61981.mp4"),
  },
]
