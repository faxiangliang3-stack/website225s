import Image from "next/image"
import VideoCard from "./video-card"

const DESC_1 =
  "\u4E3A\u4F20\u5947\u4ECA\u751F\u5507\u818F\u6253\u9020\u7684\u65B0\u4E2D\u5F0F\u5305\u88C5\u8BBE\u8BA1\uFF0C\u4EE5\u4F20\u7EDF\u670D\u9970\u201C\u4E91\u80A9\u201D\u4E3A\u7075\u611F\uFF0C\u878D\u5408\u7ECF\u5178\u56DB\u5408\u4E91\u80A9\u7EB9\u6837\u4E0E\u65B0\u5F0F\u5F69\u8272\u871C\u8702\u5143\u7D20\u3002\u8FD0\u7528 LiblibAI \u751F\u6210\u7535\u5546\u573A\u666F\u80CC\u666F\uFF0C\u518D\u901A\u8FC7\u540E\u671F\u7CBE\u4FEE\u878D\u5408\u4EA7\u54C1"

const DESC_2 =
  "\u4E3A\u4E2D\u5C0F\u5B66\u79D1\u5B66\u5BB6\u7CBE\u795E\u5BA3\u8BB2\u6BD4\u8D5B\u8BBE\u8BA1\u7684\u7ACB\u4F53\u6253\u5361\u70B9\u3002\u8FD0\u7528\u5373\u68A6 AI \u751F\u6210 3D \u5361\u901A\u7D20\u6750\uFF0C\u518D\u901A\u8FC7 Photoshop \u8FDB\u884C\u5143\u7D20\u7EC4\u5408\uFF0C\u517C\u987E\u8D5B\u4E8B\u8C03\u6027\u4E0E\u9752\u5C11\u5E74\u5BA1\u7F8E\uFF0C\u5438\u5F15\u5230\u5B66\u751F\u4E3B\u52A8\u6253\u5361\u8F6C\u53D1"

const DESC_3 =
  "\u300A\u5947\u5E7B\u6D77\u6CB3\u300B\u0020\u662F\u4E00\u90E8\u7531\u5373\u68A6AI\u751F\u6210\u7684\u0033\u0044\u52A8\u753B\uFF0C\u8BB2\u8FF0\u4E86\u9B54\u6CD5\u5E08\u5C06\u5976\u6E90\u5E26\u5165\u5C0F\u9547\u7684\u6545\u4E8B\u3002\u901A\u8FC7\u7CBE\u786E\u7684\u63D0\u793A\u8BCD\u63A7\u5236\u7A7A\u95F4\u8F6C\u573A\u903B\u8F91\uFF0C\u5229\u7528\u9996\u5C3E\u5E27\u53C2\u8003\u4FDD\u6301\u89D2\u8272\u4E0E\u573A\u666F\u7684\u4E00\u81F4\u6027\u3002"

export default function GitHubProjects() {
  return (
    <div className="flex flex-col gap-6">
      {/* Card 1 - Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-[2] min-w-0 rounded-lg overflow-hidden border border-border bg-card">
          <Image
            src="/ecommerce-product.jpg"
            alt="ecommerce design"
            width={1280}
            height={854}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-64 flex-shrink-0">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {DESC_1}
          </p>
        </div>
      </div>

      {/* Card 2 - Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-[2] min-w-0 rounded-lg overflow-hidden border border-border bg-card">
          <Image
            src="/science-checkin.png"
            alt="science spirit check-in"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-64 flex-shrink-0">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {DESC_2}
          </p>
        </div>
      </div>

      {/* Card 3 - Video */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-[2] min-w-0">
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-card">
            <iframe
              src="https://player.xinpianchang.com/?aid=13605848&mid=rVo9wyNlrZ04l5PG"
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
            {DESC_3}
          </p>
        </div>
      </div>
    </div>
  )
}
