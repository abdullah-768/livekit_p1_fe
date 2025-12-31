'use client';

import { useEffect, useState } from 'react';

// Cute friendly robot mascot for kids
function FriendlyRobot() {
  return (
    <svg
      width="200"
      height="220"
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl"
    >
      {/* Shadow under robot */}
      <ellipse cx="100" cy="210" rx="60" ry="10" fill="#E0E7FF" opacity="0.6">
        <animate attributeName="rx" values="60;65;60" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Antenna */}
      <g>
        <line x1="100" y1="40" x2="100" y2="20" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round">
          <animate attributeName="y2" values="20;15;20" dur="2s" repeatCount="indefinite"/>
        </line>
        <circle cx="100" cy="15" r="8" fill="#FBBF24">
          <animate attributeName="r" values="8;10;8" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="15;10;15" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Antenna sparkle */}
        <circle cx="100" cy="15" r="14" fill="#FEF3C7" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="r" values="14;18;14" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Robot Head - Friendly rounded shape */}
      <rect x="45" y="40" width="110" height="85" rx="30" fill="url(#headGradKids)" stroke="#60A5FA" strokeWidth="3"/>
      
      {/* Head highlight */}
      <rect x="52" y="48" width="50" height="12" rx="6" fill="white" opacity="0.4"/>
      
      {/* Face background - happy screen */}
      <rect x="55" y="55" width="90" height="55" rx="18" fill="#DBEAFE" opacity="0.9"/>
      
      {/* Happy Eyes */}
      <g>
        {/* Left eye */}
        <circle cx="78" cy="78" r="14" fill="white">
          <animate attributeName="ry" values="14;2;14" dur="4s" repeatCount="indefinite" begin="2s"/>
        </circle>
        <circle cx="80" cy="76" r="8" fill="#1D4ED8">
          <animate attributeName="cx" values="80;76;80;84;80" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="83" cy="73" r="3" fill="white" opacity="0.9"/>
        
        {/* Right eye */}
        <circle cx="122" cy="78" r="14" fill="white">
          <animate attributeName="ry" values="14;2;14" dur="4s" repeatCount="indefinite" begin="2s"/>
        </circle>
        <circle cx="124" cy="76" r="8" fill="#1D4ED8">
          <animate attributeName="cx" values="124;120;124;128;124" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="127" cy="73" r="3" fill="white" opacity="0.9"/>
      </g>
      
      {/* Big happy smile */}
      <path d="M78 95 Q100 115 122 95" stroke="#F472B6" strokeWidth="5" strokeLinecap="round" fill="none">
        <animate attributeName="d" values="M78 95 Q100 115 122 95;M78 97 Q100 110 122 97;M78 95 Q100 115 122 95" dur="3s" repeatCount="indefinite"/>
      </path>
      
      {/* Rosy cheeks */}
      <circle cx="60" cy="90" r="8" fill="#FBCFE8" opacity="0.7"/>
      <circle cx="140" cy="90" r="8" fill="#FBCFE8" opacity="0.7"/>

      {/* Ear decorations */}
      <circle cx="40" cy="80" r="10" fill="#FBBF24">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="80" r="10" fill="#FBBF24">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Neck */}
      <rect x="85" y="125" width="30" height="18" rx="6" fill="#93C5FD"/>
      <rect x="90" y="128" width="20" height="4" rx="2" fill="white" opacity="0.4"/>

      {/* Body - Rounded and friendly */}
      <rect x="50" y="143" width="100" height="60" rx="22" fill="url(#bodyGradKids)" stroke="#60A5FA" strokeWidth="3"/>
      
      {/* Body panel - cute design */}
      <rect x="65" y="153" width="70" height="40" rx="12" fill="#DBEAFE" opacity="0.8"/>
      
      {/* Heart in chest */}
      <g transform="translate(85, 163)">
        <path d="M15 5 C15 -2, 5 -2, 5 5 C5 12, 15 20, 15 20 C15 20, 25 12, 25 5 C25 -2, 15 -2, 15 5" fill="#F472B6">
          <animate attributeName="transform" type="scale" values="1;1.1;1" dur="1s" repeatCount="indefinite" additive="sum"/>
        </path>
      </g>
      
      {/* Status lights */}
      <circle cx="73" cy="185" r="4" fill="#34D399">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="188" r="4" fill="#FBBF24">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="127" cy="185" r="4" fill="#60A5FA">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Left arm - waving hello */}
      <g>
        <rect x="22" y="148" width="28" height="45" rx="12" fill="#93C5FD">
          <animateTransform attributeName="transform" type="rotate" values="-5 36 148;15 36 148;-5 36 148" dur="1.5s" repeatCount="indefinite"/>
        </rect>
        {/* Left hand */}
        <circle cx="36" cy="198" r="12" fill="#FCD34D">
          <animateTransform attributeName="transform" type="rotate" values="-5 36 148;15 36 148;-5 36 148" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Right arm */}
      <g>
        <rect x="150" y="148" width="28" height="45" rx="12" fill="#93C5FD">
          <animateTransform attributeName="transform" type="rotate" values="5 164 148;-5 164 148;5 164 148" dur="3s" repeatCount="indefinite"/>
        </rect>
        {/* Right hand */}
        <circle cx="164" cy="198" r="12" fill="#FCD34D">
          <animateTransform attributeName="transform" type="rotate" values="5 164 148;-5 164 148;5 164 148" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="headGradKids" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD"/>
          <stop offset="50%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
        <linearGradient id="bodyGradKids" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD"/>
          <stop offset="50%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Floating star decoration
