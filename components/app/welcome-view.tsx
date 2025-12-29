'use client';

import { useEffect, useState } from 'react';

// Modern AI Assistant Icon
function AIAssistantIcon() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Outer glow ring */}
      <circle cx="60" cy="60" r="55" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="55;58;55" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Main circle */}
      <circle cx="60" cy="60" r="48" fill="url(#gradient2)" />
      
      {/* Inner circle */}
      <circle cx="60" cy="60" r="40" fill="url(#gradient3)" opacity="0.9"/>
      
      {/* AI Brain Pattern */}
      <g opacity="0.9">
        {/* Center node */}
        <circle cx="60" cy="60" r="8" fill="white"/>
        
        {/* Connection lines */}
        <line x1="60" y1="52" x2="60" y2="35" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="60" y1="68" x2="60" y2="85" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.3s"/>
        </line>
        <line x1="52" y1="60" x2="35" y2="60" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.6s"/>
        </line>
        <line x1="68" y1="60" x2="85" y2="60" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.9s"/>
        </line>
        
        {/* Diagonal lines */}
        <line x1="54" y1="54" x2="42" y2="42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="66" y1="54" x2="78" y2="42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="54" y1="66" x2="42" y2="78" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="66" y1="66" x2="78" y2="78" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        
        {/* Outer nodes */}
        <circle cx="60" cy="32" r="4" fill="white">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="88" r="4" fill="white">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="32" cy="60" r="4" fill="white">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="88" cy="60" r="4" fill="white">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        
        {/* Corner nodes */}
        <circle cx="40" cy="40" r="3" fill="white" opacity="0.8"/>
        <circle cx="80" cy="40" r="3" fill="white" opacity="0.8"/>
        <circle cx="40" cy="80" r="3" fill="white" opacity="0.8"/>
        <circle cx="80" cy="80" r="3" fill="white" opacity="0.8"/>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#0EA5E9"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Floating geometric shapes
function FloatingShape({ className, delay = '0s', type = 'circle' }: { className?: string; delay?: string; type?: 'circle' | 'square' | 'triangle' | 'hexagon' }) {
  const shapes = {
    circle: <circle cx="20" cy="20" r="18" fill="url(#shapeGrad)" opacity="0.15"/>,
    square: <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#shapeGrad)" opacity="0.12" transform="rotate(15 20 20)"/>,
    triangle: <polygon points="20,4 36,36 4,36" fill="url(#shapeGrad)" opacity="0.12"/>,
    hexagon: <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="url(#shapeGrad)" opacity="0.12"/>,
  };

  return (
    <svg
      className={`absolute animate-float-gentle ${className}`}
      style={{ animationDelay: delay }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <defs>
        <linearGradient id="shapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
      {shapes[type]}
    </svg>
  );
}

// Floating code brackets
function FloatingCode({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-gentle ${className}`}
      style={{ animationDelay: delay }}
      width="50"
      height="40"
      viewBox="0 0 50 40"
      fill="none"
    >
      <text x="5" y="28" fontSize="24" fontFamily="monospace" fill="url(#codeGrad)" opacity="0.2">&lt;/&gt;</text>
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Particle dots
function ParticleDot({ className, delay = '0s', size = 4 }: { className?: string; delay?: string; size?: number }) {
  return (
    <div 
      className={`absolute rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-20 animate-pulse-slow ${className}`}
      style={{ 
        animationDelay: delay,
        width: size,
        height: size,
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
      {/* Animated Gradient Background - Dark theme with purple/cyan accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradient-shift bg-[linear-gradient(-45deg,rgba(139,92,246,0.15),rgba(6,182,212,0.1),rgba(139,92,246,0.15),rgba(14,165,233,0.1))] bg-[length:400%_400%]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating decorative elements */}
      {mounted && (
        <>
          {/* Geometric shapes */}
          <FloatingShape className="top-[10%] left-[5%]" delay="0s" type="circle" />
          <FloatingShape className="top-[20%] right-[10%]" delay="1s" type="hexagon" />
          <FloatingShape className="bottom-[25%] left-[8%]" delay="2s" type="square" />
          <FloatingShape className="top-[45%] right-[5%]" delay="0.5s" type="triangle" />
          <FloatingShape className="bottom-[15%] right-[15%]" delay="1.5s" type="circle" />
          <FloatingShape className="top-[60%] left-[3%]" delay="2.5s" type="hexagon" />
          <FloatingShape className="bottom-[40%] right-[8%]" delay="0.8s" type="square" />
          
          {/* Code brackets */}
          <FloatingCode className="top-[15%] left-[20%]" delay="1.2s" />
          <FloatingCode className="bottom-[20%] right-[25%]" delay="0.3s" />
          <FloatingCode className="top-[70%] left-[15%]" delay="2.1s" />
          
          {/* Particle dots */}
          <ParticleDot className="top-[12%] left-[40%]" delay="0s" size={6} />
          <ParticleDot className="top-[25%] right-[30%]" delay="0.5s" size={4} />
          <ParticleDot className="bottom-[30%] left-[35%]" delay="1s" size={5} />
          <ParticleDot className="top-[55%] right-[40%]" delay="1.5s" size={4} />
          <ParticleDot className="bottom-[45%] left-[45%]" delay="2s" size={6} />
          <ParticleDot className="top-[35%] left-[60%]" delay="0.8s" size={3} />
          <ParticleDot className="bottom-[60%] right-[55%]" delay="1.3s" size={5} />
        </>
      )}

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* AI Icon with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-violet-600/30 to-cyan-600/30 rounded-full scale-150" />
          <AIAssistantIcon />
        </div>

        {/* Title */}
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Study Buddy
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mb-8 text-lg text-slate-400 md:text-xl">
          Your intelligent learning companion
        </p>

        {/* Welcome Card - Glassmorphism */}
        <div className="mb-10 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
          <p className="text-base text-slate-300 leading-relaxed md:text-lg">
            {welcomeNote}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              <span>Instant Help</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span>Smart AI</span>
            </div>
          </div>
        </div>

        {/* CTA Button - Modern gradient with hover effects */}
        <button
          onClick={onStartCall}
          className="group relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] md:text-lg"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {startButtonText}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </button>

        {/* Bottom tagline */}
        <p className="mt-8 text-sm text-slate-500">
          Powered by Diya Interactive • Built for students like you
        </p>
      </section>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};
