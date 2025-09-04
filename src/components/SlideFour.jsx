"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SlideFour({ onClose }) {
  useEffect(() => {
    // Prevent body scroll when overlay is active
    document.body.style.overflow = 'hidden';
    
    // Add click/touch to close functionality
    const handleClickOutside = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    // Add escape key listener
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black cursor-pointer"
      aria-modal="true"
      role="dialog"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Shared video with same layoutId for smooth transition */}
      <motion.video
        layoutId="property-video"
        src="/Salasar_slideClip.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      
    </motion.div>
  );
}