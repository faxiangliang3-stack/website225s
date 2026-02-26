import Image from "next/image"
import VideoCard from "./video-card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">设计</h2>
        </div>

        {/* Design Project 1 - Image left, text right */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
          <div className="flex-[2] min-w-0 rounded-lg overflow-hidden border border-border bg-card">
            <Image
              src="/珍珠包装设计.jpg"
              alt="珍珠包装设计"
              width={1280}
              height={854}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-64 flex-shrink-0">
            <p className="text-muted-foreground text-sm leading-relaxed">
              为礼兰山下湖珍珠打造的高端饰品包装，以山形图案呼应珍珠原产地，深色调底衬蓝色山形强化视觉层次。版式上将核心信息居中突出，品牌标识置于视觉次位，强化产地稀缺性与产品品质，整体简约大气。
            </p>
          </div>
        </div>

        {/* Design Project 2 - Video left, text right */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
          <div className="flex-[2] min-w-0">
            <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src="https://player.xinpianchang.com/?aid=13605860&mid=DA96Qey5XePQj5N0"
                allowFullScreen
                allow="fullscreen"
                frameBorder={0}
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div className="md:w-64 flex-shrink-0">
            <p className="text-muted-foreground text-sm leading-relaxed">
              为新加坡植物园官网的重新设计，采用模块化布局清晰划分信息层级。设计融入磨砂玻璃质感的视觉元素，提升界面高级感与通透度。部分功能组件与图标由 AIGC 生成。交互动效由XD制作。
            </p>
          </div>
        </div>

        {/* Design Project 3 - Image left, text right */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
          <div className="flex-[2] min-w-0 rounded-lg overflow-hidden border border-border bg-card">
            <Image
              src="/VIsss_画板 1.jpg"
              alt="VI设计"
              width={1280}
              height={854}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-64 flex-shrink-0">
            <p className="text-muted-foreground text-sm leading-relaxed">
              为自然风时令主题餐厅「四时院」打造的品牌VI设计，以红日、绿叶、粉花、水滴构建品牌标识；提取春绿、夏红、秋黄、冬蓝为品牌标准色，从标识组合、视觉限制区到辅助图形完成全体系标准化设计。
            </p>
            <a
              href="https://my.feishu.cn/file/L0web9MhVosKnqx7QClcSXg8npe?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-accent hover:underline text-sm"
            >
              点击查看完整VI手册
            </a>
          </div>
        </div>

        {/* Design Project 4 - Two videos left, text right */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-[2] min-w-0 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <iframe src="https://player.xinpianchang.com/?aid=13605865&amp;mid=3Yn57pW8zWLQdDAa" allowFullScreen allow="fullscreen" frameBorder="0" style={{ border: 'none', width: '100%', aspectRatio: '16/9' }}></iframe>
            </div>
            <div className="flex-1">
              <iframe src="https://player.xinpianchang.com/?aid=13605871&mid=9WxJ7lLB8Ln781kM" allowFullScreen allow="fullscreen" frameBorder="0" style={{ border: 'none', width: '100%', aspectRatio: '16/9' }}></iframe>
            </div>
          </div>
          <div className="md:w-64 flex-shrink-0">
            <p className="text-muted-foreground text-sm leading-relaxed">
              为「四时院」制作的AE动效海报。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
