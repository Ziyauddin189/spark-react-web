import { useRef } from "react"
import Nav from "./Nav"
import HeroScreen from "@/screens/HeroScreen"
import MarqueeScreen from "@/screens/MarqueeScreen"
import AboutScreen from "@/screens/AboutScreen"
import BatchesScreen from "@/screens/BatchesScreen"
import ApproachScreen from "@/screens/ApproachScreen"
import FounderScreen from "@/screens/FounderScreen"
import ContactScreen from "@/screens/ContactScreen"

export default function LandingPage() {
  const containerRef = useRef<HTMLElement>(null)

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
