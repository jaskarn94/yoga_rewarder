import type { YogaPose } from "@/types/pose"

export default function PoseStats({ pose }: { pose: YogaPose }) {
  return (
    <section className="mb-8 border-y border-stone-200 py-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-sm text-stone-500">
          <span>⏱</span>
          <span>{pose.duration}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {pose.bodyFocus.map((area) => (
            <span
              key={area}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage/10 text-sage-dark"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
