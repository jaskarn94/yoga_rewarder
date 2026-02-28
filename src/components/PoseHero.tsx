import type { YogaPose } from "@/types/pose"

const difficultyColors = {
  Beginner: "bg-sage/20 text-sage-dark border-sage/30",
  Intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  Advanced: "bg-rose-100 text-rose-700 border-rose-200",
}

export default function PoseHero({ pose }: { pose: YogaPose }) {
  return (
    <section className="mb-8">
      <p className="text-sm font-medium tracking-widest uppercase text-sage mb-2">
        {pose.sanskrit}
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-5">
        {pose.name}
      </h1>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-medium border bg-stone-100 text-stone-600 border-stone-200">
          {pose.category}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[pose.difficulty]}`}
        >
          {pose.difficulty}
        </span>
      </div>
    </section>
  )
}
