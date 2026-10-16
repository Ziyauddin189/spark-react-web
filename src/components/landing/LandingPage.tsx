import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion"
import Nav from "./Nav"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import Preloader from "./Preloader"
import CursorSpark from "./CursorSpark"
import HeroScreen from "@/screens/HeroScreen"
import MarqueeScreen from "@/screens/MarqueeScreen"
import StatementScreen from "@/screens/StatementScreen"
import ProgramsScreen from "@/screens/ProgramsScreen"
import BatchesScreen from "@/screens/BatchesScreen"
import WhyScreen from "@/screens/WhyScreen"
import FounderScreen from "@/screens/FounderScreen"
import CompareScreen from "@/screens/CompareScreen"
import TestimonialsScreen from "@/screens/TestimonialsScreen"
import FaqScreen from "@/screens/FaqScreen"
import ContactScreen from "@/screens/ContactScreen"

const INTRO_KEY = "spark-intro-seen"

// The loading intro plays once per browser session, and never for people who
// prefer reduced motion.
function shouldPlayIntro() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
    return sessionStorage.getItem(INTRO_KEY) !== "1"
  } catch {
    return false
  }
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-ember via-gold to-azure"
    />
  )
}

export default function LandingPage() {
  const [loading, setLoading] = useState(shouldPlayIntro)

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1")
    } catch {
      // storage blocked — the intro will simply play again next time
    }
    setLoading(false)
  }, [])

  // Keep the page still while the intro covers it.
  useEffect(() => {
    if (!loading) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onDone={finishIntro} />}</AnimatePresence>
      <ScrollProgress />
      <CursorSpark />
      <div className="relative bg-paper font-sans text-ink">
        <Nav />
        <main>
          <HeroScreen ready={!loading} />
          <MarqueeScreen />
          <StatementScreen />
          <ProgramsScreen />
          <BatchesScreen />
          <WhyScreen />
          <FounderScreen />
          <CompareScreen />
          <TestimonialsScreen />
          <FaqScreen />
          <ContactScreen />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}
