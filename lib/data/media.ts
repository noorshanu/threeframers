/** Shared paths for assets in `public/portfoilio/` */
export const portfolioImage = (filename: string) =>
  `/portfoilio/${encodeURIComponent(filename)}`

export const portfolioVideo = (filename: string) =>
  `/portfoilio/${encodeURIComponent(filename)}`

/** Short-form reels in `public/viralreel/` */
export const viralReelVideo = (filename: string) =>
  `/viralreel/${encodeURIComponent(filename)}`
