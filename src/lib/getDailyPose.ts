import { poses } from "@/data/poses"
import type { YogaPose } from "@/types/pose"

export function getDailyPose(): YogaPose {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return poses[dayOfYear % poses.length]
}
