import { getDailyPose } from "@/lib/getDailyPose"
import PoseHero from "@/components/PoseHero"
import PoseStats from "@/components/PoseStats"
import PoseImage from "@/components/PoseImage"
import PoseSteps from "@/components/PoseSteps"
import PoseAvoid from "@/components/PoseAvoid"
import PoseTips from "@/components/PoseTips"
import VideoSection from "@/components/VideoSection"

export default function Home() {
  const pose = getDailyPose()
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
          Daily Yoga
        </p>
        <p className="text-sm text-stone-400">{today}</p>
      </header>

      <PoseHero pose={pose} />
      <PoseStats pose={pose} />
      <PoseImage src={pose.imageUrl} alt={pose.name} />

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4">
          Overview
        </h2>
        <p className="text-stone-600 leading-relaxed mb-5">{pose.overview}</p>
        <ul className="space-y-2">
          {pose.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
              <span className="text-sage mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <PoseSteps steps={pose.steps} />
      <PoseAvoid items={pose.avoid} />
      <PoseTips tips={pose.tips} />
      <VideoSection videos={pose.videos} />

      <footer className="mt-16 pt-8 border-t border-stone-200 text-center text-xs text-stone-400">
        Come back tomorrow for a new pose.
      </footer>
    </main>
  )
}
