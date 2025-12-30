'use client';

import { useEffect, useState } from 'react';

// Mini Robot Icon for background decoration
function MiniRobot({ className, delay = '0s', variant = 1 }: { className?: string; delay?: string; variant?: 1 | 2 | 3 }) {
  const robots = {
    1: ( // Cute round robot
      <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="50" height="50" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="28" r="18" fill="url(#miniRobotGrad1)" opacity="0.15"/>
        <circle cx="18" cy="26" r="4" fill="url(#miniRobotGrad1)" opacity="0.2"/>
        <circle cx="32" cy="26" r="4" fill="url(#miniRobotGrad1)" opacity="0.2"/>
        <rect x="20" y="8" width="10" height="8" rx="2" fill="url(#miniRobotGrad1)" opacity="0.12"/>
        <line x1="25" y1="8" x2="25" y2="4" stroke="url(#miniRobotGrad1)" strokeWidth="2" opacity="0.15"/>
        <circle cx="25" cy="3" r="2" fill="url(#miniRobotGrad1)" opacity="0.2"/>
        <path d="M18 34 Q25 38 32 34" stroke="url(#miniRobotGrad1)" strokeWidth="2" fill="none" opacity="0.15"/>
        <defs>
          <linearGradient id="miniRobotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6"/>
            <stop offset="100%" stopColor="#06B6D4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    2: ( // Square robot with antenna
      <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="45" height="55" viewBox="0 0 45 55" fill="none">
        <rect x="8" y="18" width="29" height="30" rx="6" fill="url(#miniRobotGrad2)" opacity="0.12"/>
        <rect x="14" y="25" width="6" height="6" rx="2" fill="url(#miniRobotGrad2)" opacity="0.18"/>
        <rect x="25" y="25" width="6" height="6" rx="2" fill="url(#miniRobotGrad2)" opacity="0.18"/>
        <rect x="18" y="36" width="9" height="4" rx="1" fill="url(#miniRobotGrad2)" opacity="0.15"/>
        <line x1="22" y1="18" x2="22" y2="8" stroke="url(#miniRobotGrad2)" strokeWidth="2" opacity="0.12"/>
        <circle cx="22" cy="6" r="4" fill="url(#miniRobotGrad2)" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite"/>
        </circle>
        <defs>
          <linearGradient id="miniRobotGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7"/>
            <stop offset="100%" stopColor="#22D3EE"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    3: ( // Friendly bot face
      <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="8" fill="url(#miniRobotGrad3)" opacity="0.12"/>
        <circle cx="16" cy="22" r="5" fill="url(#miniRobotGrad3)" opacity="0.18"/>
        <circle cx="32" cy="22" r="5" fill="url(#miniRobotGrad3)" opacity="0.18"/>
        <circle cx="16" cy="22" r="2" fill="url(#miniRobotGrad3)" opacity="0.25">
          <animate attributeName="cx" values="16;15;17;16" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="32" cy="22" r="2" fill="url(#miniRobotGrad3)" opacity="0.25">
          <animate attributeName="cx" values="32;31;33;32" dur="3s" repeatCount="indefinite"/>
        </circle>
        <path d="M16 30 Q24 36 32 30" stroke="url(#miniRobotGrad3)" strokeWidth="2" fill="none" opacity="0.15"/>
        <rect x="4" y="20" width="4" height="8" rx="2" fill="url(#miniRobotGrad3)" opacity="0.1"/>
        <rect x="40" y="20" width="4" height="8" rx="2" fill="url(#miniRobotGrad3)" opacity="0.1"/>
        <defs>
          <linearGradient id="miniRobotGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  return robots[variant];
}

// AI Brain icon for tech theme
function AIBrain({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="55" height="55" viewBox="0 0 55 55" fill="none">
      <ellipse cx="27" cy="28" rx="18" ry="16" fill="url(#brainGrad)" opacity="0.1"/>
      <path d="M20 20 Q15 25 18 32 Q14 28 16 22 Q18 16 24 18" stroke="url(#brainGrad)" strokeWidth="1.5" fill="none" opacity="0.12"/>
      <path d="M35 20 Q40 25 37 32 Q41 28 39 22 Q37 16 31 18" stroke="url(#brainGrad)" strokeWidth="1.5" fill="none" opacity="0.12"/>
      <path d="M22 28 Q27 24 32 28" stroke="url(#brainGrad)" strokeWidth="1.5" fill="none" opacity="0.1"/>
      <circle cx="20" cy="25" r="2" fill="url(#brainGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="25" r="2" fill="url(#brainGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="27" cy="32" r="2" fill="url(#brainGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <defs>
        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Chat bubble for AI conversation theme
function ChatBubble({ className, delay = '0s', side = 'left' }: { className?: string; delay?: string; side?: 'left' | 'right' }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="50" height="40" viewBox="0 0 50 40" fill="none">
      <path 
        d={side === 'left' 
          ? "M8 8 H42 Q46 8 46 12 V28 Q46 32 42 32 H16 L8 38 V32 H8 Q4 32 4 28 V12 Q4 8 8 8Z"
          : "M8 8 H42 Q46 8 46 12 V28 Q46 32 42 32 V38 L34 32 H8 Q4 32 4 28 V12 Q4 8 8 8Z"
        } 
        fill="url(#chatGrad)" 
        opacity="0.1"
      />
      <circle cx="16" cy="20" r="2.5" fill="url(#chatGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="25" cy="20" r="2.5" fill="url(#chatGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
      </circle>
      <circle cx="34" cy="20" r="2.5" fill="url(#chatGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
      </circle>
      <defs>
        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Lightbulb for ideas/learning theme
function Lightbulb({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="40" height="50" viewBox="0 0 40 50" fill="none">
      <ellipse cx="20" cy="18" rx="12" ry="14" fill="url(#bulbGrad)" opacity="0.12"/>
      <path d="M14 28 Q14 34 16 36 H24 Q26 34 26 28" stroke="url(#bulbGrad)" strokeWidth="2" fill="none" opacity="0.1"/>
      <line x1="15" y1="38" x2="25" y2="38" stroke="url(#bulbGrad)" strokeWidth="2" opacity="0.12"/>
      <line x1="16" y1="41" x2="24" y2="41" stroke="url(#bulbGrad)" strokeWidth="2" opacity="0.1"/>
      <line x1="17" y1="44" x2="23" y2="44" stroke="url(#bulbGrad)" strokeWidth="2" opacity="0.08"/>
      {/* Glow rays */}
      <line x1="20" y1="2" x2="20" y2="6" stroke="url(#bulbGrad)" strokeWidth="1.5" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="8" y1="8" x2="11" y2="11" stroke="url(#bulbGrad)" strokeWidth="1.5" opacity="0.12"/>
      <line x1="32" y1="8" x2="29" y2="11" stroke="url(#bulbGrad)" strokeWidth="1.5" opacity="0.12"/>
      <line x1="4" y1="18" x2="8" y2="18" stroke="url(#bulbGrad)" strokeWidth="1.5" opacity="0.12"/>
      <line x1="32" y1="18" x2="36" y2="18" stroke="url(#bulbGrad)" strokeWidth="1.5" opacity="0.12"/>
      <defs>
        <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Sparkle star for fun decoration
function SparkleStars({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="35" height="35" viewBox="0 0 35 35" fill="none">
      <path d="M17 2 L19 13 L30 15 L19 17 L17 28 L15 17 L4 15 L15 13 Z" fill="url(#starGrad)" opacity="0.12">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite"/>
      </path>
      <circle cx="8" cy="8" r="1.5" fill="url(#starGrad)" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="28" cy="28" r="1" fill="url(#starGrad)" opacity="0.12"/>
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24"/>
          <stop offset="50%" stopColor="#A855F7"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Book icon for study theme
function BookIcon({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="45" height="40" viewBox="0 0 45 40" fill="none">
      <path d="M6 8 Q22 4 22 4 V32 Q22 32 6 36 Z" fill="url(#bookGrad)" opacity="0.1"/>
      <path d="M39 8 Q23 4 23 4 V32 Q23 32 39 36 Z" fill="url(#bookGrad)" opacity="0.12"/>
      <line x1="10" y1="14" x2="18" y2="12" stroke="url(#bookGrad)" strokeWidth="1" opacity="0.15"/>
      <line x1="10" y1="18" x2="18" y2="16" stroke="url(#bookGrad)" strokeWidth="1" opacity="0.12"/>
      <line x1="10" y1="22" x2="18" y2="20" stroke="url(#bookGrad)" strokeWidth="1" opacity="0.1"/>
      <line x1="27" y1="12" x2="35" y2="14" stroke="url(#bookGrad)" strokeWidth="1" opacity="0.15"/>
      <line x1="27" y1="16" x2="35" y2="18" stroke="url(#bookGrad)" strokeWidth="1" opacity="0.12"/>
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Circuit pattern for tech/AI theme
function CircuitPattern({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M10 30 H25 V15 H40" stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none" opacity="0.08"/>
      <path d="M10 40 H20 V50 H35" stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none" opacity="0.08"/>
      <path d="M30 10 V25 H50" stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none" opacity="0.08"/>
      <circle cx="25" cy="30" r="3" fill="url(#circuitGrad)" opacity="0.12">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="15" r="2" fill="url(#circuitGrad)" opacity="0.1"/>
      <circle cx="20" cy="40" r="2" fill="url(#circuitGrad)" opacity="0.1"/>
      <circle cx="35" cy="50" r="2" fill="url(#circuitGrad)" opacity="0.1"/>
      <circle cx="30" cy="10" r="2" fill="url(#circuitGrad)" opacity="0.1"/>
      <circle cx="50" cy="25" r="2" fill="url(#circuitGrad)" opacity="0.1"/>
      <defs>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Rocket icon for excitement/launch theme
function RocketIcon({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-float-gentle ${className}`} style={{ animationDelay: delay }} width="40" height="50" viewBox="0 0 40 50" fill="none">
      <path d="M20 5 Q28 15 28 30 H12 Q12 15 20 5Z" fill="url(#rocketGrad)" opacity="0.12"/>
      <ellipse cx="20" cy="32" rx="8" ry="4" fill="url(#rocketGrad)" opacity="0.1"/>
      <circle cx="20" cy="20" r="4" fill="url(#rocketGrad)" opacity="0.15"/>
      <path d="M12 28 L6 36 L12 32" fill="url(#rocketGrad)" opacity="0.1"/>
      <path d="M28 28 L34 36 L28 32" fill="url(#rocketGrad)" opacity="0.1"/>
      {/* Flame */}
      <path d="M16 36 Q20 46 24 36" fill="url(#flameGrad)" opacity="0.15">
        <animate attributeName="d" values="M16 36 Q20 46 24 36;M17 36 Q20 44 23 36;M16 36 Q20 46 24 36" dur="0.5s" repeatCount="indefinite"/>
      </path>
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24"/>
          <stop offset="100%" stopColor="#F97316"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Gear/cog icon for tech theme
function GearIcon({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={`absolute animate-spin-slow ${className}`} style={{ animationDelay: delay }} width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 8 L22 8 L23 4 L17 4 L18 8 L20 8 M20 32 L22 32 L23 36 L17 36 L18 32 L20 32 M8 20 L8 22 L4 23 L4 17 L8 18 L8 20 M32 20 L32 22 L36 23 L36 17 L32 18 L32 20 M11 11 L12.5 12.5 L9 9 L15 9 L13 11 M29 29 L27.5 27.5 L31 31 L25 31 L27 29 M11 29 L12.5 27.5 L9 31 L9 25 L11 27 M29 11 L27.5 12.5 L31 9 L31 15 L29 13" stroke="url(#gearGrad)" strokeWidth="2" fill="none" opacity="0.1"/>
      <circle cx="20" cy="20" r="8" stroke="url(#gearGrad)" strokeWidth="2" fill="none" opacity="0.1"/>
      <circle cx="20" cy="20" r="4" fill="url(#gearGrad)" opacity="0.12"/>
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Fun Robot Buddy Character for Class 7-8 students
function RobotBuddy() {
  return (
    <svg
      width="180"
      height="200"
      viewBox="0 0 180 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Glow effect behind robot */}
      <ellipse cx="90" cy="185" rx="50" ry="8" fill="url(#shadowGrad)" opacity="0.4">
        <animate attributeName="rx" values="50;55;50" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Antenna */}
      <g className="origin-bottom">
        <line x1="90" y1="35" x2="90" y2="15" stroke="url(#antennaGrad)" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="y2" values="15;12;15" dur="2s" repeatCount="indefinite"/>
        </line>
        <circle cx="90" cy="10" r="6" fill="url(#antennaBallGrad)">
          <animate attributeName="r" values="6;7;6" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="10;7;10" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Antenna glow */}
        <circle cx="90" cy="10" r="10" fill="cyan" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Robot Head */}
      <rect x="40" y="35" width="100" height="75" rx="20" fill="url(#headGrad)" stroke="url(#headStroke)" strokeWidth="2"/>
      
      {/* Head shine effect */}
      <rect x="45" y="40" width="40" height="8" rx="4" fill="white" opacity="0.15"/>
      
      {/* Face screen background */}
      <rect x="50" y="50" width="80" height="45" rx="12" fill="url(#screenGrad)" opacity="0.9"/>
      
      {/* Eyes */}
      <g>
        {/* Left eye */}
        <ellipse cx="70" cy="70" rx="12" ry="12" fill="white">
          <animate attributeName="ry" values="12;1;12" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.05;0.1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"/>
        </ellipse>
        <circle cx="72" cy="68" r="6" fill="url(#pupilGrad)">
          <animate attributeName="cx" values="72;68;72;76;72" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="74" cy="66" r="2" fill="white" opacity="0.9"/>
        
        {/* Right eye */}
        <ellipse cx="110" cy="70" rx="12" ry="12" fill="white">
          <animate attributeName="ry" values="12;1;12" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.05;0.1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"/>
        </ellipse>
        <circle cx="112" cy="68" r="6" fill="url(#pupilGrad)">
          <animate attributeName="cx" values="112;108;112;116;112" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="114" cy="66" r="2" fill="white" opacity="0.9"/>
      </g>
      
      {/* Happy mouth / smile */}
      <path d="M75 85 Q90 95 105 85" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none">
        <animate attributeName="d" values="M75 85 Q90 95 105 85;M75 87 Q90 92 105 87;M75 85 Q90 95 105 85" dur="3s" repeatCount="indefinite"/>
      </path>
      
      {/* Ear lights */}
      <circle cx="35" cy="70" r="8" fill="url(#earGrad)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="145" cy="70" r="8" fill="url(#earGrad)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Neck */}
      <rect x="75" y="110" width="30" height="15" rx="4" fill="url(#neckGrad)"/>
      <rect x="80" y="112" width="20" height="3" rx="1" fill="white" opacity="0.2"/>

      {/* Body */}
      <rect x="45" y="125" width="90" height="55" rx="15" fill="url(#bodyGrad)" stroke="url(#bodyStroke)" strokeWidth="2"/>
      
      {/* Body details - chest panel */}
      <rect x="60" y="135" width="60" height="35" rx="8" fill="url(#chestGrad)" opacity="0.8"/>
      
      {/* Heart/Core */}
      <circle cx="90" cy="150" r="10" fill="url(#coreGrad)">
        <animate attributeName="r" values="10;11;10" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="90" cy="150" r="15" stroke="cyan" strokeWidth="1" fill="none" opacity="0.5">
        <animate attributeName="r" values="15;18;15" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      {/* Status lights on chest */}
      <circle cx="70" cy="160" r="3" fill="#10B981">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="90" cy="165" r="3" fill="#06B6D4">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="110" cy="160" r="3" fill="#8B5CF6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Arms */}
      {/* Left arm */}
      <g>
        <rect x="20" y="130" width="25" height="40" rx="10" fill="url(#armGrad)">
          <animateTransform attributeName="transform" type="rotate" values="-2 32 130;2 32 130;-2 32 130" dur="3s" repeatCount="indefinite"/>
        </rect>
        {/* Left hand */}
        <circle cx="32" cy="175" r="10" fill="url(#handGrad)">
          <animateTransform attributeName="transform" type="rotate" values="-2 32 130;2 32 130;-2 32 130" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Right arm - waving */}
      <g>
        <rect x="135" y="130" width="25" height="40" rx="10" fill="url(#armGrad)">
          <animateTransform attributeName="transform" type="rotate" values="5 148 130;-10 148 130;5 148 130" dur="2s" repeatCount="indefinite"/>
        </rect>
        {/* Right hand */}
        <circle cx="148" cy="175" r="10" fill="url(#handGrad)">
          <animateTransform attributeName="transform" type="rotate" values="5 148 130;-10 148 130;5 148 130" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="antennaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
        <radialGradient id="antennaBallGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#22D3EE"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </radialGradient>
        <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C1D95"/>
          <stop offset="50%" stopColor="#5B21B6"/>
          <stop offset="100%" stopColor="#1E3A5F"/>
        </linearGradient>
        <linearGradient id="headStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B"/>
          <stop offset="100%" stopColor="#0F172A"/>
        </linearGradient>
        <radialGradient id="pupilGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#4C1D95"/>
        </radialGradient>
        <radialGradient id="earGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#22D3EE"/>
          <stop offset="100%" stopColor="#0891B2"/>
        </radialGradient>
        <linearGradient id="neckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1F2937"/>
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C1D95"/>
          <stop offset="50%" stopColor="#5B21B6"/>
          <stop offset="100%" stopColor="#1E3A5F"/>
        </linearGradient>
        <linearGradient id="bodyStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
        <linearGradient id="chestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B"/>
          <stop offset="100%" stopColor="#0F172A"/>
        </linearGradient>
        <radialGradient id="coreGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#22D3EE"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </radialGradient>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B21B6"/>
          <stop offset="100%" stopColor="#4C1D95"/>
        </linearGradient>
        <radialGradient id="handGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#6D28D9"/>
          <stop offset="100%" stopColor="#4C1D95"/>
        </radialGradient>
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

      {/* Large Background Robot - subtle watermark style */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <div className="absolute opacity-[0.06] scale-[2.5] md:scale-[3] lg:scale-[3.5] animate-float-gentle left-[15%] md:left-[15%]" style={{ animationDuration: '8s' }}>
          <RobotBuddy />
        </div>
      </div>

      {/* Floating decorative elements */}
      {mounted && (
        <>
          {/* Mini Robot characters scattered around */}
          <MiniRobot className="top-[8%] left-[8%]" delay="0s" variant={1} />
          <MiniRobot className="top-[15%] right-[12%]" delay="1.5s" variant={2} />
          <MiniRobot className="bottom-[50%] right-[15%]" delay="2.5s" variant={3} />
          <MiniRobot className="top-[50%] right-[6%]" delay="0.8s" variant={1} />
          <MiniRobot className="bottom-[12%] right-[10%]" delay="1.8s" variant={2} />
          <MiniRobot className="top-[72%] left-[10%]" delay="3s" variant={3} />
          
          {/* Chat bubbles for AI conversation theme */}
          <ChatBubble className="top-[18%] right-[22%]" delay="1s" side="right" />
          <ChatBubble className="bottom-[28%] left-[18%]" delay="2.2s" side="left" />
          <ChatBubble className="top-[65%] right-[18%]" delay="0.3s" side="right" />
          
          {/* Lightbulbs for ideas */}
          <Lightbulb className="top-[35%] left-[6%]" delay="1.2s" />
          <Lightbulb className="bottom-[18%] right-[25%]" delay="2.8s" />
          
          {/* Sparkle stars */}
          <SparkleStars className="top-[12%] left-[30%]" delay="0.4s" />
          <SparkleStars className="top-[40%] right-[15%]" delay="1.6s" />
          <SparkleStars className="bottom-[42%] left-[20%]" delay="2.4s" />
          <SparkleStars className="top-[58%] left-[25%]" delay="0.9s" />
          <SparkleStars className="bottom-[55%] right-[30%]" delay="3.2s" />
          
          {/* Book icons for study theme */}
          <BookIcon className="top-[30%] right-[8%]" delay="1.8s" />

          
          {/* Circuit patterns for tech feel */}
          <CircuitPattern className="top-[5%] right-[35%]" delay="2.1s" />
          <CircuitPattern className="bottom-[8%] left-[30%]" delay="0.2s" />
          <CircuitPattern className="top-[78%] right-[35%]" delay="1.4s" />
          
          {/* Rocket icons for excitement */}
          <RocketIcon className="top-[22%] left-[15%]" delay="1.1s" />
          <RocketIcon className="bottom-[15%] left-[22%]" delay="2.6s" />
          
          {/* Gear icons for tech theme */}
          <GearIcon className="top-[48%] left-[4%]" delay="0s" />
          <GearIcon className="bottom-[32%] right-[6%]" delay="1.5s" />
          
          {/* Geometric shapes */}
          <FloatingShape className="top-[10%] left-[45%]" delay="0s" type="circle" />
          <FloatingShape className="top-[20%] right-[40%]" delay="1s" type="hexagon" />
          <FloatingShape className="bottom-[25%] left-[40%]" delay="2s" type="square" />
          <FloatingShape className="top-[45%] right-[25%]" delay="0.5s" type="triangle" />
          <FloatingShape className="bottom-[15%] right-[45%]" delay="1.5s" type="circle" />
          <FloatingShape className="top-[60%] left-[35%]" delay="2.5s" type="hexagon" />
          <FloatingShape className="bottom-[40%] right-[38%]" delay="0.8s" type="square" />
          
          {/* Code brackets */}
          <FloatingCode className="top-[15%] left-[55%]" delay="1.2s" />
          <FloatingCode className="bottom-[20%] right-[55%]" delay="0.3s" />
          <FloatingCode className="top-[70%] left-[45%]" delay="2.1s" />
          
          {/* Particle dots */}
          <ParticleDot className="top-[12%] left-[40%]" delay="0s" size={6} />
          <ParticleDot className="top-[25%] right-[30%]" delay="0.5s" size={4} />
          <ParticleDot className="bottom-[30%] left-[35%]" delay="1s" size={5} />
          <ParticleDot className="top-[55%] right-[40%]" delay="1.5s" size={4} />
          <ParticleDot className="bottom-[45%] left-[45%]" delay="2s" size={6} />
          <ParticleDot className="top-[35%] left-[60%]" delay="0.8s" size={3} />
          <ParticleDot className="bottom-[60%] right-[55%]" delay="1.3s" size={5} />
          <ParticleDot className="top-[8%] right-[48%]" delay="1.7s" size={4} />
          <ParticleDot className="bottom-[65%] left-[12%]" delay="2.3s" size={5} />
          <ParticleDot className="top-[75%] right-[12%]" delay="0.1s" size={4} />
        </>
      )}

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Robot Buddy with glow effect */}
        <div className="relative mb-6 animate-float-gentle">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-violet-600/40 to-cyan-600/40 rounded-full scale-125" />
          <RobotBuddy />
        </div>

        

        {/* Title */}
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            VLC Study Buddy
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
