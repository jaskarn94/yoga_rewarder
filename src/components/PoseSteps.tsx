export default function PoseSteps({ steps }: { steps: string[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-6">
        How to do it
      </h2>
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 font-playfair text-4xl font-bold text-sage/30 leading-none mt-0.5 w-8 text-right">
              {i + 1}
            </span>
            <p className="text-stone-600 leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
