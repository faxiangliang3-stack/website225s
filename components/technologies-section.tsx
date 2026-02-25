// Technologies section showcasing tech stack

export function TechnologiesSection() {
  const technologies = [
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Figma",
    "剪映",
    "即梦AI",
    "LibLib AI",
  ]

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">我的技能</h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-accent transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
