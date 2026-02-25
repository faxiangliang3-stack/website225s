// Footer component with copyright and social links
// Customize with your name and social media links

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">The template is provided by vercel v0.</p>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
              AIGC
            </a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
              短视频
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              设计
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
