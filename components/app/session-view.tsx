'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useSessionContext, useSessionMessages } from '@livekit/components-react';
import type { AppConfig } from '@/app-config';
import { ChatTranscript } from '@/components/app/chat-transcript';
import { PreConnectMessage } from '@/components/app/preconnect-message';
import { TileLayout } from '@/components/app/tile-layout';
import {
  AgentControlBar,
  type ControlBarControls,
} from '@/components/livekit/agent-control-bar/agent-control-bar';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../livekit/scroll-area/scroll-area';

// Floating star for chat screen
function FloatingStar({ className, delay = '0s', color = '#FBBF24' }: { className?: string; delay?: string; color?: string }) {
  return (
    <svg
      className={`absolute animate-float-bounce pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
    >
      <polygon 
        points="20,2 24,15 38,15 27,23 31,38 20,29 9,38 13,23 2,15 16,15" 
        fill={color}
        opacity="0.7"
      >
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
      </polygon>
    </svg>
  );
}

// Floating cloud for chat screen
function FloatingCloud({ className, delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={`absolute animate-float-gentle pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
      width="60"
      height="35"
      viewBox="0 0 80 45"
      fill="none"
    >
      <g opacity="0.5">
        <ellipse cx="25" cy="30" rx="20" ry="12" fill="white"/>
        <ellipse cx="45" cy="25" rx="18" ry="15" fill="white"/>
        <ellipse cx="60" cy="30" rx="15" ry="10" fill="white"/>
        <ellipse cx="35" cy="20" rx="14" ry="12" fill="white"/>
      </g>
    </svg>
  );
}

// Floating sparkle
function Sparkle({ className, delay = '0s', size = 16, color = '#FBBF24' }: { className?: string; delay?: string; size?: number; color?: string }) {
  return (
    <div 
      className={`absolute animate-sparkle pointer-events-none ${className}`}
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
function FloatingBubble({ className, delay = '0s', size = 20, color = '#93C5FD' }: { className?: string; delay?: string; size?: number; color?: string }) {
  return (
    <div 
      className={`absolute rounded-full animate-float-bubble pointer-events-none ${className}`}
      style={{ 
        animationDelay: delay,
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, white, ${color})`,
        opacity: 0.5,
      }}
    />
  );
}

const MotionBottom = motion.create('div');

const BOTTOM_VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      translateY: '0%',
    },
    hidden: {
      opacity: 0,
      translateY: '100%',
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: {
    duration: 0.3,
    delay: 0.5,
    ease: 'easeOut',
  },
};

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
  className?: string;
}

export function Fade({ top = false, bottom = false, className }: FadeProps) {
  return (
    <div
      className={cn(
        'from-background pointer-events-none h-4 bg-linear-to-b to-transparent',
        top && 'bg-linear-to-b',
        bottom && 'bg-linear-to-t',
        className
      )}
    />
  );
}

interface SessionViewProps {
  appConfig: AppConfig;
}

export const SessionView = ({
  appConfig,
  ...props
}: React.ComponentProps<'section'> & SessionViewProps) => {
  const session = useSessionContext();
  const { messages } = useSessionMessages(session);
  const [chatOpen, setChatOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const controls: ControlBarControls = {
    leave: true,
    microphone: true,
    chat: appConfig.supportsChatInput,
    camera: appConfig.supportsVideoInput,
    screenShare: appConfig.supportsVideoInput,
  };

  useEffect(() => {
    const lastMessage = messages.at(-1);
    const lastMessageIsLocal = lastMessage?.from?.isLocal === true;

    if (scrollAreaRef.current && lastMessageIsLocal) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="relative z-10 h-full w-full overflow-hidden" {...props}>
      {/* Light Cheerful Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100" />
      
      {/* Animated gradient overlay - subtle rainbow effect */}
      <div className="fixed inset-0 animate-gradient-shift bg-[linear-gradient(-45deg,rgba(251,191,36,0.08),rgba(52,211,153,0.08),rgba(96,165,250,0.08),rgba(244,114,182,0.08))] bg-[length:400%_400%]" />
      
      {/* Playful dot pattern */}
      <div className="fixed inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating decorative elements */}
      <FloatingStar className="top-[5%] left-[3%]" delay="0s" color="#FBBF24" />
      <FloatingStar className="top-[12%] right-[8%]" delay="1s" color="#F472B6" />
      <FloatingStar className="bottom-[40%] left-[5%]" delay="2s" color="#34D399" />
      <FloatingStar className="top-[35%] right-[4%]" delay="0.5s" color="#60A5FA" />
      
      <FloatingCloud className="top-[3%] left-[20%]" delay="0s" />
      <FloatingCloud className="top-[8%] right-[15%]" delay="2s" />
      
      <Sparkle className="top-[15%] left-[30%]" delay="0s" size={14} color="#FBBF24" />
      <Sparkle className="top-[25%] right-[25%]" delay="0.8s" size={18} color="#F472B6" />
      <Sparkle className="bottom-[50%] left-[15%]" delay="1.5s" size={12} color="#34D399" />
      <Sparkle className="top-[45%] right-[30%]" delay="2.2s" size={16} color="#60A5FA" />
      
      <FloatingBubble className="top-[20%] left-[45%]" delay="0s" size={22} color="#93C5FD" />
      <FloatingBubble className="bottom-[45%] right-[40%]" delay="1s" size={28} color="#A7F3D0" />
      <FloatingBubble className="top-[55%] left-[8%]" delay="2s" size={18} color="#FBCFE8" />

      {/* Chat Transcript */}
      <div
        className={cn(
          'fixed inset-0 grid grid-cols-1 grid-rows-1 z-10',
          !chatOpen && 'pointer-events-none'
        )}
      >
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-100 via-sky-100/90 to-transparent pointer-events-none z-20" />
        
        {/* Header title when chat is open */}
        {chatOpen && (
          <div className="absolute top-0 inset-x-0 z-30 pt-5 pb-3 text-center pointer-events-none">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <span className="text-2xl">💬</span>
              Chat with Your Buddy!
              <span className="text-2xl">🤖</span>
            </h2>
            <p className="text-sm text-blue-500 mt-1 font-medium">Ask me anything about your homework! 📚</p>
          </div>
        )}
        
        <ScrollArea ref={scrollAreaRef} className="px-4 pt-24 pb-[180px] md:px-6 md:pb-[220px] relative z-10">
          <ChatTranscript
            hidden={!chatOpen}
            messages={messages}
            className="mx-auto max-w-2xl space-y-4 transition-opacity duration-300 ease-out"
          />
        </ScrollArea>
      </div>

      {/* Tile Layout */}
      <TileLayout chatOpen={chatOpen} />

      {/* Bottom */}
      <MotionBottom
        {...BOTTOM_VIEW_MOTION_PROPS}
        className="fixed inset-x-3 bottom-0 z-50 md:inset-x-12"
      >
        {appConfig.isPreConnectBufferEnabled && (
          <PreConnectMessage messages={messages} className="pb-4" />
        )}
        <div className="relative mx-auto max-w-2xl pb-3 md:pb-8">
          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 top-0 h-8 -translate-y-full bg-gradient-to-t from-indigo-100/90 to-transparent pointer-events-none" />
          <AgentControlBar
            controls={controls}
            isConnected={session.isConnected}
            onDisconnect={session.end}
            onChatOpenChange={setChatOpen}
          />
        </div>
      </MotionBottom>
    </section>
  );
};
