"use client"
import { motion } from "framer-motion"
import { forwardRef } from "react"

const SlideThree = forwardRef(({ onExpandVideo, isAnimating }, ref) => {
  // Animation variants for images throwing out
  const imageVariants = {
    initial: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      y: 0,
      filter: "blur(0px)"
    },
    // Kitchen - North direction
    throwNorth: {
      opacity: 0,
      scale: 0.8,
      y: -800,
      x: 0,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    // Desk - West direction
    throwWest: {
      opacity: 0,
      scale: 0.8,
      x: -600,
      y: 0,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    // Balcony - East direction
    throwEast: {
      opacity: 0,
      scale: 0.8,
      x: 600,
      y: 0,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    // Hall - South West
    throwSouthWest: {
      opacity: 0,
      scale: 0.8,
      x: -400,
      y: 600,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    // Bedroom - South East
    throwSouthEast: {
      opacity: 0,
      scale: 0.8,
      x: 400,
      y: 600,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  }

  // Fixed video variants - this was the issue!
  const videoVariants = {
    initial: {
      scale: 1,
      zIndex: 1,
      x: 0,
      y: 0
    },
    expanding: {
      scale: 4, // Much larger scale to simulate fullscreen expansion
      zIndex: 45, // Higher z-index to appear above images
      x: 0,
      y: 0,
      transition: {
        duration: 0.8, // Match the duration of image throw-out
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.1 // Slight delay after images start throwing
      }
    }
  }

  return (
    <div
      className="w-full h-[1100px] bg-white flex items-center justify-center overflow-hidden relative mt-20"
      aria-label="Property interiors collage"
    >
      <div style={styles.wrap}>
        {/* Row 1 - Kitchen (North) */}
        <div style={styles.row}>
          <motion.div 
            style={{ ...styles.frame, width: "69.7vw", height: "29.9vw", maxWidth: 767, maxHeight: 329 }}
            variants={imageVariants}
            initial="initial"
            animate={isAnimating ? "throwNorth" : "initial"}
          >
            <img src="/Kitchen_Img.png" alt="Modern kitchen" style={styles.media} loading="lazy" />
          </motion.div>
        </div>

        {/* Row 2 - Desk (West), Video (Center), Balcony (East) */}
        <div style={styles.row}>
          <motion.div 
            style={{ ...styles.frame, width: "25.8vw", height: "31.4vw", maxWidth: 284, maxHeight: 345 }}
            variants={imageVariants}
            initial="initial"
            animate={isAnimating ? "throwWest" : "initial"}
          >
            <img src="/Desk_Window_Img.png" alt="Cozy desk near window" style={styles.media} loading="lazy" />
          </motion.div>

          {/* Enhanced Video with subtle glow effect */}
          <motion.div
            ref={ref}
            style={{
              ...styles.frame,
              width: "45.5vw",
              height: "31.4vw",
              maxWidth: 500,
              maxHeight: 345,
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15), 0 0 0 2px rgba(255,255,255,0.1)",
              transformOrigin: "center center", // Ensure scaling from center
            }}
            variants={videoVariants}
            initial="initial"
            animate={isAnimating ? "expanding" : "initial"}
          >
            <motion.video
              layoutId="property-video"
              src="/Salasar_slideClip.mp4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "0.9vw",
              }}
              autoPlay
              muted
              loop
              playsInline
              onClick={onExpandVideo}
              aria-label="Cityscape video"
              whileHover={!isAnimating ? { scale: 1.02 } : {}}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div 
            style={{ ...styles.frame, width: "25.8vw", height: "31.4vw", maxWidth: 284, maxHeight: 345 }}
            variants={imageVariants}
            initial="initial"
            animate={isAnimating ? "throwEast" : "initial"}
          >
            <img src="/Balcony_Img.png" alt="Balcony seating area" style={styles.media} loading="lazy" />
          </motion.div>
        </div>

        {/* Row 3 - Hall (South West) + Bedroom (South East) */}
        <div style={styles.row}>
          <motion.div 
            style={{ ...styles.frame, width: "31vw", height: "30vw", maxWidth: 341, maxHeight: 330 }}
            variants={imageVariants}
            initial="initial"
            animate={isAnimating ? "throwSouthWest" : "initial"}
          >
            <img src="/Hall_Img.png" alt="Hall and living room" style={styles.media} loading="lazy" />
          </motion.div>

          <motion.div 
            style={{ ...styles.frame, width: "47.4vw", height: "29.9vw", maxWidth: 521, maxHeight: 329 }}
            variants={imageVariants}
            initial="initial"
            animate={isAnimating ? "throwSouthEast" : "initial"}
          >
            <img src="/Bedroom_Img.png" alt="Bedroom interior" style={styles.media} loading="lazy" />
          </motion.div>
        </div>
      </div>
    </div>
  )
})

SlideThree.displayName = 'SlideThree'

const styles = {
  wrap: {
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "1.1vw",
    display: "flex",
    flexDirection: "column",
    gap: "1.1vw",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "1.1vw",
    width: "100%",
  },
  frame: {
    borderRadius: "0.9vw",
    overflow: "hidden",
    background: "#f3f3f3",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    flexShrink: 0,
    minWidth: 0,
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}

export default SlideThree