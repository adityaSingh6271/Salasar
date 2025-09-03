"use client";

export default function SlideThree() {
  return (
    <div
      className="w-full h-[800px] bg-white flex items-center justify-center overflow-hidden mt-16"
      aria-label="Property interiors collage"
    >
      <div style={styles.wrap}>
        {/* Row 1 - Kitchen */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: 767, height: 329 }}>
            <img
              src="/Kitchen_Img.png"
              alt="Modern kitchen"
              style={styles.media}
              loading="lazy"                      
            />
          </div>
        </div>

        {/* Row 2 - Desk, Video, Balcony */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: 284, height: 345 }}>
            <img
              src="/Desk_Window_Img.png"
              alt="Cozy desk near window"
              style={styles.media}
              loading="lazy"
            />
          </div>

          <div style={{ ...styles.frame, width: 500, height: 345 }}>
            <video
              src="/Salasar_slideClip.mp4"
              style={styles.media}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Cityscape video"
            />
          </div>

          <div style={{ ...styles.frame, width: 284, height: 345 }}>
            <img
              src="/Balcony_Img.png"
              alt="Balcony seating area"
              style={styles.media}
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 3 - Hall + Bedroom */}
        <div style={styles.row}>
          <div style={{ ...styles.frame, width: 341, height: 330 }}>
            <img
              src="/Hall_Img.png"
              alt="Hall and living room"
              style={styles.media}
              loading="lazy"
            />
          </div>

          <div style={{ ...styles.frame, width: 521, height: 329 }}>
            <img
              src="/Bedroom_Img.png"
              alt="Bedroom interior"
              style={styles.media}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0.9)", // shrink to fit into 900px
    transformOrigin: "top center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
  },
  frame: {
    borderRadius: 10,
    overflow: "hidden",
    background: "#f3f3f3",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
  },
  media: {                                          
    width: "100%",
    height: "100%",
    objectFit: "cover", // keep full visual look
    display: "block",
  },
};
