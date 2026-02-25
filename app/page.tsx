"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsSection } from "@/components/projects-section"
import { ShortVideoSection } from "@/components/short-video-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar - Fixed at top */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Short Video Section */}
        <ShortVideoSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
