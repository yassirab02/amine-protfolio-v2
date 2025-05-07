"use client"

import type React from "react"
import { Play } from "lucide-react"

interface Video {
  thumbnail: string
  videoUrl: string
  title: string
  description?: string
  duration?: string
  poster?: string
}

interface VideoGalleryProps {
  videos: Video[]
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <a key={index} href={video.videoUrl} className="group relative block overflow-hidden">
          <div className="relative aspect-video">
            <video
              src={video.thumbnail}
              poster={video.poster || undefined}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              playsInline
              loop
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="w-8 h-8 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            {video.duration && (
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            )}
          </div>
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{video.title}</h3>
            {video.description && <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>}
          </div>
        </a>
      ))}
    </div>
  )
}

export default VideoGallery
