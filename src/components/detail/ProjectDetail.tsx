"use client"

import { useState, useRef, useEffect } from "react"
import {
  ImageIcon,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  ArrowRight,
  Star,
} from "lucide-react"

// Types for our media items
type MediaType = "image" | "video"

interface MediaItem {
  id: string
  title: string
  type: MediaType
  url: string
  thumbnailUrl: string
  date: string
  featured?: boolean
  width?: number
  height?: number
  duration?: number // for videos, in seconds
}

// Mock data - replace with actual API call
const getProjectMedia = (projectId: string): MediaItem[] => {
  return [
    {
      id: "1",
      title: "Project Overview",
      type: "image",
      url: "/placeholder.svg?height=1080&width=1920",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-01",
      featured: true,
      width: 1920,
      height: 1080,
    },
    {
      id: "2",
      title: "Design Process",
      type: "video",
      url: "https://example.com/videos/design-process.mp4", // Replace with actual video URL
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-02",
      featured: true,
      duration: 245, // 4:05 minutes
    },
    {
      id: "3",
      title: "User Interface",
      type: "image",
      url: "/placeholder.svg?height=1200&width=1600",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-03",
      width: 1600,
      height: 1200,
    },
    {
      id: "4",
      title: "Mobile Experience",
      type: "image",
      url: "/placeholder.svg?height=1920&width=1080",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-04",
      width: 1080,
      height: 1920,
    },
    {
      id: "5",
      title: "Feature Demonstration",
      type: "video",
      url: "https://example.com/videos/feature-demo.mp4", // Replace with actual video URL
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-05",
      duration: 183, // 3:03 minutes
    },
    {
      id: "6",
      title: "User Testing",
      type: "video",
      url: "https://example.com/videos/user-testing.mp4", // Replace with actual video URL
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-06",
      duration: 312, // 5:12 minutes
    },
    {
      id: "7",
      title: "Color Palette",
      type: "image",
      url: "/placeholder.svg?height=1200&width=1600",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-07",
      width: 1600,
      height: 1200,
    },
    {
      id: "8",
      title: "Typography System",
      type: "image",
      url: "/placeholder.svg?height=1200&width=1600",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-08",
      width: 1600,
      height: 1200,
    },
    {
      id: "9",
      title: "Client Presentation",
      type: "video",
      url: "https://example.com/videos/client-presentation.mp4", // Replace with actual video URL
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-09",
      duration: 426, // 7:06 minutes
    },
    {
      id: "10",
      title: "Project Team",
      type: "image",
      url: "/placeholder.svg?height=1080&width=1920",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      date: "2025-04-10",
      width: 1920,
      height: 1080,
    },
  ]
}

