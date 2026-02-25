"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from "lucide-react"

interface VideoCardProps {
  src: string
}

export default function VideoCard({ src }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hasSource, setHasSource] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (src) {
      fetch(src, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            setHasSource(true)
          } else {
            setHasError(true)
          }
        })
        .catch(() => {
          setHasError(true)
        })
    }
  }, [src])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    try {
      if (video.paused) {
        await video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleFullscreen = () => {
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !video.duration) return
    setProgress((video.currentTime / video.duration) * 100)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video || !video.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    video.currentTime = pct * video.duration
    setProgress(pct * 100)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  // Placeholder when video is not available
  if (!hasSource || hasError) {
    return (
      <div className="relative rounded-lg overflow-hidden border border-border bg-card">
        <div className="w-full aspect-video bg-muted flex flex-col items-center justify-center gap-3">
          <Film size={48} className="text-muted-foreground" />
          <p className="text-muted-foreground text-sm">
            {"\u89C6\u9891\u5F85\u4E0A\u4F20"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-border bg-card group">
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        onError={() => setHasError(true)}
        className="w-full h-auto block"
      />

      {/* Center play button overlay (shown when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity"
          aria-label="Play"
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <Play size={28} className="text-foreground ml-1" />
          </div>
        </button>
      )}

      {/* Bottom controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress bar */}
        <div
          className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-accent rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="text-white hover:text-accent transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button
            onClick={toggleMute}
            className="text-white hover:text-accent transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <div className="flex-1" />

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-accent transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
