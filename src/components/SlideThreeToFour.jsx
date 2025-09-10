"use client"
import { useState, useEffect } from "react"
import { LayoutGroup, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SlideThree from "./SlideThree"
import SlideFour from "./SlideFour"

export default function SlideThreeToFour() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [played, setPlayed] = useState(false) // prevent repetitive triggering
  const [isAnimating, setIsAnimating] = useState(false)

  // Watch when SlideThree comes into view
  const { ref, inView } = useInView({
    threshold: 0.6, // 60% visible
    triggerOnce: true, // fire only once
    delay: 1000,
  })

  useEffect(() => {
    if (inView && !played) {
      setPlayed(true)
      
      // Start the throw-out animation first
      setIsAnimating(true)
      
      // After a short delay, show the overlay (video expansion)
      const overlayTimer = setTimeout(() => {
        setShowOverlay(true)
      }, 400) // Start overlay after images begin throwing out

      // Auto close overlay after 2s
      const closeTimer = setTimeout(() => {
        setShowOverlay(false)
        // Start reverse animation after overlay closes
        setTimeout(() => {
          setIsAnimating(false)
        }, 100)
      }, 2400) // Extended to account for animation delay

      return () => {
        clearTimeout(overlayTimer)
        clearTimeout(closeTimer)
      }
    }
  }, [inView, played])

  const handleExpandVideo = () => {
    if (!isAnimating) { // Only allow manual trigger if not already animating
      setIsAnimating(true)
      
      setTimeout(() => {
        setShowOverlay(true)
      }, 600) // Match the timing with auto-trigger
    }
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false)
    setIsAnimating(false)
  }

  return (
    <LayoutGroup>
      <div>
        <SlideThree 
          ref={ref} 
          onExpandVideo={handleExpandVideo}
          isAnimating={isAnimating}
        />           
      </div>

      <AnimatePresence>
        {showOverlay && (
          <SlideFour 
            key="slide-four-overlay" 
            onClose={handleCloseOverlay} 
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}