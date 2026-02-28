"use client"

import Image from "next/image"
import { useState } from "react"

export default function PoseImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="mb-10 flex items-center justify-center h-48 rounded-2xl bg-stone-100 text-stone-400 text-sm">
        No image available
      </div>
    )
  }

  return (
    <div className="mb-10 flex justify-center">
      <div className="relative w-full max-h-[400px] rounded-2xl overflow-hidden shadow-md bg-stone-50">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="object-contain w-full"
          onError={() => setErrored(true)}
        />
      </div>
    </div>
  )
}
