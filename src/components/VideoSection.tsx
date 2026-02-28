import VideoCard from "./VideoCard"

export default function VideoSection({
  videos,
}: {
  videos: { title: string; youtubeId: string }[]
}) {
  return (
    <section className="mb-10">
      <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4">
        Watch &amp; Learn
      </h2>
      <div className="flex flex-wrap gap-4">
        {videos.map((v) => (
          <VideoCard key={v.youtubeId} title={v.title} youtubeId={v.youtubeId} />
        ))}
      </div>
    </section>
  )
}
