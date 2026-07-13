import { useEffect, useState, useRef } from "react"
import Nav from "./Nav"
import ScrollDots from "./ScrollDots"
import HeroScreen from "@/screens/HeroScreen"
import MarqueeScreen from "@/screens/MarqueeScreen"
import AboutScreen from "@/screens/AboutScreen"
import AcademicsScreen from "@/screens/AcademicsScreen"
import BatchesScreen from "@/screens/BatchesScreen"
import ApproachScreen from "@/screens/ApproachScreen"
import FounderScreen from "@/screens/FounderScreen"
import ContactScreen from "@/screens/ContactScreen"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // We use an IntersectionObserver to detect which section is currently active
    const sections = document.querySelectorAll("section[id]")
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="relative font-sans text-foreground bg-background selection:bg-accent/30">
      <Nav />
      {/* <ScrollDots activeSection={activeSection} /> - Removed as requested for smooth continuous scroll */}
      
      {/* Main scroll container */}
      <main ref={containerRef} className="w-full flex flex-col pt-24">
        <HeroScreen />
        <MarqueeScreen />
        <AboutScreen />
        <FounderScreen />
        <BatchesScreen />
        <ApproachScreen />
        <ContactScreen />
      </main>
    </div>
  )
}