function FloatingStar({ className, delay = '0s', color = '#FBBF24' }: { className?: string; delay?: string; color?: string }) {
  return (
    <svg
      className={`absolute animate-float-bounce ${className}`}
      style={{ animationDelay: delay }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <polygon 
        points="20,2 24,15 38,15 27,23 31,38 20,29 9,38 13,23 2,15 16,15" 
        fill={color}
        opacity="0.8"
      >
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </polygon>
    </svg>
  );
}

// Floating cloud decoration
function FloatingCloud({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-gentle ${className}`}
      style={{ animationDelay: delay }}
      width="80"
      height="45"
      viewBox="0 0 80 45"
      fill="none"
    >
      <g opacity="0.6">
        <ellipse cx="25" cy="30" rx="20" ry="12" fill="white"/>
        <ellipse cx="45" cy="25" rx="18" ry="15" fill="white"/>
        <ellipse cx="60" cy="30" rx="15" ry="10" fill="white"/>
        <ellipse cx="35" cy="20" rx="14" ry="12" fill="white"/>
      </g>
    </svg>
  );
}

// Floating book icon
function FloatingBook({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-bounce ${className}`}
      style={{ animationDelay: delay }}
      width="45"
      height="40"
      viewBox="0 0 45 40"
      fill="none"
    >
      <rect x="5" y="5" width="35" height="30" rx="3" fill="#34D399" opacity="0.8"/>
      <rect x="8" y="8" width="29" height="24" rx="2" fill="#A7F3D0"/>
      <line x1="22" y1="8" x2="22" y2="32" stroke="#34D399" strokeWidth="2"/>
      <line x1="12" y1="14" x2="19" y2="14" stroke="#34D399" strokeWidth="1.5"/>
      <line x1="12" y1="19" x2="19" y2="19" stroke="#34D399" strokeWidth="1.5"/>
      <line x1="25" y1="14" x2="32" y2="14" stroke="#34D399" strokeWidth="1.5"/>
      <line x1="25" y1="19" x2="32" y2="19" stroke="#34D399" strokeWidth="1.5"/>
    </svg>
  );
}

