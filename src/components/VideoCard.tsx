export default function VideoCard({
  title,
  youtubeId,
}: {
  title: string
  youtubeId: string
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 min-w-[200px] group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="relative w-full aspect-video bg-stone-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
            <svg
              className="w-5 h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <p className="text-sm font-medium text-stone-700 line-clamp-2">{title}</p>
      </div>
    </a>
  )
}
