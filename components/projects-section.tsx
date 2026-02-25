// Projects section showcasing your work
// Update project titles, descriptions, tags, and links with your own projects

"use client"

import { Github } from "lucide-react"
import GitHubProjects from "./github-projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">AIGC</h2>
        </div>

        <GitHubProjects />
      </div>
    </section>
  )
}