// Floating pencil icon
function FloatingPencil({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-bounce ${className}`}
      style={{ animationDelay: delay }}
      width="35"
      height="45"
      viewBox="0 0 35 45"
      fill="none"
    >
      <rect x="12" y="5" width="11" height="30" rx="2" fill="#F472B6" opacity="0.9"/>
      <rect x="12" y="5" width="11" height="8" rx="2" fill="#FBCFE8"/>
      <polygon points="12,35 17.5,45 23,35" fill="#FCD34D"/>
      <rect x="15" y="10" width="5" height="3" rx="1" fill="#EC4899"/>
    </svg>
  );
}

// Floating rainbow decoration
function FloatingRainbow({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-gentle ${className}`}
      style={{ animationDelay: delay }}
      width="60"
      height="35"
      viewBox="0 0 60 35"
      fill="none"
    >
      <path d="M5 35 Q5 5, 30 5 Q55 5, 55 35" stroke="#EF4444" strokeWidth="4" fill="none" opacity="0.7"/>
      <path d="M10 35 Q10 12, 30 12 Q50 12, 50 35" stroke="#FBBF24" strokeWidth="4" fill="none" opacity="0.7"/>
      <path d="M15 35 Q15 19, 30 19 Q45 19, 45 35" stroke="#34D399" strokeWidth="4" fill="none" opacity="0.7"/>
      <path d="M20 35 Q20 26, 30 26 Q40 26, 40 35" stroke="#60A5FA" strokeWidth="4" fill="none" opacity="0.7"/>
    </svg>
  );
}

// Sparkle burst
function Sparkle({ className, delay = '0s', size = 20, color = '#FBBF24' }: { className?: string; delay?: string; size?: number; color?: string }) {
  return (
    <div 
      className={`absolute animate-sparkle ${className}`}
      style={{ 
        animationDelay: delay,
        width: size,
        height: size,
      }}
    >
      <svg viewBox="0 0 24 24" fill={color}>
        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  );
}

