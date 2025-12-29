"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const VoiceSphereCanvas = dynamic(() => import("./voice-sphere-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="h-32 w-32 rounded-full bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] animate-pulse" />
    </div>
  ),
})

export function VoiceSphere() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <div className="h-32 w-32 rounded-full bg-gradient-to-r from-[#FF7F4A] to-[#FF9F7A] animate-pulse" />
        </div>
      }
    >
      <VoiceSphereCanvas />
    </Suspense>
  )
}
