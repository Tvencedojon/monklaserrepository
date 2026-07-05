import { useState } from "react";
import { motion } from "motion/react";

interface MonkeyMascotProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function MonkeyMascot({ className = "", size = 200, interactive = true }: MonkeyMascotProps) {
  const [isWinking, setIsWinking] = useState(false);
  const [laserActive, setLaserActive] = useState(false);

  const toggleWink = () => {
    if (!interactive) return;
    setIsWinking(prev => !prev);
    // Trigger temporary laser active glow from goggles
    setLaserActive(true);
    setTimeout(() => setLaserActive(false), 800);
  };

  return (
    <div 
      className={`relative select-none flex flex-col items-center justify-center cursor-pointer ${className}`} 
      onClick={toggleWink}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        whileHover={interactive ? { scale: 1.05, rotate: [0, -3, 3, 0] } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Soft Ambient Glow under the head */}
        <circle cx="100" cy="110" r="70" fill="rgba(241, 70, 28, 0.16)" filter="blur(15px)" />
        
        {/* Ears */}
        {/* Left Ear */}
        <ellipse cx="40" cy="110" rx="20" ry="24" fill="#4B3192" stroke="#130A2D" strokeWidth="4" />
        <ellipse cx="42" cy="110" rx="12" ry="16" fill="#F7F3EE" />
        
        {/* Right Ear */}
        <ellipse cx="160" cy="110" rx="20" ry="24" fill="#4B3192" stroke="#130A2D" strokeWidth="4" />
        <ellipse cx="158" cy="110" rx="12" ry="16" fill="#F7F3EE" />

        {/* Head Base */}
        <rect x="45" y="55" width="110" height="100" rx="50" fill="#4B3192" stroke="#130A2D" strokeWidth="4" />
        
        {/* Monkey Face Mask (Light purple-ish cheek patches) */}
        <path 
          d="M 55,105 
             C 55,75  80,75  100,90 
             C 120,75 145,75 145,105 
             C 145,135 125,145 100,145 
             C 75,145  55,135  55,105 Z" 
          fill="#F7F3EE" 
          stroke="#130A2D" 
          strokeWidth="3" 
        />

        {/* Hair Tuft */}
        <path 
          d="M 85,58 C 85,38 100,28 100,28 C 100,28 115,38 115,58 Z" 
          fill="#4B3192" 
          stroke="#130A2D" 
          strokeWidth="3" 
        />
        <path 
          d="M 92,58 C 92,44 100,38 100,38 C 100,38 108,44 108,58 Z" 
          fill="#3F2B86" 
        />

        {/* Cute Nose */}
        <path 
          d="M 92,118 C 92,114 108,114 108,118 C 108,122 92,122 92,118 Z" 
          fill="#1C103F" 
        />

        {/* Mouth/Smile */}
        <motion.path 
          d={isWinking ? "M 85,128 Q 100,142 115,128" : "M 88,128 Q 100,136 112,128"} 
          stroke="#1C103F" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none"
          animate={{ d: isWinking ? "M 80,126 Q 100,145 120,126" : "M 88,128 Q 100,136 112,128" }}
        />

        {/* Eyes & Goggles */}
        {/* Left Goggle Gland (Cyber goggle frame) */}
        <rect 
          x="48" 
          y="80" 
          width="48" 
          height="32" 
          rx="10" 
          fill="#FF6A00" 
          stroke="#130A2D" 
          strokeWidth="4" 
          className="transition-all duration-300"
          style={{ filter: laserActive ? "drop-shadow(0 0 12px #FF6A00)" : "none" }}
        />
        
        {/* Right Goggle Gland */}
        <rect 
          x="104" 
          y="80" 
          width="48" 
          height="32" 
          rx="10" 
          fill="#FF6A00" 
          stroke="#130A2D" 
          strokeWidth="4"
          className="transition-all duration-300"
          style={{ filter: laserActive ? "drop-shadow(0 0 12px #FF6A00)" : "none" }}
        />

        {/* Goggles Bridge */}
        <rect x="96" y="90" width="8" height="8" fill="#FF6A00" stroke="#130A2D" strokeWidth="3" />

        {/* Goggles Glass / Lens - Left */}
        <rect x="54" y="85" width="36" height="22" rx="6" fill="#130A2D" />
        
        {/* Goggles Glass / Lens - Right */}
        <rect x="110" y="85" width="36" height="22" rx="6" fill="#130A2D" />

        {/* Left Pupil / Eye State */}
        {isWinking ? (
          // Winking left eye (curved line)
          <path d="M 62,96 Q 72,104 82,96" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
        ) : (
          // Open left eye with tiny sparkle
          <>
            <circle cx="72" cy="96" r="6" fill="#FF6A00" />
            <circle cx="74" cy="94" r="2" fill="#FFFFFF" />
          </>
        )}

        {/* Right Pupil (Always open, cool focus target look) */}
        <circle cx="128" cy="96" r="6" fill="#FF6A00" />
        <circle cx="130" cy="94" r="2" fill="#FFFFFF" />
        {/* Laser target crosshair lines on right eye for extra tech vibe! */}
        <line x1="128" y1="87" x2="128" y2="105" stroke="#FF6A00" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="119" y1="96" x2="137" y2="96" stroke="#FF6A00" strokeWidth="1" strokeDasharray="2,2" />

        {/* Laser Glow Overlays */}
        {laserActive && (
          <>
            {/* Cool interactive beam shooting out */}
            <circle cx="128" cy="96" r="10" fill="#FF5F56" opacity="0.6" className="animate-ping" />
            <line x1="128" y1="96" x2="170" y2="150" stroke="#FF6A00" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
          </>
        )}
      </motion.svg>

      {/* Interactive label */}
      {interactive && (
        <span className="mt-2 rounded-full border border-white/14 bg-white/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]">
          {isWinking ? "Laser Pronto" : "Clique para Calibrar"}
        </span>
      )}
    </div>
  );
}
