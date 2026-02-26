// Hero section with name, profession, and call-to-action buttons
// Customize the name, title, and bio with your own information

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-auto flex items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-xl text-accent font-semibold mb-2">{"Hi，我是方熙来"}</p>
            <p className="text-accent font-semibold">&nbsp;</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {"包罗万象·广告学"}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              {"本作品集收录我的部分AIGC创意、短视频制作与视觉设计类作品，涵盖实习经历、课程作业与比赛活动中的产出作品，呈现我的内容创意与制作能力。"}
            </p>



          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl border border-border">
              <Image
                src="/hero-profile.webp"
                alt="方熙来"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
