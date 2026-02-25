import VideoCard from "./video-card"

export function ShortVideoSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {"短视频"}
          </h2>
        </div>

        {/* Three video containers */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Video 1 */}
          <div className="flex-1 min-w-0">
            <div className="w-full aspect-[9/16] max-h-[500px] mx-auto rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src="https://player.xinpianchang.com/?aid=13605855&mid=NK0mw6jg5BrwW1na"
                allowFullScreen
                allow="fullscreen"
                frameBorder={0}
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-center mt-3">
              抖音主页视频剪辑
            </p>
          </div>

          {/* Video 2 */}
          <div className="flex-1 min-w-0">
            <div className="w-full aspect-[9/16] max-h-[500px] mx-auto rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src="https://player.xinpianchang.com/?aid=13605857&mid=oe3Zwv0lLR5QJVvz"
                allowFullScreen
                allow="fullscreen"
                frameBorder={0}
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-center mt-3">
              千川视频剪辑<br />消耗约11万元
            </p>
          </div>

          {/* Video 3 */}
          <div className="flex-1 min-w-0">
            <div className="w-full aspect-[9/16] max-h-[500px] mx-auto rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src="https://player.xinpianchang.com/?aid=13605856&mid=gyDjwoDJzro4xv1q"
                allowFullScreen
                allow="fullscreen"
                frameBorder={0}
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-center mt-3">
              千川视频剪辑<br />融合当月AIGC热点
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
