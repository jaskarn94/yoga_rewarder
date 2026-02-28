export default function PoseTips({ tips }: { tips: string[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4">
        Pro tips
      </h2>
      <div className="flex flex-wrap gap-4">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="flex-1 min-w-[200px] rounded-2xl bg-sage/10 p-4 flex gap-3"
          >
            <span className="text-xl shrink-0">💡</span>
            <p className="text-stone-600 text-sm leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