// Floating bubble
function FloatingBubble({ className, delay = '0s', size = 30, color = '#93C5FD' }: { className?: string; delay?: string; size?: number; color?: string }) {
  return (
    <div 
      className={`absolute rounded-full animate-float-bubble ${className}`}
      style={{ 
        animationDelay: delay,
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, white, ${color})`,
        opacity: 0.6,
      }}
    />
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  welcomeNote: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  welcomeNote,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Light Cheerful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100" />
      
      {/* Animated gradient overlay - subtle rainbow effect */}
      <div className="absolute inset-0 animate-gradient-shift bg-[linear-gradient(-45deg,rgba(251,191,36,0.1),rgba(52,211,153,0.1),rgba(96,165,250,0.1),rgba(244,114,182,0.1))] bg-[length:400%_400%]" />
      
      {/* Playful dot pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating decorative elements */}
      {mounted && (
        <>
          {/* Stars */}
          <FloatingStar className="top-[8%] left-[8%]" delay="0s" color="#FBBF24" />
          <FloatingStar className="top-[15%] right-[12%]" delay="0.5s" color="#F472B6" />
          <FloatingStar className="bottom-[25%] left-[5%]" delay="1s" color="#34D399" />
          <FloatingStar className="top-[50%] right-[8%]" delay="1.5s" color="#60A5FA" />
          <FloatingStar className="bottom-[15%] right-[20%]" delay="2s" color="#FBBF24" />
          
          {/* Clouds */}
          <FloatingCloud className="top-[5%] left-[15%]" delay="0s" />
          <FloatingCloud className="top-[12%] right-[5%]" delay="1.5s" />
          <FloatingCloud className="bottom-[30%] left-[2%]" delay="3s" />
          
          {/* Learning icons */}
          <FloatingBook className="top-[22%] left-[3%]" delay="0.8s" />
          <FloatingBook className="bottom-[35%] right-[6%]" delay="2.5s" />
          <FloatingPencil className="top-[35%] right-[4%]" delay="1.2s" />
          <FloatingPencil className="bottom-[20%] left-[10%]" delay="0.3s" />
          
          {/* Rainbow */}
          <FloatingRainbow className="top-[6%] right-[25%]" delay="0s" />
          <FloatingRainbow className="bottom-[40%] left-[20%]" delay="2s" />
          
          {/* Sparkles */}
          <Sparkle className="top-[18%] left-[35%]" delay="0s" size={16} color="#FBBF24" />
          <Sparkle className="top-[30%] right-[25%]" delay="0.8s" size={20} color="#F472B6" />
          <Sparkle className="bottom-[45%] left-[40%]" delay="1.5s" size={14} color="#34D399" />
          <Sparkle className="top-[55%] right-[35%]" delay="2.2s" size={18} color="#60A5FA" />
          
          {/* Bubbles */}
          <FloatingBubble className="top-[25%] left-[50%]" delay="0s" size={25} color="#93C5FD" />
          <FloatingBubble className="top-[45%] left-[25%]" delay="1s" size={35} color="#A7F3D0" />
          <FloatingBubble className="bottom-[35%] right-[30%]" delay="2s" size={28} color="#FBCFE8" />
          <FloatingBubble className="top-[60%] right-[45%]" delay="1.5s" size={20} color="#FDE68A" />
        </>
      )}

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Robot Buddy with glow effect */}
        <div className="relative mb-4 animate-float-gentle">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-300/40 to-pink-300/40 rounded-full scale-125" />
          <FriendlyRobot />
        </div>

        {/* Speech bubble above title */}
        <div className="relative mb-4 animate-bounce-soft">
          <div className="bg-white rounded-3xl px-6 py-3 shadow-lg border-2 border-blue-200">
            <p className="text-lg font-bold text-blue-600">👋 Hi there, friend!</p>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-blue-200 rotate-45" />
        </div>

        {/* Title */}
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            VLC Study Buddy
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mb-6 text-xl font-semibold text-blue-600 md:text-2xl">
          🎓 Your fun learning helper! 🌟
        </p>

        {/* Welcome Card - Playful design */}
        <div className="mb-8 max-w-lg rounded-3xl bg-white/90 p-6 shadow-xl border-4 border-blue-200 backdrop-blur-sm">
          <p className="text-base text-gray-700 leading-relaxed md:text-lg font-medium">
            {welcomeNote}
          </p>
          <div className="mt-5 flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-100 px-3 py-2 rounded-full">
              <span className="text-lg">📚</span>
              <span>Learn Stuff</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-2 rounded-full">
              <span className="text-lg">🎮</span>
              <span>Have Fun</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-2 rounded-full">
              <span className="text-lg">🚀</span>
              <span>Be Awesome</span>
            </div>
          </div>
        </div>

        {/* CTA Button - Big and bouncy for kids */}
        <button
          onClick={onStartCall}
          className="group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 px-12 py-5 text-xl font-extrabold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 active:scale-95 animate-glow-pulse md:text-2xl border-4 border-white/50"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-2xl animate-bounce-soft">🎤</span>
            {startButtonText}
            <span className="text-2xl animate-bounce-soft" style={{ animationDelay: '0.2s' }}>✨</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </button>

        {/* Fun tagline */}
        <p className="mt-8 text-base font-semibold text-blue-500 flex items-center gap-2">
          <span>🌈</span>
          Made with love by Diya Interactive
          <span>💖</span>
        </p>
      </section>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,60 C300,100 400,20 600,60 C800,100 900,20 1200,60 L1200,120 L0,120 Z" fill="rgba(147, 197, 253, 0.3)"/>
          <path d="M0,80 C200,110 400,50 600,80 C800,110 1000,50 1200,80 L1200,120 L0,120 Z" fill="rgba(167, 243, 208, 0.3)"/>
        </svg>
      </div>
    </div>
  );
};
