export default function PoseAvoid({ items }: { items: string[] }) {
  return (
    <section className="mb-10 rounded-2xl bg-[#FDF5F2] p-6">
      <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
        <span className="text-terracotta text-xl">⚠</span>
        What to avoid
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="shrink-0 w-1 rounded-full bg-terracotta/50 self-stretch" />
            <p className="text-stone-600 leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
