"use client"
import { motion } from "framer-motion"

export default function SlideThree({ onExpandVideo, ref }) {
  return (
    <div
      className="w-full h-[1100px] bg-white flex items-center justify-center overflow-hidden relative"
      aria-label="Property interiors collage"
    >
      <div style={styles.wrap}>
        {/* Row 1 - Kitchen */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: "69.7vw", height: "29.9vw", maxWidth: 767, maxHeight: 329 }}>
            <img src="/Kitchen_Img.png" alt="Modern kitchen" style={styles.media} loading="lazy" />
          </div>
        </div>

        {/* Row 2 - Desk, Video, Balcony */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: "25.8vw", height: "31.4vw", maxWidth: 284, maxHeight: 345 }}>
            <img src="/Desk_Window_Img.png" alt="Cozy desk near window" style={styles.media} loading="lazy" />
          </div>

          {/* Enhanced Video with subtle glow effect */}
          <div
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
            }}
          >
            <motion.video
              layoutId="property-video"
              src="/Salasar_slideClip.mp4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              autoPlay
              muted
              loop
              playsInline
              onClick={onExpandVideo}
              aria-label="Cityscape video"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div style={{ ...styles.frame, width: "25.8vw", height: "31.4vw", maxWidth: 284, maxHeight: 345 }}>
            <img src="/Balcony_Img.png" alt="Balcony seating area" style={styles.media} loading="lazy" />
          </div>
        </div>

        {/* Row 3 - Hall + Bedroom */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: "31vw", height: "30vw", maxWidth: 341, maxHeight: 330 }}>
            <img src="/Hall_Img.png" alt="Hall and living room" style={styles.media} loading="lazy" />
          </div>

          <div style={{ ...styles.frame, width: "47.4vw", height: "29.9vw", maxWidth: 521, maxHeight: 329 }}>
            <img src="/Bedroom_Img.png" alt="Bedroom interior" style={styles.media} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

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
