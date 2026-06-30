import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ElevationProfile() {
  const containerRef = useRef(null);
  
  // We track scroll progress for the whole page to move the glowing dot
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress to avoid jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Path length for SVG line drawing animation
  const pathLength = 1000; // Arbitrary but large enough for percentage calculation

  return (
    <div 
      className="absolute top-0 bottom-0 left-6 md:left-16 lg:left-24 w-16 pointer-events-none z-0"
      ref={containerRef}
    >
      {/* Sticky container for the SVG so it stays visible while scrolling */}
      <div className="sticky top-0 h-screen w-full flex justify-center overflow-visible">
        
        {/* SVG Drawing the Elevation Profile */}
        <svg 
          viewBox="0 0 100 1000" 
          preserveAspectRatio="none" 
          className="absolute h-[150vh] w-full top-[-25vh] opacity-60"
        >
          <motion.path
            d="M50 0 C50 150, 80 200, 80 300 C80 400, 20 450, 20 550 C20 650, 90 700, 90 800 C90 900, 50 950, 50 1000"
            fill="none"
            stroke="var(--paper-line)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Active path following scroll */}
          <motion.path
            d="M50 0 C50 150, 80 200, 80 300 C80 400, 20 450, 20 550 C20 650, 90 700, 90 800 C90 900, 50 950, 50 1000"
            fill="none"
            stroke="var(--trail-ochre)"
            strokeWidth="3"
            pathLength={smoothProgress}
          />
        </svg>

        {/* Glowing Dot - Using Framer Motion to move it along the vertical axis */}
        {/* Computing X based on the same bezier curve manually is complex in pure CSS/React, 
            so we simplify by keeping the dot centered on the path or mapping to an approximate horizontal movement.
            For simplicity and elegance, the dot moves purely vertically and the line gently curves around it, 
            or we use an SVG filter on the line itself. 
            Actually, the best way to do a scroll-linked dot on an SVG path in Framer Motion is to use the pathLength 
            trimming on a secondary highlighted stroke. 
            So the highlighted stroke (above) IS the glowing dot trail. 
            Let's add a small glowing circle at the end of the trail by mapping scrollYProgress to Y, and creating a glow. */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-trail-ochre shadow-[0_0_15px_4px_rgba(201,162,39,0.6)]"
          style={{ 
            top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
            // Simple horizontal wiggle matching the path curve approximately
            x: useTransform(smoothProgress, 
                [0, 0.15, 0.3, 0.45, 0.55, 0.7, 0.8, 0.95, 1], 
                [0, 30, 30, -30, -30, 40, 40, 0, 0] // These match the C curve X coordinates roughly (50->80->20->90->50) relative to center 50
            ) 
          }}
        />
      </div>

      {/* Kilometre Milestones - Positioned absolutely along the entire page height */}
      <div className="absolute top-[10%] -left-8 font-mono text-xs text-espresso/60 tracking-widest uppercase whitespace-nowrap rotate-90 origin-left">
        KM 0 — ACCUEIL
      </div>
      <div className="absolute top-[30%] -left-8 font-mono text-xs text-espresso/60 tracking-widest uppercase whitespace-nowrap rotate-90 origin-left">
        KM 1.2 — LE CAFÉ
      </div>
      <div className="absolute top-[50%] -left-8 font-mono text-xs text-espresso/60 tracking-widest uppercase whitespace-nowrap rotate-90 origin-left">
        KM 2.4 — SERVICES VÉLO
      </div>
      <div className="absolute top-[75%] -left-8 font-mono text-xs text-espresso/60 tracking-widest uppercase whitespace-nowrap rotate-90 origin-left">
        KM 3.5 — AVIS
      </div>
      <div className="absolute top-[95%] -left-8 font-mono text-xs text-espresso/60 tracking-widest uppercase whitespace-nowrap rotate-90 origin-left">
        KM 4.8 — ARRIVÉE
      </div>
    </div>
  );
}
