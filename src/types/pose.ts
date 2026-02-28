export interface YogaPose {
  id: string
  name: string
  sanskrit: string
  category: "Standing" | "Seated" | "Supine" | "Prone" | "Balancing" | "Inversion" | "Backbend" | "Hip Opener"
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  bodyFocus: string[]
  overview: string
  benefits: string[]
  steps: string[]
  avoid: string[]
  tips: string[]
  imageUrl: string
  videos: {
    title: string
    youtubeId: string
  }[]
}