// Format video duration from seconds to MM:SS
const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export default function ProjectMediaGallery({ projectId }: { projectId: string }) {
  const [activeTab, setActiveTab] = useState<"all" | "images" | "videos">("all")
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const videoRef = useRef<HTMLVideoElement>(null)

  // Fetch media items
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMediaItems(getProjectMedia(projectId))
      setIsLoading(false)
    }, 1000)
  }, [projectId])

  // Filter media items based on active tab
  const filteredItems = mediaItems.filter((item) => {
    if (activeTab === "all") return true
    return item.type === activeTab.slice(0, -1) // Remove 's' from "images" or "videos"
  })

  // Get featured items
  const featuredItems = filteredItems.filter((item) => item.featured)

  // Handle media selection
  const handleSelectMedia = (item: MediaItem, index: number) => {
    setSelectedItem(item)
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id))

    if (item.type === "video") {
      setIsPlaying(false)
      setIsMuted(false)
    }
  }

  // Handle video play/pause
  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  // Handle video mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Navigate to previous/next item
  const navigate = (direction: "prev" | "next") => {
    if (!selectedItem) return

    let newIndex = currentIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setCurrentIndex(newIndex)
    setSelectedItem(filteredItems[newIndex])

    if (filteredItems[newIndex].type === "video") {
      setIsPlaying(false)
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load()
        }
      }, 0)
    }
  }

  // Close media viewer
  const closeViewer = () => {
    setSelectedItem(null)
    setIsPlaying(false)
  }

  // Handle video events
  const handleVideoPlay = () => setIsPlaying(true)
  const handleVideoPause = () => setIsPlaying(false)
  const handleVideoEnded = () => setIsPlaying(false)

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen text-white">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Project Header */}
      <div className="container mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
              <Star className="h-3.5 w-3.5 mr-2" />
              Project Media
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Visual Gallery
            </h1>
          </div>
          <button className="self-start px-4 py-2 border border-zinc-800 rounded-md text-white hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/50 transition-all duration-300 flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Project
          </button>
        </div>
      </div>

      {/* Featured Section */}
      {!isLoading && featuredItems.length > 0 && (
        <div className="container mx-auto px-6 pb-20 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              <h2 className="text-2xl font-bold text-white">Featured</h2>
              <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-orange-500 to-orange-300"></div>
            </div>
            <button className="text-orange-400 hover:text-orange-300 p-0 h-auto group flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredItems.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg shadow-black/20 border border-zinc-800/50"
                onClick={() => handleSelectMedia(item, index)}
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={item.thumbnailUrl || "/placeholder.svg"}
                    alt={item.title}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/30 rounded-full scale-[1.3] blur-md animate-pulse"></div>
                        <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-full p-5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-lg shadow-orange-500/20">
                          <Play className="h-8 w-8 text-black" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {item.duration ? formatDuration(item.duration) : "00:00"}
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span
                      className={`flex items-center gap-1.5 border-0 backdrop-blur-md px-3 py-1.5 rounded-full font-medium shadow-md ${
                        item.type === "image" ? "bg-zinc-900/70 text-white" : "bg-orange-500/90 text-black"
                      }`}
                    >
                      {item.type === "image" ? (
                        <ImageIcon className="h-3.5 w-3.5" />
                      ) : (
                        <Video className="h-3.5 w-3.5" />
                      )}
                      {item.type === "image" ? "Image" : "Video"}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-0 h-0.5 bg-orange-500 group-hover:w-16 transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Media Gallery */}
      <div className="container mx-auto px-6 pb-24 relative z-10">
        {/* Custom Tabs */}
        <div className="space-y-10">
          <div className="relative">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 p-1 h-auto w-full flex justify-start rounded-full overflow-hidden shadow-lg shadow-black/10">
              <button
                title="Previous"
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === "all" ? "bg-orange-500 text-black" : "text-white hover:bg-zinc-800/50"}`}
              >
                All Media
              </button>
              <button
                onClick={() => setActiveTab("images")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === "images" ? "bg-orange-500 text-black" : "text-white hover:bg-zinc-800/50"}`}
              >
                <ImageIcon className="h-4 w-4" />
                Images
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === "videos" ? "bg-orange-500 text-black" : "text-white hover:bg-zinc-800/50"}`}
              >
                <Video className="h-4 w-4" />
                Videos
              </button>
            </div>

            {/* Decorative dots */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-3 gap-1.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500/30"></div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-0">
            {isLoading ? (
              // Loading skeletons
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/30 animate-pulse ${
                      index % 5 === 0 ? "col-span-2 row-span-2" : ""
                    } ${index % 8 === 3 ? "col-span-2" : ""}`}
                  />
                ))}
              </div>
            ) : (
              // Media items in masonry layout
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
                {filteredItems
                  .filter((item) => !item.featured)
                  .map((item, index) => (
                    <div
                      key={item.id}
                      className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 border border-zinc-800/30 hover:border-orange-500/30 ${
                        // Make some items span multiple grid cells for visual interest
                        index % 5 === 0 ? "col-span-2 row-span-2" : ""
                      } ${index % 8 === 3 ? "col-span-2" : ""}`}
                      onClick={() => handleSelectMedia(item, index)}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={item.thumbnailUrl || "/placeholder.svg"}
                          alt={item.title}
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                      </div>

                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-orange-500/30 rounded-full scale-[1.3] blur-md animate-pulse"></div>
                            <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-full p-3 relative z-10 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                              <Play className="h-6 w-6 text-black" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full font-medium">
                            {item.duration ? formatDuration(item.duration) : "00:00"}
                          </div>
                        </div>
                      )}

                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                        <span
                          className={`flex items-center gap-1.5 border-0 backdrop-blur-md px-2.5 py-1 rounded-full font-medium shadow-md ${
                            item.type === "image" ? "bg-zinc-900/70 text-white" : "bg-orange-500/90 text-black"
                          }`}
                        >
                          {item.type === "image" ? <ImageIcon className="h-3 w-3" /> : <Video className="h-3 w-3" />}
                          {item.type === "image" ? "Image" : "Video"}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-lg font-medium text-white group-hover:text-orange-300 transition-colors">
                          {item.title}
                        </h3>
                        <div className="w-0 h-0.5 bg-orange-500 group-hover:w-12 transition-all duration-700 ease-out delay-100"></div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Viewer Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center">
          <div className="w-full h-full flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6">
              <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
                {selectedItem.title}
              </h2>
              <button
                title="Close Viewer"
                onClick={closeViewer}
                className="text-white hover:bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Media Content */}
            <div className="relative flex-1 min-h-0 flex items-center justify-center overflow-hidden">
              {selectedItem.type === "image" ? (
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <img
                    src={selectedItem.url || "/placeholder.svg"}
                    alt={selectedItem.title}
                    width={selectedItem.width || 1920}
                    height={selectedItem.height || 1080}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={selectedItem.url}
                    className="max-h-full max-w-full rounded-lg shadow-2xl"
                    controls={false}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnded}
                  />

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          className="text-white hover:bg-orange-500 hover:text-black rounded-full h-12 w-12 shadow-lg shadow-black/20 flex items-center justify-center"
                          onClick={togglePlay}
                        >
                          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                        </button>

                        <button
                          className="text-white hover:bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center"
                          onClick={toggleMute}
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>

                        <span className="text-white text-sm">
                          {selectedItem.duration ? formatDuration(selectedItem.duration) : "00:00"}
                        </span>
                      </div>

                      <button
                        className="border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm text-white hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 px-3 py-1.5 rounded-md text-sm flex items-center"
                        onClick={() => window.open(selectedItem.url, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" /> Download
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <button
               title="Previous Media"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white hover:bg-orange-500 hover:text-black rounded-full h-12 w-12 shadow-lg shadow-black/20 flex items-center justify-center"
                onClick={() => navigate("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
               title="Next Media"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white hover:bg-orange-500 hover:text-black rounded-full h-12 w-12 shadow-lg shadow-black/20 flex items-center justify-center"
                onClick={() => navigate("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

